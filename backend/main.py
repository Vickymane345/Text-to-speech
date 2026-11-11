from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from fastapi.concurrency import run_in_threadpool
from pydantic import BaseModel
from gtts import gTTS
from gtts.lang import tts_langs
import edge_tts
import io


app = FastAPI(root_path="/api")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


ACCENTS = {
    "com",
    "co.uk",
    "com.ng",
    "co.in",
    "com.au",
    "es",
    "com.mx",
    "fr",
    "com.br",
    "de",
    "it",
}


VOICES = {
    "en-US-AvaNeural",
    "en-GB-SoniaNeural",
    "en-NG-EzinneNeural",
    "en-IN-NeerjaNeural",
    "en-AU-NatashaNeural",
    "es-ES-ElviraNeural",
    "es-MX-DaliaNeural",
    "fr-FR-DeniseNeural",
    "pt-BR-FranciscaNeural",
    "de-DE-KatjaNeural",
    "it-IT-ElsaNeural",
    "ar-EG-SalmaNeural",
    "hi-IN-SwaraNeural",
    "zh-CN-XiaoxiaoNeural",
    "ja-JP-NanamiNeural",
}


class TextRequest(BaseModel):
    text: str
    lang: str = "en"
    tld: str = "com"
    voice: str = "en-US-AvaNeural"


async def natural_speech(text: str, voice: str):
    audio = io.BytesIO()

    async for chunk in edge_tts.Communicate(text, voice).stream():
        if chunk["type"] == "audio":
            audio.write(chunk["data"])

    if audio.tell() == 0:
        raise RuntimeError("No audio returned")

    audio.seek(0)

    return audio


def basic_speech(text: str, lang: str, tld: str):
    audio = io.BytesIO()

    gTTS(text, lang=lang, tld=tld).write_to_fp(audio)

    audio.seek(0)

    return audio


@app.get("/")
def home():
    return {"message": "FastAPI backend is running"}


@app.post("/speak")
async def speak(request: TextRequest):

    if (
        request.lang not in tts_langs()
        or request.tld not in ACCENTS
        or request.voice not in VOICES
    ):
        raise HTTPException(status_code=400, detail="Unsupported voice")

    try:
        audio = await natural_speech(request.text, request.voice)
    except Exception:
        audio = await run_in_threadpool(
            basic_speech, request.text, request.lang, request.tld
        )

    return StreamingResponse(
        audio,
        media_type="audio/mpeg"
    )

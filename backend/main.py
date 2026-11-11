from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from gtts import gTTS
from gtts.lang import tts_langs
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


class TextRequest(BaseModel):
    text: str
    lang: str = "en"
    tld: str = "com"


@app.get("/")
def home():
    return {"message": "FastAPI backend is running"}


@app.post("/speak")
def speak(request: TextRequest):

    if request.lang not in tts_langs() or request.tld not in ACCENTS:
        raise HTTPException(status_code=400, detail="Unsupported voice")

    audio = io.BytesIO()

    tts = gTTS(request.text, lang=request.lang, tld=request.tld)

    tts.write_to_fp(audio)

    audio.seek(0)

    return StreamingResponse(
        audio,
        media_type="audio/mpeg"
    )

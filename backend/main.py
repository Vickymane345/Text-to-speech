from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from gtts import gTTS
import io


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TextRequest(BaseModel):
    text: str


@app.get("/")
def home():
    return {"message": "FastAPI backend is running"}


@app.post("/speak")
def speak(request: TextRequest):

    audio = io.BytesIO()

    tts = gTTS(request.text)

    tts.write_to_fp(audio)

    audio.seek(0)

    return StreamingResponse(
        audio,
        media_type="audio/mpeg"
    )

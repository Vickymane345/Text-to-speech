# Text to speech

Type a line, hear it read back. A Next.js interface sitting on top of a small FastAPI service that turns text into an MP3 stream with gTTS.

## Layout

```
frontend/   Next.js 16 app, App Router, Tailwind v4
backend/    FastAPI service, one endpoint
```

## Running it

Start the backend first, the frontend expects it on port 8000.

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # macOS or Linux: source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Then the frontend in a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000. CORS on the backend already allows that origin, so nothing else to configure.

## API

```
POST /speak
{ "text": "whatever you want spoken" }
```

Returns an `audio/mpeg` stream. The browser plays it from a blob URL, nothing is written to disk.

## How it works

Lines you send are held in React state through a context provider in `src/app/Hooks/page.tsx`. The sidebar reads the same context to show history. Hitting the speaker on a line posts it to `/speak` and plays the response.

## Theme

Light and dark both come off one set of CSS variables at the top of `src/app/globals.css` and follow the operating system. There is no toggle. Change a value there and it moves through every component.

## Things to know

- gTTS calls Google's translate endpoint, so the backend needs an internet connection.
- Nothing is persisted. Refresh the page and the lines are gone.

export async function textToSpeech(text: string) {
  const response = await fetch(
    "http://localhost:8000/speak",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        text: text,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Text-to-speech request failed");
  }

  const audioBlob = await response.blob();

  return audioBlob;
}
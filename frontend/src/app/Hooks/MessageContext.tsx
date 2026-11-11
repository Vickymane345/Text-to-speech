"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { voices } from "../components/voices";


interface Message {
  id: number;
  text: string;
}


interface MessageContextType {
  input: string;
  setInput: (value: string) => void;

  messages: Message[];

  sendMessage: () => void;

  showHistory: boolean;
  toggleHistory: () => void;
  newChat: () => void;
  showProjects: boolean;

  voiceId: string;
  setVoiceId: (value: string) => void;

  speak: (text: string) => Promise<void>;
}


const MessageContext = createContext<
  MessageContextType | undefined
>(undefined);


export function MessageProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const [showHistory, setShowHistory] = useState(false);


const [showProjects, setShowProjects] = useState(false);

  const [voiceId, setVoiceId] = useState(voices[0].id);
  function sendMessage() {

    if (input.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      text: input,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      newMessage,
    ]);

    setInput("");
  }
  function newChat() {
  setMessages([]);
  setInput("");
  setShowHistory(false);
  setShowProjects(false);
}


  function toggleHistory() {

    setShowHistory((previous) => !previous);

  }


  async function speak(text: string) {

    const voice = voices.find((item) => item.id === voiceId) ?? voices[0];

    try {

      const response = await fetch(
        "/api/speak",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            text: text,
            lang: voice.lang,
            tld: voice.tld,
          }),
        }
      );


      if (!response.ok) {
        throw new Error("TTS request failed");
      }


      const audioBlob = await response.blob();

      const audioUrl = URL.createObjectURL(audioBlob);

      const audio = new Audio(audioUrl);

      await audio.play();


      URL.revokeObjectURL(audioUrl);

    } catch (error) {

      console.error("Text-to-speech error:", error);

    }

  }


  return (
    <MessageContext.Provider
      value={{
        input,
        setInput,
        messages,
        sendMessage,
        showHistory,
            newChat,
            showProjects,

        toggleHistory,
        voiceId,
        setVoiceId,
        speak,
      }}
    >
      {children}
    </MessageContext.Provider>
  );

}


export function useMessage() {

  const context = useContext(MessageContext);


  if (!context) {
    throw new Error(
      "useMessage must be used inside MessageProvider"
    );
  }


  return context;

}
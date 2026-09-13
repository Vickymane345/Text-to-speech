"use client";

import React from "react";
import { IoMdSend } from "react-icons/io";
import { LuVolume2 } from "react-icons/lu";
import { useMessage } from "../Hooks/MessageContext";

export default function Output() {
  const {
    input,
    setInput,
    sendMessage,
    messages,
    speak,
  } = useMessage();

  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col">
      <div className="stage-glow" aria-hidden="true" />

      <div className="relative flex items-center justify-between border-b border-line px-6 py-4">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-faint">
          Session
        </p>
        <p className="font-mono text-[0.65rem] tracking-[0.12em] text-ink-faint">
          {messages.length} saved
        </p>
      </div>

      <div className="scroll-area relative min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-6 py-10">
          {messages.length === 0 && (
            <div className="flex flex-1 flex-col items-center justify-center gap-6 py-12 text-center">
             

              <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
                Say it out loud.
              </h1>

              <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
                Write a line below. It lands here with a speaker button that
                reads it back to you.
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className="line-card rise group"
              >
              

                <p className="flex-1 text-left text-[0.95rem] leading-relaxed text-ink">
                  {message.text}
                </p>

                <button
                  type="button"
                  onClick={() => speak(message.text)}
                  aria-label="Play this line"
                  className="speak-button"
                >
                  <LuVolume2 className="text-base" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-line bg-canvas px-6 pb-7 pt-5">
        <div className="mx-auto w-full max-w-2xl">
          <div className="composer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type something worth hearing"
              name="text"
            />

            <button
              type="button"
              onClick={sendMessage}
              aria-label="Add line"
              className="send-button"
            >
              <IoMdSend className="text-lg" />
            </button>
          </div>

          <p className="mt-3 text-center font-mono text-[0.65rem] tracking-[0.1em] text-ink-faint">
            Send saves the line · speaker plays it back
          </p>
        </div>
      </div>
    </div>
  );
}

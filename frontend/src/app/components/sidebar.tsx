"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import { LuPanelLeftClose, LuPlus, LuFolders, LuHistory } from "react-icons/lu";
import { useMessage } from "../Hooks/page";

export default function Sidebar() {
  const { messages, showHistory,newChat, toggleHistory } = useMessage();

  return (
    <div className="flex h-full flex-col gap-7 p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="signal" />
          <p className="font-display text-[1.4rem] leading-none tracking-tight text-ink">
            Text-to-speech
          </p>
        </div>

        <div className="flex items-center gap-0.5">
          <button type="button" aria-label="Search" className="icon-button">
            <FaSearch className="text-[0.8rem]" />
          </button>
          <button type="button" aria-label="Collapse panel" className="icon-button">
            <LuPanelLeftClose className="text-base" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="px-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-faint">
          Workspace
        </p>

        <nav className="flex gap-1 overflow-x-auto md:flex-col md:overflow-visible">
          <button  onClick={newChat} type="button" className="nav-item">
            <LuPlus className="text-base text-ink-faint" />
            New chat
          </button>

          <button onClick={toggleHistory} type="button" className="nav-item">
            <LuFolders className="text-base text-ink-faint" />
            Projects
          </button>

          <button
            type="button"
            onClick={toggleHistory}
            data-active={showHistory}
            aria-expanded={showHistory}
            className="nav-item"
          >
            <LuHistory className="text-base" />
            History
          </button>
        </nav>
      </div>

      <div className="min-h-0 md:flex-1">
        {showHistory && (
          <div className="flex flex-col gap-1">
            {messages.map((message) => (
              <div key={message.id} className="history-row">
                {message.text}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

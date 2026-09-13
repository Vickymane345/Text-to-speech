import React from "react";
import Sidebar from "../components/sidebar";
import Output from "../components/output";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink md:h-screen md:flex-row md:overflow-hidden">
      <div className="scroll-area border-b border-line bg-sunken md:h-full md:w-70 md:shrink-0 md:overflow-y-auto md:border-b-0 md:border-r">
        <Sidebar />
      </div>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <Output />
      </div>
    </div>
  );
}

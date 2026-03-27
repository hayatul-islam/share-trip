"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
  time?: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    from: "bot",
    text: "Hello! How can we help you?",
  },
];

function formatTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function getTodayLabel() {
  const now = new Date();
  return now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function MessagesTab() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      from: "user",
      text,
      time: formatTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        from: "bot",
        text: "Hello. Welcome to ShareTrip.\n\nYou can now search and book hotels/ resorts conveniently through the ShareTrip mobile app or website, available for Android and iOS users. Enjoy a seamless booking experience with Exclusive Discounted prices.\n👉 Visit: https://stl.travel/st\n\nIf you need any assistance while finding or booking your rooms, our team is always here to help you find the best possible deals.\nPlan your holiday with us and enjoy your best travel experiences!",
        time: formatTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 900);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {/* Date divider */}
        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 whitespace-nowrap">
            {getTodayLabel()}
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {messages.map((msg) =>
          msg.from === "bot" ? (
            <div key={msg.id} className="flex gap-2 items-start">
              <div className="w-8 h-8 rounded-full bg-[#1a8fe3] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">ST</span>
              </div>
              <div className="max-w-[75%] bg-gray-100 rounded-2xl rounded-tl-sm px-3.5 py-2.5">
                {msg.text.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className={`text-sm text-gray-800 ${i > 0 ? "mt-1.5" : ""}`}
                  >
                    {line.startsWith("👉") ? (
                      <>
                        👉{" "}
                        <a
                          href="#"
                          className="text-[#1a8fe3] underline text-sm"
                        >
                          {line
                            .replace("👉 Visit: ", "")
                            .replace("👉 Visit:", "")}
                        </a>
                      </>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div key={msg.id} className="flex justify-end">
              <div className="max-w-[75%] bg-[#1a8fe3] rounded-2xl rounded-tr-sm px-3.5 py-2.5">
                <p className="text-sm text-white">{msg.text}</p>
              </div>
            </div>
          ),
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="border-t border-gray-100 px-3 py-2.5 flex-shrink-0">
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white focus-within:border-[#1a8fe3] transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Compose your message..."
            className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent"
          />
          <div className="flex items-center gap-1.5 text-gray-400">
            {/* Emoji */}
            <button className="hover:text-gray-600 transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </button>
            {/* Attachment */}
            <button className="hover:text-gray-600 transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
              </svg>
            </button>
            {/* Audio */}
            <button className="hover:text-gray-600 transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="2" y="10" width="2" height="4" rx="1" />
                <rect x="6" y="6" width="2" height="12" rx="1" />
                <rect x="10" y="8" width="2" height="8" rx="1" />
                <rect x="14" y="4" width="2" height="16" rx="1" />
                <rect x="18" y="7" width="2" height="10" rx="1" />
                <rect x="22" y="10" width="2" height="4" rx="1" />
              </svg>
            </button>
          </div>
          <button
            onClick={send}
            disabled={!input.trim()}
            className="text-[#1a8fe3] disabled:text-gray-300 transition-colors hover:text-[#1260a8]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

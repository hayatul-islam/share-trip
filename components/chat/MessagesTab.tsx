"use client";

import { useEffect, useRef, useState } from "react";
import ChatInput from "./ChatInput";

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
        <div className="flex justify-center items-center gap-2 my-2">
          <span className="text-[12px] font-medium text-gray-800 whitespace-nowrap">
            {getTodayLabel()}
          </span>
        </div>

        {messages.map((msg) =>
          msg.from === "bot" ? (
            <div key={msg.id} className="flex gap-2 items-start">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">ST</span>
              </div>
              <div className="max-w-[75%] bg-gray-100 rounded-2xl px-3.5 py-2.5">
                {msg.text.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className={`text-sm text-gray-800 ${i > 0 ? "mt-1.5" : ""}`}
                  >
                    {line.startsWith("👉") ? (
                      <>
                        👉{" "}
                        <a href="#" className="text-primary underline text-sm">
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
              <div className="max-w-[75%] bg-primary rounded-2xl px-3.5 py-2.5">
                <p className="text-sm text-white">{msg.text}</p>
              </div>
            </div>
          ),
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="px-4 pb-4">
        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          onSend={send}
        />
      </div>
    </div>
  );
}

import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

interface ChatInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  onSend?: () => void;
}

const EmojiIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 13s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
  </svg>
);

const AttachIcon = () => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
  </svg>
);

const AudioIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="9" x2="3" y2="15" />
    <line x1="6" y1="6" x2="6" y2="18" />
    <line x1="9" y1="10" x2="9" y2="14" />
    <line x1="12" y1="7" x2="12" y2="17" />
    <line x1="15" y1="10" x2="15" y2="14" />
    <line x1="18" y1="6" x2="18" y2="18" />
    <line x1="21" y1="9" x2="21" y2="15" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

export default function ChatInput({
  value,
  onChange,
  onKeyDown,
  placeholder = "Compose your message...",
  onSend,
}: ChatInputProps) {
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    // Auto-resize
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    onKeyDown?.(e);
  };

  return (
    <div
      className="w-full rounded-2xl transition-all duration-200"
      style={{
        border: focused ? "1.5px solid #1882ff" : "1.5px solid gray",
        backgroundColor: "#fff",
        padding: "10px 14px",
      }}
    >
      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        rows={1}
        className="w-full resize-none outline-none border-none bg-transparent text-gray-700 placeholder-gray-400 leading-relaxed"
        style={{
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          fontSize: "14px",
          minHeight: "28px",
          maxHeight: "120px",
          overflowY: "auto",
          caretColor: "#1882ff",
        }}
      />

      {/* Bottom toolbar */}
      <div className="flex items-center justify-between mt-2">
        {/* Left icons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-gray-800 transition-colors duration-150 focus:outline-none cursor-pointer"
            title="Emoji"
          >
            <EmojiIcon />
          </button>
          <button
            type="button"
            className="text-gray-800 transition-colors duration-150 focus:outline-none cursor-pointer"
            title="Attach"
          >
            <AttachIcon />
          </button>
          <button
            type="button"
            className="text-gray-800 transition-colors duration-150 focus:outline-none cursor-pointer"
            title="Audio"
          >
            <AudioIcon />
          </button>
        </div>

        {/* Send button */}
        <button
          type="button"
          onClick={onSend}
          className="flex items-center justify-center rounded-md transition-all duration-150 focus:outline-none cursor-pointer"
          style={{
            width: "30px",
            height: "30px",
            color: value.trim() ? "#1882ff" : "#93c5fd",
            opacity: value.trim() ? 1 : 0.7,
          }}
          title="Send"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

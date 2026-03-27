"use client";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatLauncher({ isOpen, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 transition-colors shadow-lg flex items-center justify-center text-white"
      aria-label="Toggle chat"
    >
      {isOpen ? (
        // X icon
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : (
        // Chat bubble icon
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      )}
    </button>
  );
}

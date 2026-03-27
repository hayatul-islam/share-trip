"use client";

import { MessageSquareMore, User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  onOpen: (type: string) => void;
}

export default function LauncherCard({ onOpen }: Props) {
  return (
    <div className="bg-white rounded-4xl shadow-xl p-4 w-[340px]  border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-bold text-gray-800 text-[16px]">
            Questions? Chat with us.
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-[12px] text-gray-700">
              Support Team is available
            </span>
          </div>
        </div>
        {/* Avatar stack */}
        <div className="flex -space-x-3 mt-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-7 h-7 flex justify-center items-center rounded-full border border-white bg-white overflow-hidden"
            >
              {i === 3 ? (
                <User size={14} />
              ) : (
                <Image
                  src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/favicon.svg"
                  alt="profile"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <Button
          onClick={() => onOpen("messages")}
          className="flex py-5 rounded-full px-4"
        >
          <MessageSquareMore fill="white" stroke="green" />
          <span>Chat with us!</span>
        </Button>
        <Button
          onClick={() => onOpen("articles")}
          className="flex items-center gap-2 bg-gray-200 hover:bg-gray-200 text-gray-800 rounded-full px-4 py-5 "
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Search
        </Button>

        <Button
          onClick={() => onOpen("messages")}
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 transition-colors shadow-lg flex items-center justify-center text-white"
          aria-label="Toggle chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}

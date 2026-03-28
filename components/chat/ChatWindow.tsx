"use client";

import { ChatArticle } from "@/app/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ArticleDetail from "./ArticleDetail";
import ArticlesTab from "./ArticlesTab";
import MessagesTab from "./MessagesTab";

type Tab = "messages" | "articles";

interface Props {
  onClose: () => void;
  state: string;
}

export default function ChatWindow({ onClose, state }: Props) {
  const [activeTab, setActiveTab] = useState<string>(state);
  const [selectedArticle, setSelectedArticle] = useState<ChatArticle | null>(
    null,
  );

  return (
    <div className="w-[350px] sm:w-[400px] h-[500px] md:h-[580px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden ">
      <div
        className={`bg-primary px-4 pt-4 pb-0 flex-shrink-0 ${(activeTab === "messages" || selectedArticle) && "rounded-2xl"}`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="w-auto mx-auto flex justify-center items-center bg-black/20 rounded-full p-1 gap-1">
            <button
              onClick={() => {
                setActiveTab("messages");
                setSelectedArticle(null);
              }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                activeTab === "messages"
                  ? "bg-primary text-white shadow  border-white/10"
                  : "text-white hover:bg-white/10 border-black/1"
              }`}
            >
              {activeTab === "messages" && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-1"
                >
                  <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
              )}
              Messages
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                activeTab === "articles"
                  ? "bg-primary text-white shadow border-white/10"
                  : "text-white hover:bg-white/10 border-black/1"
              }`}
            >
              {activeTab === "articles" && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              )}
              Articles
            </button>
          </div>
          <button
            // onClick={onClose}
            className="text-white/50 transition-colors"
          >
            <ChevronDown width={14} stroke="currentColor" />
          </button>
        </div>

        {activeTab === "messages" && !selectedArticle && (
          <div className=" flex items-center justify-center gap-2 px-3 py-2 mb-4">
            <div className="w-8 h-8 relative rounded-full bg-white flex items-center justify-center text-gray-500 font-bold text-xs flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
              <div className="w-2 h-2 absolute bottom-0 right-0 rounded-full bg-green-400"></div>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-white text-[12px] font-semibold">
                Hasib from ShareTrip
              </span>
              <button
                // onClick={onClose}
                className="text-white/70 w-5 h-5 mt-1 flex justify-center items-center bg-white/10 rounded transition-colors"
              >
                <ChevronDown width={14} stroke="currentColor" />
              </button>
            </div>
          </div>
        )}

        {/* Article detail header */}
        {selectedArticle && (
          <div className="text-center pb-4">
            <p className="text-white font-semibold text-[12px]">
              {selectedArticle.title}
            </p>
            <p className="text-white/70 text-[12px] mt-0.5">
              Updated {selectedArticle.updatedAt}
            </p>
          </div>
        )}

        {/* Articles tab header */}
        {activeTab === "articles" && !selectedArticle && (
          <div className="text-center pb-4">
            <p className="text-white font-medium text-[14px]">
              How can we help you?
            </p>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-hidden">
        {selectedArticle ? (
          <ArticleDetail
            article={selectedArticle}
            onBack={() => setSelectedArticle(null)}
          />
        ) : activeTab === "messages" ? (
          <MessagesTab />
        ) : (
          <ArticlesTab onSelect={(a) => setSelectedArticle(a)} />
        )}
      </div>
    </div>
  );
}

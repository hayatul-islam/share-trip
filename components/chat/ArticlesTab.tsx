"use client";

import { CHAT_ARTICLES } from "@/app/data";
import { ChatArticle } from "@/app/types";
import { BookOpen, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  onSelect: (article: ChatArticle) => void;
}

export default function ArticlesTab({ onSelect }: Props) {
  const [search, setSearch] = useState("");

  const filtered = CHAT_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.snippet.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="px-4 pb-3 flex-shrink-0 bg-primary rounded-b-2xl">
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search our help center..."
            className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-800"
          />
        </div>
      </div>

      {/* Article list */}
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100 p-2">
        {filtered.map((article) => (
          <button
            key={article.id}
            onClick={() => onSelect(article)}
            className="w-full flex justify-between items-center gap-1 px-3 py-3.5 hover:bg-gray-100 rounded-lg p-2 transition-colors text-left group"
          >
            <div className="flex-1 min-w-0">
              <div className="flex gap-1 text-primary">
                <div>
                  <BookOpen size={16} className="mt-1" fill="currentColor" />
                </div>
                <h4 className="text-[15px] font-semibold text-gray-800 transition-colors leading-snug">
                  {article.title}
                </h4>
              </div>

              <p className="text-[14px] text-gray-700 mt-0.5 line-clamp-2 leading-relaxed">
                {article.snippet}
              </p>
            </div>
            <div className="text-gray-400">
              <ChevronRight size={20} stroke="currentColor" />
            </div>
          </button>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mx-auto mb-3 opacity-40"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <p className="text-sm">No articles found</p>
          </div>
        )}
      </div>
    </div>
  );
}

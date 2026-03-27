"use client";
import { ChatArticle } from "@/app/types";
interface Props {
  article: ChatArticle;
  onBack: () => void;
}

export default function ArticleDetail({ article, onBack }: Props) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 px-4 pt-4 pb-2 flex-shrink-0">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors ml-auto">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          {article.content}
        </p>

        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-center items-center gap-2 text-gray-600">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-xs">
            Updated on: {article.updatedAt.split("/").reverse().join("/")}
          </span>
        </div>
      </div>
    </div>
  );
}

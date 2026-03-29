"use client";

import { FARE_OPTIONS } from "@/data";
import { cn } from "@/lib/utils";
import { FareType } from "@/types";
import * as React from "react";

interface FareSelectorProps {
  value: FareType;
  onChange: (value: FareType) => void;
  className?: string;
}

export const FareSelector: React.FC<FareSelectorProps> = ({
  value,
  onChange,
  className,
}) => {
  return (
    <div className={cn("flex items-center gap-3 lg:gap-6", className)}>
      {FARE_OPTIONS.map((option) => {
        const isActive = value === option.value;

        return (
          <label
            key={option.value}
            className={cn(
              "flex items-center gap-2 text-[12px] lg:text-sm cursor-pointer",
              option.disabled && "opacity-50 cursor-not-allowed",
            )}
          >
            <input
              type="radio"
              name="fare"
              value={option.value}
              checked={isActive}
              onChange={() => !option.disabled && onChange(option.value)}
              disabled={option.disabled}
              className="hidden"
            />

            <div
              className={cn(
                "w-3 h-3 lg:w-4 lg:h-4 rounded-full border flex items-center justify-center",
                isActive ? "border-primary" : "border-gray-300",
                option.disabled && "border-gray-300",
              )}
            >
              {isActive && <div className="w-2 h-2 rounded-full bg-primary" />}
            </div>

            <span
              className={cn(
                isActive ? "text-gray-800 font-medium" : "text-gray-700",
              )}
            >
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};

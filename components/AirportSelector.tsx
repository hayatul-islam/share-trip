"use client";
import { AIRPORTS } from "@/app/data";
import { Airport } from "@/app/types";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";

interface AirportSelectorProps {
  airport: Airport;
  onChange: (airport: Airport) => void;
}

const AirportSelector: React.FC<AirportSelectorProps> = ({
  airport,
  onChange,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [defaultSelectAirport, setDefaultSelectAirport] = useState<string>(
    airport?.city || "",
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setDefaultSelectAirport(airport.city);
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
    } else {
      setQuery("");
    }
  }, [open, airport.city]);

  const filtered = useMemo<Airport[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return AIRPORTS;
    return AIRPORTS.filter((ap) =>
      `${ap.code} ${ap.city} ${ap.country} ${ap.fullName}`
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const handleSelect = (ap: Airport): void => {
    onChange(ap);
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setQuery("");
    setDefaultSelectAirport("");
    inputRef.current?.focus();
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.stopPropagation();
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex-1 cursor-pointer w-full">
          {open ? (
            <div className="flex items-center gap-2 px-3 h-[62px] border border-primary rounded-lg bg-white">
              <Input
                ref={inputRef}
                value={query ? query : defaultSelectAirport}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setDefaultSelectAirport("");
                }}
                onKeyDown={handleInputKeyDown}
                onClick={(e) => e.stopPropagation()}
                placeholder="Flying from Airport/City"
                className="h-9 text-[13px] border-0 shadow-none focus-visible:ring-0 bg-transparent px-0 placeholder:text-gray-400"
              />
              {(defaultSelectAirport || query) && (
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleClear}
                  className="shrink-0 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                >
                  <X className="w-3 h-3 text-gray-500" />
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2.5 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-800 rounded-lg border border-gray-200">
              <h4 className="text-lg font-medium uppercase tracking-wider">
                {airport.code}
              </h4>
              <div className="w-px border-l border-gray-300 h-7 shrink-0" />
              <div className="min-w-0">
                <p className="text-[15px] font-medium text-gray-800 leading-snug truncate">
                  {airport.city}
                </p>
                <p className="text-[11px] text-gray-500 truncate mt-0.5">
                  {airport.country}, {airport.fullName}
                </p>
              </div>
            </div>
          )}
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="w-full p-0 shadow-2xl bg-white border border-gray-200 rounded-xl overflow-hidden"
        align="start"
        sideOffset={4}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <ul className="max-h-[280px] overflow-y-auto py-1.5">
          {filtered.length === 0 ? (
            <li className="py-8 text-center">
              <p className="text-sm text-gray-400 font-medium">
                No airports found
              </p>
              <p className="text-[11px] text-gray-300 mt-1">
                Try a city name or IATA code
              </p>
            </li>
          ) : (
            filtered.map((ap) => {
              const isSelected = ap.code === airport.code;
              return (
                <li key={ap.code}>
                  <button
                    type="button"
                    onClick={() => handleSelect(ap)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2.5 transition-colors text-left",
                      isSelected
                        ? "bg-blue-50 hover:bg-blue-50"
                        : "hover:bg-gray-50",
                    )}
                  >
                    <span
                      className={cn(
                        "text-[13px] font-medium w-10 shrink-0 tabular-nums",
                        isSelected ? "text-primary" : "text-gray-800",
                      )}
                    >
                      {ap.code}
                    </span>

                    <div className="min-w-0">
                      <p
                        className={cn(
                          "text-[13px] font-semibold leading-snug truncate",
                          isSelected ? "" : "text-gray-800",
                        )}
                      >
                        {ap.city}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate mt-0.5">
                        {ap.country}, {ap.fullName}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default AirportSelector;

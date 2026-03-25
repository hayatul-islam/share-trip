"use client";

import { DAYS, MONTHS } from "@/app/data";
import { CalendarDate, DateRange } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface DateRangePickerProps {
  range?: DateRange;
  onChange?: (range: DateRange) => void;
  placeholder?: { from?: string; to?: string };
}

function toCalendarDate(d: Date): CalendarDate {
  return { year: d.getFullYear(), month: d.getMonth(), day: d.getDate() };
}

function toDate(d: CalendarDate): Date {
  return new Date(d.year, d.month, d.day);
}

function isSameDay(a: CalendarDate, b: CalendarDate) {
  return a.year === b.year && a.month === b.month && a.day === b.day;
}

function isBetween(date: CalendarDate, start: CalendarDate, end: CalendarDate) {
  const d = toDate(date).getTime();
  const s = toDate(start).getTime();
  const e = toDate(end).getTime();
  return d > s && d < e;
}

function isBeforeToday(date: CalendarDate): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return toDate(date) < today;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

interface MonthCalendarProps {
  year: number;
  month: number;
  startDate: CalendarDate | null;
  endDate: CalendarDate | null;
  hoverDate: CalendarDate | null;
  onDayClick: (date: CalendarDate) => void;
  onDayHover: (date: CalendarDate | null) => void;
}

function MonthCalendar({
  year,
  month,
  startDate,
  endDate,
  hoverDate,
  onDayClick,
  onDayHover,
}: MonthCalendarProps) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const cells: (CalendarDate | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => ({
      year,
      month,
      day: i + 1,
    })),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const effectiveEnd = endDate ?? hoverDate;

  return (
    <div className="flex-1 min-w-[240px]">
      <div className="text-center font-semibold text-sm text-gray-800 mb-3">
        {MONTHS[month]} {year}
      </div>
      <div className="grid grid-cols-7 gap-0">
        {DAYS.map((d, i) => (
          <div
            key={i}
            className="text-center text-xs font-medium text-gray-400 py-1"
          >
            {d}
          </div>
        ))}
        {cells.map((date, idx) => {
          if (!date) return <div key={idx} />;

          const disabled = isBeforeToday(date);
          const isStart = startDate ? isSameDay(date, startDate) : false;
          const isEnd = endDate ? isSameDay(date, endDate) : false;
          const isHover =
            hoverDate && !endDate ? isSameDay(date, hoverDate) : false;
          const inRange =
            startDate && effectiveEnd
              ? isBetween(date, startDate, effectiveEnd) ||
                isBetween(date, effectiveEnd, startDate)
              : false;
          const isSelected = isStart || isEnd;

          return (
            <div
              key={idx}
              className={cn(
                "relative flex items-center justify-center h-9",
                inRange && "bg-primary/10",
                isStart && effectiveEnd && "rounded-l-full bg-primary/10",
                isEnd && startDate && "rounded-r-full bg-primary/10",
                isStart && !effectiveEnd && "rounded-full",
              )}
            >
              <button
                disabled={disabled}
                onClick={() => !disabled && onDayClick(date)}
                onMouseEnter={() => !disabled && onDayHover(date)}
                onMouseLeave={() => onDayHover(null)}
                className={cn(
                  "w-9 h-9 rounded-full text-sm transition-all duration-150 font-medium",
                  "flex items-center justify-center",
                  disabled && "text-gray-300 cursor-not-allowed",
                  !disabled &&
                    !isSelected &&
                    !isHover &&
                    "text-gray-700 hover:bg-primary/10 hover:text-primary/90",
                  isSelected && "bg-primary text-white shadow-md",
                  isHover && !isSelected && "bg-primary/10 text-primary/90",
                )}
              >
                {date.day}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TriggerButton({
  date,
  placeholder,
}: {
  date: CalendarDate | null;
  placeholder: string;
}) {
  const jsDate = date ? toDate(date) : null;

  return (
    <button
      type="button"
      className="w-full shrink-0 text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors focus:outline-none bg-white"
    >
      <div className="flex items-center gap-2.5">
        <h4 className="text-lg font-medium text-gray-800 leading-none tabular-nums">
          {jsDate ? format(jsDate, "d") : "--"}
        </h4>
        <div className="w-px border-l border-gray-300 h-7 shrink-0" />
        <div>
          <p className="text-[15px] font-medium text-gray-800 leading-snug">
            {jsDate ? format(jsDate, "MMMM") : placeholder}
          </p>
          <p className="text-[11px] text-gray-500 mt-0.5">
            {jsDate ? format(jsDate, "EEEE, yyyy") : "Select date"}
          </p>
        </div>
      </div>
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DateRangePicker({
  range,
  onChange,
  placeholder = { from: "Departure", to: "Return" },
}: DateRangePickerProps) {
  const today = new Date();

  const defaultFrom = toCalendarDate(today);
  const defaultTo: CalendarDate = {
    year:
      today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear(),
    month: (today.getMonth() + 1) % 12,
    day: 9,
  };

  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const [committedStart, setCommittedStart] = useState<CalendarDate>(
    range?.from ? toCalendarDate(range.from) : defaultFrom,
  );
  const [committedEnd, setCommittedEnd] = useState<CalendarDate>(
    range?.to ? toCalendarDate(range.to) : defaultTo,
  );

  const [tempStart, setTempStart] = useState<CalendarDate | null>(null);
  const [tempEnd, setTempEnd] = useState<CalendarDate | null>(null);
  const [selecting, setSelecting] = useState<"end" | null>(null);
  const [hoverDate, setHoverDate] = useState<CalendarDate | null>(null);

  const month1 = { year: viewYear, month: viewMonth };
  const month2 = {
    year: viewMonth === 11 ? viewYear + 1 : viewYear,
    month: (viewMonth + 1) % 12,
  };

  const handlePrev = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };

  const handleNext = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };

  const handleDayClick = (date: CalendarDate) => {
    if (!tempStart || selecting === null) {
      setTempStart(date);
      setTempEnd(null);
      setSelecting("end");
    } else {
      const s = toDate(tempStart);
      const e = toDate(date);
      if (e >= s) {
        setTempEnd(date);
      } else {
        setTempEnd(tempStart);
        setTempStart(date);
      }
      setSelecting(null);
    }
  };

  const handleApply = () => {
    const newStart = tempStart ?? committedStart;
    const newEnd = tempEnd ?? committedEnd;
    setCommittedStart(newStart);
    setCommittedEnd(newEnd);
    onChange?.({ from: toDate(newStart), to: toDate(newEnd) });
    setOpen(false);
    setTempStart(null);
    setTempEnd(null);
    setSelecting(null);
  };

  const handleOpenChange = (o: boolean) => {
    if (!o) {
      setTempStart(null);
      setTempEnd(null);
      setSelecting(null);
    }
    setOpen(o);
  };

  const displayStart = tempStart ?? committedStart;
  const displayEnd = tempEnd ?? (selecting === "end" ? null : committedEnd);

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2 w-full cursor-pointer">
          <TriggerButton
            date={displayStart}
            placeholder={placeholder.from ?? "Departure"}
          />
          <TriggerButton
            date={displayEnd}
            placeholder={placeholder.to ?? "Return"}
          />
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="w-auto p-0 shadow-xl border-gray-200 bg-white rounded-2xl"
        align="start"
        sideOffset={6}
      >
        <div className="p-5">
          <div className="flex items-start gap-4">
            <button
              onClick={handlePrev}
              className="mt-1 p-1.5 rounded-full hover:bg-primary/10 transition-colors text-gray-400 hover:text-primary/100"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex flex-1 gap-8">
              <MonthCalendar
                {...month1}
                startDate={displayStart}
                endDate={displayEnd}
                hoverDate={hoverDate}
                onDayClick={handleDayClick}
                onDayHover={setHoverDate}
              />
              <div className="w-px bg-gray-100 self-stretch" />
              <MonthCalendar
                {...month2}
                startDate={displayStart}
                endDate={displayEnd}
                hoverDate={hoverDate}
                onDayClick={handleDayClick}
                onDayHover={setHoverDate}
              />
            </div>

            <button
              onClick={handleNext}
              className="mt-1 p-1.5 rounded-full hover:bg-primary/10 transition-colors text-gray-400 hover:text-primary/50"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              {selecting === "end"
                ? "Now select a return date"
                : displayStart && displayEnd
                  ? `${format(toDate(displayStart), "MMM d")} → ${format(toDate(displayEnd), "MMM d, yyyy")}`
                  : "Select departure date"}
            </p>
            <Button
              onClick={handleApply}
              disabled={selecting === "end"}
              className="bg-primary hover:bg-primary/90 disabled:opacity-40 text-white rounded-lg px-6 py-2 text-sm font-medium"
            >
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

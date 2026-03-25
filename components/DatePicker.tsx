"use client";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import React, { useState } from "react";

interface DatePickerProps {
  date: Date;
  onChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ date, onChange }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-[195px] shrink-0 text-left px-4 py-3 hover:bg-gray-50 transition-colors focus:outline-none"
        >
          <div className="flex items-start gap-2.5">
            <span className="text-[32px] font-bold text-gray-900 leading-none tabular-nums">
              {format(date, "d")}
            </span>

            <div>
              <p className="text-[15px] font-semibold text-gray-900 leading-snug">
                {format(date, "MMMM")}
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">
                {format(date, "EEEE, yyyy")}
              </p>
            </div>
          </div>
        </button>
      </PopoverTrigger>

      <PopoverContent
        className="w-auto p-0 shadow-xl border-gray-200"
        align="end"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            if (d) {
              onChange(d);
              setOpen(false);
            }
          }}
          disabled={{ before: new Date() }}
          initialFocus
          classNames={{
            day_selected:
              "bg-[#f97316] text-white hover:bg-orange-600 hover:text-white focus:bg-[#f97316] focus:text-white rounded-md",
            day_today: "bg-orange-50 text-orange-600 font-semibold rounded-md",
            day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors",
            nav_button:
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-orange-50 rounded-md transition-colors",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-semibold text-gray-800",
            head_cell: "text-gray-400 rounded-md w-9 font-medium text-[0.8rem]",
            table: "w-full border-collapse space-y-1",
            cell: "h-9 w-9 text-center text-sm p-0 relative",
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;

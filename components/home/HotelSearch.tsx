"use client";
import { INITIAL_LEGS } from "@/data";
import type { Airport, DateRange } from "@/types";
import { Search } from "lucide-react";
import React, { useState } from "react";
import AirportSelector from "../shared/AirportSelector";
import DateRangePicker from "../shared/DateRangePicker";
import { Button } from "../ui/button";
import GuestsRoomsPicker from "./GuestsRoomsPicker";

const HotelSearch: React.FC = () => {
  const [airport, setAirport] = useState<Airport>(INITIAL_LEGS[0]?.origin);
  const [range, setRange] = useState<DateRange>({ from: new Date(), to: null });

  return (
    <div className="px-4 lg:px-6 py-4 pt-8 lg:pt-4 pb-6 space-y-5">
      <div className="space-y-3">
        <div className="grid lg:flex items-stretch gap-2">
          <div className="lg:w-[260px">
            <AirportSelector
              airport={airport}
              onChange={setAirport}
              className="lg:!w-[260px]"
            />
          </div>
          <div className="lg:w-1/2 pr-2">
            <div className="w-1/2">
              <DateRangePicker range={range} onChange={setRange} />
            </div>
          </div>
          <div className="lg:w-1/4">
            <GuestsRoomsPicker />
          </div>
          <Button
            type="button"
            className="bg-yellow hover:bg-yellow/80 text-white rounded-xl h-[42px] lg:h-[56px] lg:w-[56px]"
          >
            <Search className="hidden lg:block !h-6 !w-6" />
            <span className="lg:hidden">Search Hotel</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;

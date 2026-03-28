"use client";
import { INITIAL_LEGS } from "@/app/data";
import type { Airport, DateRange } from "@/app/types";
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
    <div className="px-6 py-4 pb-6 space-y-5">
      <div className="space-y-3">
        <div className="flex items-stretch gap-2">
          <div className="w-[260px">
            <AirportSelector
              airport={airport}
              onChange={setAirport}
              className="!w-[260px]"
            />
          </div>
          <div className="w-1/2 pr-2">
            <div className="w-1/2">
              <DateRangePicker range={range} onChange={setRange} />
            </div>
          </div>
          <div className="w-1/4">
            <GuestsRoomsPicker />
          </div>
          <Button
            type="button"
            className="bg-yellow hover:bg-yellow/80 text-white rounded-xl h-[56px] w-[56px]"
          >
            <Search className="!h-6 !w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;

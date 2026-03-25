"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftRight, Plus, Search, X } from "lucide-react";
import React, { useState } from "react";

import { AIRPORTS, INITIAL_LEGS, TRIP_TABS } from "@/app/data";
import type { CabinClass, FareType, FlightLeg, TripType } from "@/app/types";
import AirportSelector from "./AirportSelector";
import DatePicker from "./DatePicker";
import TravellerSelectors from "./TravellerSelectors";

const FlightSearch: React.FC = () => {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [fareType, setFareType] = useState<FareType>("regular");
  const [travellers, setTravellers] = useState<string>("1");
  const [cabinClass, setCabinClass] = useState<CabinClass>("economy");
  const [legs, setLegs] = useState<FlightLeg[]>(INITIAL_LEGS);

  const updateLeg = (id: string, updates: Partial<FlightLeg>): void => {
    setLegs((prev) =>
      prev.map((l) => (l.id === id ? { ...l, ...updates } : l)),
    );
  };

  const swapAirports = (id: string): void => {
    setLegs((prev) =>
      prev.map((l) =>
        l.id === id
          ? { ...l, origin: l.destination, destination: l.origin }
          : l,
      ),
    );
  };

  const removeLeg = (id: string): void => {
    setLegs((prev) => prev.filter((l) => l.id !== id));
  };

  const addLeg = (): void => {
    const last = legs[legs.length - 1];
    const nextDate = new Date(last.date);
    nextDate.setDate(nextDate.getDate() + 2);

    setLegs((prev) => [
      ...prev,
      {
        id: `leg-${Date.now()}`,
        origin: last.destination,
        destination: AIRPORTS[0],
        date: nextDate,
      },
    ]);
  };

  return (
    <div className="px-6 py-4 space-y-5 ">
      <div className="flex items-center justify-between">
        <Tabs
          value={tripType}
          onValueChange={(v) => setTripType(v as TripType)}
          className="w-fit"
        >
          <TabsList className="p-1 rounded-lg h-10 flex items-center gap-1.5">
            {TRIP_TABS.map((tab) => {
              const isActive = tripType === tab.value;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className=" 
                px-4 py-4.5 h-8 rounded text-sm font-medium
                transition-all cursor-pointer
                data-[state=active]:bg-primary
                data-[state=active]:text-white
                data-[state=active]:shadow-sm
                data-[state=inactive]:text-gray-600
                data-[state=inactive]:bg-gray-100
              "
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`
                    w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center
                    transition-all
                    ${
                      isActive
                        ? "border-white bg-transparent"
                        : "border-gray-400 bg-transparent"
                    }
                  `}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </span>
                    {tab.label}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        <TravellerSelectors />
      </div>

      <div className=" space-y-3">
        {legs.map((leg) => (
          <div key={leg.id} className="flex items-stretch gap-2 w-full">
            <div className="flex items-center w-full">
              <AirportSelector
                airport={leg.origin}
                onChange={(ap) => updateLeg(leg.id, { origin: ap })}
              />

              <div className="flex items-center justify-center bg-white -mx-3 z-50 border-x-2 rounded-full h-10 w-10 border-gray-200">
                <button
                  type="button"
                  onClick={() => swapAirports(leg.id)}
                  aria-label="Swap origin and destination"
                  className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center
                  hover:bg-orange-50 hover:border-orange-200 transition-colors shadow-sm"
                >
                  <ArrowLeftRight className="w-3 h-3 text-gray-800 font-medium" />
                </button>
              </div>

              <AirportSelector
                airport={leg.destination}
                onChange={(ap) => updateLeg(leg.id, { destination: ap })}
              />
            </div>

            <DatePicker
              date={leg.date}
              onChange={(d) => updateLeg(leg.id, { date: d })}
            />

            {legs.length > 1 && (
              <div className="flex items-center pr-3 shrink-0">
                <button
                  type="button"
                  onClick={() => removeLeg(leg.id)}
                  aria-label="Remove flight leg"
                  className="w-6 h-6 rounded-full bg-gray-400 text-white hover:bg-red-50 hover:text-red-400
                    flex items-center justify-center transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={addLeg}
            className="flex items-center gap-1.5 font-medium text-primary transition-colors cursor-pointer"
          >
            <Plus className="w-5 h-5" />
            Add More Flight
          </button>

          <div className="w-px h-4 bg-gray-200" />
        </div>

        <Button
          type="button"
          className="bg-yellow hover:bg-yellow/80 text-white rounded-xl px-6 h-12 text-[15px] font-semibold gap-2 shadow-md shadow-orange-100 transition-all"
        >
          <Search className="w-4 h-4" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default FlightSearch;

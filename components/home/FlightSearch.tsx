"use client";
import { AIRPORTS, INITIAL_LEGS, TRIP_TABS } from "@/app/data";
import type { DateRange, FareType, FlightLeg, TripType } from "@/app/types";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftRight, ArrowUpDown, Plus, Search, X } from "lucide-react";
import React, { useState } from "react";
import AirportSelector from "../shared/AirportSelector";
import DatePicker from "../shared/DatePicker";
import DateRangePicker from "../shared/DateRangePicker";
import { FareSelector } from "./FareSelector";
import TravellerSelectors from "./TravellerSelectors";

const FlightSearch: React.FC = () => {
  const [tripType, setTripType] = useState<TripType>("round-trip");
  const [legs, setLegs] = useState<FlightLeg[]>(INITIAL_LEGS);
  const [range, setRange] = useState<DateRange>({ from: new Date(), to: null });
  const [fare, setFare] = useState<FareType>("regular");

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

  const legData: FlightLeg[] = tripType === "multi-city" ? legs : [legs[0]];

  return (
    <div className="px-4 md:px-6 py-4 pb-6 space-y-4 md:space-y-5">
      {/* ─── DESKTOP LAYOUT ─── */}
      <div className="hidden lg:block space-y-5 ">
        <div className="flex items-center justify-between pt-4">
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
          {legData.map((leg) => (
            <div key={leg.id} className="flex items-stretch gap-2 ">
              <div className="flex items-center w-full">
                <AirportSelector
                  airport={leg.origin}
                  onChange={(ap) => updateLeg(leg.id, { origin: ap })}
                  // className={`${tripType === "round-trip" && "!w-[280px]"}`}
                  className={`!w-[280px]`}
                />

                <div className="flex items-center justify-center bg-white -mx-3 z-50 border-x-2 rounded-full h-10 w-10 border-gray-200">
                  <button
                    type="button"
                    onClick={() => swapAirports(leg.id)}
                    aria-label="Swap origin and destination"
                    className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center
                  transition-colors shadow-sm"
                  >
                    <ArrowLeftRight className="w-3 h-3 text-gray-800 font-medium" />
                  </button>
                </div>

                <AirportSelector
                  airport={leg.destination}
                  onChange={(ap) => updateLeg(leg.id, { destination: ap })}
                  className={`!w-[280px]`}
                  // className={`${tripType === "round-trip" && "!w-[280px]"}`}
                />
              </div>

              <div
                className={`${
                  tripType === "round-trip"
                    ? "flex max-w-[550px] gap-2"
                    : "max-w-[300px]"
                } w-full`}
              >
                {tripType === "round-trip" ? (
                  <div className="w-1/2 pr-1">
                    <DateRangePicker range={range} onChange={setRange} />
                  </div>
                ) : (
                  <div className="w-full">
                    <DatePicker
                      date={leg.date}
                      onChange={(d) => updateLeg(leg.id, { date: d })}
                    />
                  </div>
                )}
              </div>

              {tripType !== "multi-city" && (
                <Button
                  type="button"
                  className="bg-yellow/85 hover:bg-yellow text-white rounded-xl h-[56px] w-[56px]"
                >
                  <Search className="!h-6 !w-6" />
                </Button>
              )}

              {legs.length > 1 && tripType === "multi-city" && (
                <div className="flex items-center pr-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => removeLeg(leg.id)}
                    aria-label="Remove flight leg"
                    className="w-6 h-6 rounded-full bg-gray-400 text-white
                    flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {tripType === "multi-city" && (
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
              className="bg-yellow/85 hover:bg-yellow text-white rounded-xl px-6 h-12 text-[15px] font-semibold gap-2 shadow-md shadow-orange-100 transition-all"
            >
              <Search className="w-4 h-4" />
              Search
            </Button>
          </div>
        )}

        <FareSelector value={fare} onChange={setFare} />
      </div>

      {/* ─── MOBILE LAYOUT ─── */}
      <div className="lg:hidden space-y-4 pt-2">
        {/* Trip Type Radio Tabs */}
        <div className="flex items-center gap-4 flex-wrap">
          {TRIP_TABS.map((tab) => {
            const isActive = tripType === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setTripType(tab.value as TripType)}
                className="flex items-center gap-2 text-[12px] font-medium cursor-pointer"
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                    isActive ? "border-primary" : "border-gray-400"
                  }`}
                >
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </span>
                <span className={isActive ? "text-primary" : "text-gray-500"}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Flight Legs */}
        <div className="space-y-3">
          {legData.map((leg, index) => (
            <div key={leg.id}>
              {/* Multi-city label + remove */}
              {tripType === "multi-city" && (
                <div className="flex items-center mb-2">
                  <span className="text-[10px] font-medium text-white bg-primary px-3 py-1 rounded-full">
                    {index === 0
                      ? "1st Flight"
                      : index === 1
                        ? "2nd Flight"
                        : `${index + 1}th Flight`}
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                  {legs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLeg(leg.id)}
                      className="w-5 h-5 rounded-full bg-gray-300 text-white flex items-center justify-center"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              )}

              {/* Airport Card */}
              <div className=" space-y-3 overflow-hidden relative">
                <div>
                  <AirportSelector
                    airport={leg.origin}
                    onChange={(ap) => updateLeg(leg.id, { origin: ap })}
                    className="w-full border-none shadow-none p-0"
                  />
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                  <button
                    type="button"
                    onClick={() => swapAirports(leg.id)}
                    className="w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm"
                  >
                    <ArrowUpDown className="w-3 h-3 text-gray-600" />
                  </button>
                </div>
                <div>
                  <AirportSelector
                    airport={leg.destination}
                    onChange={(ap) => updateLeg(leg.id, { destination: ap })}
                    className="w-full border-none shadow-none p-0"
                  />
                </div>
              </div>

              {/* Date Row */}
              <div className="mt-2">
                {tripType === "round-trip" ? (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="overflow-hidden">
                      <DateRangePicker
                        range={range}
                        onChange={setRange}
                        showOnlyStart
                      />
                    </div>
                    <div className=" overflow-hidden">
                      <DateRangePicker range={range} onChange={setRange} />
                    </div>
                  </div>
                ) : (
                  <div className=" overflow-hidden">
                    <DatePicker
                      date={leg.date}
                      onChange={(d) => updateLeg(leg.id, { date: d })}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add another flight (multi-city) */}
        {tripType === "multi-city" && (
          <button
            type="button"
            onClick={addLeg}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-primary font-medium text-sm bg-primary/10"
          >
            <Plus className="w-4 h-4" />
            Add another flight
          </button>
        )}

        {/* Search Button */}
        <Button
          type="button"
          className="w-full bg-yellow hover:bg-yellow/90 text-white rounded-lg h-10 text-sm font-semibold"
        >
          Search Flight
        </Button>

        {/* Fare Selector */}
        <FareSelector value={fare} onChange={setFare} />
      </div>
    </div>
  );
};

export default FlightSearch;

// "use client";
// import { AIRPORTS, INITIAL_LEGS, TRIP_TABS } from "@/app/data";
// import type { DateRange, FareType, FlightLeg, TripType } from "@/app/types";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ArrowLeftRight, Plus, Search, X } from "lucide-react";
// import React, { useState } from "react";
// import AirportSelector from "../shared/AirportSelector";
// import DatePicker from "../shared/DatePicker";
// import DateRangePicker from "../shared/DateRangePicker";
// import { FareSelector } from "./FareSelector";
// import TravellerSelectors from "./TravellerSelectors";

// const FlightSearch: React.FC = () => {
//   const [tripType, setTripType] = useState<TripType>("round-trip");
//   const [legs, setLegs] = useState<FlightLeg[]>(INITIAL_LEGS);
//   const [range, setRange] = useState<DateRange>({ from: new Date(), to: null });
//   const [fare, setFare] = useState<FareType>("regular");

//   const updateLeg = (id: string, updates: Partial<FlightLeg>): void => {
//     setLegs((prev) =>
//       prev.map((l) => (l.id === id ? { ...l, ...updates } : l)),
//     );
//   };

//   const swapAirports = (id: string): void => {
//     setLegs((prev) =>
//       prev.map((l) =>
//         l.id === id
//           ? { ...l, origin: l.destination, destination: l.origin }
//           : l,
//       ),
//     );
//   };

//   const removeLeg = (id: string): void => {
//     setLegs((prev) => prev.filter((l) => l.id !== id));
//   };

//   const addLeg = (): void => {
//     const last = legs[legs.length - 1];
//     const nextDate = new Date(last.date);
//     nextDate.setDate(nextDate.getDate() + 2);

//     setLegs((prev) => [
//       ...prev,
//       {
//         id: `leg-${Date.now()}`,
//         origin: last.destination,
//         destination: AIRPORTS[0],
//         date: nextDate,
//       },
//     ]);
//   };

//   const legData: FlightLeg[] = tripType === "multi-city" ? legs : [legs[0]];

//   return (
//     <div className="px-6 py-4 pb-6 space-y-5 ">
//       <div className="flex items-center justify-between pt-4">
//         <Tabs
//           value={tripType}
//           onValueChange={(v) => setTripType(v as TripType)}
//           className="w-fit"
//         >
//           <TabsList className="p-1 rounded-lg h-10 flex items-center gap-1.5">
//             {TRIP_TABS.map((tab) => {
//               const isActive = tripType === tab.value;
//               return (
//                 <TabsTrigger
//                   key={tab.value}
//                   value={tab.value}
//                   className="
//                 px-4 py-4.5 h-8 rounded text-sm font-medium
//                 transition-all cursor-pointer
//                 data-[state=active]:bg-primary
//                 data-[state=active]:text-white
//                 data-[state=active]:shadow-sm
//                 data-[state=inactive]:text-gray-600
//                 data-[state=inactive]:bg-gray-100
//               "
//                 >
//                   <span className="flex items-center gap-2">
//                     <span
//                       className={`
//                     w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center
//                     transition-all
//                     ${
//                       isActive
//                         ? "border-white bg-transparent"
//                         : "border-gray-400 bg-transparent"
//                     }
//                   `}
//                     >
//                       {isActive && (
//                         <span className="w-1.5 h-1.5 rounded-full bg-white" />
//                       )}
//                     </span>
//                     {tab.label}
//                   </span>
//                 </TabsTrigger>
//               );
//             })}
//           </TabsList>
//         </Tabs>

//         <TravellerSelectors />
//       </div>

//       <div className=" space-y-3">
//         {legData.map((leg) => (
//           <div key={leg.id} className="flex items-stretch gap-2 ">
//             <div className="flex items-center w-full">
//               <AirportSelector
//                 airport={leg.origin}
//                 onChange={(ap) => updateLeg(leg.id, { origin: ap })}
//                 // className={`${tripType === "round-trip" && "!w-[280px]"}`}
//                 className={`!w-[280px]`}
//               />

//               <div className="flex items-center justify-center bg-white -mx-3 z-50 border-x-2 rounded-full h-10 w-10 border-gray-200">
//                 <button
//                   type="button"
//                   onClick={() => swapAirports(leg.id)}
//                   aria-label="Swap origin and destination"
//                   className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center
//                   transition-colors shadow-sm"
//                 >
//                   <ArrowLeftRight className="w-3 h-3 text-gray-800 font-medium" />
//                 </button>
//               </div>

//               <AirportSelector
//                 airport={leg.destination}
//                 onChange={(ap) => updateLeg(leg.id, { destination: ap })}
//                 className={`!w-[280px]`}
//                 // className={`${tripType === "round-trip" && "!w-[280px]"}`}
//               />
//             </div>

//             <div
//               className={`${
//                 tripType === "round-trip"
//                   ? "flex max-w-[550px] gap-2"
//                   : "max-w-[300px]"
//               } w-full`}
//             >
//               {tripType === "round-trip" ? (
//                 <div className="w-1/2 pr-1">
//                   <DateRangePicker range={range} onChange={setRange} />
//                 </div>
//               ) : (
//                 <div className="w-full">
//                   <DatePicker
//                     date={leg.date}
//                     onChange={(d) => updateLeg(leg.id, { date: d })}
//                   />
//                 </div>
//               )}
//             </div>

//             {tripType !== "multi-city" && (
//               <Button
//                 type="button"
//                 className="bg-yellow/85 hover:bg-yellow text-white rounded-xl h-[56px] w-[56px]"
//               >
//                 <Search className="!h-6 !w-6" />
//               </Button>
//             )}

//             {legs.length > 1 && tripType === "multi-city" && (
//               <div className="flex items-center pr-3 shrink-0">
//                 <button
//                   type="button"
//                   onClick={() => removeLeg(leg.id)}
//                   aria-label="Remove flight leg"
//                   className="w-6 h-6 rounded-full bg-gray-400 text-white
//                     flex items-center justify-center transition-colors cursor-pointer"
//                 >
//                   <X className="w-3.5 h-3.5" />
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {tripType === "multi-city" && (
//         <div className="flex items-center justify-between flex-wrap gap-3">
//           <div className="flex items-center gap-4">
//             <button
//               type="button"
//               onClick={addLeg}
//               className="flex items-center gap-1.5 font-medium text-primary transition-colors cursor-pointer"
//             >
//               <Plus className="w-5 h-5" />
//               Add More Flight
//             </button>

//             <div className="w-px h-4 bg-gray-200" />
//           </div>

//           <Button
//             type="button"
//             className="bg-yellow/85 hover:bg-yellow text-white rounded-xl px-6 h-12 text-[15px] font-semibold gap-2 shadow-md shadow-orange-100 transition-all"
//           >
//             <Search className="w-4 h-4" />
//             Search
//           </Button>
//         </div>
//       )}

//       <FareSelector value={fare} onChange={setFare} />
//     </div>
//   );
// };

// export default FlightSearch;

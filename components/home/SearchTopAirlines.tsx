"use client";
import { AIRLINES } from "@/app/data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import SectionHeader from "../shared/SectionHeader";

const SearchTopAirlines: React.FC = () => {
  return (
    <div className="container py-16">
      <SectionHeader
        title="Search Top Airlines"
        description="ShareTrip's user-friendly platform connects you to top airlines
          instantly. Enjoy a comfortable and hassle-free journey on any
          destination and get tickets of top airlines easily"
        className="text-center max-w-xl mx-auto"
      />

      <div className="grid grid-cols-4 gap-4">
        {AIRLINES.map((airline) => (
          <AirlineItem
            key={airline.id}
            name={airline.name}
            logo={airline.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchTopAirlines;

const AirlineItem: React.FC<{ name: string; logo: string }> = ({
  name,
  logo,
}) => (
  <button className="flex items-center gap-3 w-full group hover:bg-white rounded-lg p-3 transition-all duration-200 hover:shadow-sm">
    <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
      <Image
        src={logo}
        alt={name}
        width={36}
        height={36}
        className="object-contain w-9 h-9"
        unoptimized
      />
    </div>

    <span className=" font-medium text-gray-800 text-left leading-tight flex-1">
      {name}
    </span>

    <ChevronRight
      size={20}
      className="text-gray-600 transition-colors font-medium shrink-0"
    />
  </button>
);

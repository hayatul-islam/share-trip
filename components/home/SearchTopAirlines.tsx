"use client";
import { AIRLINES } from "@/app/data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import SectionHeader from "../shared/SectionHeader";

const SearchTopAirlines: React.FC = () => {
  return (
    <div className="container py-8 sm:py-10 md:py-12 lg:py-16">
      <SectionHeader
        title="Search Top Airlines"
        description="ShareTrip's user-friendly platform connects you to top airlines
          instantly. Enjoy a comfortable and hassle-free journey on any
          destination and get tickets of top airlines easily"
        className="text-center max-w-2xl mx-auto"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
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
  <button className="bg-white md:bg-transparent flex items-center gap-3 w-full group hover:bg-white rounded-lg p-3 transition-all duration-500 hover:shadow-md">
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

    <p className="font-[450] text-[15px] text-gray-800 text-left leading-tight flex-1">
      {name}
    </p>

    <div className="relative w-5 h-5 overflow-hidden shrink-0">
      <ChevronRight
        size={20}
        className="absolute inset-0 text-gray-500 font-medium
          transition-transform duration-500
          group-hover:translate-x-8"
      />

      <ChevronRight
        size={20}
        className="absolute inset-0 text-gray-500 font-medium
          transition-transform duration-500
          -translate-x-12 group-hover:translate-x-0"
      />
    </div>
  </button>
);

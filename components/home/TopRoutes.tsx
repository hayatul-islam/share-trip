"use client";
import { ROUTES } from "@/data";
import { RouteCategory } from "@/types";
import React, { useState } from "react";
import SectionHeader from "../shared/SectionHeader";
import { Button } from "../ui/button";

const TopRoutes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RouteCategory>("domestic");

  const filteredRoutes = ROUTES.filter((r) => r.category === activeTab);

  return (
    <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container">
        <SectionHeader
          title="Top Domestic & International Routes"
          description="Make your next trip unforgettable with ShareTrip! From business class to economy class flights on international trips or domestic ones, choose from hundreds of airlines"
          className="max-w-2xl mx-auto text-center"
        />

        <div className="flex justify-center mb-8">
          <div className="flex gap-2">
            <Button
              onClick={() => setActiveTab("domestic")}
              className={`px-10 py-5 md:py-6 text-sm font-medium transition-all duration-200 ${
                activeTab === "domestic"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Domestic
            </Button>
            <Button
              onClick={() => setActiveTab("international")}
              className={`px-10 py-5 md:py-6 text-sm font-medium transition-all duration-200 ${
                activeTab === "international"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              International
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredRoutes.map((route, idx) => (
            <RouteCard key={idx} {...route} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRoutes;

const RouteCard: React.FC<{
  from: string;
  fromAirport: string;
  to: string;
  toAirport: string;
}> = ({ from, fromAirport, to, toAirport }) => (
  <div className="relative group flex items-center justify-between rounded-xl px-4 py-4 bg-gray-50 cursor-pointer border border-gray-100 hover:border-primary transition-all duration-500">
    <div className="min-w-0">
      <p className="font-medium text-[16px] text-gray-800 group-hover:text-primary transition-colors duration-300">
        {from}
      </p>
      <p className="text-gray-700 text-[14px] mt-0.5 truncate">{fromAirport}</p>
    </div>

    <div className="absolute top-[50%] left-[50%] translate-[-50%] w-[2px] h-12 border z-0 border-primary/10" />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
  rounded-full h-6 w-6 flex justify-center items-center 
  bg-gray-100 group-hover:bg-primary transition-all duration-300 
  z-30 overflow-hidden"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute fill-primary group-hover:fill-white 
    transition-all duration-500 rotate-45 
    -translate-x-6 translate-y-6 
    group-hover:translate-x-0 group-hover:translate-y-0"
      >
        <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>

      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute fill-primary group-hover:fill-white 
    transition-all duration-500 rotate-45 
    translate-x-0 translate-y-0 
    group-hover:translate-x-6 group-hover:-translate-y-6"
      >
        <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    </div>

    <div className="min-w-0 text-right">
      <p className="font-medium text-[16px] text-gray-800 group-hover:text-primary transition-colors duration-300">
        {to}
      </p>
      <p className="text-gray-700 text-[14px] mt-0.5 truncate">{toAirport}</p>
    </div>
  </div>
);

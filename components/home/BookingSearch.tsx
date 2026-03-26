"use client";
import { ServiceType } from "@/app/types";
import React, { useState } from "react";
import { Card } from "../ui/card";
import FlightSearch from "./FlightSearch";
import HotelSearch from "./HotelSearch";
import ServiceTabs from "./ServiceTabs";

const BookingSearch: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceType>("flight");

  return (
    <div className="relative container -mt-[62px] z-50">
      <Card className=" bg-white p-0 shadow-none right-0 border-none">
        <ServiceTabs
          activeService={activeService}
          onServiceChange={setActiveService}
        />

        {activeService === "flight" && <FlightSearch />}
        {activeService === "hotel" && <HotelSearch />}
      </Card>
    </div>
  );
};

export default BookingSearch;

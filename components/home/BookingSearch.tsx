"use client";
import { ServiceType } from "@/app/types";
import { Clock } from "lucide-react";
import React, { useState } from "react";
import { Card } from "../ui/card";
import FlightSearch from "./FlightSearch";
import HotelSearch from "./HotelSearch";
import ServiceTabs from "./ServiceTabs";

const SERVICE_COMPONENTS: Partial<Record<ServiceType, React.ReactNode>> = {
  flight: <FlightSearch />,
  hotel: <HotelSearch />,
};

const BookingSearch: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceType>("flight");

  const ActiveComponent = SERVICE_COMPONENTS[activeService];

  return (
    <div className="relative container -mt-[62px] z-50">
      <Card className="bg-white p-0 shadow-none right-0 border-none">
        <ServiceTabs
          activeService={activeService}
          onServiceChange={setActiveService}
        />

        {ActiveComponent ?? <ComingSoon service={activeService} />}
      </Card>
    </div>
  );
};

export default BookingSearch;

const ComingSoon = ({ service }: { service: ServiceType }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="bg-yellow/10 rounded-full p-3 mb-4">
      <Clock className="w-6 h-6 text-yellow" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 capitalize">
      {service}
    </h3>
    <p className="text-gray-400 text-sm mt-1">
      This service is coming soon. Stay tuned!
    </p>
  </div>
);

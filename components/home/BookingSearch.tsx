"use client";
import { ServiceType } from "@/app/types";
import { Clock } from "lucide-react";
import React, { useState } from "react";
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
    <div className="relative container -mt-[145px] md:-mt-[100px] lg:-mt-[62px] z-50">
      <div className="bg-white shadow-xs rounded-lg relative">
        <div className="bg-white shadow rounded-lg absolute w-[95%] top-1 left-[50%] translate-[-50%] lg:hidden">
          <ServiceTabs
            activeService={activeService}
            onServiceChange={setActiveService}
          />
        </div>
        <div className="hidden lg:block">
          <ServiceTabs
            activeService={activeService}
            onServiceChange={setActiveService}
          />
        </div>

        <div className="pb-7 lg:hidden"></div>
        {ActiveComponent ?? <ComingSoon service={activeService} />}
      </div>
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

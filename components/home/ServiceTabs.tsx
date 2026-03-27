"use client";
import { SERVICE_TABS } from "@/app/data";
import { ServiceType } from "@/app/types";
import { cn } from "@/lib/utils";
import React from "react";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceTabsProps {
  activeService: ServiceType;
  onServiceChange: (service: ServiceType) => void;
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({
  activeService,
  onServiceChange,
}) => {
  return (
    <nav className="border-b border-gray-200">
      <div className="px-4 flex items-center justify-center gap-2 overflow-x-auto scrollbar-none">
        {SERVICE_TABS.map((tab) => {
          const isActive = tab.value === activeService;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => onServiceChange(tab.value)}
              className={cn(
                "flex items-center text-[12px] gap-2 px-4 py-5 font-medium",
                "whitespace-nowrap transition-colors border-b-2 shrink-0 cursor-pointer gap-3",
                isActive
                  ? "border-yellow "
                  : "border-transparent text-gray-500 hover:text-gray-700 ",
              )}
            >
              <ServiceIcon
                type={tab?.value}
                color={isActive ? "#F27D00" : ""}
              />
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default ServiceTabs;

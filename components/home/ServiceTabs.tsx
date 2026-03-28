"use client";
import { SERVICE_TABS } from "@/app/data";
import { ServiceType } from "@/app/types";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceTabsProps {
  activeService: ServiceType;
  onServiceChange: (service: ServiceType) => void;
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({
  activeService,
  onServiceChange,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll);
    window?.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window?.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -120 : 120,
      behavior: "smooth",
    });
  };

  return (
    <nav className="lg:border-b border-gray-200 ">
      <div className="relative flex items-center">
        {/* Left Arrow - mobile only */}
        <button
          type="button"
          onClick={() => scroll("left")}
          className={cn(
            "lg:hidden shrink-0 p-1 text-gray-400 transition-opacity",
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Scrollable tab list */}
        <div
          ref={scrollRef}
          className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none scroll-smooth px-1 sm:px-4 sm:justify-center flex-1"
        >
          {SERVICE_TABS.map((tab) => {
            const isActive = tab.value === activeService;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => onServiceChange(tab.value)}
                className={cn(
                  "flex flex-col md:flex-row items-center text-[11px] md:text-[12px] gap-1 md:gap-2",
                  "px-2 md:px-4 py-3 md:py-5 font-medium",
                  "whitespace-nowrap transition-colors border-b-2 shrink-0 cursor-pointer",
                  isActive
                    ? "border-yellow"
                    : "border-transparent text-gray-500 hover:text-gray-700",
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

        {/* Right Arrow - mobile only */}
        <button
          type="button"
          onClick={() => scroll("right")}
          className={cn(
            "lg:hidden shrink-0 p-1 text-gray-400 transition-opacity",
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
};

export default ServiceTabs;

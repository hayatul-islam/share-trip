"use client";
import React from "react";
import { Button } from "../ui/button";

const GrowBusiness: React.FC = () => {
  return (
    <div
      className="py-16"
      style={{
        background:
          "linear-gradient(89.98deg, rgb(184, 217, 255) -0.12%, rgb(255, 225, 194) 100.36%)",
      }}
    >
      <div className="container flex items-center justify-between">
        <div className="w-full">
          <h2 className="text-2xl md:text-[32px] font-bold text-gray-800">
            Grow Your Business with ShareTrip Shop
          </h2>
          <p className="text-gray-600 mt-1.5 text-[16px]">
            Partner with us to reach more customers, boost sales, and expand
            your brand effortlessly.
          </p>
        </div>

        <Button className="whitespace-nowrap px-8 py-6 rounded-full font-semibold text-white text-sm transition-opacity hover:opacity-90 bg-yellow">
          Become a Partner
        </Button>
      </div>
    </div>
  );
};

export default GrowBusiness;

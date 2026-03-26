"use client";
import React from "react";
import { Button } from "../ui/button";

const GrowBusiness: React.FC = () => {
  return (
    <div
      className="py-16"
      style={{
        background: "linear-gradient(to right, #BBD9FD, #FCE1C5)",
      }}
    >
      <div className="container flex items-center justify-between">
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Grow Your Business with ShareTrip Shop
          </h2>
          <p className="text-gray-600 mt-1.5 text-md">
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

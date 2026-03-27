"use client";
import { DESTINATIONS } from "@/app/data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SectionHeader from "../shared/SectionHeader";

const ExploreBangladesh: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    cssEase: "cubic-bezier(0.45, 0, 0.55, 1)",
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="bg-white py-16">
      <div className="container">
        <SectionHeader
          title="Explore Bangladesh"
          description="Prepare to experience Bangladesh's rich culture and explore the majestic beauties of Cox's Bazar, Sylhet, Bandarban, Sajek Valley, Rangamati etc Plan your trip now!"
          className="max-w-2xl"
        />

        <div className="explore-slider">
          <Slider {...settings}>
            {DESTINATIONS.map((dest) => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ExploreBangladesh;

const DestinationCard: React.FC<(typeof DESTINATIONS)[0]> = ({
  name,
  hotels,
  image,
}) => (
  <div className="px-2">
    <div className="relative overflow-hidden rounded-2xl h-80 cursor-pointer group shadow-sm hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image}
        alt={name}
        width={600}
        height={320}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:bottom-2 transform duration-500">
        <p className="text-white font-bold text-[16px] leading-tight drop-shadow">
          {name}
        </p>
        <p className="text-white/80 text-[12px] mt-0.5">
          {hotels} Hotels Available
        </p>
      </div>
    </div>
  </div>
);

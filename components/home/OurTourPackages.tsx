"use client";
import { HOTELS } from "@/app/data";
import React, { useRef } from "react";
import Slider from "react-slick";
import SectionHeader from "../shared/SectionHeader";
import HotelCard from "./HotelCard";

const OurTourPackages: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
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
          title="Our Tour Packages for You"
          description="Plan your dream gateway and choose from uncountable tour packages at ShareTrip. Book our holiday packages for the best deals on any international trip."
          className="max-w-xl"
        />

        <div className="best-hotels-slider">
          <Slider ref={sliderRef} {...settings}>
            {HOTELS.slice(6).map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurTourPackages;

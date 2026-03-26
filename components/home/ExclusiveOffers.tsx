"use client";
import { AD_SLIDES, OFFER_SLIDES } from "@/app/data";
import React, { useRef } from "react";
import Slider from "react-slick";
import SectionHeader from "../shared/SectionHeader";

const ExclusiveOffers: React.FC = () => {
  const adSliderRef = useRef<Slider>(null);

  const offerSettings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
  };

  const adSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    cssEase: "cubic-bezier(0.45, 0, 0.55, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: false,
  };

  return (
    <div className="container pt-16 pb-20">
      <SectionHeader title="Exclusive Offers" />

      <div className="space-y-20">
        <div className="offer-slider mb-6">
          <Slider {...offerSettings}>
            {OFFER_SLIDES.map((slide) => (
              <OfferCard key={slide.id} {...slide} />
            ))}
          </Slider>
        </div>

        <div className="relative rounded-xl overflow-hidden h-32 shadow-md mt-16">
          <div className="absolute top-2.5 right-6 z-10 bg-gray-600/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            AD
          </div>

          <Slider ref={adSliderRef} {...adSettings}>
            {AD_SLIDES.map((slide) => (
              <div key={slide.id}>
                <div className="relative h-full">
                  <img
                    src={slide.image}
                    alt="Advertisement"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            ))}
          </Slider>

          <button
            onClick={() => adSliderRef.current?.slickPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/25 hover:bg-white/10 text-white transition-colors text-xl font-bold select-none"
          >
            ‹
          </button>

          <button
            onClick={() => adSliderRef.current?.slickNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/25 hover:bg-white/10 text-white transition-colors text-xl font-bold select-none"
          >
            ›
          </button>
        </div>

        <div>
          <img
            src="assets/images/offers/homepage-banner-ads-4.png"
            alt=""
            className="rounded-xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;

const OfferCard: React.FC<(typeof OFFER_SLIDES)[0]> = ({
  image,
  title,
  subtitle,
}) => (
  <div className="px-1.5">
    <div className="relative overflow-hidden rounded-xl h-44 group cursor-pointer shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

      <div className="absolute inset-0 bg-primary/98 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out flex flex-col  p-4">
        <p className="text-white font-bold text-lg leading-tight drop-shadow-lg">
          {title}
        </p>
        <p className="text-white/80 text-xs mt-1.5 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

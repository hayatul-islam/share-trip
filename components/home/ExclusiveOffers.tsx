"use client";
import { AD_SLIDES, OFFER_SLIDES } from "@/app/data";
import Image from "next/image";
import React, { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../shared/SectionHeader";

const ExclusiveOffers: React.FC = () => {
  const adSwiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="container py-8 sm:py-10 md:py-12 lg:py-16">
      <SectionHeader
        title="Exclusive Offers"
        className="!pb-6 text-center md:text-left"
      />

      <div className="space-y-8 md:space-y-12 lg:space-y-20">
        {/* Offer Slides */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1000}
          slidesPerView={1.5}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="!pb-10"
        >
          {OFFER_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <OfferCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Ad Slider */}
        <div className="relative rounded-xl overflow-hidden h-32 shadow-md">
          <div className="absolute top-2.5 right-6 z-10 bg-gray-600/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            AD
          </div>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={1000}
            slidesPerView={1}
            onSwiper={(swiper) => (adSwiperRef.current = swiper)}
            className="h-32"
          >
            {AD_SLIDES.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-full lg:h-32">
                  <Image
                    src={slide.image}
                    alt="Advertisement"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => adSwiperRef.current?.slidePrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/25 hover:bg-white/10 text-white transition-colors text-xl font-bold select-none"
          >
            ‹
          </button>
          <button
            onClick={() => adSwiperRef.current?.slideNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/25 hover:bg-white/10 text-white transition-colors text-xl font-bold select-none"
          >
            ›
          </button>
        </div>

        {/* Banner Ad */}
        <div className="relative w-full h-auto aspect-[16/4] rounded-xl overflow-hidden">
          <Image
            src="/assets/images/offers/homepage-banner-ads-4.png"
            alt=""
            fill
            className="object-cover rounded-xl"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="pt-2 md:pt-4"></div>
    </div>
  );
};

export default ExclusiveOffers;

const OfferCard: React.FC<(typeof OFFER_SLIDES)[0]> = ({
  image,
  title,
  subtitle,
}) => (
  <div className="relative overflow-hidden rounded-xl h-26 md:h-32 lg:h-44 group cursor-pointer shadow-sm">
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

    <div className="absolute inset-0 bg-primary/98 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out flex flex-col p-4">
      <p className="text-white font-bold text-lg leading-tight drop-shadow-lg">
        {title}
      </p>
      <p className="text-white/80 text-xs mt-1.5 leading-relaxed">{subtitle}</p>
    </div>
  </div>
);

"use client";
import { POPULAR_DESTINATIONS } from "@/app/data";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../shared/SectionHeader";

const ORIGINAL = POPULAR_DESTINATIONS;
const TOTAL = ORIGINAL.length;
const SLIDES = [...ORIGINAL, ...ORIGINAL, ...ORIGINAL];
const OFFSET = TOTAL;

function getRelativePos(idx: number, center: number, total: number): number {
  let diff = idx - center;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function getCardStyle(rel: number): React.CSSProperties {
  if (rel === 0) {
    return {
      transform: "perspective(100px) rotateY(0deg) scale(1)",
      filter: "brightness(1)",
      zIndex: 10,
      transition: "all 0.5s cubic-bezier(0.45, 0, 0.55, 1)",
    };
  }
  const absRel = Math.abs(rel);
  const direction = rel < 0 ? -1 : 1;
  const rotateY = direction * (absRel === 1 ? -20 : -25);
  const brightness = absRel === 1 ? 0.72 : 0.6;
  return {
    transform: `perspective(400px) rotateY(${rotateY}deg) scale(0.96)`,
    filter: `brightness(${brightness})`,
    zIndex: 10 - absRel,
    transition: "all 0.5s cubic-bezier(0.45, 0, 0.55, 1)",
  };
}

const MostPopularDestinations: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [centerIdx, setCenterIdx] = useState(OFFSET + 2);

  const handleChange = useCallback((swiper: SwiperType) => {
    const active = swiper.activeIndex;
    setCenterIdx(active);

    if (active >= TOTAL * 2) {
      swiper.slideTo(active - TOTAL, 0);
    } else if (active < TOTAL) {
      swiper.slideTo(active + TOTAL, 0);
    }
  }, []);

  return (
    <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
      <div className="container">
        <SectionHeader
          title="Most Popular Destinations"
          description="Expand your travel horizons with new facets! Explore the world by
              choosing your ideal travel destinations in Asia, Europe, America,
              Australia and more with ShareTrip."
          className="max-w-xl mx-auto text-center"
        />
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            initialSlide={OFFSET + 2}
            centeredSlides={true}
            slidesPerView={1.5}
            spaceBetween={0}
            breakpoints={{
              640: { slidesPerView: 1, centeredSlides: true },
              1024: { slidesPerView: 3, centeredSlides: true },
              1280: { slidesPerView: 4.3, centeredSlides: true },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setCenterIdx(swiper.activeIndex);
            }}
            onActiveIndexChange={handleChange}
            slideToClickedSlide={true}
            className="!pb-10"
          >
            {SLIDES.map((dest, idx) => {
              const realIdx = idx % TOTAL;
              const rel = getRelativePos(realIdx, centerIdx % TOTAL, TOTAL);
              const style = getCardStyle(rel);

              return (
                <SwiperSlide key={`${dest.id}-${idx}`}>
                  <div
                    className="relative overflow-hidden rounded-xl cursor-pointer mt-6 mb-4 h-[280px] md:h-[350px]"
                    style={{ ...style }}
                  >
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      width={1000}
                      height={10}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-[16px] leading-tight drop-shadow">
                        {dest.name}
                      </p>
                      <p className="text-white/80 text-[12px] mt-0.5">
                        {dest.hotels.toLocaleString()} Hotels Available
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MostPopularDestinations;

// "use client";
// import { POPULAR_DESTINATIONS } from "@/app/data";
// import Image from "next/image";
// import React, { useCallback, useRef, useState } from "react";
// import Slider from "react-slick";
// import SectionHeader from "../shared/SectionHeader";

// const TOTAL = POPULAR_DESTINATIONS.length;

// function getRelativePos(idx: number, center: number, total: number): number {
//   let diff = idx - center;
//   if (diff > total / 2) diff -= total;
//   if (diff < -total / 2) diff += total;
//   return diff;
// }

// function getCardStyle(rel: number): React.CSSProperties {
//   if (rel === 0) {
//     return {
//       transform: "perspective(100px) rotateY(0deg) scale(1)",
//       filter: "brightness(1)",
//       zIndex: 10,
//       //   boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
//       transition: "all 0.5s cubic-bezier(0.45, 0, 0.55, 1)",
//     };
//   }

//   const absRel = Math.abs(rel);
//   const direction = rel < 0 ? -1 : 1;

//   const rotateY = direction * (absRel === 1 ? -20 : -25);
//   const brightness = absRel === 1 ? 0.72 : 0.6;
//   //   const scale = absRel === 1 ? 0.95 : 0.9;
//   const scale = 0.96;

//   return {
//     transform: `perspective(400px) rotateY(${rotateY}deg) scale(${scale})`,
//     filter: `brightness(${brightness})`,
//     zIndex: 10 - absRel,
//     transition: "all 0.5s cubic-bezier(0.45, 0, 0.55, 1)",
//   };
// }

// const MostPopularDestinations: React.FC = () => {
//   const sliderRef = useRef<Slider>(null);
//   const [centerIdx, setCenterIdx] = useState(2);

//   const handleBeforeChange = useCallback((_: number, next: number) => {
//     setCenterIdx(next);
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 3000,
//     cssEase: "cubic-bezier(0.45, 0, 0.55, 1)",
//     slidesToShow: 4.3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0px",
//     arrows: false,
//     focusOnSelect: true,
//     initialSlide: 2,
//     beforeChange: handleBeforeChange,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 3, centerPadding: "0px" },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1, centerPadding: "60px" },
//       },
//     ],
//   };

//   return (
//     <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
//       <div className=" container">
//         <SectionHeader
//           title="Most Popular Destinations"
//           description="Expand your travel horizons with new facets! Explore the world by
//               choosing your ideal travel destinations in Asia, Europe, America,
//               Australia and more with ShareTrip."
//           className="max-w-xl mx-auto text-center"
//         />
//         <div>
//           <Slider ref={sliderRef} {...settings}>
//             {POPULAR_DESTINATIONS.map((dest, idx) => {
//               const rel = getRelativePos(idx, centerIdx, TOTAL);
//               const cardStyle = getCardStyle(rel);

//               return (
//                 <div key={dest.id}>
//                   <div
//                     className="card-inner relative overflow-hidden rounded-xl cursor-pointer mt-6 mb-4"
//                     style={{ height: "350px", ...cardStyle }}
//                   >
//                     <Image
//                       src={dest.image}
//                       alt={dest.name}
//                       width={1000}
//                       height={10}
//                       className="w-full h-full object-cover"
//                       unoptimized
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

//                     <div className="absolute bottom-0 left-0 right-0 p-4">
//                       <p className="text-white font-bold text-[16px] leading-tight drop-shadow">
//                         {dest.name}
//                       </p>
//                       <p className="text-white/80 text-[12px] mt-0.5">
//                         {dest.hotels.toLocaleString()} Hotels Available
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MostPopularDestinations;

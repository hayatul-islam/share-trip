"use client";
import { HOTELS } from "@/app/data";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../shared/SectionHeader";
import HotelCard from "./HotelCard";

const BestHotels: React.FC = () => {
  return (
    <div className="py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container">
        <SectionHeader
          title="Best Hotels for Your Next Trip"
          description="Luxurious or budget-friendly hotels, villas or resorts, browse accommodations at ShareTrip that meet the need. Book Long-term or short-term accommodation from our hotel deals"
          className="max-w-2xl text-center lg:text-left"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          slidesPerView={1.5}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
          }}
          className="!pb-12 md:!pb-16"
        >
          {HOTELS.slice(0, 6).map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <HotelCard {...hotel} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestHotels;

// "use client";
// import { HOTELS } from "@/app/data";
// import React, { useRef } from "react";
// import Slider from "react-slick";
// import SectionHeader from "../shared/SectionHeader";
// import HotelCard from "./HotelCard";

// const BestHotels: React.FC = () => {
//   const sliderRef = useRef<Slider>(null);

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 1000,
//     cssEase: "cubic-bezier(0.45, 0, 0.55, 1)",
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     arrows: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1.5,
//           slidesToScroll: 1.5,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-8 sm:py-10 md:py-12 lg:py-16">
//       <div className="container">
//         <SectionHeader
//           title="Best Hotels for Your Next Trip"
//           description="Luxurious or budget-friendly hotels, villas or resorts, browse accommodations at ShareTrip that meet the need. Book Long-term or short-term accommodation from our hotel deals"
//           className="max-w-2xl text-center lg:text-left"
//         />

//         <div className="best-hotels-slider">
//           <Slider ref={sliderRef} {...settings}>
//             {HOTELS.slice(0, 6).map((hotel) => (
//               <HotelCard key={hotel.id} {...hotel} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestHotels;

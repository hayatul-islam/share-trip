import BestHotels from "@/components/home/BestHotel";
import BookingSearch from "@/components/home/BookingSearch";
import ExclusiveOffers from "@/components/home/ExclusiveOffers";
import ExploreBangladesh from "@/components/home/ExploreBangladesh";
import GrowBusiness from "@/components/home/GrowBusiness";
import { HeroBanner } from "@/components/home/HeroBanner";
import MostPopularDestinations from "@/components/home/MostPopularDestinations";
import OurTourPackages from "@/components/home/OurTourPackages";
import SearchTopAirlines from "@/components/home/SearchTopAirlines";
import TopRoutes from "@/components/home/TopRoutes";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <HeroBanner />
      <BookingSearch />
      <ExclusiveOffers />
      <ExploreBangladesh />
      <SearchTopAirlines />
      <MostPopularDestinations />
      <BestHotels />
      <OurTourPackages />
      <GrowBusiness />
      <TopRoutes />
    </div>
  );
}

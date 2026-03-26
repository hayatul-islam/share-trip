import BookingSearch from "@/components/home/BookingSearch";
import ExclusiveOffers from "@/components/home/ExclusiveOffers";
import ExploreBangladesh from "@/components/home/ExploreBangladesh";
import { HeroBanner } from "@/components/home/HeroBanner";
import { Navbar } from "@/components/shared/Navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroBanner />
      <BookingSearch />
      <ExclusiveOffers />
      <ExploreBangladesh />
    </div>
  );
}

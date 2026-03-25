import BookingSearch from "@/components/BookingSearch";
import { HeroBanner } from "@/components/HeroBanner";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroBanner />
      <BookingSearch />
    </div>
  );
}

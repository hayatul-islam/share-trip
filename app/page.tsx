import { HeroBanner } from "@/components/HeroBanner";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <HeroBanner />

      {/* <main className="max-w-5xl mx-auto px-4 sm:px-6 -mt-16 relative z-10 pb-16">
        <FlightSearch />
        <StatsBar />
      </main> */}
    </div>
  );
}

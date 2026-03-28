export function HeroBanner() {
  return (
    <div className="relative h-[280px] overflow-hidden">
      <video
        src="assets/videos/hero-bg-cover.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,43,61,0)] to-[rgb(26,43,61)]" />

      <div className="container relative h-full flex flex-col lg:justify-center text-center lg:text-left pt-8 lg:pt-0">
        <h1 className="text-[24px] md:text-[26px] md:text-[40px] text-white ">
          Welcome to <span className="font-bold">ShareTrip!</span>
        </h1>
        <p className="mt-0.5 md:mt-2 lg:mt-3 text-[14px] md:text-base text-white font-medium">
          Find Flights, Hotels, Visa &amp; Holidays
        </p>
      </div>
    </div>
  );
}

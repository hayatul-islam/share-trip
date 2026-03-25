export function HeroBanner() {
  return (
    <div className="relative h-52 sm:h-64 md:h-72 overflow-hidden">
      <video
        src="assets/videos/hero-bg-cover.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 opacity-70" />

      <div className="container relative h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24">
        <h1 className="text-2xl sm:text-3xl md:text-[40px]  text-white drop-shadow-lg">
          Welcome to <span className="font-bold">ShareTrip!</span>
        </h1>
        <p className="mt-2 text-sm sm:text-base text-white font-medium">
          Find Flights, Hotels, Visa &amp; Holidays
        </p>
      </div>
    </div>
  );
}

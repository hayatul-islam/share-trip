import ShareTripChat from "@/components/chat/ShareTripChat";
import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import type { Metadata } from "next";
import { Murecho } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";

const murecho = Murecho({
  variable: "--font-murecho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ShareTrip: Book Air Tickets, Hotels, Packages Online",
  description:
    "Bangladesh's leading online travel agency. Book air tickets, hotels, tour packages & more without any hassle at the most affordable rates with ShareTrip.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${murecho.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ShareTripChat />
        <Footer />
      </body>
    </html>
  );
}

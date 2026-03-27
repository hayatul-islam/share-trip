"use client";
import { ACCREDITATIONS, PAYMENT_METHODS } from "@/app/data";

import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import SectionHeader from "./SectionHeader";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Messenger",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.906 1.405 5.5 3.6 7.2V22l3.3-1.8c.88.245 1.814.376 2.77.376 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.1 12.4-2.6-2.8-5.1 2.8 5.6-5.9 2.6 2.8 5.1-2.8-5.6 5.9z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-white pt-16">
      <div className="container space-y-8">
        <div>
          <SectionHeader
            title="Your all-in-one Travel App"
            description="Get flights, hotels, holidays and visa assistance in just a few taps. Enjoy real-time flight updates, schedules, travel info, play games, win trip coins and much more."
            className="max-w-xl mx-auto text-center"
          />

          <div className="flex items-center justify-center gap-6 flex-wrap px-5">
            <Image
              src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/App-Store.svg"
              alt="Download on the App Store"
              width={160}
              height={52}
            />

            <Image
              src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/QR-Code.svg"
              alt="Scan QR to download"
              width={84}
              height={84}
            />

            <Image
              src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/Play-Store.svg"
              alt="Get it on Google Play"
              width={160}
              height={52}
            />
          </div>

          <div className="mt-6 relative flex justify-center">
            <Image
              src="/assets/images/app-screen.png"
              alt="ShareTrip App Preview"
              width={960}
              height={540}
              className="w-full max-w-5xl object-contain drop-shadow-2xl"
            />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 bg-white/70 blur-sm rounded-full pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-8 gap-4 pt-6">
          <div className="col-span-2">
            <Logo />
            <div className="space-y-1 text-sm text-gray-700 mt-4">
              <p>MoCAT Certificate No.: 0012432</p>
              <p>IATA Certificate No.: 42340012</p>
              <p>DBID License No.: 402489389</p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm text-gray-700">
              {[
                "About Us",
                "Terms & Conditions",
                "FAQ",
                "Hotel Sitemap",
                "Medical Tourism",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm text-gray-700">
              {["Flight", "Hotel", "Holiday", "Visa"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Useful Links</h3>
            <ul className="space-y-2.5 text-sm text-gray-700">
              {[
                "Travel Guide",
                "Travel Advisory",
                "Visa Guide",
                "Visa Application",
                "ST Pay",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Promotions */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Promotions</h3>
            <ul className="space-y-2.5 text-sm text-gray-700">
              {["News", "Promotions", "VAS"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* We Accept */}
          <div className="col-span-2">
            <h3 className="font-medium text-gray-800 mb-4">We accept</h3>
            <div className="grid grid-cols-5 gap-2">
              {PAYMENT_METHODS.map((src, i) => (
                <div key={i}>
                  <Image src={src} alt="payment" width={100} height={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Middle Section - Contact & Offices */}
        <div className="grid grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                Email:{" "}
                <Link
                  href="mailto:ask@sharetrip.net"
                  className="text-primary hover:underline"
                >
                  ask@sharetrip.net
                </Link>
              </p>
              <p>
                Hotline:{" "}
                <Link href="tel:13701" className="text-primary hover:underline">
                  13701
                </Link>
              </p>
              <p>
                WhatsApp:{" "}
                <Link href="#" className="text-primary hover:underline">
                  Message us
                </Link>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">
              {SOCIAL_LINKS.map(({ icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  className=" flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-200"
                  aria-label={label}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* ShareTrip Lounge */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">
              ShareTrip Lounge (Dhaka)
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              3rd Floor, House 1,
              <br />
              Road 17, Block C, Banani,
              <br />
              Dhaka 1213, Bangladesh
            </p>
            <Link
              href="#"
              className="inline-flex font-medium items-center gap-1.5 mt-3 text-sm text-gray-800 hover:text-primary transition-colors"
            >
              <MapPin size={20} className="text-yellow" />
              View Map
            </Link>
          </div>

          {/* Chattogram Office */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">
              Chattogram Office
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              BM Height 5th Floor,
              <br />
              318 Sheikh Mujib Road,
              <br />
              Chattogram 4100, Bangladesh
            </p>
            <Link
              href="#"
              className="inline-flex font-medium items-center gap-1.5 mt-3 text-sm text-gray-800 hover:text-primary transition-colors"
            >
              <MapPin size={20} className="text-yellow" />
              View Map
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Accreditation Section */}
        <div className="flex justify-between gap-10">
          {ACCREDITATIONS.map(({ label, items }) => (
            <div key={label}>
              <p className="text-xs text-gray-800 font-medium mb-2">{label}</p>
              <div className="flex items-center gap-3">
                {items.map(({ src, alt, width, height }) => (
                  <Image
                    key={alt}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="object-contain h-7 w-auto"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Bottom Bar */}
        <div className="pb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-5 text-sm text-gray-700">
            {[
              "Support Center",
              "Payment Security",
              "Privacy Policy",
              "EMI",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-700">
            Copyright © 2026.{" "}
            <Link href="#" className="text-primary hover:underline">
              ShareTrip
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Simple SVG social icons
const SocialIcon: React.FC<{ label: string }> = ({ label }) => {
  const icons: Record<string, React.ReactNode> = {
    Facebook: (
      <svg width="1" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    Messenger: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.906 1.405 5.5 3.6 7.2V22l3.3-1.8c.88.245 1.814.376 2.77.376 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.1 12.4l-2.6-2.8-5.1 2.8 5.6-5.9 2.6 2.8 5.1-2.8-5.6 5.9z" />
      </svg>
    ),
    Twitter: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    Instagram: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
    YouTube: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
    LinkedIn: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  };
  return <>{icons[label] ?? null}</>;
};

export default Footer;

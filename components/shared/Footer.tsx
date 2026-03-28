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
    <footer className="bg-gradient-to-b from-background to-white pt-8 sm:pt-10 md:pt-12 lg:pt-16">
      <div className="container space-y-8 px-4 sm:px-6 lg:px-8">
        {/* App Download Section */}
        <div>
          <SectionHeader
            title="Your all-in-one Travel App"
            description="Get flights, hotels, holidays and visa assistance in just a few taps. Enjoy real-time flight updates, schedules, travel info, play games, win trip coins and much more."
            className="max-w-xl mx-auto text-center"
          />

          <div className="flex items-center justify-center gap-3 md:gap-6">
            <Image
              src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/App-Store.svg"
              alt="Download on the App Store"
              width={140}
              height={46}
              className="w-32 sm:w-40 h-auto"
            />
            <Image
              src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/QR-Code.svg"
              alt="Scan QR to download"
              width={84}
              height={84}
              className=" w-16 sm:w-20 h-auto"
            />
            <Image
              src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/Play-Store.svg"
              alt="Get it on Google Play"
              width={140}
              height={46}
              className="w-32 sm:w-40 h-auto"
            />
          </div>

          <div className="mt-3 md:mt-6 relative  justify-center">
            <Image
              src="/assets/images/app-screen.png"
              alt="ShareTrip App Preview"
              width={960}
              height={540}
              className="w-full max-w-5xl object-contain drop-shadow-2xl"
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full h-6 md:h-20 bg-white/90 blur-lg  pointer-events-none" />
          </div>
        </div>

        {/* Links & Payment Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 pt-6">
          {/* Brand & Certificates */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <Logo />
            <div className="space-y-1 text-sm text-gray-700 mt-4">
              <p>MoCAT Certificate No.: 0012432</p>
              <p>IATA Certificate No.: 42340012</p>
              <p>DBID License No.: 402489389</p>
            </div>
          </div>

          {/* Explore */}
          <div className="col-span-1">
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
          <div className="col-span-1">
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
          <div className="col-span-1">
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
          <div className="col-span-1">
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
          <div className="hidden md:block col-span-2 sm:col-span-4 lg:col-span-2">
            <h3 className="font-medium text-gray-800 mb-4">We accept</h3>
            <div className="grid grid-cols-5 gap-2">
              {PAYMENT_METHODS.map((src, i) => (
                <div key={i}>
                  <Image
                    src={src}
                    alt="payment"
                    width={100}
                    height={20}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Contact & Offices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
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
            <div className="flex justify-center md:justify-start items-center gap-3 mt-5 flex-wrap">
              {SOCIAL_LINKS.map(({ icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  className="flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-200"
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

        <div className="border-t border-gray-100" />

        {/* Accreditation Section */}
        <div className="flex flex-wrap gap-6 sm:gap-8 justify-start sm:justify-between">
          {ACCREDITATIONS.map(({ label, items }) => (
            <div key={label}>
              <p className="text-xs text-gray-800 font-medium mb-2">{label}</p>
              <div className="flex items-center gap-3 flex-wrap">
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

        <div className="border-t border-gray-100" />

        {/* Bottom Bar */}
        <div className="pb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-sm text-gray-700">
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
          <p className="text-sm text-gray-700 text-center sm:text-right">
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

export default Footer;

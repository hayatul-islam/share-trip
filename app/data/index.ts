import type { Airport, ServiceTab } from "@app/types";
import { Hotel, Plane } from "lucide-react";
import { FlightLeg, TripType } from "../types";

export const NAV_LINKS = [
  {
    name: "Flight",
    link: "#",
    type: "link",
  },
  {
    name: "Hotel",
    link: "#",
    type: "link",
  },
  {
    name: "Shop",
    link: "#",
    type: "link",
  },
  {
    name: "Holiday",
    link: "#",
    type: "link",
  },
  {
    name: "Gift Card",
    link: "#",
    type: "link",
  },
  {
    name: "Visa",
    link: "#",
    type: "dropdown",
    menu: [
      { name: "Option 1", link: "#" },
      { name: "Option 2", link: "#" },
    ],
  },
  {
    name: "Transport",
    link: "#",
    type: "dropdown",
    menu: [
      { name: "Option 1", link: "#" },
      { name: "Option 2", link: "#" },
    ],
  },
  {
    name: "Others",
    link: "#",
    type: "dropdown",
    menu: [
      { name: "Option 1", link: "#" },
      { name: "Option 2", link: "#" },
    ],
  },
] as const;

export const SERVICE_TABS: ServiceTab[] = [
  { value: "flight", label: "Flight", icon: Plane },
  { value: "hotel", label: "Hotel", icon: Hotel },
  // { value: "shop", label: "Shop", icon: ShoppingBag },
  // { value: "holiday", label: "Holiday", icon: Palmtree },
  // { value: "visa", label: "Visa", icon: CreditCard },
  // { value: "medical", label: "Medical", icon: Heart },
  // { value: "cars", label: "Cars", icon: Car },
  // { value: "esim", label: "eSIM", icon: Wifi },
  // { value: "recharge", label: "Recharge", icon: Smartphone },
  // { value: "pay-bill", label: "Pay Bill", icon: Receipt },
];

export const AIRPORTS: Airport[] = [
  {
    code: "DAC",
    city: "Dhaka",
    country: "Bangladesh",
    fullName: "Hazrat Shahjalal International Airport",
  },
  {
    code: "CXB",
    city: "Cox's Bazar",
    country: "Bangladesh",
    fullName: "Cox's Bazar Airport (CXB)",
  },
  {
    code: "JFK",
    city: "New York",
    country: "United States",
    fullName: "John F Kennedy International Airport",
  },
  {
    code: "DXB",
    city: "Dubai",
    country: "UAE",
    fullName: "Dubai International Airport",
  },
  {
    code: "LHR",
    city: "London",
    country: "United Kingdom",
    fullName: "Heathrow Airport (LHR)",
  },
  {
    code: "SIN",
    city: "Singapore",
    country: "Singapore",
    fullName: "Changi Airport (SIN)",
  },
  {
    code: "BKK",
    city: "Bangkok",
    country: "Thailand",
    fullName: "Suvarnabhumi Airport (BKK)",
  },
];

export const INITIAL_LEGS: FlightLeg[] = [
  {
    id: "leg-1",
    origin: AIRPORTS[0],
    destination: AIRPORTS[1],
    date: new Date(2026, 2, 26),
  },
  {
    id: "leg-2",
    origin: AIRPORTS[1],
    destination: AIRPORTS[2],
    date: new Date(2026, 2, 28),
  },
];

export const TRIP_TABS: { value: TripType; label: string }[] = [
  { value: "one-way", label: "One Way" },
  { value: "round-trip", label: "Round Trip" },
  { value: "multi-city", label: "Multi City" },
];

import type { Airport, CabinClass, StatBadge } from "@/types";
import {
  Car,
  FileText,
  HeartPulse,
  Hotel,
  Palmtree,
  Plane,
  Receipt,
  RefreshCcw,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

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

export const BOOKING_TABS = [
  { label: "Flight", icon: Plane },
  { label: "Hotel", icon: Hotel },
  { label: "Shop", icon: ShoppingBag },
  { label: "Holiday", icon: Palmtree },
  { label: "Visa", icon: FileText },
  { label: "Medical", icon: HeartPulse },
  { label: "Cars", icon: Car, badge: true },
  { label: "eSIM", icon: Smartphone },
  { label: "Recharge", icon: RefreshCcw },
  { label: "Pay Bill", icon: Receipt },
] as const;

export const AIRPORTS: Record<string, Airport> = {
  DAC: {
    name: "Dhaka",
    sub: "Bangladesh, Hazrat Shahjalal International Airport",
  },
  CXB: { name: "Cox's Bazar", sub: "Bangladesh, Cox's Bazar Airport (CXB)" },
  JFK: {
    name: "New York",
    sub: "United States, John F Kennedy International Airport",
  },
  CGP: {
    name: "Chittagong",
    sub: "Bangladesh, Shah Amanat International Airport",
  },
  DXB: {
    name: "Dubai",
    sub: "United Arab Emirates, Dubai International Airport",
  },
  LHR: { name: "London", sub: "United Kingdom, Heathrow Airport" },
};

export const CABIN_CLASSES: CabinClass[] = ["Economy", "Business", "First"];

export const FARE_TYPES = [
  { value: "regular", label: "Regular Fare" },
  { value: "student", label: "Student Fare" },
  { value: "umrah", label: "Umrah Fare" },
] as const;

export const STATS: StatBadge[] = [
  { label: "Flights Booked", value: "10M+" },
  { label: "Happy Travellers", value: "2M+" },
  { label: "Routes Available", value: "500+" },
  { label: "Airlines Partner", value: "40+" },
];

export const TRAVELLER_OPTIONS = [1, 2, 3, 4, 5, 6] as const;

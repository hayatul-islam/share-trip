import { Baby, Hotel, PersonStanding, Plane, User, Users } from "lucide-react";
import {
  Airport,
  CabinClass,
  FareOption,
  FlightLeg,
  ServiceTab,
  TripType,
} from "../types";

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

export const CABIN_CLASSES: CabinClass[] = [
  "Economy",
  "Premium Economy",
  "Business",
  "First Class",
];

export const TRAVELLER_CONFIG = [
  {
    key: "adults" as const,
    label: "Adults",
    sub: "12 years & above",
    icon: User,
  },
  {
    key: "children" as const,
    label: "Children",
    sub: "From 5 to under 12",
    icon: Users,
  },
  {
    key: "kids" as const,
    label: "Kids",
    sub: "From 2 to under 5",
    icon: PersonStanding,
  },
  {
    key: "infants" as const,
    label: "Infants",
    sub: "Under 2 years",
    icon: Baby,
  },
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export const FARE_OPTIONS: FareOption[] = [
  { label: "Regular Fare", value: "regular" },
  { label: "Student Fare", value: "student" },
  { label: "Umrah Fare", value: "umrah" },
];

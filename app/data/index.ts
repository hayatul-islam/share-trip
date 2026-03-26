import { Baby, Hotel, PersonStanding, Plane, User, Users } from "lucide-react";
import {
  Airport,
  CabinClass,
  FareOption,
  FlightLeg,
  RoomConfig,
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

export const INITIAL_ROOMS: RoomConfig[] = [
  { id: 1, adults: 2, children: 0, childAges: [] },
];

// OFFERS
export const OFFER_SLIDES = [
  {
    id: 1,
    image: "assets/images/offers/Student-fare-home-page-thumbnail.png",
    title: "Bkash Payment Offer",
    subtitle: "Save on domestic flights with Bkash payment only",
    tag: "PAYMENT OFFER",
  },
  {
    id: 2,
    image:
      "assets/images/offers/1763351470_Mega_Monday_Campaign_home_thumb.png",

    title: "Global Medical Excellence",
    subtitle: "World-class healthcare at your fingertips",
    tag: "HEALTH",
  },
  {
    id: 3,
    image: "assets/images/offers/home-thumbnail.png",
    title: "Bkash Payment Offer",
    subtitle: "Save on domestic flights with Bkash payment only",
    tag: "PAYMENT OFFER",
  },
  {
    id: 4,
    image:
      "assets/images/offers/1773049312_EBL_X_ShareTrip_Flight_Campaign__March_2026_home_page.png",
    title: "Special Student Fare",
    subtitle: "Enjoy affordable flights with extra baggage allowance",
    tag: "STUDENT DEAL",
  },
  {
    id: 5,
    image: "assets/images/offers/B2C_Homepage_Thumbnail.jpg",
    title: "Explore Nature",
    subtitle: "Discover hidden trails and breathtaking landscapes",
    tag: "ADVENTURE",
  },
];

export const AD_SLIDES = [
  {
    id: 1,
    image:
      "assets/images/offers/1760592356_Superbrands Award Post for ST AD Home Page web banner.png",
  },
  {
    id: 2,
    image:
      "assets/images/offers/1773943457_Requirement_for_ST_Ad__February_2026_2200_X_280.png",
  },
];

// EXPLORE BANGLADESH
export const DESTINATIONS = [
  {
    id: 1,
    name: "Chittagong",
    hotels: 36,
    image: "/assets/images/explore/8gohsAnVmFQmPRtUKSrdpIMi1SlE16.gif",
  },
  {
    id: 2,
    name: "Dhaka",
    hotels: 43,
    image: "/assets/images/explore/XjOR77hq4zWYqqMRK8yI2uRfemtbgg.png",
  },
  {
    id: 3,
    name: "Sreemangal",
    hotels: 6,
    image: "/assets/images/explore/wcmMawEQourNqilRyE2GOHHv0tYzVP.png",
  },
  {
    id: 4,
    name: "Gazipur",
    hotels: 12,
    image: "/assets/images/explore/TdXdFC08piA8Csi3X8qqreie9UUzif.png",
  },
  {
    id: 5,
    name: "Cox's Bazar",
    hotels: 58,
    image: "/assets/images/explore/Cox's_Bazar.jpg",
  },
  {
    id: 6,
    name: "Sylhet",
    hotels: 21,
    image: "/assets/images/explore/AzOSQlJV2UD8QhKVOKLteYWlrI9brl.png",
  },
];

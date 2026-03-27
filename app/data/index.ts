import { Baby, Hotel, PersonStanding, Plane, User, Users } from "lucide-react";
import {
  Airport,
  CabinClass,
  ChatArticle,
  FareOption,
  FlightLeg,
  RoomConfig,
  Route,
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
    image: "/assets/images/offers/Student-fare-home-page-thumbnail.png",
    title: "Bkash Payment Offer",
    subtitle: "Save on domestic flights with Bkash payment only",
    tag: "PAYMENT OFFER",
  },
  {
    id: 2,
    image:
      "/assets/images/offers/1763351470_Mega_Monday_Campaign_home_thumb.png",

    title: "Global Medical Excellence",
    subtitle: "World-class healthcare at your fingertips",
    tag: "HEALTH",
  },
  {
    id: 3,
    image: "/assets/images/offers/home-thumbnail.png",
    title: "Bkash Payment Offer",
    subtitle: "Save on domestic flights with Bkash payment only",
    tag: "PAYMENT OFFER",
  },
  {
    id: 4,
    image:
      "/assets/images/offers/1773049312_EBL_X_ShareTrip_Flight_Campaign__March_2026_home_page.png",
    title: "Special Student Fare",
    subtitle: "Enjoy affordable flights with extra baggage allowance",
    tag: "STUDENT DEAL",
  },
  {
    id: 5,
    image: "/assets/images/offers/B2C_Homepage_Thumbnail.jpg",
    title: "Explore Nature",
    subtitle: "Discover hidden trails and breathtaking landscapes",
    tag: "ADVENTURE",
  },
];

export const AD_SLIDES = [
  {
    id: 1,
    image:
      "/assets/images/offers/1760592356_Superbrands Award Post for ST AD Home Page web banner.png",
  },
  {
    id: 2,
    image:
      "/assets/images/offers/1773943457_Requirement_for_ST_Ad__February_2026_2200_X_280.png",
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

// SEARCH TOP AIRLINES
export const AIRLINES = [
  {
    id: 1,
    name: "Biman Bangladesh Airlines",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BG.png",
  },
  {
    id: 2,
    name: "US-Bangla Airlines",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/BS.png",
  },
  {
    id: 3,
    name: "NOVOAIR",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/VQ.png",
  },
  {
    id: 4,
    name: "Air Astra",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/2A.png",
  },
  {
    id: 5,
    name: "Emirates",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/EK.png",
  },
  {
    id: 6,
    name: "Singapore Airlines",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/SQ.png",
  },
  {
    id: 7,
    name: "Malaysia Airlines",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/MH.png",
  },
  {
    id: 8,
    name: "Qatar Airways",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/QR.png",
  },
  {
    id: 9,
    name: "Saudia Airlines",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/SV.png",
  },
  {
    id: 10,
    name: "Air India",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/AI.jpeg",
  },
  {
    id: 11,
    name: "Gulf Air",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/GF.jpg",
  },
  {
    id: 12,
    name: "Turkish Airlines",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/TK.png",
  },
  {
    id: 13,
    name: "Thai Airways International",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/TG.png",
  },
  {
    id: 14,
    name: "Cathay Pacific Airways",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/CX.png",
  },
  {
    id: 15,
    name: "China Southern Airlines",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/CZ.png",
  },
  {
    id: 16,
    name: "SriLankan Airlines",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/UL.png",
  },
  {
    id: 17,
    name: "AirAsia",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/AK.png",
  },
  {
    id: 18,
    name: "Batik Air",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/ID.png",
  },
  {
    id: 19,
    name: "IndiGo",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/6E.png",
  },
  {
    id: 20,
    name: "Air Arabia",
    logo: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/G9.png",
  },
];

// MOST POPULAR DESTINATION
export const POPULAR_DESTINATIONS = [
  {
    id: 1,
    name: "Nepal",
    hotels: 1240,
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=700&fit=crop",
  },
  {
    id: 2,
    name: "Bangkok",
    hotels: 4351,
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=500&h=700&fit=crop",
  },
  {
    id: 3,
    name: "Singapore",
    hotels: 813,
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&h=700&fit=crop",
  },
  {
    id: 4,
    name: "Kuala Lumpur",
    hotels: 2464,
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&h=700&fit=crop",
  },
  {
    id: 5,
    name: "Maafushi",
    hotels: 36,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&h=700&fit=crop",
  },
];

export const HOTELS = [
  {
    id: 1,
    name: "Grand Sultan Tea Resort & Golf",
    rating: 5,
    reviews: 378,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=450&fit=crop",
  },
  {
    id: 2,
    name: "Ocean Paradise Hotel & Resort",
    rating: 5,
    reviews: 345,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=450&fit=crop",
  },
  {
    id: 3,
    name: "Dream Square Resort",
    rating: 5,
    reviews: 324,
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=450&fit=crop",
  },
  {
    id: 4,
    name: "Sea Pearl Beach Resort & Spa Cox's Bazar",
    rating: 5,
    reviews: 431,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=450&fit=crop",
  },
  {
    id: 5,
    name: "Royal Tulip Sea Pearl Beach Resort",
    rating: 5,
    reviews: 290,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=450&fit=crop",
  },
  {
    id: 6,
    name: "The Peninsula Chittagong",
    rating: 5,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=450&fit=crop",
  },
  {
    id: 7,
    name: "Amari Dhaka",
    rating: 5,
    reviews: 267,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=450&fit=crop",
  },
  {
    id: 8,
    name: "Le Méridien Dhaka",
    rating: 5,
    reviews: 489,
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&h=450&fit=crop",
  },
  {
    id: 9,
    name: "Radisson Blu Dhaka Water Garden",
    rating: 5,
    reviews: 401,
    image:
      "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&h=450&fit=crop",
  },
  {
    id: 10,
    name: "Six Seasons Hotel Gulshan",
    rating: 4,
    reviews: 215,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=450&fit=crop",
  },
  {
    id: 11,
    name: "Rose View Hotel Sylhet",
    rating: 5,
    reviews: 183,
    image:
      "https://images.unsplash.com/photo-1533395427226-788cee25cc7b?w=600&h=450&fit=crop",
  },
  {
    id: 12,
    name: "Long Beach Hotel Cox's Bazar",
    rating: 5,
    reviews: 356,
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&h=450&fit=crop",
  },
];

export const ROUTES: Route[] = [
  // Domestic
  {
    category: "domestic",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Chittagong",
    toAirport: "Shah Amanat Int...",
  },
  {
    category: "domestic",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Cox's Bazar",
    toAirport: "Cox's Bazar Airport",
  },
  {
    category: "domestic",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Sylhet",
    toAirport: "Osmani International",
  },
  {
    category: "domestic",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Jessore",
    toAirport: "Jessore Airport",
  },
  {
    category: "domestic",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Barisal",
    toAirport: "Barisal Airport",
  },
  {
    category: "domestic",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Rajshahi",
    toAirport: "Shah Makhdum Airport",
  },

  // International
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Agartala",
    toAirport: "Agartala Airport",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Hyderabad",
    toAirport: "Hyderabad Intern...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Madinah",
    toAirport: "Prince Mohamm...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Colombo",
    toAirport: "Bandaranaike Int...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Neryungri",
    toAirport: "Chulman Airport",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Bangkok",
    toAirport: "Suvarnabhumi Ai...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Delhi",
    toAirport: "Indira Gandhi Int...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Chennai",
    toAirport: "Chennai Internati...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Kuala Lumpur",
    toAirport: "Kuala Lumpur Int...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "London",
    toAirport: "London Heathro...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Kathmandu",
    toAirport: "Tribhuvan Intern...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Kolkata",
    toAirport: "Netaji Subhash C...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Melbourne",
    toAirport: "Melbourne Intern...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Bangalore",
    toAirport: "Kempegowda Int...",
  },
  {
    category: "international",
    from: "Dhaka",
    fromAirport: "Hazrat Shahjalal I...",
    to: "Washington",
    toAirport: "Washington Dull...",
  },
];

export const PAYMENT_METHODS = [
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/stPay.svg",
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/amexCard.svg",
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/visaCard.svg",
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/masterCard.svg",
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/bkash.svg",
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/dbbl.svg",
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/nagad.svg",
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/upay.svg",
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/tap.svg",
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/ok.svg",
  "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/we-accept/dinners-club.svg",
];

export const ACCREDITATIONS = [
  {
    label: "Accredited Member",
    items: [
      {
        src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/accredited-member/basis.svg",
        alt: "BASIS",
        width: 60,
        height: 28,
      },
      {
        src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/accredited-member/e-cab.svg",
        alt: "e-CAB",
        width: 60,
        height: 28,
      },
      {
        src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/accredited-member/pata.svg",
        alt: "PATA",
        width: 60,
        height: 28,
      },
    ],
  },
  {
    label: "Verified by",
    items: [
      {
        src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/verified-by/comodo.svg",
        alt: "Comodo",
        width: 80,
        height: 32,
      },
    ],
  },
  {
    label: "Our Partners",
    items: [
      {
        src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/our-partners/google.svg",
        alt: "Google",
        width: 80,
        height: 24,
      },
    ],
  },

  {
    label: "Authorised by",
    items: [
      {
        src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/authorised-by/iata.svg",
        alt: "IATA",
        width: 70,
        height: 32,
      },
    ],
  },
  {
    label: "Registered at",
    items: [
      {
        src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/registered-at/dun.svg",
        alt: "IATA",
        width: 70,
        height: 32,
      },
    ],
  },
  {
    label: "Certified By",
    items: [
      {
        src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/certified-by/iso-certification.svg",
        alt: "Dun & Bradstreet",
        width: 70,
        height: 32,
      },
    ],
  },
  {
    label: "Awarded by",
    items: [
      {
        src: "https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/awarded-by/superbrandlogo.svg",
        alt: "Superbrands",
        width: 70,
        height: 32,
      },
    ],
  },
];

export const CHAT_ARTICLES: ChatArticle[] = [
  {
    id: "1",
    title: "How to open ST Pay account",
    snippet:
      "Getting Started with ST Pay: Registration Process Before you unlock the convenience and security of...",
    content:
      "ST Pay is ShareTrip's integrated payment solution. To open an account, download the ShareTrip app, go to ST Pay section, and complete the KYC verification process with your NID.",
    updatedAt: "1/20/2026",
  },
  {
    id: "2",
    title: "How to book hotels from ShareTrip app?",
    snippet:
      "Planning a trip to Bangladesh? Book your hotel stay with ease on the user-friendly ShareTrip app! This...",
    content:
      "Open the ShareTrip app, tap on Hotels, select your destination, dates, and number of guests, then browse available properties and complete booking with ST Pay or card.",
    updatedAt: "1/22/2026",
  },
  {
    id: "3",
    title: "What are Stellar Cards?",
    snippet:
      "Stellar Cards are co-branded by ShareTrip, Eastern Bank PLC (EBL), and Visa. This premium series in-...",
    content:
      "Stellar Cards are premium co-branded credit cards by ShareTrip, Eastern Bank PLC (EBL), and Visa, offering exclusive travel rewards, lounge access, and discounts on bookings.",
    updatedAt: "1/15/2026",
  },
  {
    id: "4",
    title: "What is ShareTrip Cars?",
    snippet:
      "Book cars and transfers in Bangladesh and abroad with ShareTrip Cars. Perfect for airport pickups, city...",
    content:
      "ShareTrip Cars is a car booking service by ShareTrip that allows you to book cars and car transfers locally in Bangladesh or internationally, for city rides, airport pickups, long-distance trips, and more.",
    updatedAt: "1/25/2026",
  },
  {
    id: "5",
    title: "What is the difference between a sticker visa and an e-visa?",
    snippet:
      "A sticker visa requires you to submit your physical passport and supporting documents to the embass...",
    content:
      "A sticker visa requires physical passport submission to the embassy. An e-visa is processed entirely online and delivered digitally, making it faster and more convenient for eligible destinations.",
    updatedAt: "1/18/2026",
  },
  {
    id: "6",
    title: "What is ST Convenience Fee?",
    snippet:
      "ShareTrip convenience fee, ShareTrip booking fee explained, VAT on ShareTrip booking, Bangladesh...",
    content:
      "The ST Convenience Fee is a small processing charge applied to bookings made via the ShareTrip platform. It covers payment gateway, VAT, and service handling costs.",
    updatedAt: "1/10/2026",
  },
  {
    id: "7",
    title: "What is the process of cancelling a purchased ticket on ShareTrip?",
    snippet:
      "To cancel a ticket, go to My Trips in the app, select the booking, and tap Cancel. Refunds are processed according to airline/hotel policy...",
    content:
      "To cancel a ticket on ShareTrip, navigate to My Trips, select the relevant booking, and choose Cancel. Refunds follow the airline or hotel cancellation policy and are credited back within 7–14 business days.",
    updatedAt: "1/12/2026",
  },
];

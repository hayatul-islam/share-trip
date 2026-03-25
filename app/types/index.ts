export type ServiceType =
  | "flight"
  | "hotel"
  | "shop"
  | "holiday"
  | "visa"
  | "medical"
  | "cars"
  | "esim"
  | "recharge"
  | "pay-bill";

export type TripType = "one-way" | "round-trip" | "multi-city";

export type FareType = "regular" | "student" | "umrah";

export type CabinClass =
  | "Economy"
  | "Premium Economy"
  | "Business"
  | "First Class";

export interface Airport {
  code: string;
  city: string;
  country: string;
  fullName: string;
}
export interface FlightLeg {
  id: string;
  origin: Airport;
  destination: Airport;
  date: Date;
}

export interface ServiceTab {
  value: ServiceType;
  label: string;
  icon: string;
}

export interface TravellerCounts {
  adults: number;
  children: number;
  kids: number;
  infants: number;
}

export type TripType = "one-way" | "round-trip" | "multi-city";
export type FareType = "regular" | "student" | "umrah";
export type CabinClass = "Economy" | "Business" | "First";

export interface FlightLeg {
  id: string;
  from: string;
  fromCode: string;
  fromSub: string;
  to: string;
  toCode: string;
  toSub: string;
  date: Date | undefined;
}

export interface Airport {
  name: string;
  sub: string;
}

export interface StatBadge {
  label: string;
  value: string;
}

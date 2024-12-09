export type TimeOfDay = 'morning' | 'afternoon' | 'evening';

export interface Location {
  city?: string;
  region?: string;
  countryCode?: string;
  timezone?: string;
}

export interface GreetingProps {
  location?: Location;
  onLocationChange?: (location: Location) => void;
}
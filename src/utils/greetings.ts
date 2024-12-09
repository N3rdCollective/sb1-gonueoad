import { TimeOfDay, Location } from '../types';

const greetings: Record<TimeOfDay, string[]> = {
  morning: [
    "Yo, rise and shine",
    "Good lookin' out",
    "Early bird flow",
    "Mornin' vibes"
  ],
  afternoon: [
    "Keepin' it real",
    "'Sup fam",
    "Afternoon fresh",
    "Straight vibin'"
  ],
  evening: [
    "Evening smooth",
    "Night wave",
    "Chillin' out",
    "Late night flex"
  ]
};

const regionalSlang: Record<string, string[]> = {
  'US-NY': ["What up, son", "Word up", "Deadass"],
  'US-CA': ["What it do", "That's what's up", "For real though"],
  'GB-LDN': ["Wagwan", "Safe", "Peak times"],
  'default': ["What's good", "Hey there", "Welcome"]
};

export const getTimeOfDay = (): TimeOfDay => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  return 'evening';
};

export const getRandomGreeting = (timeOfDay: TimeOfDay, location?: Location): string => {
  const baseGreeting = greetings[timeOfDay][Math.floor(Math.random() * greetings[timeOfDay].length)];
  const slang = location?.region 
    ? regionalSlang[`${location.countryCode}-${location.region}`] || regionalSlang.default
    : regionalSlang.default;
  const randomSlang = slang[Math.floor(Math.random() * slang.length)];
  
  return `${randomSlang}, ${location?.city || 'fam'}! ${baseGreeting}!`;
};
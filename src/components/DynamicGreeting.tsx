import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { getTimeOfDay, getRandomGreeting } from '../utils/greetings';
import { useLocation } from '../hooks/useLocation';
import { Location } from '../types';

export function DynamicGreeting() {
  const { location, loading } = useLocation();
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    if (!loading) {
      const timeOfDay = getTimeOfDay();
      const newGreeting = getRandomGreeting(timeOfDay, location);
      setGreeting(newGreeting);
    }
  }, [loading, location]);

  if (loading) {
    return <div className="h-8 bg-secondary-light animate-pulse rounded" />;
  }

  return (
    <div className="flex items-center justify-center gap-2 text-xl md:text-2xl font-bold text-primary mb-6">
      <MapPin className="w-6 h-6" />
      <span>{greeting}</span>
    </div>
  );
}
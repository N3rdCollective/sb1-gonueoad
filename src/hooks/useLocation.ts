import { useState, useEffect } from 'react';
import { Location } from '../types';

export function useLocation() {
  const [location, setLocation] = useState<Location | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Failed to fetch location');
        
        const data = await response.json();
        setLocation({
          city: data.city,
          region: data.region_code,
          countryCode: data.country_code,
          timezone: data.timezone
        });
      } catch (err) {
        setError('Unable to determine location');
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return { location, loading, error };
}
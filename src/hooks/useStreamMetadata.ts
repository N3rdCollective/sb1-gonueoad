import { useState, useEffect } from 'react';

interface StreamMetadata {
  title: string;
  artist: string;
  artwork: string;
  isLoading: boolean;
  error: string | null;
}

export function useStreamMetadata(streamUrl: string) {
  const [metadata, setMetadata] = useState<StreamMetadata>({
    title: '',
    artist: '',
    artwork: '',
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch('https://public.radio.co/stations/s1a36378a0/status');
        if (!response.ok) throw new Error('Failed to fetch metadata');
        
        const data = await response.json();
        if (data.current_track) {
          const [artist, title] = data.current_track.title.split(' - ').map(s => s?.trim());
          setMetadata({
            title: title || data.current_track.title,
            artist: artist || 'Unknown Artist',
            artwork: data.current_track.artwork_url_large || '',
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        setMetadata(prev => ({
          ...prev,
          isLoading: false,
          error: 'Unable to load track information',
        }));
      }
    };

    fetchMetadata();
    const interval = setInterval(fetchMetadata, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [streamUrl]);

  return metadata;
}
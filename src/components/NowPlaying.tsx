import React from 'react';
import { Radio } from 'lucide-react';
import { useStreamMetadata } from '../hooks/useStreamMetadata';

interface NowPlayingProps {
  streamUrl: string;
}

export function NowPlaying({ streamUrl }: NowPlayingProps) {
  const { title, artist, artwork, isLoading, error } = useStreamMetadata(streamUrl);

  if (error) {
    return (
      <div className="flex items-center gap-3 bg-secondary rounded-lg p-3 border border-neutral-dark">
        <Radio className="w-5 h-5 text-primary" />
        <div>
          <p className="text-sm font-medium text-primary">Rappin' Lounge Radio</p>
          <p className="text-xs text-neutral-light">Live Stream</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-secondary rounded-lg p-3 border border-neutral-dark">
      {artwork && (
        <img
          src={artwork}
          alt="Album Art"
          className="w-5 h-5 rounded object-cover"
          onError={(e) => {
            e.currentTarget.src = '/default-album.jpg';
          }}
        />
      )}
      <div>
        <p className="text-sm font-medium text-primary">
          {isLoading ? 'Loading...' : title}
        </p>
        <p className="text-xs text-neutral-light">
          {isLoading ? 'Please wait' : artist}
        </p>
      </div>
    </div>
  );
}
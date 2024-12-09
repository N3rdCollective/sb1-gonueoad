import React from 'react';
import { Music2 } from 'lucide-react';

interface PlayerArtworkProps {
  artwork?: string;
  title?: string;
  artist?: string;
}

export function PlayerArtwork({ artwork, title, artist }: PlayerArtworkProps) {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 flex-shrink-0 rounded-2xl overflow-hidden">
      {artwork ? (
        <img
          src={artwork}
          alt={`${title} by ${artist}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '';
            e.currentTarget.className = 'hidden';
          }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
          <Music2 className="w-24 h-24 text-neutral-600" />
        </div>
      )}
      
      {/* Live Indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-white/90">LIVE</span>
      </div>
    </div>
  );
}
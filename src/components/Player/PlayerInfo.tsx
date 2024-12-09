import React from 'react';

interface PlayerInfoProps {
  title: string;
  artist: string;
  isLoading: boolean;
}

export function PlayerInfo({ title, artist, isLoading }: PlayerInfoProps) {
  return (
    <div className="flex flex-col items-center md:items-start flex-grow w-full">
      <div className="text-center md:text-left w-full">
        <h3 className="text-sm font-medium text-neutral-400 mb-2">NOW PLAYING ON</h3>
        <h2 className="text-2xl font-bold text-white mb-2">
          Rappin' Lounge Radio
        </h2>
        <div className="space-y-1">
          <p className="text-xl font-semibold text-white">
            {isLoading ? 'Loading...' : title || 'Live Stream'}
          </p>
          <p className="text-base text-neutral-400">
            {isLoading ? 'Please wait' : artist || 'Unknown Artist'}
          </p>
        </div>
      </div>
    </div>
  );
}
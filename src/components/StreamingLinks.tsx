import React from 'react';
import { PlatformLink } from './PlatformLink';
import { platforms } from './constants/platforms';

export function StreamingLinks() {
  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-6 text-center text-primary">
        Listen on Your Favorite Platform
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {platforms.map((platform) => (
          <PlatformLink
            key={platform.name}
            name={platform.name}
            url={platform.url}
            icon={platform.icon}
            isImage={platform.isImage}
            className={platform.className}
          />
        ))}
      </div>
    </div>
  );
}
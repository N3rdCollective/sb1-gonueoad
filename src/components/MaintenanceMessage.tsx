import React from 'react';
import { Construction } from 'lucide-react';

export function MaintenanceMessage() {
  return (
    <div className="w-full max-w-3xl bg-secondary-light/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-dark">
      <div className="flex items-center gap-3 mb-4">
        <Construction className="w-6 h-6 text-primary animate-pulse" />
        <h2 className="text-2xl font-bold text-primary">Under Construction</h2>
      </div>
      <p className="text-neutral-light leading-relaxed mb-4">
        We're currently undergoing a little remodeling to make the Lounge even better, but in the meantime, 
        keep the vibes alive and bump our radio station!
      </p>
      <p className="text-neutral-light leading-relaxed">
        Don't forget to check us out on social media for updates and all the latest happenings. Peace out!
      </p>
    </div>
  );
}
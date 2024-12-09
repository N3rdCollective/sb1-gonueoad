import React from 'react';
import { Music } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="w-full max-w-3xl bg-secondary-light rounded-lg shadow-xl p-8 border border-neutral-dark">
      <div className="flex items-center gap-3 mb-4">
        <Music className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">About Rappin' Lounge</h2>
      </div>
      <p className="text-neutral-light leading-relaxed">
        Your spot for the freshest beats and the illest rhymes. We're all about bringing you 
        that classic hip-hop vibe with a mix of today's hottest tracks. From old school to new 
        school, we keep the true spirit of hip-hop alive 24/7.
      </p>
    </div>
  );
}
import React from 'react';
import { RadioPlayer } from './components/RadioPlayer';
import { StreamingLinks } from './components/StreamingLinks';
import { SocialLinks } from './components/SocialLinks';
import { DynamicGreeting } from './components/DynamicGreeting';
import { MaintenanceMessage } from './components/MaintenanceMessage';

export default function App() {
  return (
    <div className="min-h-screen bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Rappin' Lounge
          </h1>
          <DynamicGreeting />
          <p className="text-lg text-neutral-light">Your Ultimate Hip-Hop Experience</p>
        </header>

        <main className="flex flex-col items-center gap-12">
          <RadioPlayer />
          <StreamingLinks />
          <MaintenanceMessage />
          
          <footer className="w-full max-w-3xl mt-8">
            <SocialLinks />
            <p className="text-center text-neutral mt-6">
              © {new Date().getFullYear()} Rappin' Lounge. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
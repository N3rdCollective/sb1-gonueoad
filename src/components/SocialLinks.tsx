import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const socials = [
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'YouTube', icon: Youtube, url: '#' },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-6">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral hover:text-primary transition-colors"
            aria-label={`Follow us on ${social.name}`}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PlatformLinkProps {
  name: string;
  url: string;
  icon: LucideIcon | string;
  isImage?: boolean;
  className?: string;
}

export function PlatformLink({ 
  name, 
  url, 
  icon: Icon, 
  isImage = false,
  className = 'w-12 h-12'
}: PlatformLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-32 bg-secondary-light rounded-lg border border-neutral-dark hover:border-primary transition-all hover:scale-105"
    >
      {isImage ? (
        <img 
          src={Icon as string} 
          alt={`Listen on ${name}`}
          className={`${className} object-contain`}
        />
      ) : (
        <Icon className={`${className} text-primary`} />
      )}
    </a>
  );
}
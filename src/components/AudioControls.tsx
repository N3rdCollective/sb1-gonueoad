import React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  onPlayPause: () => void;
  onMute: () => void;
  volume: number;
  onVolumeChange: (value: number) => void;
}

export function AudioControls({
  isPlaying,
  isMuted,
  onPlayPause,
  onMute,
  volume,
  onVolumeChange,
}: AudioControlsProps) {
  return (
    <div className="flex items-center justify-between">
      {/* Play/Pause Button */}
      <button
        onClick={onPlayPause}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-neutral-200 transition-all transform active:scale-95"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
      </button>

      {/* Volume Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMute}
          className="text-white/80 hover:text-white transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer 
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 
            [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:bg-white hover:[&::-webkit-slider-thumb]:bg-neutral-200
            [&::-webkit-slider-runnable-track]:rounded-lg"
          aria-label="Volume"
        />
      </div>
    </div>
  );
}
import React from 'react';
import { AudioControls } from './AudioControls';
import { PlayerArtwork } from './Player/PlayerArtwork';
import { PlayerInfo } from './Player/PlayerInfo';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useStreamMetadata } from '../hooks/useStreamMetadata';

const STREAM_URL = 'https://das-edge13-live365-dal02.cdnstream.com/a73297';
const METADATA_URL = 'https://s3.radio.co/s1a36378a0/listen';

export function RadioPlayer() {
  const {
    isPlaying,
    isMuted,
    volume,
    togglePlay,
    toggleMute,
    handleVolumeChange,
  } = useAudioPlayer(STREAM_URL);

  const { title, artist, artwork, isLoading } = useStreamMetadata(METADATA_URL);

  return (
    <div className="w-full max-w-3xl">
      <div className="bg-gradient-to-br from-neutral-900/95 to-neutral-900/98 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10">
        <div className="flex flex-col md:flex-row items-center p-8 gap-8">
          <PlayerArtwork
            artwork={artwork}
            title={title}
            artist={artist}
          />
          <PlayerInfo
            title={title}
            artist={artist}
            isLoading={isLoading}
          />
        </div>

        <div className="border-t border-white/10 bg-neutral-900/90 px-8 py-6">
          <AudioControls
            isPlaying={isPlaying}
            isMuted={isMuted}
            volume={volume}
            onPlayPause={togglePlay}
            onMute={toggleMute}
            onVolumeChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}
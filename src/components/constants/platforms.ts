import iHeartRadioLogo from '../../images/iHeartRadio_Logo_iHR Vertical White.png';
import AppleMusicLogo from '../../images/AppleMusic.png';
import Live365Logo from '../../images/live365.png';
import RadiolineLogo from '../../images/radioline.png';

export const platforms = [
  {
    name: 'iHeartRadio',
    url: 'https://www.iheart.com/live/rappin-lounge-radio-9637/',
    icon: iHeartRadioLogo,
    isImage: true,
    className: 'w-30 h-18',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/station/rappin-lounge-radio/ra.1652132170',
    icon: AppleMusicLogo,
    isImage: true,
    className: 'w-18 h-18',
  },
  {
    name: 'Live365',
    url: 'https://live365.com/station/Rappin-Lounge-Radio-a73297',
    icon: Live365Logo,
    isImage: true,
    className: 'w-16 h-12',
  },
  {
    name: 'Radioline',
    url: 'https://www.radioline.co/en/radios/live365_a73297',
    icon: RadiolineLogo,
    isImage: true,
    className: 'w-29 h-29',
  },
] as const;

export type Platform = typeof platforms[number];
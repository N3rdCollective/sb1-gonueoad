/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Yellow
          hover: '#FFC700',
          light: '#FFF3B0',
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Black
          light: '#2A2A2A',
        },
        neutral: {
          DEFAULT: '#808080', // Grey
          light: '#D3D3D3',
          dark: '#404040',
        },
      },
      width: {
        '18': '4.5rem',
        '30': '7.5rem',
        '29': '7.25rem',
      },
      height: {
        '18': '4.5rem',
        '29': '7.25rem',
      },
    },
  },
  plugins: [],
};
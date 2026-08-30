/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f6f4',
          100: '#e9e9e4',
          200: '#d3d3ca',
          300: '#b0b0a4',
          400: '#888879',
          500: '#6a6a5c',
          600: '#545449',
          700: '#44443c',
          800: '#2d2d27',
          900: '#1a1a16',
          950: '#0d0d0b',
        },
        coral: {
          50: '#fdf4f3',
          100: '#fbe8e5',
          200: '#f6d1cb',
          300: '#edada3',
          400: '#df7d70',
          500: '#a03731',
          600: '#8e322c',
          700: '#762a25',
          800: '#5e2320',
          900: '#4a1c1a',
        },
        sage: {
          50: '#f3f7f4',
          100: '#e3ece4',
          200: '#c8d9cc',
          300: '#a0bfa7',
          400: '#739e7c',
          500: '#527f5d',
          600: '#3f6349',
          700: '#344f3b',
          800: '#2a3f30',
          900: '#1f2d23',
        },
        amber: {
          50: '#fef9ec',
          100: '#fcefc9',
          200: '#f9dd8f',
          300: '#f5c54e',
          400: '#eaae1e',
          500: '#ce8e0c',
          600: '#a86c08',
          700: '#854f09',
          800: '#6b3e0d',
          900: '#573311',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};

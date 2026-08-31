/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'Noto Sans Thai', 'sans-serif'],
        thai: ['"Noto Sans Thai"', 'Archivo', 'sans-serif'],
      },
      colors: {
        provena: {
          // Brand coral
          50: '#fdf3f1',
          100: '#fbe6e1',
          200: '#f6cdc2',
          300: '#eea697',
          400: '#e27863',
          500: '#c54327', // primary brand
          600: '#b13a20',
          700: '#922f1a',
          800: '#742817',
          900: '#5f2415',
          950: '#341008',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e6ede7',
          200: '#cdd9cf',
          300: '#a8bdaa',
          400: '#7e9b81',
          500: '#5e7e62',
          600: '#49664d',
          700: '#3b523f',
          800: '#304234',
          900: '#28372c',
        },
        amber: {
          50: '#fdf8f0',
          100: '#faecd5',
          200: '#f4d8a8',
          300: '#edbd72',
          400: '#e6a044',
          500: '#df8427',
          600: '#c2681e',
          700: '#9c4f1c',
          800: '#7e3f1d',
          900: '#67351b',
        },
        canvas: {
          50: '#fbfaf8',
          100: '#f7f4f0',
          200: '#efe9e2',
          300: '#e3d9cf',
          400: '#d0c1b3',
          500: '#b8a594',
          600: '#9c8775',
          700: '#7c6a5a',
          800: '#5d4f43',
          900: '#3d342d',
        },
        ink: {
          50: '#f6f6f5',
          100: '#e7e7e5',
          200: '#cfcecb',
          300: '#a8a7a2',
          400: '#7c7b76',
          500: '#5d5c57',
          600: '#474642',
          700: '#383734',
          800: '#252422',
          900: '#1a1917',
          950: '#0f0e0d',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(26,25,23,0.04), 0 1px 3px rgba(26,25,23,0.06)',
        card: '0 1px 3px rgba(26,25,23,0.05), 0 4px 12px rgba(26,25,23,0.04)',
        lift: '0 4px 16px rgba(26,25,23,0.08), 0 12px 32px rgba(26,25,23,0.06)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'scale-in': 'scale-in 0.25s ease-out',
      },
    },
  },
  plugins: [],
};

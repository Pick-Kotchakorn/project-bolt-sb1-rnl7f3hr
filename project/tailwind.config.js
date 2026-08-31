/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fdf3f0',
          100: '#fbe6df',
          200: '#f6cdbd',
          300: '#efa78b',
          400: '#e87a52',
          500: '#c54327',
          600: '#b33c22',
          700: '#94321b',
          800: '#762a18',
          900: '#5f2415',
        },
        sage: {
          50: '#f1f5f0',
          100: '#e1ebe0',
          200: '#c7d8c4',
          300: '#a3bd9e',
          400: '#7e9b79',
          500: '#5e7c59',
          600: '#4b6547',
          700: '#3d5239',
          800: '#314230',
          900: '#283626',
        },
        amber2: {
          50: '#fdf8ec',
          100: '#faedcf',
          200: '#f5d99c',
          300: '#efc061',
          400: '#eaa53a',
          500: '#d98c1f',
          600: '#bb6e16',
          700: '#955015',
          800: '#7b3f18',
          900: '#683418',
        },
        canvas: {
          DEFAULT: '#faf7f3',
          warm: '#f5f1ea',
          card: '#ffffff',
          deep: '#efe9e0',
        },
        ink: {
          DEFAULT: '#1a1815',
          soft: '#3a3530',
          muted: '#7a7269',
          faint: '#a89f95',
        },
      },
      fontFamily: {
        sans: ['Archivo', 'Noto Sans Thai', 'sans-serif'],
        thai: ['Noto Sans Thai', 'Archivo', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(26,24,21,0.04), 0 4px 12px rgba(26,24,21,0.05)',
        'lift': '0 2px 4px rgba(26,24,21,0.05), 0 12px 32px rgba(26,24,21,0.08)',
      },
    },
  },
  plugins: [],
};

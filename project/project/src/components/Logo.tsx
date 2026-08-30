import { useId } from 'react';

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export default function Logo({ size = 36, showWordmark = true, className = '' }: LogoProps) {
  const gradId = useId();

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        style={{ filter: 'drop-shadow(0 1px 2px rgba(42,42,38,0.12))' }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#df7d70" />
            <stop offset="0.5" stopColor="#a03731" />
            <stop offset="1" stopColor="#762a25" />
          </linearGradient>
        </defs>
        <path d="M20 4 L32 8 L32 19 C32 26 27 32 20 36 C13 32 8 26 8 19 L8 8 Z" fill={`url(#${gradId})`} />
        <path
          d="M20 7.5 L29 10.5 L29 19 C29 24.5 25.3 29.3 20 32.5 C14.7 29.3 11 24.5 11 19 L11 10.5 Z"
          stroke="white"
          strokeOpacity="0.25"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M13.5 19.5 L17.5 23.5 L26.5 13"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showWordmark && (
        <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
          PROVENA
        </span>
      )}
    </span>
  );
}

import type { PlatformKey } from '@/types';

const paths: Record<PlatformKey, string> = {
  tiktok:
    'M16.5 3c.3 2.1 1.5 3.8 3.5 4v3c-1.3 0-2.5-.3-3.5-.9v6.4c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7 0 1 .1v3.1c-.3-.1-.7-.2-1-.2-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V3h3z',
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.5c-3.5 0-6.3 2.8-6.3 6.3s2.8 6.3 6.3 6.3 6.3-2.8 6.3-6.3-2.8-6.3-6.3-6.3zm0 10.4c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1zm6.5-10.6c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5z',
  youtube:
    'M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3-5.2 3z',
};

const accents: Record<PlatformKey, string> = {
  tiktok: 'text-ink',
  instagram: 'text-ink',
  youtube: 'text-ink',
};

export function PlatformGlyph({
  platform,
  size = 18,
  className = '',
}: {
  platform: PlatformKey;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${accents[platform]} ${className}`}
      aria-hidden="true"
    >
      <path d={paths[platform]} />
    </svg>
  );
}

export function PlatformTag({ platform, label }: { platform: PlatformKey; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft">
      <PlatformGlyph platform={platform} size={14} />
      {label}
    </span>
  );
}

interface MorLogoProps {
  size?: number;
  className?: string;
}

export default function MorLogo({ size = 28, className = '' }: MorLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background tile */}
      <rect width="32" height="32" rx="7" fill="var(--firoza-950)" />

      {/* Peacock feather close-up */}
      <g transform="translate(0 0)">
        {/* Feather silhouette */}
        <path
          d="M9 26 C8 20.5 8.8 16 11.5 11.5 C13.4 8.4 16 6.2 18.7 5.3 C20.9 4.6 23 4.9 24.4 6.4 C25.8 7.9 26.1 10 25.3 12.2 C24.3 15 22.3 17.8 19.5 20.3 C16.6 22.9 13.3 24.9 9 26 Z"
          fill="var(--firoza-400)"
        />

        {/* Inner feather field */}
        <path
          d="M11 24.2 C10.6 19.8 11.6 16.1 13.8 12.9 C15.4 10.6 17.7 8.9 19.7 8.2 C21.3 7.7 22.7 7.9 23.5 8.8 C24.4 9.8 24.6 11.3 24.1 12.8 C23.3 15.1 21.7 17.4 19.4 19.5 C17 21.7 14.3 23.2 11 24.2 Z"
          fill="var(--mayura-400)"
        />

        {/* Feather eye (ocellus) */}
        <circle cx="20" cy="13.5" r="3.1" fill="rgba(0,0,0,0.16)" />
        <circle cx="20" cy="13.3" r="2.4" fill="var(--sona-400)" />
        <circle cx="20" cy="13.1" r="1.3" fill="var(--firoza-950)" />

        {/* Central shaft */}
        <path
          d="M10.2 26.5 C13.2 23.8 15.4 21.1 17.4 18.2 C18.9 16.1 20.1 14 21 11.9"
          stroke="var(--firoza-950)"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* Barbs / detail strokes */}
        <path
          d="M15.2 19.6 C16.4 20.1 17.5 20.1 18.6 19.8"
          stroke="var(--firoza-950)"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
        <path
          d="M13.4 21.5 C14.6 22 15.7 22.1 16.8 21.9"
          stroke="var(--firoza-950)"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
        <path
          d="M12.1 23.3 C13.1 23.7 14.2 23.9 15.3 23.8"
          stroke="var(--firoza-950)"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
        <path
          d="M17.2 17.4 C18.2 17.8 19.1 17.8 20.1 17.5"
          stroke="var(--firoza-950)"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

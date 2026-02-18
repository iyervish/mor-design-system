interface MorniLogoProps {
  size?: number;
  className?: string;
}

export default function MorniLogo({ size = 28, className = '' }: MorniLogoProps) {
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
      {/* Background */}
      <rect width="32" height="32" rx="7" fill="var(--neelkanth-950)" />

      {/* Tail feathers — 5 paths radiating upward from body */}
      <g transform="translate(16 20)">
        {/* Center feather */}
        <path d="M0 0 C0 -4, 0 -9, 0 -13" stroke="var(--surya-400)" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="0" cy="-13" r="1.5" fill="var(--mayura-400)" />

        {/* Left-center feather */}
        <path d="M0 0 C-1.5 -3.5, -3 -7.5, -4 -11.5" stroke="var(--surya-400)" strokeWidth="1.1" strokeLinecap="round" />
        <circle cx="-4" cy="-11.5" r="1.4" fill="var(--mayura-400)" />

        {/* Right-center feather */}
        <path d="M0 0 C1.5 -3.5, 3 -7.5, 4 -11.5" stroke="var(--surya-400)" strokeWidth="1.1" strokeLinecap="round" />
        <circle cx="4" cy="-11.5" r="1.4" fill="var(--mayura-400)" />

        {/* Far-left feather */}
        <path d="M0 0 C-2.5 -3, -5.5 -6, -7.5 -9.5" stroke="var(--surya-500)" strokeWidth="1" strokeLinecap="round" />
        <circle cx="-7.5" cy="-9.5" r="1.3" fill="var(--mayura-400)" />

        {/* Far-right feather */}
        <path d="M0 0 C2.5 -3, 5.5 -6, 7.5 -9.5" stroke="var(--surya-500)" strokeWidth="1" strokeLinecap="round" />
        <circle cx="7.5" cy="-9.5" r="1.3" fill="var(--mayura-400)" />
      </g>

      {/* Peacock body — teardrop ellipse */}
      <ellipse cx="16" cy="22" rx="4" ry="5" fill="var(--neelkanth-400)" />

      {/* Head */}
      <circle cx="16" cy="15.5" r="2.8" fill="var(--neelkanth-400)" />

      {/* Crest — 3 dots on stems */}
      <path d="M15 13.5 L14.5 11.5" stroke="var(--neelkanth-300)" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="14.5" cy="11" r="0.9" fill="var(--surya-300)" />
      <path d="M16 13 L16 11" stroke="var(--neelkanth-300)" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="16" cy="10.5" r="0.9" fill="var(--surya-300)" />
      <path d="M17 13.5 L17.5 11.5" stroke="var(--neelkanth-300)" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="17.5" cy="11" r="0.9" fill="var(--surya-300)" />
    </svg>
  );
}

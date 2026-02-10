interface SpLogoProps {
  className?: string;
  size?: number;
}

export function SpLogo({ className = "", size = 36 }: SpLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* S letter - dark red */}
      <path
        d="M12 72c0 0 5 8 18 8 14 0 20-8 20-16 0-22-34-16-34-32 0-8 6-16 18-16 12 0 17 7 17 7"
        stroke="#8B1A1A"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* P letter - red */}
      <path
        d="M56 80V18h18c12 0 18 8 18 18s-6 18-18 18H56"
        stroke="#CC2222"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

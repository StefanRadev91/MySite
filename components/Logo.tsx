export function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 50 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a6fd4" />
          <stop offset="100%" stopColor="#00c853" />
        </linearGradient>
      </defs>
      <path
        d="M18 12L6 30L18 48"
        stroke="url(#logoGradNav)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 48L44 30L32 12"
        stroke="url(#logoGradNav)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="28" y1="8" x2="22" y2="52"
        stroke="url(#logoGradNav)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroLogo() {
  return <></>;
}

export default LogoIcon;

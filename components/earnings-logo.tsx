export function EarningsLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Abstract "E" formed by forecast bars */}
      <rect x="4" y="22" width="3" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
      <rect x="9" y="17" width="3" height="11" rx="1.5" fill="currentColor" opacity="0.55" />
      <rect x="14" y="12" width="3" height="16" rx="1.5" fill="currentColor" opacity="0.7" />
      {/* Rising signal bar — neon accent */}
      <rect x="19" y="6" width="3" height="22" rx="1.5" fill="#C7F934" />
      {/* Top spike dot */}
      <circle cx="20.5" cy="4" r="2" fill="#C7F934" />
      {/* Signal line connecting tops */}
      <path
        d="M17.5 12L20.5 6"
        stroke="#C7F934"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M11.5 17L14.5 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M6.5 22L9.5 17"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.2"
      />
      {/* Bottom horizontal bar — "E" base */}
      <rect x="4" y="28" width="18" height="2.5" rx="1.25" fill="currentColor" opacity="0.25" />
    </svg>
  )
}

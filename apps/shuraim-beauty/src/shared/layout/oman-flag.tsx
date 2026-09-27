import type { SVGProps } from "react"

export function OmanFlag({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="علم سلطنة عُمان - Flag of Oman"
      role="img"
      {...props}
    >
      <rect width="36" height="24" rx="2" fill="#FFFFFF" />
      {/* Top fly: White (already white rect) */}
      {/* Middle fly: Red */}
      <rect x="9" y="8" width="27" height="8" fill="#DB161B" />
      {/* Bottom fly: Green */}
      <rect x="9" y="16" width="27" height="8" fill="#008000" />
      {/* Hoist vertical bar: Red */}
      <rect x="0" y="0" width="10" height="24" fill="#DB161B" />
      {/* Khanjar Emblem in white */}
      <g fill="#FFFFFF" transform="translate(1.5, 1.5) scale(0.7)">
        {/* Crossed swords */}
        <line x1="1" y1="1" x2="9" y2="9" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
        <line x1="9" y1="1" x2="1" y2="9" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
        {/* Khanjar sheath & blade */}
        <path d="M5 2 C5 4, 3 6, 3 8 C3 9.5, 4.5 10, 5 10 C5.5 10, 7 9.5, 7 8 C7 6, 5 4, 5 2 Z" fill="#FFFFFF" />
        {/* Belt/ring */}
        <circle cx="5" cy="5.5" r="1.5" stroke="#FFFFFF" strokeWidth="0.8" fill="none" />
      </g>
    </svg>
  )
}

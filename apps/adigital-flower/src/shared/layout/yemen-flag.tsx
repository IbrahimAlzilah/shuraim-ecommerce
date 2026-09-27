import type { SVGProps } from "react"

export function YemenFlag({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="علم الجمهورية اليمنية - Flag of Yemen"
      role="img"
      {...props}
    >
      <rect width="36" height="24" rx="2" fill="#FFFFFF" />
      {/* Top band: Red */}
      <rect x="0" y="0" width="36" height="8" rx="1" fill="#CE1126" />
      {/* Middle band: White */}
      <rect x="0" y="8" width="36" height="8" fill="#FFFFFF" />
      {/* Bottom band: Black */}
      <rect x="0" y="16" width="36" height="8" rx="1" fill="#000000" />
    </svg>
  )
}

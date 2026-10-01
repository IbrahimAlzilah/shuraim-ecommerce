import type { ComponentProps } from "react"
import { WhatsAppIcon } from "./whatsapp-icon"

export interface FloatingWhatsAppProps extends ComponentProps<"a"> {
  phoneNumber?: string
  message?: string
  className?: string
  label?: string
}

export function FloatingWhatsApp({
  phoneNumber = "",
  message = "",
  className = "",
  label = "WhatsApp",
  ...props
}: FloatingWhatsAppProps) {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "")
  const query = message ? `?text=${encodeURIComponent(message)}` : ""
  const href = cleanPhone ? `https://wa.me/${cleanPhone}${query}` : "https://wa.me/"

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`fixed z-40 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(0,0,0,0.16)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300 size-10 sm:size-12 bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] md:bottom-6 end-4 md:end-6 group ${className}`}
      {...props}
    >
      <WhatsAppIcon className="size-5 sm:size-6 text-white transition-transform duration-300 group-hover:scale-110 shrink-0" />
      <span className="sr-only">{label}</span>
    </a>
  )
}

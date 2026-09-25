"use client"

import { ChevronDown, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

import { useAuth } from "@/features/auth"

export function LocationBadge() {
  const t = useTranslations("Header")
  const { user } = useAuth()
  const address = user?.addresses[0]

  return (
    <div className="hidden items-center gap-1.5 text-xs lg:flex">
      <MapPin className="text-primary size-4 shrink-0" />
      <div className="flex flex-col leading-tight">
        <span className="text-muted-foreground">{t("deliverTo")}</span>
        <span className="max-w-40 truncate font-medium">
          {address ? `${address.city}, ${address.line1}` : t("defaultLocation")}
        </span>
      </div>
      <ChevronDown className="text-muted-foreground size-3.5" />
    </div>
  )
}

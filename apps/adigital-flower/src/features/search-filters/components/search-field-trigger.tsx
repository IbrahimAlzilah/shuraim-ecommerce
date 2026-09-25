"use client"

import { Search } from "lucide-react"
import { useTranslations } from "next-intl"

import { useSearchStore } from "../hooks/use-search-store"

export function SearchFieldTrigger({ className }: { className?: string }) {
  const t = useTranslations("Header")
  const openSearch = useSearchStore((state) => state.openSearch)

  return (
    <button
      type="button"
      onClick={openSearch}
      aria-label={t("searchPlaceholder")}
      className={className ?? "border-border bg-muted/40 text-muted-foreground hover:bg-muted flex h-9 w-full items-center gap-2 rounded-full border ps-3 pe-4 text-sm"}
    >
      <Search className="size-4 shrink-0" />
      <span className="truncate">{t("searchPlaceholder")}</span>
    </button>
  )
}

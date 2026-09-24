"use client"

import { Search } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@rawnaq/ui/components/button"

import { useSearchStore } from "../hooks/use-search-store"

export function SearchTrigger({ className }: { className?: string }) {
  const t = useTranslations("Header")
  const openSearch = useSearchStore((state) => state.openSearch)

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      aria-label={t("menu")}
      onClick={openSearch}
    >
      <Search className="size-5" />
    </Button>
  )
}

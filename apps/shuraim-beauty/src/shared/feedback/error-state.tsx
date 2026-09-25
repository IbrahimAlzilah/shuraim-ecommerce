"use client"

import { useTranslations } from "next-intl"

import { Button } from "@rawnaq/ui/components/button"

export function ErrorState({ onRetry }: { onRetry?: () => void }) {
  const t = useTranslations("ErrorState")

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-medium">{t("title")}</h1>
      <p className="text-muted-foreground text-sm">{t("description")}</p>
      {onRetry && <Button onClick={onRetry}>{t("retry")}</Button>}
    </div>
  )
}

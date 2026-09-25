"use client"

import type { Order } from "@rawnaq/types"
import { formatCurrency } from "@rawnaq/utils"
import { useLocale, useTranslations } from "next-intl"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

export function OrderSuccessView({ order }: { order: Order }) {
  const t = useTranslations("Checkout")
  const locale = useLocale()

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-medium">{t("success.title")}</h1>
      <p className="text-muted-foreground text-sm">{t("success.description")}</p>
      <p className="text-sm">
        {t("success.orderNumber", { id: order.id })} —{" "}
        {formatCurrency(order.total, "YER", locale)}
      </p>
      <Button asChild>
        <Link href="/">{t("success.backHome")}</Link>
      </Button>
    </div>
  )
}

"use client"

import type { CartDiscount } from "@rawnaq/types"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { Button } from "@rawnaq/ui/components/button"
import { Input } from "@rawnaq/ui/components/input"

export function CouponInput({
  discount,
  error,
  isApplying,
  onApply,
  onClear,
}: {
  discount: CartDiscount | null
  error: string | null
  isApplying: boolean
  onApply: (code: string) => void
  onClear: () => void
}) {
  const t = useTranslations("Checkout")
  const [code, setCode] = useState("")

  function handleClick() {
    if (discount) {
      onClear()
      setCode("")
      return
    }

    onApply(code)
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <Input
          value={code}
          placeholder={t("coupon.placeholder")}
          disabled={Boolean(discount)}
          onChange={(event) => setCode(event.target.value)}
        />
        <Button
          type="button"
          variant="outline"
          disabled={isApplying || (!discount && !code.trim())}
          onClick={handleClick}
        >
          {discount ? t("coupon.remove") : t("coupon.apply")}
        </Button>
      </div>
      {discount && (
        <span className="text-xs text-emerald-600 dark:text-emerald-500">
          {t("coupon.applied", { code: discount.code })}
        </span>
      )}
      {error && (
        <span className="text-destructive text-xs">{t("coupon.invalidCode")}</span>
      )}
    </div>
  )
}

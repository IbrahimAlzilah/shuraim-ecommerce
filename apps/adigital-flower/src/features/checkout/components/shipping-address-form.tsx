"use client"

import type { Address } from "@rawnaq/types"
import { Loader2, MapPin, Phone, User } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState, type FormEvent } from "react"

import { Button } from "@rawnaq/ui/components/button"
import { Input } from "@rawnaq/ui/components/input"
import { Label } from "@rawnaq/ui/components/label"
import { cn } from "@rawnaq/ui/lib/utils"

import { validateAddress, type AddressErrors } from "../utils/validate-address"

const MAJOR_CITIES = [
  "صنعاء",
  "عدن",
  "تعز",
  "الحديدة",
  "إب",
  "ذمار",
  "المكلا",
  "لحج",
  "زنجبار",
  "الضالع",
  "البيضاء",
  "حجة",
  "صعدة",
  "عمران",
  "المحويت",
  "ريمة",
  "مأرب",
  "سيئون",
  "عتق",
  "الغيضة",
]

export function ShippingAddressForm({
  address,
  onSubmit,
}: {
  address: Partial<Address>
  onSubmit: (address: Address) => void
}) {
  const t = useTranslations("Checkout")
  const [values, setValues] = useState<Partial<Address>>({
    country: "الجمهورية اليمنية",
    ...address,
  })
  const [errors, setErrors] = useState<AddressErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  function update(field: keyof Address, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (isLoading) return

    const foundErrors = validateAddress(values)
    setErrors(foundErrors)

    if (Object.keys(foundErrors).length === 0) {
      setIsLoading(true)

      // Interactive loading state with tactile feedback
      await new Promise((resolve) => setTimeout(resolve, 500))

      onSubmit(values as Address)
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Recipient & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="recipientName" className="flex items-center gap-1.5 text-xs font-semibold">
            <User className="size-3.5 text-primary" />
            <span>{t("address.recipientName")} *</span>
          </Label>
          <Input
            id="recipientName"
            placeholder={t("address.recipientPlaceholder")}
            value={values.recipientName ?? ""}
            aria-invalid={Boolean(errors.recipientName)}
            onChange={(e) => update("recipientName", e.target.value)}
          />
          {errors.recipientName && (
            <span className="text-destructive text-xs">{t(`address.errors.${errors.recipientName}`)}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone" className="flex items-center gap-1.5 text-xs font-semibold">
            <Phone className="size-3.5 text-primary" />
            <span>{t("address.phone")} *</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            dir="ltr"
            placeholder="+967 7XXXXXXXX"
            value={values.phone ?? ""}
            aria-invalid={Boolean(errors.phone)}
            onChange={(e) => update("phone", e.target.value)}
          />
          {errors.phone ? (
            <span className="text-destructive text-xs">{t(`address.errors.${errors.phone}`)}</span>
          ) : (
            <span className="text-[11px] text-muted-foreground">{t("address.phoneHint")}</span>
          )}
        </div>
      </div>

      {/* Country & City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="country" className="text-xs font-semibold">
            {t("address.country")} *
          </Label>
          <select
            id="country"
            value={values.country ?? "الجمهورية اليمنية"}
            onChange={(e) => update("country", e.target.value)}
            className="h-10 rounded-lg border bg-background px-3 text-sm font-medium text-foreground outline-none focus:border-primary"
          >
            <option value="الجمهورية اليمنية">الجمهورية اليمنية (Yemen)</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="city" className="text-xs font-semibold">
            {t("address.city")} *
          </Label>
          <Input
            id="city"
            list="cities-list"
            placeholder={t("address.cityPlaceholder")}
            value={values.city ?? ""}
            aria-invalid={Boolean(errors.city)}
            onChange={(e) => update("city", e.target.value)}
          />
          <datalist id="cities-list">
            {MAJOR_CITIES.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
          {errors.city && (
            <span className="text-destructive text-xs">{t(`address.errors.${errors.city}`)}</span>
          )}
        </div>
      </div>

      {/* District / Street / National Address */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="line1" className="flex items-center gap-1.5 text-xs font-semibold">
          <MapPin className="size-3.5 text-primary" />
          <span>{t("address.line1")} *</span>
        </Label>
        <Input
          id="line1"
          placeholder={t("address.line1Placeholder")}
          value={values.line1 ?? ""}
          aria-invalid={Boolean(errors.line1)}
          onChange={(e) => update("line1", e.target.value)}
        />
        {errors.line1 && (
          <span className="text-destructive text-xs">{t(`address.errors.${errors.line1}`)}</span>
        )}
      </div>

      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className={cn(
            "w-full sm:w-auto px-8 font-semibold",
            isLoading && "cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-90"
          )}
        >
          {isLoading ? <Loader2 className="size-4 animate-spin shrink-0" /> : t("continue")}
        </Button>
      </div>
    </form>
  )
}

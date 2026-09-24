"use client"

import type { Address } from "@rawnaq/types"
import { MapPin, Phone, User } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState, type FormEvent } from "react"

import { Button } from "@rawnaq/ui/components/button"
import { Input } from "@rawnaq/ui/components/input"
import { Label } from "@rawnaq/ui/components/label"

import { validateAddress, type AddressErrors } from "../utils/validate-address"

const MAJOR_CITIES = [
  "مسقط",
  "السيب",
  "بوشر",
  "مطرح",
  "العامرات",
  "الخوض",
  "الموالح",
  "الموج",
  "صلالة",
  "صحار",
  "نزوى",
  "بركاء",
  "الرستاق",
  "صور",
  "إبراء",
  "عبري",
  "البريمي",
  "المصنعة",
  "سمائل",
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
    country: "سلطنة عُمان",
    ...address,
  })
  const [errors, setErrors] = useState<AddressErrors>({})

  function update(field: keyof Address, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const foundErrors = validateAddress(values)
    setErrors(foundErrors)

    if (Object.keys(foundErrors).length === 0) {
      onSubmit(values as Address)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Recipient & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="recipientName" className="flex items-center gap-1.5 text-xs font-semibold">
            <User className="size-3.5 text-primary" />
            <span>اسم المستلم *</span>
          </Label>
          <Input
            id="recipientName"
            placeholder="مثال: سارة محمد"
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
            <span>رقم الجوال *</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            dir="ltr"
            placeholder="+968 9XXXXXXX"
            value={values.phone ?? ""}
            aria-invalid={Boolean(errors.phone)}
            onChange={(e) => update("phone", e.target.value)}
          />
          {errors.phone ? (
            <span className="text-destructive text-xs">{t(`address.errors.${errors.phone}`)}</span>
          ) : (
            <span className="text-[11px] text-muted-foreground">للتواصل وتأكيد موعد التوصيل عبر أسياد إكسبريس أو المندوب</span>
          )}
        </div>
      </div>

      {/* Country & City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="country" className="text-xs font-semibold">
            الدولة *
          </Label>
          <select
            id="country"
            value={values.country ?? "سلطنة عُمان"}
            onChange={(e) => update("country", e.target.value)}
            className="h-10 rounded-lg border bg-background px-3 text-sm font-medium text-foreground outline-none focus:border-primary"
          >
            <option value="سلطنة عُمان">سلطنة عُمان (Oman)</option>
            <option value="الإمارات العربية المتحدة">الإمارات العربية المتحدة (UAE)</option>
            <option value="المملكة العربية السعودية">المملكة العربية السعودية (KSA)</option>
            <option value="الكويت">الكويت (Kuwait)</option>
            <option value="البحرين">البحرين (Bahrain)</option>
            <option value="قطر">قطر (Qatar)</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="city" className="text-xs font-semibold">
            المدينة *
          </Label>
          <Input
            id="city"
            list="cities-list"
            placeholder="اختاري أو اكتبي اسم مدينتكِ"
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
          <span>تفاصيل العنوان (الحي، الشارع، أو العنوان الوطني) *</span>
        </Label>
        <Input
          id="line1"
          placeholder="مثال: حي الياسمين - شارع أنس بن مالك - مبنى رقم 4"
          value={values.line1 ?? ""}
          aria-invalid={Boolean(errors.line1)}
          onChange={(e) => update("line1", e.target.value)}
        />
        {errors.line1 && (
          <span className="text-destructive text-xs">{t(`address.errors.${errors.line1}`)}</span>
        )}
      </div>

      <div className="flex justify-end pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto px-8 font-semibold">
          {t("continue")}
        </Button>
      </div>
    </form>
  )
}

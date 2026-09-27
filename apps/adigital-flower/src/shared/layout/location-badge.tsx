"use client"

import { useState } from "react"
import { Check, ChevronDown, MapPin, Truck, Building2, CheckCircle2 } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

import { useDeliveryLocationStore, YEMEN_CITIES } from "@/features/customer-account"
import { Button } from "@rawnaq/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@rawnaq/ui/components/dialog"
import { Input } from "@rawnaq/ui/components/input"
import { YemenFlag } from "./yemen-flag"

export function LocationBadge() {
  const t = useTranslations("Header")
  const locale = useLocale()
  const isAr = locale === "ar"

  const {
    city,
    addressLine,
    isOpen,
    setCity,
    setAddressLine,
    setIsOpen,
  } = useDeliveryLocationStore()

  const [inputAddress, setInputAddress] = useState(addressLine)

  // Find localized city name
  const currentCityObj = YEMEN_CITIES.find(
    (c) => c.nameAr === city || c.nameEn.toLowerCase() === city.toLowerCase()
  )
  const displayCityName = currentCityObj
    ? isAr
      ? currentCityObj.nameAr
      : currentCityObj.nameEn
    : city

  const displayCountry = isAr ? "الجمهورية اليمنية" : "Yemen"

  function handleCitySelect(cityNameAr: string) {
    setCity(cityNameAr)
  }

  function handleSaveAddress() {
    if (inputAddress.trim()) {
      setAddressLine(inputAddress.trim())
    }
    setIsOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setInputAddress(addressLine)
          setIsOpen(true)
        }}
        className="hidden items-center gap-2 rounded-xl p-1.5 text-xs text-foreground transition-all duration-200 hover:bg-accent/70 lg:flex cursor-pointer text-start outline-none focus-visible:ring-2 focus-visible:ring-primary/40 border border-transparent hover:border-border/60"
        aria-label={t("deliveryLocationModalTitle")}
      >
        <div className="relative flex items-center justify-center shrink-0">
          <YemenFlag className="h-4 w-6 rounded-xs shadow-xs border border-border/60 object-cover" />
        </div>

        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="text-primary size-3 shrink-0" />
            <span>{t("deliverTo")}</span>
          </div>
          <span className="max-w-36 truncate font-semibold text-foreground">
            {displayCityName}{isAr ? "، " : ", "}{displayCountry}
          </span>
        </div>

        <ChevronDown
          className={`text-muted-foreground size-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md sm:max-w-lg p-5 sm:p-6 gap-5">
          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col gap-1">
              <DialogTitle className="text-base sm:text-lg font-bold">
                {t("deliveryLocationModalTitle")}
              </DialogTitle>
            </div>
          </div>

          {/* Currently Selected Address Card */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600" />
                {t("currentSelectedLocation")}
              </span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                {displayCountry} 🇾🇪
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-base text-foreground">
                {displayCityName}{isAr ? "، " : ", "}{displayCountry}
              </span>
              <span className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                <Building2 className="size-3.5 shrink-0 text-muted-foreground" />
                {inputAddress.trim() || addressLine || (isAr ? "شارع حدة، جوار المركز التجاري" : "Hadda St, Near Trade Center")}
              </span>
            </div>

            <div className="border-t border-border/60 pt-2.5 flex items-center justify-between text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Truck className="size-3.5 text-primary" />
                {t("deliveryNotice")}
              </span>
            </div>
          </div>

          {/* City Quick Selector */}
          <div className="flex flex-col gap-2.5">
            <label className="text-xs font-semibold text-foreground">
              {t("changeCity")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {YEMEN_CITIES.map((c) => {
                const isSelected =
                  c.nameAr === city ||
                  c.nameEn.toLowerCase() === city.toLowerCase()
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleCitySelect(c.nameAr)}
                    className={`flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg border transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary shadow-xs"
                        : "bg-background hover:bg-accent/60 text-foreground border-border/80"
                    }`}
                  >
                    <span>{isAr ? c.nameAr : c.nameEn}</span>
                    {isSelected && <Check className="size-3.5 shrink-0" />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Custom Address Input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-muted-foreground">
              {isAr ? "تفاصيل العنوان الإضافية:" : "Additional Address Details:"}
            </label>
            <Input
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
              placeholder={t("customAddressPlaceholder")}
              className="text-xs sm:text-sm h-10"
            />
          </div>

          {/* Confirm Button */}
          <div className="flex items-center justify-end gap-2 pt-1">
            <Button
              type="button"
              onClick={handleSaveAddress}
              className="w-full sm:w-auto px-6 h-10 font-semibold"
            >
              {t("confirmLocation")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

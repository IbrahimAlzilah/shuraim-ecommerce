"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

import { useDeliveryLocationStore, OMAN_CITIES } from "@/features/customer-account"
import { Button } from "@rawnaq/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@rawnaq/ui/components/dialog"
import { Input } from "@rawnaq/ui/components/input"
import { OmanFlag } from "./oman-flag"

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
  const currentCityObj = OMAN_CITIES.find(
    (c) => c.nameAr === city || c.nameEn.toLowerCase() === city.toLowerCase()
  )
  const displayCityName = currentCityObj
    ? isAr
      ? currentCityObj.nameAr
      : currentCityObj.nameEn
    : city

  const displayCountry = isAr ? "سلطنة عُمان" : "Oman"

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
        className="hidden items-center gap-2 rounded-xl p-1.5 text-xs text-foreground transition-all duration-200 lg:flex cursor-pointer text-start outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <div className="relative flex items-center justify-center shrink-0">
          <OmanFlag className="h-5 w-8 rounded-xs shadow-xs border border-border/60 object-cover" />
        </div>

        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1 text-muted-foreground">
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


          {/* City Selector */}
          <div className="flex flex-col gap-2">
            <label htmlFor="delivery-city-select" className="text-xs font-semibold text-foreground">
              {t("changeCity")}
            </label>
            <div className="relative">
              <select
                id="delivery-city-select"
                value={currentCityObj ? currentCityObj.nameAr : city}
                onChange={(e) => handleCitySelect(e.target.value)}
                className="w-full h-11 appearance-none rounded-xl border border-input bg-background px-3.5 pe-10 text-xs sm:text-sm font-medium text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                {OMAN_CITIES.map((c) => (
                  <option key={c.id} value={c.nameAr}>
                    {isAr ? c.nameAr : c.nameEn}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3 text-muted-foreground">
                <ChevronDown className="size-4" />
              </div>
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

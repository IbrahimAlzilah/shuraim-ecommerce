"use client"

import { useTranslations } from "next-intl"
import { type KeyboardEvent, useRef } from "react"

import { Input } from "@rawnaq/ui/components/input"

import { OTP_LENGTH } from "../../schemas/auth-schemas"

export function OtpVerificationInput({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  const t = useTranslations("Auth")
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  function setDigit(index: number, digit: string) {
    const digits = value.split("")
    digits[index] = digit
    const next = digits.join("").slice(0, OTP_LENGTH)
    onChange(next)

    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  function handleKeyDown(index: number, event: KeyboardEvent) {
    if (event.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div className="flex gap-2" dir="ltr">
      {Array.from({ length: OTP_LENGTH }, (_, index) => (
        <Input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el
          }}
          inputMode="numeric"
          maxLength={1}
          aria-label={t("otpDigit", { index: index + 1 })}
          value={value[index] ?? ""}
          onChange={(event) =>
            setDigit(index, event.target.value.replace(/\D/g, "").slice(-1))
          }
          onKeyDown={(event) => handleKeyDown(index, event)}
          className="size-10 text-center"
        />
      ))}
    </div>
  )
}

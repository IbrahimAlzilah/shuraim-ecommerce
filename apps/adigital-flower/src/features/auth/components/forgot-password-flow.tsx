"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

import { ForgotPasswordForm } from "./forms/forgot-password-form"

// Page-level orchestration around ForgotPasswordForm: shows the simulated
// reset code once requested, then hands off to /reset-password. AuthModal
// has its own equivalent step since it doesn't navigate between pages.
export function ForgotPasswordFlow() {
  const t = useTranslations("Auth")
  const [sent, setSent] = useState<{ email: string; demoCode: string } | null>(
    null
  )

  if (sent) {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-sm">{t("resetCodeSent", { email: sent.email })}</p>
        <p className="bg-muted rounded-lg p-3 text-center font-mono text-lg tracking-widest">
          {sent.demoCode}
        </p>
        <Button asChild>
          <Link href={`/reset-password?email=${encodeURIComponent(sent.email)}`}>
            {t("continue")}
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <ForgotPasswordForm
      onCodeSent={(email, demoCode) => setSent({ email, demoCode })}
    />
  )
}

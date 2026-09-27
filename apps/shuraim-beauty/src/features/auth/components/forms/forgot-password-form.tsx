"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { Button } from "@rawnaq/ui/components/button"
import { Input } from "@rawnaq/ui/components/input"
import { Label } from "@rawnaq/ui/components/label"
import { cn } from "@rawnaq/ui/lib/utils"

import { requestPasswordReset } from "../../api/request-password-reset"
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "../../schemas/auth-schemas"

export function ForgotPasswordForm({
  onCodeSent,
}: {
  onCodeSent: (email: string, demoCode: string) => void
}) {
  const t = useTranslations("Auth")
  const [formError, setFormError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  async function onSubmit(values: ForgotPasswordFormValues) {
    setFormError(null)
    const result = await requestPasswordReset(values.email)
    onCodeSent(result.email, result.demoCode)
  }

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <Label htmlFor="forgot-email">{t("email")}</Label>
        <Input
          id="forgot-email"
          type="email"
          aria-invalid={Boolean(errors.email)}
          {...register("email")}
        />
        {errors.email && (
          <span className="text-destructive text-xs">{t(errors.email.message as "invalidEmail")}</span>
        )}
      </div>

      {formError && <p className="text-destructive text-sm">{formError}</p>}

      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn("mt-2", isSubmitting && "cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-90")}
      >
        {isSubmitting ? <Loader2 className="size-4 animate-spin shrink-0" /> : t("sendResetCode")}
      </Button>
    </form>
  )
}

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { Controller, useForm } from "react-hook-form"
import { useState } from "react"

import { Button } from "@rawnaq/ui/components/button"
import { Label } from "@rawnaq/ui/components/label"
import { PasswordInput } from "@rawnaq/ui/components/password-input"

import { resetPassword } from "../../api/reset-password"
import {
  resetPasswordSchema,
  type ResetPasswordFormValues,
} from "../../schemas/auth-schemas"
import { OtpVerificationInput } from "./otp-verification-input"

export function ResetPasswordForm({
  email,
  onSuccess,
}: {
  email: string
  onSuccess: () => void
}) {
  const t = useTranslations("Auth")
  const [formError, setFormError] = useState<string | null>(null)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { code: "", newPassword: "", confirmPassword: "" },
  })

  async function onSubmit(values: ResetPasswordFormValues) {
    setFormError(null)
    try {
      await resetPassword(email, values.code, values.newPassword)
      onSuccess()
    } catch {
      setFormError(t("invalidCode"))
    }
  }

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <Label>{t("resetCode")}</Label>
        <Controller
          name="code"
          control={control}
          render={({ field }) => (
            <OtpVerificationInput value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.code && (
          <span className="text-destructive text-xs">{t(errors.code.message as "otpIncomplete")}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="reset-new-password">{t("newPassword")}</Label>
        <PasswordInput
          id="reset-new-password"
          aria-invalid={Boolean(errors.newPassword)}
          showLabel={t("showPassword")}
          hideLabel={t("hidePassword")}
          {...register("newPassword")}
        />
        {errors.newPassword && (
          <span className="text-destructive text-xs">
            {t(errors.newPassword.message as "passwordTooShort")}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="reset-confirm-password">{t("confirmPassword")}</Label>
        <PasswordInput
          id="reset-confirm-password"
          aria-invalid={Boolean(errors.confirmPassword)}
          showLabel={t("showPassword")}
          hideLabel={t("hidePassword")}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="text-destructive text-xs">
            {t(errors.confirmPassword.message as "passwordsDontMatch")}
          </span>
        )}
      </div>

      {formError && <p className="text-destructive text-sm">{formError}</p>}

      <Button type="submit" disabled={isSubmitting} className="mt-2">
        {t("resetPassword")}
      </Button>
    </form>
  )
}

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { Button } from "@rawnaq/ui/components/button"
import { Input } from "@rawnaq/ui/components/input"
import { Label } from "@rawnaq/ui/components/label"
import { PasswordInput } from "@rawnaq/ui/components/password-input"
import { cn } from "@rawnaq/ui/lib/utils"

import { useAuthActions } from "../../hooks/use-auth-actions"
import {
  registerSchema,
  type RegisterFormValues,
} from "../../schemas/auth-schemas"

export function RegisterForm({ onSuccess }: { onSuccess: () => void }) {
  const t = useTranslations("Auth")
  const { register: registerUser } = useAuthActions()
  const [formError, setFormError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) })

  async function onSubmit(values: RegisterFormValues) {
    setFormError(null)
    try {
      await registerUser(values)
      onSuccess()
    } catch {
      setFormError(t("emailTaken"))
    }
  }

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <Label htmlFor="register-name">{t("name")}</Label>
        <Input
          id="register-name"
          aria-invalid={Boolean(errors.name)}
          {...register("name")}
        />
        {errors.name && (
          <span className="text-destructive text-xs">{t(errors.name.message as "required")}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="register-email">{t("email")}</Label>
        <Input
          id="register-email"
          type="email"
          aria-invalid={Boolean(errors.email)}
          {...register("email")}
        />
        {errors.email && (
          <span className="text-destructive text-xs">{t(errors.email.message as "invalidEmail")}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="register-password">{t("password")}</Label>
        <PasswordInput
          id="register-password"
          aria-invalid={Boolean(errors.password)}
          showLabel={t("showPassword")}
          hideLabel={t("hidePassword")}
          {...register("password")}
        />
        {errors.password && (
          <span className="text-destructive text-xs">
            {t(errors.password.message as "passwordTooShort")}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="register-confirm-password">{t("confirmPassword")}</Label>
        <PasswordInput
          id="register-confirm-password"
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

      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn("mt-2", isSubmitting && "cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-90")}
      >
        {isSubmitting ? <Loader2 className="size-4 animate-spin shrink-0" /> : t("createAccount")}
      </Button>
    </form>
  )
}

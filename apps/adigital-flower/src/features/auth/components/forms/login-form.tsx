"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Smartphone, Mail, ArrowRight, ShieldCheck } from "lucide-react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { useState } from "react"

import { Link } from "@rawnaq/i18n/navigation"
import { isYemeniPhoneNumber } from "@rawnaq/utils"
import { Button } from "@rawnaq/ui/components/button"
import { Input } from "@rawnaq/ui/components/input"
import { Label } from "@rawnaq/ui/components/label"
import { PasswordInput } from "@rawnaq/ui/components/password-input"

import { useAuthActions } from "../../hooks/use-auth-actions"
import { loginSchema, type LoginFormValues } from "../../schemas/auth-schemas"
import { OtpVerificationInput } from "./otp-verification-input"

export function LoginForm({
  onSuccess,
  onForgotPassword,
}: {
  onSuccess: () => void
  onForgotPassword?: () => void
}) {
  const t = useTranslations("Auth")
  const { login, loginWithPhone } = useAuthActions()
  const [authMethod, setAuthMethod] = useState<"phone" | "email">("phone")

  // Phone OTP Flow State
  const [phone, setPhone] = useState("")
  const [otpStep, setOtpStep] = useState<"enter-phone" | "enter-otp">("enter-phone")
  const [otpCode, setOtpCode] = useState("")
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [isPhoneSubmitting, setIsPhoneSubmitting] = useState(false)

  // Email Flow Form
  const [formError, setFormError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) })

  async function onEmailSubmit(values: LoginFormValues) {
    setFormError(null)
    try {
      await login(values)
      onSuccess()
    } catch {
      setFormError(t("invalidCredentials"))
    }
  }

  function handleSendOtp(e: React.FormEvent) {
    e.preventDefault()
    setPhoneError(null)

    const cleaned = phone.replace(/\s|-/g, "")
    if (!cleaned) {
      setPhoneError("يرجى إدخال رقم الجوال")
      return
    }

    if (!isYemeniPhoneNumber(cleaned)) {
      setPhoneError("يرجى إدخال رقم هاتف يمني صحيح (مثال: 7XXXXXXXX أو +967)")
      return
    }

    setIsPhoneSubmitting(true)
    setTimeout(() => {
      setIsPhoneSubmitting(false)
      setOtpStep("enter-otp")
      setOtpCode("123456") // Pre-fill mock demo OTP for instant convenience
    }, 400)
  }

  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault()
    setPhoneError(null)

    if (otpCode.length < 6) {
      setPhoneError("يرجى إدخال رمز التحقق المكوّن من 6 أرقام")
      return
    }

    setIsPhoneSubmitting(true)
    try {
      await loginWithPhone(phone)
      onSuccess()
    } catch {
      setPhoneError("رمز التحقق غير صحيح أو منتهي الصلاحية")
    } finally {
      setIsPhoneSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Auth Method Selector */}
      <div className="grid grid-cols-2 gap-1 rounded-xl bg-muted p-1 text-xs font-semibold">
        <button
          type="button"
          onClick={() => {
            setAuthMethod("phone")
            setPhoneError(null)
          }}
          className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition-all ${
            authMethod === "phone"
              ? "bg-background text-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Smartphone className="size-3.5" />
          <span>رقم الجوال (OTP)</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setAuthMethod("email")
            setFormError(null)
          }}
          className={`flex items-center justify-center gap-1.5 rounded-lg py-2 transition-all ${
            authMethod === "email"
              ? "bg-background text-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Mail className="size-3.5" />
          <span>البريد الإلكتروني</span>
        </button>
      </div>

      {authMethod === "phone" ? (
        otpStep === "enter-phone" ? (
          <form onSubmit={handleSendOtp} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="login-phone" className="text-xs font-semibold">
                رقم الجوال
              </Label>
              <Input
                id="login-phone"
                type="tel"
                dir="ltr"
                placeholder="+968 9XXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
              />
              <span className="text-[11px] text-muted-foreground">
                سنرسل لك رمز تحقق سريع عبر رسالة نصية قصيرة SMS
              </span>
            </div>

            {phoneError && <p className="text-destructive text-xs">{phoneError}</p>}

            <Button type="submit" disabled={isPhoneSubmitting} className="mt-2 text-sm font-semibold">
              {isPhoneSubmitting ? "جاري الإرسال..." : "إرسال رمز التحقق"}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="flex flex-col gap-3.5">
            <div className="rounded-lg bg-primary/5 p-3 text-xs border border-primary/20 text-foreground">
              <div className="flex items-center gap-1.5 font-semibold text-primary mb-1">
                <ShieldCheck className="size-4" />
                <span>رمز التحقق التجريبي: 123456</span>
              </div>
              <p className="text-muted-foreground">
                تم إرسال رمز التحقق إلى الرقم: <strong className="text-foreground" dir="ltr">{phone}</strong>
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 py-2">
              <Label className="text-xs font-semibold">أدخل الرمز المكون من 6 أرقام</Label>
              <OtpVerificationInput value={otpCode} onChange={setOtpCode} />
            </div>

            {phoneError && <p className="text-destructive text-xs text-center">{phoneError}</p>}

            <Button type="submit" disabled={isPhoneSubmitting} className="text-sm font-semibold">
              {isPhoneSubmitting ? "جاري التحقق..." : "تأكيد وتسجيل الدخول"}
            </Button>

            <button
              type="button"
              onClick={() => setOtpStep("enter-phone")}
              className="flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            >
              <ArrowRight className="size-3.5 rtl:rotate-180" />
              <span>تعديل رقم الجوال</span>
            </button>
          </form>
        )
      ) : (
        <form onSubmit={(event) => void handleSubmit(onEmailSubmit)(event)} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="login-email">{t("email")}</Label>
            <Input
              id="login-email"
              type="email"
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-destructive text-xs">{t(errors.email.message as "invalidEmail")}</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="login-password">{t("password")}</Label>
            <PasswordInput
              id="login-password"
              aria-invalid={Boolean(errors.password)}
              showLabel={t("showPassword")}
              hideLabel={t("hidePassword")}
              {...register("password")}
            />
            {errors.password && (
              <span className="text-destructive text-xs">{t(errors.password.message as "required")}</span>
            )}
          </div>

          {formError && <p className="text-destructive text-sm">{formError}</p>}

          {onForgotPassword ? (
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-muted-foreground text-start text-xs hover:text-foreground"
            >
              {t("forgotPassword")}
            </button>
          ) : (
            <Link href="/forgot-password" className="text-muted-foreground text-xs hover:text-foreground">
              {t("forgotPassword")}
            </Link>
          )}

          <Button type="submit" disabled={isSubmitting} className="mt-2 text-sm font-semibold">
            {t("login")}
          </Button>
        </form>
      )}
    </div>
  )
}

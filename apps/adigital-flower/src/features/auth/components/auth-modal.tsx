"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"

import { Button } from "@rawnaq/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@rawnaq/ui/components/dialog"

import { useAuth } from "../hooks/use-auth"
import { ForgotPasswordForm } from "./forms/forgot-password-form"
import { LoginForm } from "./forms/login-form"
import { RegisterForm } from "./forms/register-form"
import { ResetPasswordForm } from "./forms/reset-password-form"

// The single popup for every auth flow: login, register and password
// recovery (request + reset). There is no separate "quick login" — this
// modal and the /login, /register, /forgot-password, /reset-password pages
// share the same underlying forms.
export function AuthModal() {
  const t = useTranslations("Auth")
  const { isModalOpen, modalView, setModalView, closeModal } = useAuth()
  const [resetContext, setResetContext] = useState<{
    email: string
    demoCode: string
  } | null>(null)

  function handleOpenChange(open: boolean) {
    if (!open) {
      closeModal()
      setResetContext(null)
    }
  }

  function handleClose() {
    closeModal()
    setResetContext(null)
  }

  const titles = {
    login: t("login"),
    register: t("createAccount"),
    "forgot-password": t("resetPassword"),
  } as const

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogTitle>
          {resetContext ? t("resetPassword") : titles[modalView]}
        </DialogTitle>

        {modalView === "login" && !resetContext && (
          <div className="flex flex-col gap-3">
            <LoginForm
              onSuccess={handleClose}
              onForgotPassword={() => setModalView("forgot-password")}
            />
            <p className="text-muted-foreground text-center text-sm">
              {t("noAccount")}{" "}
              <button
                type="button"
                className="text-foreground underline"
                onClick={() => setModalView("register")}
              >
                {t("createAccount")}
              </button>
            </p>
          </div>
        )}

        {modalView === "register" && (
          <div className="flex flex-col gap-3">
            <RegisterForm onSuccess={handleClose} />
            <p className="text-muted-foreground text-center text-sm">
              {t("haveAccount")}{" "}
              <button
                type="button"
                className="text-foreground underline"
                onClick={() => setModalView("login")}
              >
                {t("login")}
              </button>
            </p>
          </div>
        )}

        {modalView === "forgot-password" &&
          (resetContext ? (
            <div className="flex flex-col gap-3">
              <p className="text-sm">
                {t("resetCodeSent", { email: resetContext.email })}
              </p>
              <p className="bg-muted rounded-lg p-3 text-center font-mono text-lg tracking-widest">
                {resetContext.demoCode}
              </p>
              <ResetPasswordForm
                email={resetContext.email}
                onSuccess={() => {
                  setResetContext(null)
                  setModalView("login")
                }}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <ForgotPasswordForm
                onCodeSent={(email, demoCode) =>
                  setResetContext({ email, demoCode })
                }
              />
              <Button
                variant="ghost"
                type="button"
                onClick={() => setModalView("login")}
              >
                {t("login")}
              </Button>
            </div>
          ))}
      </DialogContent>
    </Dialog>
  )
}

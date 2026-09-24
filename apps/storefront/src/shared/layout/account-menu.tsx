"use client"

import { useTranslations } from "next-intl"

import { useAuth, useAuthActions } from "@/features/auth"
import { Button } from "@rawnaq/ui/components/button"

export function AccountMenu() {
  const t = useTranslations("Header")
  const { user, isAuthenticated, openModal } = useAuth()
  const { logout } = useAuthActions()

  if (isAuthenticated && user) {
    return (
      <div className="hidden items-center gap-2 text-sm md:flex">
        <span className="text-muted-foreground">{user.name}</span>
        <Button variant="ghost" size="sm" onClick={() => void logout()}>
          {t("logout")}
        </Button>
      </div>
    )
  }

  return (
    <Button variant="outline" size="sm" onClick={() => openModal("login")}>
      {t("login")}
    </Button>
  )
}

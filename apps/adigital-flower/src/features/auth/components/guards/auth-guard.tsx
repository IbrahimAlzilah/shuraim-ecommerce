"use client"

import { useEffect, type ReactNode } from "react"

import { useRouter } from "@rawnaq/i18n/navigation"

import { useAuth } from "../../hooks/use-auth"

// Guards pages that require a signed-in user (account, order history, ...).
// Not applied to any route yet — no protected page exists until
// customer-account is built. Ready to wrap one once it does.
export function AuthGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, hasHydrated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (hasHydrated && !isAuthenticated) {
      router.replace("/login")
    }
  }, [hasHydrated, isAuthenticated, router])

  if (!hasHydrated || !isAuthenticated) {
    return null
  }

  return <>{children}</>
}

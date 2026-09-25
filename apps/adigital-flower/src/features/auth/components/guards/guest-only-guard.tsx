"use client"

import { useEffect, type ReactNode } from "react"

import { useRouter } from "@rawnaq/i18n/navigation"

import { useAuth } from "../../hooks/use-auth"

// Redirects an already-authenticated user away from guest-only pages
// (login, register, password recovery) back to the home page.
export function GuestOnlyGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, hasHydrated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (hasHydrated && isAuthenticated) {
      router.replace("/")
    }
  }, [hasHydrated, isAuthenticated, router])

  if (hasHydrated && isAuthenticated) {
    return null
  }

  return <>{children}</>
}

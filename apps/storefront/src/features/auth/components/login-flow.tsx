"use client"

import { useRouter } from "@rawnaq/i18n/navigation"

import { LoginForm } from "./forms/login-form"

export function LoginFlow() {
  const router = useRouter()

  return <LoginForm onSuccess={() => router.replace("/")} />
}

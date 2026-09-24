"use client"

import { useRouter } from "@rawnaq/i18n/navigation"

import { RegisterForm } from "./forms/register-form"

export function RegisterFlow() {
  const router = useRouter()

  return <RegisterForm onSuccess={() => router.replace("/")} />
}

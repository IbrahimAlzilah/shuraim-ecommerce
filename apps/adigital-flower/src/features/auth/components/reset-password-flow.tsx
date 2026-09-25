"use client"

import { useSearchParams } from "next/navigation"

import { useRouter } from "@rawnaq/i18n/navigation"

import { ResetPasswordForm } from "./forms/reset-password-form"

export function ResetPasswordFlow() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email") ?? ""

  return (
    <ResetPasswordForm email={email} onSuccess={() => router.replace("/login")} />
  )
}

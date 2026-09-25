import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { routing } from "@rawnaq/i18n/routing"
import { ForgotPasswordFlow, GuestOnlyGuard } from "@/features/auth"

export default async function ForgotPasswordPage({
  params,
}: PageProps<"/[locale]/forgot-password">) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <GuestOnlyGuard>
      <div className="mx-auto flex max-w-sm flex-col gap-6 p-6">
        <ForgotPasswordFlow />
      </div>
    </GuestOnlyGuard>
  )
}

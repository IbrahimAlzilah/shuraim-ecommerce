import { useTranslations } from "next-intl"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

export default function NotFound() {
  const t = useTranslations("NotFound")

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-medium">{t("title")}</h1>
      <p className="text-muted-foreground text-sm">{t("description")}</p>
      <Button asChild>
        <Link href="/">{t("backHome")}</Link>
      </Button>
    </div>
  )
}

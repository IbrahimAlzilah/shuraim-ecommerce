import { useLocale, useTranslations } from "next-intl"

import { localeDirection } from "@rawnaq/i18n/routing"
import { MessageCarousel } from "@rawnaq/ui/components/message-carousel"

export function AnnouncementBar() {
  const t = useTranslations("AnnouncementBar")
  const locale = useLocale()

  const messages = [t("message"), t("freeShipping"), t("returns")]

  return (
    <MessageCarousel
      messages={messages}
      dir={localeDirection[locale]}
      prevLabel={t("previous")}
      nextLabel={t("next")}
    />
  )
}

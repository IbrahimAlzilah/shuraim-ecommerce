import { CheckCircle, Mail } from "lucide-react"
import { useTranslations } from "next-intl"

import { Link } from "@rawnaq/i18n/navigation"
import { FooterSection } from "@/shared/layout/footer-section"
import { WhatsAppIcon } from "@rawnaq/ui/components/whatsapp-icon"

export function Footer() {
  const t = useTranslations("Footer")
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/20 text-foreground transition-colors">
      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:pt-12 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 sm:gap-8">
          {/* Brand & Bio */}
          <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-2">
            <Link href="/" className="inline-block group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.jpg"
                alt="Aigital Flower | Beauty, Accessories & Tech"
                className="h-10 sm:h-12 w-auto object-contain rounded-md dark:bg-white dark:p-1 transition-opacity group-hover:opacity-90"
              />
            </Link>
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {t("brandBio")}
            </p>
            <div className="flex flex-col gap-2 pt-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-emerald-600 shrink-0" />
                <span>{t("licensed")}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <FooterSection title={t("quickLinks")}>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors py-0.5 inline-block">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-primary transition-colors py-0.5 inline-block">
                  {t("shippingPolicy")}
                </Link>
              </li>
              <li>
                <Link href="/returns-policy" className="hover:text-primary transition-colors py-0.5 inline-block">
                  {t("returnsPolicy")}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors py-0.5 inline-block">
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors py-0.5 inline-block">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors py-0.5 inline-block">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </FooterSection>

          {/* Customer Service & WhatsApp */}
          <div className="flex flex-col gap-3 sm:col-span-1 md:col-span-1 pt-1 sm:pt-0">
            <h4 className="text-sm font-bold text-foreground">{t("customerService")}</h4>
            <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <p className="leading-relaxed">{t("customerServiceNote")}</p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border bg-background p-2.5 font-medium text-foreground hover:border-primary transition-colors"
              >
                <WhatsAppIcon className="size-4 text-[#25D366] shrink-0" />
                <div className="flex flex-col text-start">
                  <span className="font-bold text-emerald-600">{t("whatsappSupport")}</span>
                  <span className="text-[11px] text-muted-foreground">{t("instantReply")}</span>
                </div>
              </a>

              <a
                href="mailto:care@adigitalflower.com"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground pt-1"
              >
                <Mail className="size-3.5" />
                <span>care@adigitalflower.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Gateways */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row text-xs text-muted-foreground text-center sm:text-start">
          <p>{t("copyright", { year })}</p>

          {/* Payment Method Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="rounded-md border bg-background px-2 py-1 font-bold text-[10px] text-foreground">
              {t("paymentBadges.kuraimi")}
            </span>
            <span className="rounded-md border bg-background px-2 py-1 font-bold text-[10px] text-foreground">
              {t("paymentBadges.floosak")}
            </span>
            <span className="rounded-md border bg-background px-2 py-1 font-bold text-[10px] text-foreground">
              {t("paymentBadges.onecash")}
            </span>
            <span className="rounded-md border bg-background px-2 py-1 font-bold text-[10px] text-foreground">
              {t("paymentBadges.cards")}
            </span>
            <span className="rounded-md border bg-background px-2 py-1 text-[10px] text-foreground">
              {t("cod")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

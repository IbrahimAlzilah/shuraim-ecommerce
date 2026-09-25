import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

import "@rawnaq/ui/globals.css"
import { ThemeProvider } from "@/shared/providers/theme-provider"
import { AnnouncementBar } from "@/shared/layout/announcement-bar"
import { Header } from "@/shared/layout/header"
import { Footer } from "@/shared/layout/footer"
import { MobileBottomBar } from "@/shared/layout/mobile-bottom-bar"
import { CartDrawer } from "@/features/cart"
import { AuthModal } from "@/features/auth"
import { SearchDrawer } from "@/features/search-filters"
import { getProducts } from "@/features/catalog"
import { fontMono, kufi } from "@/fonts"
import { localeDirection, routing } from "@rawnaq/i18n/routing"
import { cn } from "@rawnaq/ui/lib/utils"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const t = await getTranslations({ locale, namespace: "Metadata" })

  return { title: t("title"), description: t("description") }
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const { items: allProducts } = await getProducts()

  return (
    <html
      lang={locale}
      dir={localeDirection[locale]}
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", kufi.variable, fontMono.variable)}
    >
      <body suppressHydrationWarning>
        <NextIntlClientProvider>
          <ThemeProvider>
            <div className="flex min-h-svh flex-col pb-16 md:pb-0">
              <AnnouncementBar />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CartDrawer />
              <AuthModal />
              <SearchDrawer allProducts={allProducts} />
              <MobileBottomBar />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

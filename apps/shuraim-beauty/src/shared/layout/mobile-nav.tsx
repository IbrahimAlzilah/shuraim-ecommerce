"use client"

import type { NavItem } from "@/features/catalog"
import { Menu, X, ChevronDown, Sparkles, Tag, HelpCircle, Phone, Globe } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"
import { LocaleSwitcher } from "@/shared/layout/locale-switcher"

export function MobileNav({ nav }: { nav: NavItem[] }) {
  const t = useTranslations("Header")
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  function close() {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={t("menu")}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <Menu className="size-5" />
      </Button>

      {isOpen && mounted && createPortal(
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={close}
          />

          {/* Drawer Panel */}
          <div className="relative flex h-dvh w-[85%] max-w-sm flex-col bg-background shadow-2xl animate-in slide-in-from-start duration-300 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-4 py-3 shrink-0">
              <Link href="/" onClick={close} className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.jpg"
                  alt="شريم | Shuraim Beauty"
                  className="h-8 w-auto object-contain rounded-md dark:bg-white dark:p-0.5"
                />
              </Link>
              <Button variant="ghost" size="icon-sm" onClick={close} aria-label={t("close")}>
                <X className="size-5" />
              </Button>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-2 border-b bg-muted/30 p-3 shrink-0">
              <Link
                href="/products?category=bundles"
                onClick={close}
                className="flex items-center gap-1.5 rounded-lg border bg-background p-2 text-xs font-medium text-foreground hover:border-primary transition-colors"
              >
                <Tag className="size-3.5 text-primary shrink-0" />
                <span className="truncate">{t("bundles")}</span>
              </Link>
              <Link
                href="/products"
                onClick={close}
                className="flex items-center gap-1.5 rounded-lg border bg-background p-2 text-xs font-medium text-foreground hover:border-primary transition-colors"
              >
                <Sparkles className="size-3.5 text-amber-500 shrink-0" />
                <span className="truncate">{t("newArrivals")}</span>
              </Link>
            </div>

            {/* Language */}
            <div className="flex items-center justify-between border-b px-4 py-3 shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-medium text-foreground">
                <Globe className="size-3.5 text-primary shrink-0" />
                <span>{t("language")}</span>
              </div>
              <LocaleSwitcher />
            </div>

            {/* Navigation Categories List */}
            <div className="flex-1 overflow-y-auto p-4 overscroll-contain">
              <p className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {t("allCategories")}
              </p>
              <nav className="flex flex-col gap-1 text-sm">
                {nav.map((item) =>
                  item.columns && item.columns.length > 0 ? (
                    <details key={item.id} className="group rounded-lg border border-transparent hover:border-border">
                      <summary className="flex cursor-pointer items-center justify-between py-2.5 px-2 font-medium text-foreground transition-colors hover:text-primary list-none">
                        <span>{item.label}</span>
                        <ChevronDown className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="flex flex-col gap-2 pb-3 ps-4 pt-1 border-s-2 border-primary/20 ms-2">
                        <Link
                          href={item.href}
                          onClick={close}
                          className="text-xs font-semibold text-primary py-1"
                        >
                          {t("viewAll", { category: item.label })}
                        </Link>
                        {item.columns.map((column) => (
                          <div key={column.id} className="flex flex-col gap-1">
                            <Link
                              href={column.href}
                              onClick={close}
                              className="text-xs font-medium text-foreground hover:text-primary py-0.5"
                            >
                              {column.label}
                            </Link>
                            {column.children.map((leaf) => (
                              <Link
                                key={leaf.id}
                                href={leaf.href}
                                onClick={close}
                                className="text-xs text-muted-foreground hover:text-foreground ps-2 py-0.5"
                              >
                                {leaf.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={close}
                      className="rounded-lg px-2 py-2.5 font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
            </div>

            {/* Footer Support Info */}
            <div className="border-t bg-muted/20 p-4 text-xs text-muted-foreground shrink-0 pb-[calc(1rem+env(safe-area-inset-bottom,0))]">
              <div className="flex items-center gap-2 mb-2 font-medium text-foreground">
                <HelpCircle className="size-4 text-primary shrink-0" />
                <span>{t("needHelp")}</span>
              </div>
              <p className="mb-2 leading-relaxed">{t("helpDescription")}</p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 hover:underline"
              >
                <Phone className="size-3.5 shrink-0" />
                <span>{t("chatWhatsapp")}</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
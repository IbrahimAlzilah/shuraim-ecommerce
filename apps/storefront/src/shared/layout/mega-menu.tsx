"use client"

import type { NavItem } from "@/features/catalog"
import { Sparkles, Tag, ChevronDown, ArrowLeft, Award } from "lucide-react"
import { useTranslations } from "next-intl"
import { useRef, useState } from "react"

import { Link } from "@rawnaq/i18n/navigation"

const CLOSE_DELAY_MS = 150

export function MegaMenu({ items }: { items: NavItem[] }) {
  const t = useTranslations("Header")
  const [openId, setOpenId] = useState<string | null>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  function scheduleClose() {
    closeTimeout.current = setTimeout(() => setOpenId(null), CLOSE_DELAY_MS)
  }

  function cancelClose() {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
  }

  return (
    <nav
      aria-label={t("categories")}
      className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 text-sm"
    >
      <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
        {items.map((item) => {
          const isOffers = item.label.includes("عروض") || item.label.includes("بكجات")
          const isKorean = item.label.includes("كورية") || item.label.includes("Korean")
          const isBrands = item.label.includes("ماركات") || item.label.includes("Brands")

          if (!item.columns || item.columns.length === 0) {
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${isOffers
                  ? "bg-destructive/10 text-destructive hover:bg-destructive/20"
                  : isBrands
                    ? "text-primary hover:bg-primary/5"
                    : "text-foreground hover:bg-muted"
                  }`}
              >
                {isOffers && <Tag className="size-3.5" />}
                {isBrands && <Award className="size-3.5" />}
                <span>{item.label}</span>
              </Link>
            )
          }

          const isOpen = openId === item.id

          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => {
                cancelClose()
                setOpenId(item.id)
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`mega-panel-${item.id}`}
                onClick={() => setOpenId((current) => (current === item.id ? null : item.id))}
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${isOpen
                  ? "bg-primary text-primary-foreground"
                  : isKorean
                    ? "text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30"
                    : "text-foreground hover:bg-muted"
                  }`}
              >
                {isKorean && <Sparkles className="size-3.5" />}
                <span>{item.label}</span>
                <ChevronDown
                  className={`size-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Mega Dropdown Panel */}
              <div
                id={`mega-panel-${item.id}`}
                hidden={!isOpen}
                className="bg-background border-border absolute start-0 top-full z-50 mt-1 flex min-w-[42rem] max-w-4xl gap-8 rounded-2xl border p-6 shadow-2xl ring-1 ring-black/5 animate-in fade-in-0 zoom-in-95 duration-200"
              >
                {/* Columns Grid */}
                <div className="grid flex-1 grid-cols-2 md:grid-cols-3 gap-6">
                  {item.columns.map((column) => (
                    <div key={column.id} className="flex flex-col gap-2">
                      <Link
                        href={column.href}
                        onClick={() => setOpenId(null)}
                        className="text-xs font-bold text-foreground hover:text-primary transition-colors border-b pb-1.5 flex items-center justify-between"
                      >
                        <span>{column.label}</span>
                        <ArrowLeft className="size-3 text-muted-foreground rtl:rotate-0 rotate-180" />
                      </Link>
                      <div className="flex flex-col gap-1.5 pt-1">
                        {column.children.map((leaf) => (
                          <Link
                            key={leaf.id}
                            href={leaf.href}
                            onClick={() => setOpenId(null)}
                            className="text-xs text-muted-foreground hover:text-primary transition-colors py-0.5"
                          >
                            {leaf.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Card Inside Mega Menu */}
                <div className="hidden lg:flex w-52 flex-col justify-between rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-muted/40 p-4 border border-primary/15 text-start">
                  <div>
                    <span className="inline-block rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary mb-2">
                      مختارات شريم
                    </span>
                    <h4 className="text-xs font-bold text-foreground mb-1 leading-snug">
                      أحدث مستحضرات العناية والجمال الأصلية
                    </h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      تركيبات معتمدة طبياً وعالمياً لنتائج ملموسة لبشرتكِ.
                    </p>
                  </div>
                  <Link
                    href={item.href}
                    onClick={() => setOpenId(null)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline pt-3"
                  >
                    <span>عرض كافة المنتجات</span>
                    <ArrowLeft className="size-3.5 rtl:rotate-0 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Direct Quick Link on Mega Bar End */}
      <div className="hidden lg:flex items-center gap-4 text-xs font-semibold text-muted-foreground">
        <Link
          href="/products?category=bundles"
          className="flex items-center gap-1.5 text-destructive hover:underline"
        >
          <Tag className="size-3.5" />
          <span>عروض اليوم الوطني والتوفير</span>
        </Link>
      </div>
    </nav>
  )
}

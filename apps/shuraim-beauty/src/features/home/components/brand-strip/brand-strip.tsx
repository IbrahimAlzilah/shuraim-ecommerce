import type { Brand } from "@rawnaq/types"
import { Sparkles } from "lucide-react"
import { getTranslations } from "next-intl/server"

import { Link } from "@rawnaq/i18n/navigation"
import { Rail } from "@rawnaq/ui/components/rail"

export async function BrandStrip({ brands }: { brands: Brand[] }) {
  const t = await getTranslations("Home")

  if (brands.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-xl font-bold tracking-tight text-foreground">{t("brands.title")}</h2>
        </div>
        <Link
          href="/products"
          className="text-xs font-semibold text-primary hover:underline"
        >
          عرض جميع الماركات ←
        </Link>
      </div>

      <Rail
        label={t("brands.title")}
        prevLabel={t("rail.previous")}
        nextLabel={t("rail.next")}
      >
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/products?brand=${brand.slug}`}
            className="group flex h-24 w-44 shrink-0 flex-col items-center justify-center rounded-2xl border bg-card p-3 text-center shadow-xs transition-all hover:border-primary hover:bg-primary/5 hover:shadow-md"
          >
            <span className="font-bold text-foreground text-sm tracking-wide group-hover:text-primary transition-colors">
              {brand.name}
            </span>
            <span className="mt-1 line-clamp-1 text-[11px] text-muted-foreground">
              {brand.description ?? "منتجات أصلية"}
            </span>
          </Link>
        ))}
      </Rail>
    </section>
  )
}

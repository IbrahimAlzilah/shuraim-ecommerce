import { ProductCard } from "@/features/catalog"
import { getTranslations } from "next-intl/server"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"
import { Rail } from "@rawnaq/ui/components/rail"

import type { FlashDeal } from "../../types/home"

export async function FlashDealsSection({ deals }: { deals: FlashDeal[] }) {
  const t = await getTranslations("Home")

  if (deals.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight text-foreground">{t("flashDeals.title")}</h2>
        <Button variant="link" asChild className="text-xs sm:text-sm">
          <Link href="/products">{t("flashDeals.viewAll")}</Link>
        </Button>
      </div>
      <Rail
        label={t("flashDeals.title")}
        prevLabel={t("rail.previous")}
        nextLabel={t("rail.next")}
      >
        {deals.map((deal) => (
          <div key={deal.product.id} className="w-[180px] sm:w-[220px] md:w-[240px] shrink-0">
            <ProductCard product={deal.product} />
          </div>
        ))}
      </Rail>
    </section>
  )
}

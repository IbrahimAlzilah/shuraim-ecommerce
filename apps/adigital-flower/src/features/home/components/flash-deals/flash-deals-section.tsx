import { ProductCard } from "@/features/catalog"
import { getTranslations } from "next-intl/server"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

import type { FlashDeal } from "../../types/home"

export async function FlashDealsSection({ deals }: { deals: FlashDeal[] }) {
  const t = await getTranslations("Home")

  if (deals.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">{t("flashDeals.title")}</h2>
        <Button variant="link" asChild>
          <Link href="/products">{t("flashDeals.viewAll")}</Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {deals.map((deal) => (
          <ProductCard key={deal.product.id} product={deal.product} />
        ))}
      </div>
    </section>
  )
}

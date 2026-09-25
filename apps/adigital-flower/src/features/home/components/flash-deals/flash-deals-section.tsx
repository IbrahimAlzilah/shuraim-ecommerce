import { ProductCard } from "@/features/catalog"
import { getTranslations } from "next-intl/server"

import { Link } from "@rawnaq/i18n/navigation"
import {
  SectionCarousel,
  SectionCarouselItem,
} from "@rawnaq/ui/components/section-carousel"

import type { FlashDeal } from "../../types/home"

export async function FlashDealsSection({ deals }: { deals: FlashDeal[] }) {
  const t = await getTranslations("Home")

  if (deals.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-foreground">
          {t("flashDeals.title")}
        </h2>
        <Link href="/products" className="text-sm font-medium text-primary hover:underline">
          {t("flashDeals.viewAll")}
        </Link>
      </div>
      <SectionCarousel>
        {deals.map((deal) => (
          <SectionCarouselItem
            key={deal.product.id}
            className="basis-[46%] sm:basis-[46%] md:basis-[31%] lg:basis-[20%] xl:basis-[20%]"
          >
            <ProductCard product={deal.product} />
          </SectionCarouselItem>
        ))}
      </SectionCarousel>
    </section>
  )
}

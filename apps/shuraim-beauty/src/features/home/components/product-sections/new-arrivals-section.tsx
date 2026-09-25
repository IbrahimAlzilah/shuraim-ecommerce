import type { Product } from "@rawnaq/types"
import { getTranslations } from "next-intl/server"

import { Link } from "@rawnaq/i18n/navigation"
import { ProductCard } from "@/features/catalog"
import {
  SectionCarousel,
  SectionCarouselItem,
} from "@rawnaq/ui/components/section-carousel"

export async function NewArrivalsSection({ products }: { products: Product[] }) {
  const t = await getTranslations("Home")

  if (products.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-foreground">
          {t("productSections.newArrivals")}
        </h2>
        <Link
          href="/products?sort=newest"
          className="text-sm font-medium text-primary hover:underline"
        >
          {t("productSections.viewAll")}
        </Link>
      </div>
      <SectionCarousel>
        {products.map((product) => (
          <SectionCarouselItem
            key={product.id}
            className="basis-[46%] sm:basis-[46%] md:basis-[31%] lg:basis-[20%] xl:basis-[20%]"
          >
            <ProductCard product={product} />
          </SectionCarouselItem>
        ))}
      </SectionCarousel>
    </section>
  )
}

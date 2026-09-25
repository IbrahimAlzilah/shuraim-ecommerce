import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { Star, Truck, ShieldCheck, RotateCcw, Gift, ChevronRight } from "lucide-react"

import { AddToCartButton } from "@/features/cart"
import { ProductReviewsSection } from "@/features/reviews"
import { WishlistButton } from "@/features/wishlist"
import { Link } from "@rawnaq/i18n/navigation"

import { getProductBySlug } from "../../api/get-product-by-slug"
import { ProductGallery } from "../product-gallery"
import { ProductPrice } from "../product-price"
import { ProductVariantsSelector } from "../product-variants-selector"
import { StockBadge } from "../stock-badge"
import { StickyMobileBuyBar } from "../sticky-mobile-buy-bar"

export async function ProductDetailsView({ slug }: { slug: string }) {
  const t = await getTranslations("Catalog")
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const hasDiscount =
    product.price.compareAtAmount !== undefined &&
    product.price.compareAtAmount > product.price.amount

  const discountPercent = hasDiscount
    ? Math.round((1 - product.price.amount / (product.price.compareAtAmount as number)) * 100)
    : 0

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8 lg:gap-10 px-4 py-4 sm:px-6 sm:py-6 lg:py-8 pb-16 md:pb-8">
      {/* Breadcrumbs */}
      <nav aria-label={t("breadcrumbAria")} className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-primary transition-colors">
          {t("breadcrumbHome")}
        </Link>
        <ChevronRight className="size-3 rtl:rotate-180" />
        <Link href="/products" className="hover:text-primary transition-colors">
          {t("breadcrumbProducts")}
        </Link>
        <ChevronRight className="size-3 rtl:rotate-180" />
        <span className="line-clamp-1 font-medium text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-12 items-start">
        {/* Product Gallery */}
        <div className="sticky top-24">
          <ProductGallery images={product.images} />
        </div>

        {/* Product Main Info */}
        <div className="flex flex-col gap-5">
          {/* Brand & Wishlist header */}
          <div className="flex items-center justify-between gap-4">
            {product.subtitle ? (
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {product.subtitle}
              </span>
            ) : (
              <span className="text-xs font-semibold text-muted-foreground">{t("authenticProduct")}</span>
            )}
            <div className="rounded-full border bg-background/80 shadow-xs">
              <WishlistButton productId={product.id} />
            </div>
          </div>

          {/* Product Title */}
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
            {product.name}
          </h1>

          {/* Rating summary */}
          {product.rating && (
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="size-4 fill-current" />
                <span className="font-bold text-foreground">{product.rating.average}</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <a href="#reviews" className="text-muted-foreground hover:underline">
                {t("basedOnReviews", { count: product.rating.count })}
              </a>
            </div>
          )}

          {/* Price Box */}
          <div className="rounded-xl border bg-muted/20 p-4">
            <div className="flex flex-wrap items-baseline gap-3">
              <ProductPrice price={product.price} />
              {hasDiscount && (
                <span className="rounded-md bg-destructive/10 px-2 py-0.5 text-xs font-bold text-destructive">
                  {t("savedPercent", { percent: discountPercent })}
                </span>
              )}
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">
              {t("vatIncluded")}
            </p>
          </div>

          {/* Stock Availability */}
          <div className="flex items-center gap-2">
            <StockBadge product={product} />
            {product.stockCount && product.stockCount <= 5 && product.inStock && (
              <span className="text-xs font-semibold text-destructive">
                {t("lowStockWarning", { count: product.stockCount })}
              </span>
            )}
          </div>

          {/* Variants Selector */}
          <ProductVariantsSelector product={product} />

          {/* Description */}
          {product.description && (
            <div className="border-t pt-4">
              <h3 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {t("aboutProduct")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2">
            <AddToCartButton
              product={product}
              size="lg"
              className="w-full text-base font-bold shadow-md"
            />
          </div>

          {/* Trust and Delivery Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 rounded-xl border bg-muted/10 p-3.5 text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Truck className="size-4 text-primary shrink-0" />
              <span>{t("fastShipping")}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Gift className="size-4 text-amber-500 shrink-0" />
              <span>{t("freeShippingPerk")}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
              <span>{t("guaranteedAuthentic")}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <RotateCcw className="size-4 text-primary shrink-0" />
              <span>{t("easyReturns")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Buy Bar */}
      <StickyMobileBuyBar product={product} />

      {/* Reviews Section */}
      <div id="reviews" className="border-t pt-8">
        <ProductReviewsSection productId={product.id} />
      </div>
    </div>
  )
}


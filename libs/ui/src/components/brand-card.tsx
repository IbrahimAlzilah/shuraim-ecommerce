import * as React from "react"
import { cn } from "cn"

export interface BrandCardData {
  id?: string
  slug?: string
  name: string
  description?: string
  logo?: string
  image?: string
  productImage?: string
  featured?: boolean
}

export interface BrandCardProps extends React.HTMLAttributes<HTMLElement> {
  brand?: BrandCardData
  name?: string
  slug?: string
  logo?: string
  image?: string
  productImage?: string
  description?: string
  href?: string
  variant?: "stacked" | "floating"
  linkComponent?: React.ElementType
}

export const BrandCard = React.forwardRef<HTMLElement, BrandCardProps>(
  (
    {
      brand,
      name,
      slug,
      logo,
      image,
      productImage,
      description,
      href,
      variant = "stacked",
      linkComponent,
      className,
      ...props
    },
    ref
  ) => {
    const displayName = name ?? brand?.name ?? ""
    const displayLogo = logo ?? brand?.logo
    // Prioritize representative product image, fallback to image banner
    const displayProductImage =
      productImage ?? brand?.productImage ?? image ?? brand?.image
    const targetHref = href ?? (brand?.slug || slug ? `/products?brand=${brand?.slug ?? slug}` : undefined)

    const cardContent = (
      <>
        {/* Representative Product Image (Top Section) */}
        <div className="relative aspect-square w-full overflow-hidden bg-muted/15 p-3 sm:p-4 flex items-center justify-center transition-colors group-hover:bg-muted/25">
          {displayProductImage ? (
            <img
              src={displayProductImage}
              alt={displayName}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground/30 font-bold text-3xl">
              {displayName ? displayName.charAt(0) : "★"}
            </div>
          )}
        </div>

        {/* Brand Logo (Positioned Underneath, No Brand Name Text) */}
        {variant === "floating" ? (
          <div className="relative z-10 flex items-center justify-center px-2 pb-2.5 pt-1">
            <div className="-mt-5 flex h-9 w-24 sm:w-28 items-center justify-center rounded-full border border-border/80 bg-card/95 px-2.5 py-1 shadow-xs backdrop-blur-xs transition-transform duration-300 group-hover:scale-105">
              {displayLogo ? (
                <img
                  src={displayLogo}
                  alt={`${displayName} logo`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <span className="font-bold text-[11px] text-foreground truncate">
                  {displayName}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="flex h-12 sm:h-14 items-center justify-center border-t border-border/60 bg-card px-3 py-2 transition-colors group-hover:bg-muted/15">
            {displayLogo ? (
              <div className="relative flex h-8 sm:h-9 w-full items-center justify-center">
                <img
                  src={displayLogo}
                  alt={`${displayName} logo`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ) : (
              <span className="font-bold text-foreground text-xs sm:text-sm tracking-wide group-hover:text-primary transition-colors line-clamp-1">
                {displayName}
              </span>
            )}
          </div>
        )}
      </>
    )

    const baseClass = cn(
      "group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card text-center shadow-xs transition-all duration-300 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      className
    )

    if (linkComponent && targetHref) {
      const CustomLink = linkComponent
      return (
        <CustomLink
          ref={ref as React.Ref<unknown>}
          href={targetHref}
          className={baseClass}
          {...props}
        >
          {cardContent}
        </CustomLink>
      )
    }

    if (targetHref) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={targetHref}
          className={baseClass}
          {...props}
        >
          {cardContent}
        </a>
      )
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={baseClass}
        {...props}
      >
        {cardContent}
      </div>
    )
  }
)

BrandCard.displayName = "BrandCard"

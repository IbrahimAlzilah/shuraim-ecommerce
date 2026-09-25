"use client"

import type { ProductImage } from "@rawnaq/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@rawnaq/ui/components/button"
import { cn } from "@rawnaq/ui/lib/utils"

import { useProductGallery } from "../hooks/use-product-gallery"

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const t = useTranslations("Catalog")
  const { activeIndex, activeImage, select, next, previous } =
    useProductGallery(images)

  if (!activeImage) {
    return null
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeImage.url}
          alt={activeImage.alt ?? ""}
          className="aspect-square w-full rounded-lg object-cover"
        />
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon-sm"
              aria-label={t("previousImage")}
              className="absolute start-2 top-1/2 -translate-y-1/2"
              onClick={previous}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="secondary"
              size="icon-sm"
              aria-label={t("nextImage")}
              className="absolute end-2 top-1/2 -translate-y-1/2"
              onClick={next}
            >
              <ChevronRight />
            </Button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={image.url}
              aria-label={t("selectImage", { index: index + 1 })}
              onClick={() => select(index)}
              className={cn(
                "size-14 overflow-hidden rounded-md ring-1",
                index === activeIndex ? "ring-primary" : "ring-border"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.url}
                alt={image.alt ?? ""}
                className="size-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

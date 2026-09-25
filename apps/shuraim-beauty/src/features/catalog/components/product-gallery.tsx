"use client"

import type { ProductImage } from "@rawnaq/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { useRef } from "react"

import { Button } from "@rawnaq/ui/components/button"
import { cn } from "@rawnaq/ui/lib/utils"

import { useProductGallery } from "../hooks/use-product-gallery"

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const t = useTranslations("Catalog")
  const { activeIndex, activeImage, select, next, previous } =
    useProductGallery(images)
  const touchStartX = useRef<number | null>(null)

  function handleTouchStart(e: React.TouchEvent) {
    const touch = e.touches[0]
    if (touch) {
      touchStartX.current = touch.clientX
    }
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const touch = e.changedTouches[0]
    if (!touch) return
    const deltaX = touch.clientX - touchStartX.current
    const threshold = 40
    if (Math.abs(deltaX) > threshold) {
      const isRtl = typeof document !== "undefined" && document.documentElement.dir === "rtl"
      if (deltaX > 0) {
        if (isRtl) {
          next()
        } else {
          previous()
        }
      } else {
        if (isRtl) {
          previous()
        } else {
          next()
        }
      }
    }
    touchStartX.current = null
  }

  if (!activeImage) {
    return null
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeImage.url}
          alt={activeImage.alt ?? ""}
          className="aspect-square w-full rounded-lg object-cover select-none"
        />
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon-sm"
              aria-label={t("previousImage")}
              className="absolute inset-s-2 top-1/2 -translate-y-1/2"
              onClick={previous}
            >
              <ChevronLeft className="rtl:rotate-180" />
            </Button>
            <Button
              variant="secondary"
              size="icon-sm"
              aria-label={t("nextImage")}
              className="absolute inset-e-2 top-1/2 -translate-y-1/2"
              onClick={next}
            >
              <ChevronRight className="rtl:rotate-180" />
            </Button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {images.map((image, index) => (
            <button
              key={image.url}
              aria-label={t("selectImage", { index: index + 1 })}
              onClick={() => select(index)}
              className={cn(
                "size-14 shrink-0 overflow-hidden rounded-md ring-1 transition-all",
                index === activeIndex ? "ring-2 ring-primary" : "ring-border hover:ring-muted-foreground/50"
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

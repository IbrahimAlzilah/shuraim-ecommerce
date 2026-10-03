"use client"

import type { ProductImage } from "@rawnaq/types"
import { useTranslations } from "next-intl"
import { useRef } from "react"

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
    <div className="flex flex-col gap-3">
      <div
        className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-muted/10 touch-pan-y shadow-xs"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeImage.url}
          alt={activeImage.alt ?? ""}
          className="size-full object-cover select-none"
        />

        {images.length > 1 && (
          <span className="absolute bottom-3 end-3 rounded-full bg-background/85 px-2.5 py-0.5 text-xs font-semibold text-foreground/80 shadow-xs border border-border/50 backdrop-blur-xs">
            {activeIndex + 1} / {images.length}
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center items-center gap-2.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
          {images.map((image, index) => (
            <button
              key={image.url}
              aria-label={t("selectImage", { index: index + 1 })}
              onClick={() => select(index)}
              className={cn(
                "relative size-16 sm:size-20 shrink-0 overflow-hidden rounded-xl border bg-muted/10 transition-all duration-200",
                index === activeIndex
                  ? "border-primary ring-2 ring-primary/40 shadow-xs"
                  : "border-border/70 opacity-70 hover:opacity-100 hover:border-primary/50"
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

"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@rawnaq/ui/components/carousel"
import { cn } from "@rawnaq/ui/lib/utils"

import type { HomeBanner } from "../../types/home"
import { HeroSlideItem } from "./hero-slide-item"

export function HeroSlider({ banners }: { banners: HomeBanner[] }) {
  const t = useTranslations("Home")
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    queueMicrotask(() => {
      onSelect()
    })

    api.on("select", onSelect)

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)

    return () => {
      api.off("select", onSelect)
      clearInterval(interval)
    }
  }, [api])

  if (banners.length === 0) {
    return null
  }

  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="group relative overflow-hidden rounded-2xl bg-muted shadow-xs"
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <HeroSlideItem banner={banner} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Hover Arrows matching reference */}
        {banners.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="absolute inset-s-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-foreground shadow-md opacity-0 group-hover:opacity-100 hover:bg-white hover:text-primary transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label={t("hero.previous")}
            >
              <ChevronLeft className="size-5 rtl:rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="absolute inset-e-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-foreground shadow-md opacity-0 group-hover:opacity-100 hover:bg-white hover:text-primary transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label={t("hero.next")}
            >
              <ChevronRight className="size-5 rtl:rotate-180" />
            </button>

            {/* Indicators matching reference */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    i === current ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                  )}
                  aria-label={t("hero.goTo", { index: i + 1 })}
                />
              ))}
            </div>
          </>
        )}
      </Carousel>
    </section>
  )
}

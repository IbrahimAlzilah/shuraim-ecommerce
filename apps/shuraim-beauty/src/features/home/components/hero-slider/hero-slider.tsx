"use client"

import type { HomeBanner } from "../../types/home"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { Button } from "@rawnaq/ui/components/button"
import { cn } from "@rawnaq/ui/lib/utils"

import { HeroSlideItem } from "./hero-slide-item"

export function HeroSlider({ banners }: { banners: HomeBanner[] }) {
  const t = useTranslations("Home")
  const [activeIndex, setActiveIndex] = useState(0)

  const activeBanner = banners[activeIndex]

  if (!activeBanner) {
    return null
  }

  function go(index: number) {
    setActiveIndex((index + banners.length) % banners.length)
  }

  return (
    <div className="relative">
      <HeroSlideItem banner={activeBanner} />

      {banners.length > 1 && (
        <>
          <Button
            variant="secondary"
            size="icon-sm"
            aria-label={t("hero.previous")}
            className="absolute inset-s-2 top-1/2 -translate-y-1/2"
            onClick={() => go(activeIndex - 1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="secondary"
            size="icon-sm"
            aria-label={t("hero.next")}
            className="absolute inset-e-2 top-1/2 -translate-y-1/2"
            onClick={() => go(activeIndex + 1)}
          >
            <ChevronRight />
          </Button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {banners.map((banner, index) => (
              <button
                key={banner.id}
                aria-label={t("hero.goTo", { index: index + 1 })}
                onClick={() => go(index)}
                className={cn(
                  "size-1.5 rounded-full",
                  index === activeIndex ? "bg-white" : "bg-white/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

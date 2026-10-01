"use client"

import * as React from "react"
import { cn } from "cn"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel"

export type SectionCarouselProps<T = unknown> = {
  children?: React.ReactNode
  items?: T[]
  renderItem?: (item: T, index: number) => React.ReactNode
  itemClassName?: string
  className?: string
  dir?: "rtl" | "ltr"
  prevLabel?: string
  nextLabel?: string
}

export function SectionCarousel<T>({
  children,
  items,
  renderItem,
  itemClassName = "basis-[80%] sm:basis-[45%] md:basis-[33.33%] lg:basis-[25%]",
  className,
  dir,
  prevLabel = "Previous",
  nextLabel = "Next",
}: SectionCarouselProps<T>) {
  const hasItems = items && items.length > 0
  const hasChildren = Boolean(children)

  if (!hasItems && !hasChildren) {
    return null
  }

  return (
    <div className={cn("relative w-full", className)}>
      <Carousel
        dir={dir}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        {/* The viewport must clip for scrolling, so pad it (and cancel the padding with
            negative margins) to leave room for card borders and shadows. */}
        <CarouselContent
          className="-ms-3 md:-ms-4"
          viewportClassName="-mx-1.5 -my-2 px-1.5 py-2"
        >
          {children}
          {hasItems &&
            renderItem &&
            items.map((item, index) => (
              <SectionCarouselItem key={index} className={itemClassName}>
                {renderItem(item, index)}
              </SectionCarouselItem>
            ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious
            aria-label={prevLabel}
            className="absolute top-1/2 -translate-y-1/2 active:-translate-y-1/2 -start-2 lg:-start-4 size-10 border border-primary/20 bg-background/90 text-primary shadow-xs backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-0"
          />
          <CarouselNext
            aria-label={nextLabel}
            className="absolute top-1/2 -translate-y-1/2 active:-translate-y-1/2 -end-2 lg:-end-4 size-10 border border-primary/20 bg-background/90 text-primary shadow-xs backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-0"
          />
        </div>
      </Carousel>
    </div>
  )
}

export function SectionCarouselItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CarouselItem>) {
  return (
    <CarouselItem className={cn("ps-3 md:ps-4", className)} {...props}>
      {children}
    </CarouselItem>
  )
}

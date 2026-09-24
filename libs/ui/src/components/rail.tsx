"use client"

import * as React from "react"
import { cn } from "cn"
import { ChevronRight } from "lucide-react"

function Rail({
  label,
  prevLabel = "Previous",
  nextLabel = "Next",
  children,
  className,
}: {
  label: string
  prevLabel?: string
  nextLabel?: string
  children: React.ReactNode
  className?: string
}) {
  const scrollerRef = React.useRef<HTMLDivElement>(null)
  const [edges, setEdges] = React.useState({ start: true, end: false })

  const updateEdges = React.useCallback(() => {
    const el = scrollerRef.current
    if (!el) return

    const isRtl = getComputedStyle(el).direction === "rtl"
    const scrollLeft = Math.abs(el.scrollLeft)
    const maxScroll = el.scrollWidth - el.clientWidth

    if (maxScroll <= 0) {
      setEdges({ start: true, end: true })
      return
    }

    setEdges(
      isRtl
        ? { start: scrollLeft >= maxScroll - 1, end: scrollLeft <= 1 }
        : { start: scrollLeft <= 1, end: scrollLeft >= maxScroll - 1 }
    )
  }, [])

  React.useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    updateEdges()

    const resizeObserver = new ResizeObserver(updateEdges)
    resizeObserver.observe(el)
    el.addEventListener("scroll", updateEdges, { passive: true })

    return () => {
      resizeObserver.disconnect()
      el.removeEventListener("scroll", updateEdges)
    }
  }, [updateEdges])

  function scrollByDirection(direction: "prev" | "next") {
    const el = scrollerRef.current
    if (!el) return

    const isRtl = getComputedStyle(el).direction === "rtl"
    const amount = el.clientWidth * 0.8
    const sign = direction === "next" ? 1 : -1
    const rtlAdjustedSign = isRtl ? -sign : sign

    el.scrollBy({ left: rtlAdjustedSign * amount, behavior: "smooth" })
  }

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollerRef}
        role="group"
        aria-label={label}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {React.Children.map(children, (child) => (
          <div className="shrink-0 snap-start">{child}</div>
        ))}
      </div>

      {!edges.start && (
        <button
          type="button"
          aria-label={prevLabel}
          onClick={() => scrollByDirection("prev")}
          className="bg-background ring-foreground/10 absolute inset-s-0 top-1/2 hidden -translate-y-1/2 rounded-full p-1.5 shadow-md ring-1 sm:flex"
        >
          <ChevronRight className="rtl:rotate-0 size-4 rotate-180" />
        </button>
      )}

      {!edges.end && (
        <button
          type="button"
          aria-label={nextLabel}
          onClick={() => scrollByDirection("next")}
          className="bg-background ring-foreground/10 absolute inset-e-0 top-1/2 hidden -translate-y-1/2 rounded-full p-1.5 shadow-md ring-1 sm:flex"
        >
          <ChevronRight className="size-4 rtl:rotate-180" />
        </button>
      )}
    </div>
  )
}

export { Rail }

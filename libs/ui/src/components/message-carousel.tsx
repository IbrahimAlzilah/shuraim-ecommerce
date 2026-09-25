"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "cn"

const AUTO_ADVANCE_MS = 5000

function MessageCarousel({
  messages,
  dir = "ltr",
  prevLabel = "Previous",
  nextLabel = "Next",
  className,
}: {
  messages: string[]
  dir?: "ltr" | "rtl"
  prevLabel?: string
  nextLabel?: string
  className?: string
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (messages.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((index) => (index + 1) % messages.length)
    }, AUTO_ADVANCE_MS)

    return () => clearInterval(interval)
  }, [messages.length])

  if (messages.length === 0) {
    return null
  }

  function go(delta: 1 | -1) {
    setActiveIndex((index) => (index + delta + messages.length) % messages.length)
  }

  return (
    <div
      dir={dir}
      className={cn(
        "bg-primary text-primary-foreground relative flex h-10 items-center justify-center px-10 text-center text-xs font-medium sm:text-sm",
        className
      )}
    >
      <div className="relative w-full mx-auto max-w-7xl">
        {messages.length > 1 && (
          <button
            type="button"
            aria-label={prevLabel}
            onClick={() => go(-1)}
            className="absolute start-1 sm:start-4 top-1/2 -translate-y-1/2 rounded-full p-1 opacity-80 hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </button>
        )}

        <span key={activeIndex} className="block line-clamp-1 px-7 sm:px-12 text-center text-xs sm:text-sm">
          {messages[activeIndex]}
        </span>

        {messages.length > 1 && (
          <button
            type="button"
            aria-label={nextLabel}
            onClick={() => go(1)}
            className="absolute end-1 sm:end-4 top-1/2 -translate-y-1/2 rounded-full p-1 opacity-80 hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="size-4 rtl:rotate-180" />
          </button>
        )}
      </div>
    </div>
  )
}

export { MessageCarousel }

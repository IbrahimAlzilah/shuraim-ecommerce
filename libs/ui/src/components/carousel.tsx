"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "cn"

import { Button } from "./button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  dir?: "rtl" | "ltr"
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
  canScrollPrev: boolean
  canScrollNext: boolean
  activeIndex: number
  scrollSnaps: number[]
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  dir,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const direction: "rtl" | "ltr" =
    dir ||
    (opts?.direction as "rtl" | "ltr") ||
    (typeof document !== "undefined" && document.documentElement.dir === "rtl"
      ? "rtl"
      : "ltr")

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      direction: orientation === "horizontal" ? direction : undefined,
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const onSelect = React.useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setActiveIndex(emblaApi.selectedScrollSnap())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        if (direction === "rtl") {
          scrollNext()
        } else {
          scrollPrev()
        }
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        if (direction === "rtl") {
          scrollPrev()
        } else {
          scrollNext()
        }
      }
    },
    [direction, scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return

    const syncApi = (embla: CarouselApi) => {
      if (!embla) return
      setScrollSnaps(embla.scrollSnapList())
      onSelect(embla)
    }

    queueMicrotask(() => {
      syncApi(api)
    })

    api.on("reInit", syncApi)
    api.on("select", onSelect)

    return () => {
      api?.off("reInit", syncApi)
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        scrollTo,
        canScrollPrev,
        canScrollNext,
        activeIndex,
        scrollSnaps,
        dir: direction,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        dir={direction}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ms-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "ps-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 z-10 size-8 rounded-full",
        "inset-s-2",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="size-4 rtl:rotate-180" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 z-10 size-8 rounded-full",
        "inset-e-2",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="size-4 rtl:rotate-180" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

function CarouselDots({
  className,
  dotClassName,
  activeDotClassName,
  ...props
}: React.ComponentProps<"div"> & {
  dotClassName?: string
  activeDotClassName?: string
}) {
  const { scrollSnaps, activeIndex, scrollTo } = useCarousel()

  if (scrollSnaps.length <= 1) {
    return null
  }

  return (
    <div
      className={cn(
        "absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 z-10",
        className
      )}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === activeIndex ? "true" : undefined}
          onClick={() => scrollTo(index)}
          className={cn(
            "size-2 rounded-full transition-all duration-300",
            index === activeIndex
              ? cn("bg-primary w-5", activeDotClassName)
              : cn("bg-muted-foreground/30 hover:bg-muted-foreground/50", dotClassName)
          )}
        />
      ))}
    </div>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  useCarousel,
}

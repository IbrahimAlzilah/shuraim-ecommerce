import type { ProductImage } from "@rawnaq/types"
import { useState } from "react"

export function useProductGallery(images: ProductImage[]) {
  const [activeIndex, setActiveIndex] = useState(0)

  function select(index: number) {
    setActiveIndex(Math.max(0, Math.min(index, images.length - 1)))
  }

  function next() {
    select((activeIndex + 1) % images.length)
  }

  function previous() {
    select((activeIndex - 1 + images.length) % images.length)
  }

  return {
    activeIndex,
    activeImage: images[activeIndex],
    select,
    next,
    previous,
  }
}

import type { Product } from "@rawnaq/types"
import { useState } from "react"

import type { SelectedVariants } from "../types/catalog-ui"

export function useProductVariants(product: Product) {
  const [selected, setSelected] = useState<SelectedVariants>(() =>
    Object.fromEntries(
      (product.variants ?? []).map((group) => [
        group.name,
        group.options[0]?.id ?? "",
      ])
    )
  )

  function selectOption(groupName: string, optionId: string) {
    setSelected((current) => ({ ...current, [groupName]: optionId }))
  }

  const isComplete = (product.variants ?? []).every(
    (group) => selected[group.name]
  )

  return { selected, selectOption, isComplete }
}

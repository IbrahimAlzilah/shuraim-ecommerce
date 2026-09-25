"use client"

import type { Product } from "@rawnaq/types"

import { cn } from "@rawnaq/ui/lib/utils"

import { useProductVariants } from "../hooks/use-product-variants"

export function ProductVariantsSelector({ product }: { product: Product }) {
  const { selected, selectOption } = useProductVariants(product)

  if (!product.variants?.length) {
    return null
  }

  return (
    <div className="flex flex-col gap-3">
      {product.variants.map((group) => (
        <div key={group.name} className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">{group.label}</span>
          <div className="flex flex-wrap gap-2">
            {group.options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => selectOption(group.name, option.id)}
                className={cn(
                  "border-border rounded-md border px-3 py-1.5 text-sm",
                  selected[group.name] === option.id &&
                    "border-primary bg-primary/5"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

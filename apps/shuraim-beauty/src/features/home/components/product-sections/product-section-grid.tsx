import type { Product } from "@rawnaq/types"
import { ProductCard } from "@/features/catalog"

export function ProductSectionTabs({ products }: { products: Product[] }) {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4">
      {products.map((product) => (
        <div key={product.id} className="w-[180px] sm:w-auto shrink-0 snap-start h-full">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

import type { Product } from "@rawnaq/types"
import { ProductCard } from "@/features/catalog"

export function ProductSectionTabs({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

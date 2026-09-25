import type { ProductCategory } from "@rawnaq/types"

import { Link } from "@rawnaq/i18n/navigation"

export function CategoryCircleCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group flex flex-col items-center gap-2.5 text-center transition-transform hover:-translate-y-1"
    >
      <div className="relative size-20 sm:size-24 rounded-full overflow-hidden p-1 border-2 border-border/60 group-hover:border-primary/80 transition-all duration-300 shadow-xs group-hover:shadow-md bg-card">
        {category.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={category.image}
            alt={category.name}
            className="size-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="size-full flex items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
            {category.name.charAt(0)}
          </div>
        )}
      </div>
      <span className="text-xs sm:text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors max-w-[100px] line-clamp-2 leading-tight text-center">
        {category.name}
      </span>
    </Link>
  )
}


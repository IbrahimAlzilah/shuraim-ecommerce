import type { ProductCategory } from "@rawnaq/types"

export interface NavLeaf {
  id: string
  label: string
  href: string
}

export interface NavColumn extends NavLeaf {
  children: NavLeaf[]
}

export interface NavItem extends NavLeaf {
  columns?: NavColumn[]
}

function toLeaf(category: ProductCategory): NavLeaf {
  return { id: category.id, label: category.name, href: `/products?category=${category.slug}` }
}

export function buildNav(categories: ProductCategory[]): NavItem[] {
  const byParent = new Map<string | null, ProductCategory[]>()

  for (const category of categories) {
    const siblings = byParent.get(category.parentId) ?? []
    siblings.push(category)
    byParent.set(category.parentId, siblings)
  }

  const sortBySortOrder = (list: ProductCategory[]) =>
    [...list].sort((a, b) => a.sortOrder - b.sortOrder)

  const departments = sortBySortOrder(byParent.get(null) ?? [])

  return departments.map((department) => {
    const subCategories = sortBySortOrder(byParent.get(department.id) ?? [])

    if (subCategories.length === 0) {
      return toLeaf(department)
    }

    const columns: NavColumn[] = subCategories.map((subCategory) => ({
      ...toLeaf(subCategory),
      children: sortBySortOrder(byParent.get(subCategory.id) ?? []).map(toLeaf),
    }))

    return { ...toLeaf(department), columns }
  })
}

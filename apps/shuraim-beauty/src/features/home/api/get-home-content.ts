import { getBrands, getProducts } from "@/features/catalog"

import type { HomeContent } from "../types/home"
import { getFeaturedCategories } from "./get-featured-categories"
import { getFlashDeals } from "./get-flash-deals"
import { getHomeBanners } from "./get-home-banners"

const SECTION_ITEM_COUNT = 8

export async function getHomeContent(): Promise<HomeContent> {
  const [banners, categories, brands, flashDeals, { items }] = await Promise.all([
    getHomeBanners(),
    getFeaturedCategories(),
    getBrands(),
    getFlashDeals(),
    getProducts({ pageSize: 32 }),
  ])

  return {
    banners,
    categories,
    brands: brands.slice(0, 16),
    flashDeals: flashDeals.slice(0, SECTION_ITEM_COUNT),
    bestSellers: items.slice(0, SECTION_ITEM_COUNT),
    curated: items.slice(SECTION_ITEM_COUNT, SECTION_ITEM_COUNT * 2),
    newArrivals: items.slice(SECTION_ITEM_COUNT * 2, SECTION_ITEM_COUNT * 3),
  }
}

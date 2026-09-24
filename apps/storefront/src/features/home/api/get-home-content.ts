import { getBrands, getProducts } from "@/features/catalog"

import type { HomeContent } from "../types/home"
import { getFeaturedCategories } from "./get-featured-categories"
import { getFlashDeals } from "./get-flash-deals"
import { getHomeBanners } from "./get-home-banners"

const SECTION_ITEM_COUNT = 5

export async function getHomeContent(): Promise<HomeContent> {
  const [banners, categories, brands, flashDeals, { items }] = await Promise.all([
    getHomeBanners(),
    getFeaturedCategories(),
    getBrands(),
    getFlashDeals(),
    getProducts({ pageSize: SECTION_ITEM_COUNT * 2 }),
  ])

  // No real "best seller"/"new arrival" ranking data exists yet — with only
  // a handful of mock products, the two lists overlap rather than each
  // being forced to a distinct 6 out of too few items.
  return {
    banners,
    categories: categories.slice(0, SECTION_ITEM_COUNT),
    brands: brands.slice(0, SECTION_ITEM_COUNT),
    flashDeals: flashDeals.slice(0, SECTION_ITEM_COUNT),
    bestSellers: items.slice(0, SECTION_ITEM_COUNT),
    newArrivals: items.slice(-SECTION_ITEM_COUNT),
  }
}

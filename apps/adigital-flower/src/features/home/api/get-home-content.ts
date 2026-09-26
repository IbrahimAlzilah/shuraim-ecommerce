import { getBrands, getProducts } from "@/features/catalog"

import type { HomeContent } from "../types/home"
import { getFeaturedCategories } from "./get-featured-categories"
import { getFlashDeals } from "./get-flash-deals"
import { getHomeBanners, getPromoBanners } from "./get-home-banners"

const SECTION_ITEM_COUNT = 8

export async function getHomeContent(): Promise<HomeContent> {
  const [banners, promoBanners, categories, brands, flashDeals, { items }] = await Promise.all([
    getHomeBanners(),
    getPromoBanners(),
    getFeaturedCategories(),
    getBrands(),
    getFlashDeals(),
    getProducts({ pageSize: 48 }),
  ])

  return {
    banners,
    promoBanners,
    categories,
    brands: brands.slice(0, SECTION_ITEM_COUNT),
    flashDeals: flashDeals.slice(0, SECTION_ITEM_COUNT),
    bestSellers: items.slice(0, SECTION_ITEM_COUNT),
    curated: items.slice(SECTION_ITEM_COUNT, SECTION_ITEM_COUNT * 2),
    newArrivals: items.slice(SECTION_ITEM_COUNT * 2, SECTION_ITEM_COUNT * 3),
  }
}

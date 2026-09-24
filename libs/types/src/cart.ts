import type { Product } from "./product"

export interface CartItem {
  id: string
  product: Product
  quantity: number
}

export interface CartDiscount {
  code: string
  amount: number
}

export interface Cart {
  id: string
  items: CartItem[]
  discounts: CartDiscount[]
  subtotal: number
  total: number
}

import type { Address } from "./customer"
import type { CartItem } from "./cart"

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded"

export interface OrderItem extends CartItem {
  unitPrice: number
  lineTotal: number
}

export interface Order {
  id: string
  customerId: string
  items: OrderItem[]
  status: OrderStatus
  shippingAddress: Address
  subtotal: number
  shippingFee: number
  total: number
  createdAt: string
}

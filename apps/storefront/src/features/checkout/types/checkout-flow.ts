export type CheckoutStep = "address" | "shipping" | "payment" | "success"

export type PaymentMethod = "omannet" | "thawani" | "apple-pay" | "tabby" | "card" | "cash-on-delivery"

export interface ShippingMethod {
  id: string
  label: string
  price: number
  etaDays: number
  badge?: string
}

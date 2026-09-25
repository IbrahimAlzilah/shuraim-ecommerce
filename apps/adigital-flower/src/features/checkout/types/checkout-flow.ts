export type CheckoutStep = "address" | "shipping" | "payment" | "success"

export type PaymentMethod = "kuraimi-mobile" | "floosak" | "onecash" | "card" | "cash-on-delivery"

export interface ShippingMethod {
  id: string
  label: string
  price: number
  etaDays: number
  badge?: string
}

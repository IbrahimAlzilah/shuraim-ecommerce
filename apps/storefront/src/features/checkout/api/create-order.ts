import type { Address, CartItem, Order, OrderItem } from "@rawnaq/types"

import type { PaymentMethod, ShippingMethod } from "../types/checkout-flow"

export interface CreateOrderInput {
  items: CartItem[]
  shippingAddress: Address
  shippingMethod: ShippingMethod
  paymentMethod: PaymentMethod
}

/**
 * Simulated order creation: no payment gateway is called and no order is
 * persisted anywhere. It only shapes a client-side `Order` object so
 * `OrderSuccessView` has something real to render. Replace with a real
 * checkout API call once a payment provider is integrated.
 */
export async function createOrder(input: CreateOrderInput): Promise<Order> {
  const orderItems: OrderItem[] = input.items.map((item) => ({
    ...item,
    unitPrice: item.product.price.amount,
    lineTotal: item.product.price.amount * item.quantity,
  }))

  const subtotal = orderItems.reduce((sum, item) => sum + item.lineTotal, 0)

  return {
    id: `demo-${Date.now()}`,
    customerId: "guest",
    items: orderItems,
    status: "pending",
    shippingAddress: input.shippingAddress,
    subtotal,
    shippingFee: input.shippingMethod.price,
    total: subtotal + input.shippingMethod.price,
    createdAt: new Date().toISOString(),
  }
}

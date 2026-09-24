import type { CartDiscount } from "@rawnaq/types"

// Stand-in coupon codes until a real promotions API is integrated.
const mockCoupons: Record<string, number> = {
  WELCOME10: 10,
  RAWNAQ20: 20,
}

export async function applyCoupon(code: string): Promise<CartDiscount | null> {
  const amount = mockCoupons[code.trim().toUpperCase()]
  return amount ? { code: code.trim().toUpperCase(), amount } : null
}

import type { CartDiscount } from "@rawnaq/types"
import { useState } from "react"

import { applyCoupon } from "../api/apply-coupon"

export function useCoupon() {
  const [discount, setDiscount] = useState<CartDiscount | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isApplying, setIsApplying] = useState(false)

  async function apply(code: string) {
    setIsApplying(true)
    setError(null)

    const result = await applyCoupon(code)

    if (result) {
      setDiscount(result)
    } else {
      setError("invalidCode")
    }

    setIsApplying(false)
  }

  function clear() {
    setDiscount(null)
    setError(null)
  }

  return { discount, error, isApplying, apply, clear }
}

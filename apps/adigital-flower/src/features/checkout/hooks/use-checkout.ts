import type { Address, CartItem, Order } from "@rawnaq/types"
import { create } from "zustand"

import { createOrder } from "../api/create-order"
import type {
  CheckoutStep,
  PaymentMethod,
  ShippingMethod,
} from "../types/checkout-flow"

const STEP_ORDER: CheckoutStep[] = ["address", "shipping", "payment", "success"]

interface CheckoutState {
  step: CheckoutStep
  address: Partial<Address>
  shippingMethod: ShippingMethod | null
  paymentMethod: PaymentMethod | null
  order: Order | null
  isSubmitting: boolean
  setAddress: (address: Partial<Address>) => void
  setShippingMethod: (method: ShippingMethod) => void
  setPaymentMethod: (method: PaymentMethod) => void
  goToStep: (step: CheckoutStep) => void
  back: () => void
  submitOrder: (items: CartItem[]) => Promise<void>
  reset: () => void
}

const initialState = {
  step: "address" as CheckoutStep,
  address: {},
  shippingMethod: null,
  paymentMethod: null,
  order: null,
  isSubmitting: false,
}

// No `persist` middleware here on purpose: checkout data (address, payment
// choice) shouldn't survive a closed tab, unlike the cart.
export const useCheckout = create<CheckoutState>()((set, get) => ({
  ...initialState,
  setAddress: (address) => set({ address }),
  setShippingMethod: (shippingMethod) => set({ shippingMethod }),
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
  goToStep: (step) => set({ step }),
  back: () => {
    const currentIndex = STEP_ORDER.indexOf(get().step)
    if (currentIndex > 0) {
      set({ step: STEP_ORDER[currentIndex - 1] })
    }
  },
  submitOrder: async (items) => {
    const { address, shippingMethod, paymentMethod } = get()

    if (!shippingMethod || !paymentMethod) {
      return
    }

    set({ isSubmitting: true })

    const order = await createOrder({
      items,
      shippingAddress: address as Address,
      shippingMethod,
      paymentMethod,
    })

    set({ order, step: "success", isSubmitting: false })
  },
  reset: () => set(initialState),
}))

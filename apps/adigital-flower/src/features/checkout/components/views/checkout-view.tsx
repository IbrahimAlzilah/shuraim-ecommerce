"use client"

import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { useCart } from "@/features/cart"

import { getShippingMethods } from "../../api/get-shipping-methods"
import { useCheckout } from "../../hooks/use-checkout"
import { useCoupon } from "../../hooks/use-coupon"
import type { ShippingMethod } from "../../types/checkout-flow"
import { CheckoutStepper } from "../checkout-stepper"
import { CouponInput } from "../coupon-input"
import { OrderSummary } from "../order-summary"
import { PaymentMethodSelector } from "../payment-method-selector"
import { ShippingAddressForm } from "../shipping-address-form"
import { ShippingMethodSelector } from "../shipping-method-selector"
import { OrderSuccessView } from "./order-success-view"

export function CheckoutView() {
  const t = useTranslations("Checkout")
  const { items, subtotal } = useCart()
  const {
    step,
    address,
    shippingMethod,
    paymentMethod,
    order,
    isSubmitting,
    setAddress,
    setShippingMethod,
    setPaymentMethod,
    goToStep,
    back,
    submitOrder,
  } = useCheckout()
  const coupon = useCoupon()
  const [shippingMethods, setShippingMethods] = useState<ShippingMethod[]>([])

  useEffect(() => {
    void getShippingMethods().then(setShippingMethods)
  }, [])

  if (step === "success") {
    return order ? <OrderSuccessView order={order} /> : null
  }

  if (items.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-muted-foreground text-sm">{t("emptyCart")}</p>
      </div>
    )
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 p-4 sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        {/* Main Step Column */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6 rounded-2xl border bg-card p-4 sm:p-6 shadow-xs">
          <CheckoutStepper step={step} />

          {step === "address" && (
            <ShippingAddressForm
              address={address}
              onSubmit={(value) => {
                setAddress(value)
                goToStep("shipping")
              }}
            />
          )}

          {step === "shipping" && (
            <ShippingMethodSelector
              methods={shippingMethods}
              selected={shippingMethod}
              onSelect={(method) => {
                setShippingMethod(method)
                goToStep("payment")
              }}
              onBack={back}
            />
          )}

          {step === "payment" && (
            <PaymentMethodSelector
              selected={paymentMethod}
              onSelect={setPaymentMethod}
              onBack={back}
              onSubmit={() => void submitOrder(items)}
              isSubmitting={isSubmitting}
            />
          )}
        </div>

        {/* Sticky Summary & Coupon Column */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 lg:sticky lg:top-24 rounded-2xl border bg-card p-4 sm:p-5 shadow-xs">
          <OrderSummary
            subtotal={subtotal}
            shippingFee={shippingMethod?.price ?? 0}
            discount={coupon.discount?.amount}
          />
          <CouponInput
            discount={coupon.discount}
            error={coupon.error}
            isApplying={coupon.isApplying}
            onApply={(code) => void coupon.apply(code)}
            onClear={coupon.clear}
          />
        </div>
      </div>
    </div>
  )
}


"use client"

import { useTranslations } from "next-intl"

import { cn } from "@rawnaq/ui/lib/utils"

import type { CheckoutStep } from "../types/checkout-flow"

const STEPS = ["address", "shipping", "payment"] as const satisfies readonly Exclude<
  CheckoutStep,
  "success"
>[]

export function CheckoutStepper({
  step,
}: {
  step: Exclude<CheckoutStep, "success">
}) {
  const t = useTranslations("Checkout")
  const currentIndex = STEPS.indexOf(step)

  return (
    <ol className="flex items-center gap-2 text-sm">
      {STEPS.map((s, index) => (
        <li key={s} className="flex items-center gap-2">
          <span
            className={cn(
              "flex size-6 items-center justify-center rounded-full text-xs",
              index <= currentIndex
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {index + 1}
          </span>
          <span
            className={index === currentIndex ? "font-medium" : "text-muted-foreground"}
          >
            {t(`steps.${s}`)}
          </span>
          {index < STEPS.length - 1 && (
            <span className="bg-border mx-1 h-px w-6" />
          )}
        </li>
      ))}
    </ol>
  )
}

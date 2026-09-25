"use client"

import { ErrorState } from "@/shared/feedback/error-state"

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <ErrorState onRetry={reset} />
}

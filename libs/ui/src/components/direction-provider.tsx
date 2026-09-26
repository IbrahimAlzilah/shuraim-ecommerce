"use client"

import * as React from "react"
import { Direction } from "radix-ui"

export type DirectionType = "ltr" | "rtl"

export interface DirectionProviderProps {
  dir: DirectionType
  children: React.ReactNode
}

export function DirectionProvider({ dir, children }: DirectionProviderProps) {
  return <Direction.DirectionProvider dir={dir}>{children}</Direction.DirectionProvider>
}

export const useDirection = (dir?: DirectionType): DirectionType => {
  return Direction.useDirection(dir) as DirectionType
}

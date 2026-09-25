"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@rawnaq/ui/lib/utils"

interface FooterSectionProps {
  title: string
  children: React.ReactNode
}

export function FooterSection({ title, children }: FooterSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border/40 sm:border-0 pb-3 sm:pb-0">
      <h4 className="text-sm font-bold text-foreground">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full cursor-pointer sm:cursor-default items-center justify-between text-start sm:pointer-events-none"
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          <ChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-transform duration-200 sm:hidden",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </h4>
      <div
        className={cn(
          "pt-2.5 sm:pt-3 text-xs text-muted-foreground",
          !isOpen && "max-sm:hidden"
        )}
      >
        {children}
      </div>
    </div>
  )
}

"use client"

import type { Review } from "@rawnaq/types"
import { Star } from "lucide-react"
import { useTranslations } from "next-intl"
import { type FormEvent, useState } from "react"

import { Button } from "@rawnaq/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@rawnaq/ui/components/dialog"
import { Input } from "@rawnaq/ui/components/input"
import { Label } from "@rawnaq/ui/components/label"
import { cn } from "@rawnaq/ui/lib/utils"

import { submitProductReview } from "../api/submit-product-review"

export function AddReviewModal({
  productId,
  onSubmitted,
}: {
  productId: string
  onSubmitted: (review: Review) => void
}) {
  const t = useTranslations("Reviews")
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(5)
  const [authorName, setAuthorName] = useState("")
  const [comment, setComment] = useState("")
  const [images, setImages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleFilesChange(files: FileList | null) {
    if (!files) {
      return
    }
    setImages(Array.from(files).map((file) => URL.createObjectURL(file)))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setIsSubmitting(true)

    const review = await submitProductReview({
      productId,
      authorName: authorName.trim() || "Guest",
      rating,
      comment,
      images,
    })

    onSubmitted(review)
    setIsSubmitting(false)
    setIsOpen(false)
    setAuthorName("")
    setComment("")
    setImages([])
    setRating(5)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{t("addReview")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{t("addReview")}</DialogTitle>
        <DialogDescription>{t("addReviewDescription")}</DialogDescription>

        <form onSubmit={(event) => void handleSubmit(event)} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <Label>{t("rating")}</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-label={t("rateValue", { value })}
                  onClick={() => setRating(value)}
                >
                  <Star
                    className={cn(
                      "size-5",
                      value <= rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="review-name">{t("name")}</Label>
            <Input
              id="review-name"
              value={authorName}
              onChange={(event) => setAuthorName(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="review-comment">{t("comment")}</Label>
            <textarea
              id="review-comment"
              required
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              className="border-border bg-background min-h-20 rounded-lg border px-2.5 py-2 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="review-images">{t("images")}</Label>
            <input
              id="review-images"
              type="file"
              accept="image/*"
              multiple
              onChange={(event) => handleFilesChange(event.target.files)}
              className="text-sm"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="mt-2">
            {t("submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

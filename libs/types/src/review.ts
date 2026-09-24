export interface Review {
  id: string
  productId: string
  authorName: string
  rating: number
  comment: string
  images?: string[]
  isVerifiedPurchase: boolean
  createdAt: string
}

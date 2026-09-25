import type { Review } from "@rawnaq/types"

// Stand-in data source until a real reviews API exists. Reviews submitted
// via submitProductReview only mutate this in-memory array for the lifetime
// of the server process — nothing is persisted to a database.
export const mockReviews: Review[] = [
  {
    id: "r-1",
    productId: "p-1",
    authorName: "Sara A.",
    rating: 5,
    comment: "Stays matte all day and doesn't cake.",
    isVerifiedPurchase: true,
    createdAt: "2026-08-10T10:00:00.000Z",
  },
  {
    id: "r-2",
    productId: "p-1",
    authorName: "Lama K.",
    rating: 4,
    comment: "Great coverage, but the shade range could be wider.",
    isVerifiedPurchase: true,
    createdAt: "2026-08-15T10:00:00.000Z",
  },
  {
    id: "r-3",
    productId: "p-1",
    authorName: "Reem",
    rating: 3,
    comment: "Decent for the price.",
    isVerifiedPurchase: false,
    createdAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "r-4",
    productId: "p-2",
    authorName: "Noura",
    rating: 5,
    comment: "Beautiful color and doesn't dry out my lips.",
    isVerifiedPurchase: true,
    createdAt: "2026-09-01T10:00:00.000Z",
  },
]

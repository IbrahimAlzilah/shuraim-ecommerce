import type { ShippingMethod } from "../types/checkout-flow"

// Stand-in shipping options until a real carrier/rates API is integrated.
const mockShippingMethods: ShippingMethod[] = [
  {
    id: "sanaa-express",
    label: "توصيل سريع خلال 24 ساعة (أمانة العاصمة صنعاء)",
    price: 1000,
    etaDays: 1,
    badge: "خلال 24 ساعة",
  },
  {
    id: "yemen-domestic",
    label: "شركة الشحن المحلي (جميع المحافظات اليمنية)",
    price: 2000,
    etaDays: 4,
    badge: "3-5 أيام عمل",
  },
  {
    id: "aden-express",
    label: "توصيل سريع خلال 24 ساعة (محافظة عدن)",
    price: 1200,
    etaDays: 1,
    badge: "خلال 24 ساعة",
  },
]

export async function getShippingMethods(): Promise<ShippingMethod[]> {
  return mockShippingMethods
}

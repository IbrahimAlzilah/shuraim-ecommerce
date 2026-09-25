import type { ShippingMethod } from "../types/checkout-flow"

// Stand-in shipping options until a real carrier/rates API is integrated.
const mockShippingMethods: ShippingMethod[] = [
  {
    id: "asyad-express",
    label: "أسياد إكسبريس / بريد عُمان (كافة محافظات وولايات السلطنة)",
    price: 1.5,
    etaDays: 2,
    badge: "1-3 أيام عمل",
  },
  {
    id: "muscat-express",
    label: "توصيل سريع خلال 24 ساعة (محافظة مسقط)",
    price: 1.0,
    etaDays: 1,
    badge: "خلال 24 ساعة",
  },
  {
    id: "aramex-oman",
    label: "أرامكس عُمان للشحن السريع المبرد (توصيل للمنزل)",
    price: 2.5,
    etaDays: 2,
    badge: "شحن مبرد",
  },
]

export async function getShippingMethods(): Promise<ShippingMethod[]> {
  return mockShippingMethods
}

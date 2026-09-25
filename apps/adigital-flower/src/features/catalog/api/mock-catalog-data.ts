import type { Brand, Collection, Product, ProductCategory } from "@rawnaq/types"

// Stand-in data source until a real backend/catalog API exists.
// Swap the body of getProducts/getProductBySlug/getCategories/getBrands/
// getCollections for real fetch calls without changing their signatures.

export const mockCategories: ProductCategory[] = [
  { id: "c-skincare", name: "العناية بالبشرة", slug: "skincare", parentId: null, level: 1, sortOrder: 1, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&auto=format&fit=crop&q=80" },
  { id: "c-makeup", name: "المكياج", slug: "makeup", parentId: null, level: 1, sortOrder: 2, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&auto=format&fit=crop&q=80" },
  { id: "c-hair", name: "العناية بالشعر", slug: "hair-care", parentId: null, level: 1, sortOrder: 3, image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=300&auto=format&fit=crop&q=80" },
  { id: "c-fragrance", name: "العطور", slug: "fragrance", parentId: null, level: 1, sortOrder: 4, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&auto=format&fit=crop&q=80" },
  { id: "c-body", name: "العناية بالجسم", slug: "body-care", parentId: null, level: 1, sortOrder: 5, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&auto=format&fit=crop&q=80" },
  { id: "c-accessories", name: "الإكسسوارات", slug: "accessories", parentId: null, level: 1, sortOrder: 6, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&auto=format&fit=crop&q=80" },
  { id: "c-electronics", name: "الإلكترونيات", slug: "electronics", parentId: null, level: 1, sortOrder: 7, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&auto=format&fit=crop&q=80" },
  { id: "c-bundles", name: "بكجات التوفير", slug: "bundles", parentId: null, level: 1, sortOrder: 8, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&auto=format&fit=crop&q=80" },

  // Skincare subcategories
  { id: "c-cleansers", name: "تنظيف البشرة", slug: "cleansers", parentId: "c-skincare", level: 2, sortOrder: 1 },
  { id: "c-moisturizers", name: "ترطيب البشرة", slug: "moisturizers", parentId: "c-skincare", level: 2, sortOrder: 2 },
  { id: "c-serums", name: "سيرومات علاجية", slug: "serums", parentId: "c-skincare", level: 2, sortOrder: 3 },
  { id: "c-sunscreen", name: "واقي شمس", slug: "sunscreen", parentId: "c-skincare", level: 2, sortOrder: 4 },

  // Makeup subcategories
  { id: "c-face", name: "الوجه والأساس", slug: "face", parentId: "c-makeup", level: 2, sortOrder: 1 },
  { id: "c-eyes", name: "العيون والحواجب", slug: "eyes", parentId: "c-makeup", level: 2, sortOrder: 2 },
  { id: "c-lips", name: "الشفاه", slug: "lips", parentId: "c-makeup", level: 2, sortOrder: 3 },

  // Hair subcategories
  { id: "c-shampoo", name: "شامبو وبلسم", slug: "shampoo", parentId: "c-hair", level: 2, sortOrder: 1 },
  { id: "c-hair-oils", name: "زيوت وماسكات", slug: "hair-oils", parentId: "c-hair", level: 2, sortOrder: 2 },

  // Fragrance subcategories
  { id: "c-women-fragrance", name: "عطور نسائية", slug: "women-fragrance", parentId: "c-fragrance", level: 2, sortOrder: 1 },
  { id: "c-men-fragrance", name: "عطور رجالية", slug: "men-fragrance", parentId: "c-fragrance", level: 2, sortOrder: 2 },
  { id: "c-oud-bakhoor", name: "عود وبخور", slug: "oud-bakhoor", parentId: "c-fragrance", level: 2, sortOrder: 3 },

  // Accessories subcategories
  { id: "c-jewelry", name: "مجوهرات وإكسسوارات", slug: "jewelry", parentId: "c-accessories", level: 2, sortOrder: 1 },
  { id: "c-watches", name: "ساعات", slug: "watches", parentId: "c-accessories", level: 2, sortOrder: 2 },
  { id: "c-bags", name: "حقائب", slug: "bags", parentId: "c-accessories", level: 2, sortOrder: 3 },

  // Electronics subcategories
  { id: "c-audio", name: "سماعات وصوتيات", slug: "audio", parentId: "c-electronics", level: 2, sortOrder: 1 },
  { id: "c-mobile-accessories", name: "إكسسوارات الجوال", slug: "mobile-accessories", parentId: "c-electronics", level: 2, sortOrder: 2 },
  { id: "c-personal-care-devices", name: "أجهزة العناية الشخصية", slug: "personal-care-devices", parentId: "c-electronics", level: 2, sortOrder: 3 },

  // Level 3 items
  { id: "c-foundation", name: "كريم أساس وكونسيلر", slug: "foundation", parentId: "c-face", level: 3, sortOrder: 1 },
  { id: "c-lipstick", name: "أحمر شفاه وتنت", slug: "lipstick", parentId: "c-lips", level: 3, sortOrder: 1 },
  { id: "c-lip-gloss", name: "ملمع شفاه", slug: "lip-gloss", parentId: "c-lips", level: 3, sortOrder: 2 },
]

export const mockBrands: Brand[] = [
  { id: "b-sanaa-glow", slug: "sanaa-glow", name: "Sana'a Glow", description: "علامة يمنية لمستحضرات المكياج اليومية بجودة عالية.", featured: true },
  { id: "b-glowlab", slug: "glow-lab", name: "Glow Lab", description: "أساسيات المكياج والإشراقة اليومية.", featured: true },
  { id: "b-cosrx", slug: "cosrx", name: "COSRX", description: "رواد العناية بالبشرة الكورية وحلزون البحر.", featured: true },
  { id: "b-cerave", slug: "cerave", name: "CeraVe", description: "عناية طبية متطورة بمركب السيراميد.", featured: true },
  { id: "b-theordinary", slug: "the-ordinary", name: "The Ordinary", description: "سيرومات ومكونات نقية بتركيزات فعالة.", featured: true },
  { id: "b-desertbloom", slug: "desert-bloom", name: "Desert Bloom", description: "عطور شرقية وعود وبخور فاخر.", featured: false },
  { id: "b-adenstyle", slug: "aden-style", name: "Aden Style", description: "إكسسوارات ومجوهرات عصرية بلمسة يمنية أصيلة.", featured: true },
  { id: "b-technova", slug: "technova", name: "TechNova", description: "إلكترونيات وإكسسوارات جوال بأسعار مناسبة وجودة موثوقة.", featured: true },
]

function category(id: string): ProductCategory {
  const found = mockCategories.find((c) => c.id === id)
  if (!found) {
    throw new Error(`Unknown mock category id: ${id}`)
  }
  return found
}

export const mockProducts: Product[] = [
  {
    id: "p-1",
    slug: "matte-foundation",
    name: "كريم أساس مطفي يدوم طويلاً",
    subtitle: "تغطية كاملة مع لمسة مخملية طبيعية",
    price: { amount: 14900, currency: "YER", compareAtAmount: 19900 },
    images: [
      { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80", alt: "Matte Foundation" },
      { url: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=600&auto=format&fit=crop&q=80", alt: "Matte Foundation Swatch" },
    ],
    categories: [category("c-face"), category("c-foundation")],
    brandId: "b-glowlab",
    rating: { average: 4.8, count: 184 },
    variants: [
      {
        name: "shade",
        label: "الدرجة",
        options: [
          { id: "sh-light", label: "فاتح 01", value: "light" },
          { id: "sh-medium", label: "حنطي 02", value: "medium" },
          { id: "sh-tan", label: "برونزي 03", value: "tan" },
        ],
      },
    ],
    inStock: true,
    stockCount: 8,
  },
  {
    id: "p-2",
    slug: "velvet-lipstick",
    name: "أحمر شفاه مخملي غني بالمرطبات",
    subtitle: "ثبات فائق ولمسة نهائية ساتانية جذابة",
    price: { amount: 7900, currency: "YER", compareAtAmount: 11000 },
    images: [
      { url: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=80", alt: "Velvet Lipstick" },
    ],
    categories: [category("c-lips"), category("c-lipstick")],
    brandId: "b-sanaa-glow",
    rating: { average: 4.9, count: 247 },
    variants: [
      {
        name: "shade",
        label: "اللون",
        options: [
          { id: "sh-rose", label: "وردي ناعم", value: "rose" },
          { id: "sh-coral", label: "مشمشي دافئ", value: "coral" },
          { id: "sh-berry", label: "توتي جذاب", value: "berry" },
        ],
      },
    ],
    inStock: true,
  },
  {
    id: "p-3",
    slug: "hydrating-serum",
    name: "سيروم الهيالورونيك اسيد للترطيب المكثف",
    subtitle: "نضارة فورية وتعزيز حاجز الرطوبة الطبيعي",
    price: { amount: 12500, currency: "YER", compareAtAmount: 16500 },
    images: [
      { url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80", alt: "Hydrating Serum" },
      { url: "https://images.unsplash.com/photo-1608248597359-2e65d214693b?w=600&auto=format&fit=crop&q=80", alt: "Hydrating Serum Dropper" },
    ],
    categories: [category("c-serums")],
    brandId: "b-theordinary",
    rating: { average: 4.7, count: 320 },
    inStock: true,
    stockCount: 3,
  },
  {
    id: "p-4",
    slug: "oud-perfume",
    name: "عطر رويال عود الملكي المميز",
    subtitle: "مزيج فاخر من العود اليمني الأصيل والعنبر والصندل",
    price: { amount: 38900, currency: "YER", compareAtAmount: 46000 },
    images: [
      { url: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80", alt: "Royal Oud Perfume" },
      { url: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80", alt: "Perfume Bottle Close" },
    ],
    categories: [category("c-women-fragrance"), category("c-oud-bakhoor")],
    brandId: "b-desertbloom",
    rating: { average: 5.0, count: 89 },
    inStock: true,
  },
  {
    id: "p-5",
    slug: "gentle-cleanser",
    name: "غسول الوجه اللطيف بالسيراميد",
    subtitle: "ينظف بلطف ويزيل الشوائب دون جفاف البشرة",
    price: { amount: 6900, currency: "YER", compareAtAmount: 8500 },
    images: [
      { url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80", alt: "Gentle Cleanser" },
      { url: "https://images.unsplash.com/photo-1556228722-d0b5d5d67969?w=600&auto=format&fit=crop&q=80", alt: "Cleanser In Hand" },
    ],
    categories: [category("c-cleansers")],
    brandId: "b-cerave",
    rating: { average: 4.8, count: 412 },
    inStock: true,
    stockCount: 12,
  },
  {
    id: "p-6",
    slug: "snail-mucin-essence",
    name: "خلاصة إفرازات الحلزون 96 لتجديد البشرة",
    subtitle: "العناية الكورية الأولى لترميم البشرة ومحاربة البهتان",
    price: { amount: 9800, currency: "YER", compareAtAmount: 13500 },
    images: [
      { url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&auto=format&fit=crop&q=80", alt: "Snail Mucin Essence" },
      { url: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop&q=80", alt: "Essence Texture" },
    ],
    categories: [category("c-serums")],
    brandId: "b-cosrx",
    rating: { average: 4.9, count: 520 },
    inStock: true,
  },
  {
    id: "p-7",
    slug: "eyeshadow-palette",
    name: "باليت ظلال العيون النيود والألوان الترابية",
    subtitle: "18 لوناً غنياً بين المطفي واللامع لجميع المناسبات",
    price: { amount: 13900, currency: "YER", compareAtAmount: 18900 },
    images: [
      { url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=80", alt: "Eyeshadow Palette" },
      { url: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=600&auto=format&fit=crop&q=80", alt: "Palette Open" },
    ],
    categories: [category("c-eyes")],
    brandId: "b-glowlab",
    rating: { average: 4.6, count: 98 },
    inStock: true,
    stockCount: 2,
  },
  {
    id: "p-8",
    slug: "hydrating-lip-gloss",
    name: "ملمع شفاه مرطب بلمعان زجاجي",
    subtitle: "يمنح امتلاءً فورياً ونعومة فائقة مع فيتامين E",
    price: { amount: 5500, currency: "YER", compareAtAmount: 7500 },
    images: [
      { url: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&auto=format&fit=crop&q=80", alt: "Lip Gloss" },
      { url: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=600&auto=format&fit=crop&q=80", alt: "Lip Gloss Wand" },
    ],
    categories: [category("c-lips"), category("c-lip-gloss")],
    brandId: "b-sanaa-glow",
    rating: { average: 4.8, count: 164 },
    inStock: false,
  },
  {
    id: "p-9",
    slug: "silver-jewelry-set",
    name: "طقم مجوهرات فضة عيار 925",
    subtitle: "عقد وأقراط بتصميم أنيق يناسب المناسبات اليومية",
    price: { amount: 42000, currency: "YER", compareAtAmount: 52000 },
    images: [
      { url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80", alt: "Silver Jewelry Set" },
      { url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80", alt: "Silver Necklace Detail" },
    ],
    categories: [category("c-jewelry")],
    brandId: "b-adenstyle",
    rating: { average: 4.7, count: 56 },
    inStock: true,
    stockCount: 6,
  },
  {
    id: "p-10",
    slug: "womens-classic-watch",
    name: "ساعة يد نسائية كلاسيكية بسوار ستانلس",
    subtitle: "تصميم أنيق مقاوم للماء يناسب الإطلالة اليومية والمناسبات",
    price: { amount: 28500, currency: "YER", compareAtAmount: 34000 },
    images: [
      { url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80", alt: "Women's Classic Watch" },
    ],
    categories: [category("c-watches")],
    brandId: "b-adenstyle",
    rating: { average: 4.6, count: 73 },
    inStock: true,
  },
  {
    id: "p-11",
    slug: "wireless-earbuds",
    name: "سماعات لاسلكية بلوتوث عزل ضوضاء",
    subtitle: "صوت نقي وبطارية تدوم حتى 24 ساعة مع علبة الشحن",
    price: { amount: 32000, currency: "YER", compareAtAmount: 39000 },
    images: [
      { url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80", alt: "Wireless Earbuds" },
      { url: "https://images.unsplash.com/photo-1590658006821-c0aa4ee2dbb2?w=600&auto=format&fit=crop&q=80", alt: "Earbuds Charging Case" },
    ],
    categories: [category("c-audio")],
    brandId: "b-technova",
    rating: { average: 4.5, count: 210 },
    inStock: true,
    stockCount: 15,
  },
  {
    id: "p-12",
    slug: "portable-power-bank",
    name: "باور بانك محمول سعة 10000mAh شحن سريع",
    subtitle: "منفذين USB مع شحن سريع يناسب السفر والاستخدام اليومي",
    price: { amount: 18500, currency: "YER", compareAtAmount: 23000 },
    images: [
      { url: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&auto=format&fit=crop&q=80", alt: "Portable Power Bank" },
    ],
    categories: [category("c-mobile-accessories")],
    brandId: "b-technova",
    rating: { average: 4.4, count: 132 },
    inStock: true,
  },
]

export const mockCollections: Collection[] = [
  {
    id: "col-new-in",
    slug: "new-in",
    name: "وصل حديثاً",
    kind: "editorial",
    productIds: ["p-6", "p-1", "p-11", "p-3"],
  },
  {
    id: "col-best-sellers",
    slug: "best-sellers",
    name: "الأكثر مبيعاً",
    kind: "seasonal",
    productIds: ["p-2", "p-5", "p-4", "p-9", "p-6"],
  },
]

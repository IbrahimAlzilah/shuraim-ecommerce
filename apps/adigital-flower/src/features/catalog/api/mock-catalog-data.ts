import type { Brand, Collection, Product, ProductCategory } from "@rawnaq/types"

// Stand-in data source populated with authentic cosmetics products & categories from cosmetics.sa
export const mockCategories: ProductCategory[] = [
  {
    "id": "c-skincare",
    "name": "العناية بالبشرة",
    "slug": "skincare",
    "parentId": null,
    "level": 1,
    "sortOrder": 1,
    "image": "https://cdn.salla.sa/onxjbX/14c31764-c45f-48c7-a147-2131892eb705-1000x997.60479041916-MJykuQdLqcOCfzYUKoFPslxTAnV8zVZdntPYVw4I.jpg"
  },
  {
    "id": "c-makeup",
    "name": "المكياج والتجميل",
    "slug": "makeup",
    "parentId": null,
    "level": 1,
    "sortOrder": 2,
    "image": "https://cdn.salla.sa/onxjbX/cf36a5c2-0b0a-4106-8a26-04ad21c71995-1000x1000-MRRceVUSNmUhJyAEv4hEEseYqWUADVeQFJuK3Yrq.jpg"
  },
  {
    "id": "c-hair",
    "name": "العناية بالشعر",
    "slug": "hair-care",
    "parentId": null,
    "level": 1,
    "sortOrder": 3,
    "image": "https://cdn.salla.sa/onxjbX/bb6f737d-a65f-45b0-8a51-f7c1319ec31b-1000x1000-F7z8AaaVuVDY7DhCFBRZLe9Gro4l52TrIam6ibul.jpg"
  },
  {
    "id": "c-fragrance",
    "name": "العطور الفاخرة",
    "slug": "fragrance",
    "parentId": null,
    "level": 1,
    "sortOrder": 4,
    "image": "https://cdn.salla.sa/onxjbX/f73cf581-e5d5-47ca-b0f1-92e597346023-1000x1000-tme1QmGXQxUEIGtQviCcXJYsKPYkYiaJp2xEvtco.jpg"
  },
  {
    "id": "c-korean",
    "name": "العناية الكورية",
    "slug": "korean-care",
    "parentId": null,
    "level": 1,
    "sortOrder": 5,
    "image": "https://cdn.salla.sa/onxjbX/00c65a6e-d206-46c5-a20b-8eb7440aa957-1000x1000-iZJFecvuC5ODZ7kBSL2NkGjFWSwgBVCpSy2W5hNp.png"
  },
  {
    "id": "c-sunscreen",
    "name": "واقيات الشمس",
    "slug": "sunscreen",
    "parentId": null,
    "level": 1,
    "sortOrder": 6,
    "image": "https://cdn.salla.sa/onxjbX/218f8c72-737b-44d9-b4f6-98e7c9a68b2b-1000x1000-75CSqnyWkJKxAau5weY3vs0smbNOdvxURX9F3PJm.jpg"
  },
  {
    "id": "c-serums",
    "name": "سيرومات علاجية",
    "slug": "serums",
    "parentId": null,
    "level": 1,
    "sortOrder": 7,
    "image": "https://cdn.salla.sa/onxjbX/ef8e3eb3-6a3b-41e0-806f-b76e09a8caf4-1000x1000-zeKpD5i5VXGnwDTGW9o8zTNnrg31az5iSbKkzii4.jpg"
  },
  {
    "id": "c-cleansers",
    "name": "تنظيف البشرة",
    "slug": "cleansers",
    "parentId": null,
    "level": 1,
    "sortOrder": 8,
    "image": "https://cdn.salla.sa/onxjbX/c9f4135d-0195-4b32-b376-b60bf80a5972-1000x1000-k0GRCZ82cKdkfl4iXIeLXu1rtyRUhTZM2QV1yXkW.jpg"
  },
  {
    "id": "c-moisturizers",
    "name": "ترطيب وتغذية",
    "slug": "moisturizers",
    "parentId": null,
    "level": 1,
    "sortOrder": 9,
    "image": "https://cdn.salla.sa/onxjbX/cacfa04f-c99b-4ad8-93b3-47a473d7cfeb-1000x1000-QnjqENdKF3k7f2OPf0d5ksZsCDId5Y0x8OzoBNXr.jpg"
  },
  {
    "id": "c-body",
    "name": "العناية بالجسم",
    "slug": "body-care",
    "parentId": null,
    "level": 1,
    "sortOrder": 10,
    "image": "https://cdn.salla.sa/onxjbX/21140a6d-cfda-4564-b2be-4769a4cee0ab-1000x1000-BOwjlQ2KTwi1ZTXOv12hTTxVmYrYTJtgLOqJQSqJ.jpg"
  },
  {
    "id": "c-hand",
    "name": "العناية باليدين",
    "slug": "hand-care",
    "parentId": null,
    "level": 1,
    "sortOrder": 11,
    "image": "https://cdn.salla.sa/onxjbX/9ee233d5-fdca-44cc-a6da-75462aac768f-1000x1000-jAmuD7OZ2KbdtYZCc6H33V6xAYoKxnIw19p3AXJL.jpg"
  },
  {
    "id": "c-bundles",
    "name": "بكجات التوفير",
    "slug": "bundles",
    "parentId": null,
    "level": 1,
    "sortOrder": 12,
    "image": "https://cdn.salla.sa/onxjbX/af978eed-8745-481e-ac99-7c1cedae7d15-1000x1000-A7Bms3kbjwN3nUYTAx1JdUvLDXv58k6lb97zGOjn.jpg"
  },
  {
    "id": "c-cleansers-sub",
    "name": "تنظيف البشرة",
    "slug": "cleansers-sub",
    "parentId": "c-skincare",
    "level": 2,
    "sortOrder": 1
  },
  {
    "id": "c-moisturizers-sub",
    "name": "ترطيب البشرة",
    "slug": "moisturizers-sub",
    "parentId": "c-skincare",
    "level": 2,
    "sortOrder": 2
  },
  {
    "id": "c-serums-sub",
    "name": "سيرومات علاجية",
    "slug": "serums-sub",
    "parentId": "c-skincare",
    "level": 2,
    "sortOrder": 3
  },
  {
    "id": "c-sunscreen-sub",
    "name": "واقي شمس",
    "slug": "sunscreen-sub",
    "parentId": "c-skincare",
    "level": 2,
    "sortOrder": 4
  },
  {
    "id": "c-face",
    "name": "الوجه والأساس",
    "slug": "face",
    "parentId": "c-makeup",
    "level": 2,
    "sortOrder": 1
  },
  {
    "id": "c-eyes",
    "name": "العيون والحواجب",
    "slug": "eyes",
    "parentId": "c-makeup",
    "level": 2,
    "sortOrder": 2
  },
  {
    "id": "c-lips",
    "name": "الشفاه",
    "slug": "lips",
    "parentId": "c-makeup",
    "level": 2,
    "sortOrder": 3
  },
  {
    "id": "c-shampoo",
    "name": "شامبو وبلسم",
    "slug": "shampoo",
    "parentId": "c-hair",
    "level": 2,
    "sortOrder": 1
  },
  {
    "id": "c-hair-oils",
    "name": "زيوت وماسكات",
    "slug": "hair-oils",
    "parentId": "c-hair",
    "level": 2,
    "sortOrder": 2
  },
  {
    "id": "c-women-fragrance",
    "name": "عطور نسائية",
    "slug": "women-fragrance",
    "parentId": "c-fragrance",
    "level": 2,
    "sortOrder": 1
  },
  {
    "id": "c-men-fragrance",
    "name": "عطور رجالية",
    "slug": "men-fragrance",
    "parentId": "c-fragrance",
    "level": 2,
    "sortOrder": 2
  },
  {
    "id": "c-foundation",
    "name": "كريم أساس وكونسيلر",
    "slug": "foundation",
    "parentId": "c-face",
    "level": 3,
    "sortOrder": 1
  },
  {
    "id": "c-lipstick",
    "name": "أحمر شفاه وتنت",
    "slug": "lipstick",
    "parentId": "c-lips",
    "level": 3,
    "sortOrder": 1
  }
]

export const mockBrands: Brand[] = [
  { id: "b-cerave", slug: "cerave", name: "CeraVe", description: "عناية طبية متطورة بمركب السيراميد.", featured: true },
  { id: "b-bioderma", slug: "bioderma", name: "Bioderma", description: "حلول مبتكرة للعناية بالبشرة الحساسة.", featured: true },
  { id: "b-laroche", slug: "la-roche-posay", name: "La Roche-Posay", description: "مستحضرات علاجية موصى بها من أطباء الجلدية.", featured: true },
  { id: "b-eucerin", slug: "eucerin", name: "Eucerin", description: "عناية فائقة وترطيب عميق مثبت إكلينيكياً.", featured: true },
  { id: "b-cosrx", slug: "cosrx", name: "COSRX", description: "رواد العناية بالبشرة الكورية وحلزون البحر.", featured: true },
  { id: "b-boj", slug: "beauty-of-joseon", name: "Beauty of Joseon", description: "أسرار الجمال الكوري التقليدي الممزوج بالعلم الحديث.", featured: true },
  { id: "b-anua", slug: "anua", name: "Anua", description: "عناية طبيعية مهدئة بمستخلص نبتة القلب.", featured: true },
  { id: "b-theordinary", slug: "the-ordinary", name: "The Ordinary", description: "سيرومات ومكونات نقية بتركيزات فعالة.", featured: true },
  { id: "b-aigital", slug: "aigital", name: "Aigital Flower", description: "مستحضرات أيجيتال فلاور للجمال والأناقة.", featured: true },
  { id: "b-glowlab", slug: "glow-lab", name: "Glow Lab", description: "أساسيات المكياج والإشراقة اليومية.", featured: true },
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
    slug: "cerave-hydrating-cleanser-236",
    name: "سيرافي غسول مرطب للبشرة العادية إلى الجافة 236 مل",
    subtitle: "ينظف ويرطب ويساعد على استعادة الحاجز الواقي للبشرة بثلاثة سيراميدات أساسية",
    price: { amount: 14500, currency: "YER", compareAtAmount: 18500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/14c31764-c45f-48c7-a147-2131892eb705-1000x997.60479041916-MJykuQdLqcOCfzYUKoFPslxTAnV8zVZdntPYVw4I.jpg", alt: "سيرافي غسول مرطب للبشرة العادية إلى الجافة 236 مل" }
    ],
    categories: [category("c-cleansers")],
    brandId: "b-cerave",
    rating: { average: 4.9, count: 480 },
    inStock: true,
  },
  {
    id: "p-2",
    slug: "bioderma-sensibio-gel-moussant-500",
    name: "بيوديرما سنسيبيو جل رغوي منظف ومهدئ للبشرة الحساسة 500 مل",
    subtitle: "تنظيف لطيف يعزز ترطيب البشرة الطبيعي ويهدئ التهيج والاحمرار",
    price: { amount: 16900, currency: "YER", compareAtAmount: 22000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/ef8e3eb3-6a3b-41e0-806f-b76e09a8caf4-1000x1000-zeKpD5i5VXGnwDTGW9o8zTNnrg31az5iSbKkzii4.jpg", alt: "بيوديرما سنسيبيو جل رغوي منظف ومهدئ للبشرة الحساسة 500 مل" }
    ],
    categories: [category("c-cleansers")],
    brandId: "b-bioderma",
    rating: { average: 4.8, count: 320 },
    inStock: true,
  },
  {
    id: "p-3",
    slug: "eucerin-sun-oil-control-gel-cream",
    name: "يوسيرين جل كريم حماية من الشمس للتحكم باللمعان SPF50+",
    subtitle: "حماية فائقة من الأشعة فوق البنفسجية مع تأثير مطفي يدوم حتى 8 ساعات",
    price: { amount: 13900, currency: "YER", compareAtAmount: 17500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/218f8c72-737b-44d9-b4f6-98e7c9a68b2b-1000x1000-75CSqnyWkJKxAau5weY3vs0smbNOdvxURX9F3PJm.jpg", alt: "يوسيرين جل كريم حماية من الشمس للتحكم باللمعان SPF50+" }
    ],
    categories: [category("c-sunscreen")],
    brandId: "b-eucerin",
    rating: { average: 4.9, count: 512 },
    inStock: true,
  },
  {
    id: "p-4",
    slug: "cosrx-advanced-snail-96-mucin-essence",
    name: "كوسركس خلاصة إفرازات الحلزون 96 لتجديد ونضارة البشرة 100 مل",
    subtitle: "إكسير الشباب الكوري الأكثر شهرة لترميم نسيج البشرة وإشراقتها الفورية",
    price: { amount: 11500, currency: "YER", compareAtAmount: 15000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/00c65a6e-d206-46c5-a20b-8eb7440aa957-1000x1000-iZJFecvuC5ODZ7kBSL2NkGjFWSwgBVCpSy2W5hNp.png", alt: "كوسركس خلاصة إفرازات الحلزون 96 لتجديد ونضارة البشرة 100 مل" }
    ],
    categories: [category("c-korean")],
    brandId: "b-cosrx",
    rating: { average: 4.9, count: 850 },
    inStock: true,
  },
  {
    id: "p-5",
    slug: "eucerin-urea-repair-hand-cream-75",
    name: "يوسيرين كريم اليدين يوريا ريبير بلس 5% يوريا 75 مل",
    subtitle: "إغاثة فورية وترطيب مكثف يدوم 48 ساعة للأيدي شديدة الجفاف والخشونة",
    price: { amount: 5900, currency: "YER", compareAtAmount: 8000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/9ee233d5-fdca-44cc-a6da-75462aac768f-1000x1000-jAmuD7OZ2KbdtYZCc6H33V6xAYoKxnIw19p3AXJL.jpg", alt: "يوسيرين كريم اليدين يوريا ريبير بلس 5% يوريا 75 مل" }
    ],
    categories: [category("c-hand")],
    brandId: "b-eucerin",
    rating: { average: 4.8, count: 290 },
    inStock: true,
  },
  {
    id: "p-6",
    slug: "bioderma-pigmentbio-foaming-cream-200",
    name: "بيوديرما بيجمينتبيو غسول مقشر ومفتح للبشرة 200 مل",
    subtitle: "يساعد في تفتيح التصبغات وتوحيد لون البشرة بتركيبة لطيفة يومية",
    price: { amount: 15200, currency: "YER", compareAtAmount: 19800 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/c9f4135d-0195-4b32-b376-b60bf80a5972-1000x1000-k0GRCZ82cKdkfl4iXIeLXu1rtyRUhTZM2QV1yXkW.jpg", alt: "بيوديرما بيجمينتبيو غسول مقشر ومفتح للبشرة 200 مل" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-bioderma",
    rating: { average: 4.7, count: 210 },
    inStock: true,
  },
  {
    id: "p-7",
    slug: "laroche-posay-effaclar-purifying-gel-400",
    name: "لاروش بوزيه جل رغوي إيفاكلار لتنقية البشرة الدهنية 400 مل",
    subtitle: "يزيل الشوائب والدهون الزائدة دون تجفيف البشرة ومناسب للبشرة الحساسة",
    price: { amount: 17500, currency: "YER", compareAtAmount: 21000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/71b965e8-2bba-45bb-9ebc-2aaca2962c9d-1000x1000-w4dDSDKwS9lAR1Tqzh3iHXPufMQKwDCAxFchGbJd.jpg", alt: "لاروش بوزيه جل رغوي إيفاكلار لتنقية البشرة الدهنية 400 مل" }
    ],
    categories: [category("c-cleansers")],
    brandId: "b-laroche",
    rating: { average: 4.8, count: 620 },
    inStock: true,
  },
  {
    id: "p-8",
    slug: "cerave-moisturising-lotion-236",
    name: "سيرافي لوشن مرطب للبشرة الجافة مع حمض الهيالورونيك 236 مل",
    subtitle: "قوام خفيف سريع الامتصاص يرطب بعمق طوال اليوم بتقنية MVE الحاصلة على براءة اختراع",
    price: { amount: 12800, currency: "YER", compareAtAmount: 16000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/14c31764-c45f-48c7-a147-2131892eb705-1000x997.60479041916-MJykuQdLqcOCfzYUKoFPslxTAnV8zVZdntPYVw4I.jpg", alt: "سيرافي لوشن مرطب للبشرة الجافة مع حمض الهيالورونيك 236 مل" }
    ],
    categories: [category("c-moisturizers")],
    brandId: "b-cerave",
    rating: { average: 4.9, count: 740 },
    inStock: true,
  },
  {
    id: "p-9",
    slug: "beauty-of-joseon-relief-sun-rice-probiotics",
    name: "بيوتي اوف جوسون واقي شمس الأرز والبروبيوتيك SPF50+",
    subtitle: "واقي الشمس العضوي الكوري الخفيف والمغذي بمستخلص الأرز لتفتيح وحماية البشرة",
    price: { amount: 10900, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/8ea64796-bd81-4d08-bc39-a9d785663f3f-1000x1000-VLaupRTvwkvu8oys0QO4FJ1k5AUcPTSV0Gyyn9Vk.jpg", alt: "بيوتي اوف جوسون واقي شمس الأرز والبروبيوتيك SPF50+" }
    ],
    categories: [category("c-sunscreen")],
    brandId: "b-boj",
    rating: { average: 5, count: 980 },
    inStock: true,
  },
  {
    id: "p-10",
    slug: "anua-heartleaf-77-soothing-toner-250",
    name: "أنوا تونر هارت ليف 77% المهدئ للبشرة 250 مل",
    subtitle: "التونر الكوري رقم 1 لتهدئة الاحمرار وتنقية المسام وترطيب البشرة الحساسة",
    price: { amount: 12500, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/0bbb88ee-ea9c-4717-9976-e543fe5aa3ab-1000x1000-HR4H83TPPempjyl41xWYtVqoFkNNsnqDWVLhw2c4.jpg", alt: "أنوا تونر هارت ليف 77% المهدئ للبشرة 250 مل" }
    ],
    categories: [category("c-korean")],
    brandId: "b-anua",
    rating: { average: 4.9, count: 610 },
    inStock: true,
  },
  {
    id: "p-11",
    slug: "bioderma-atoderm-creme-ultra-500",
    name: "بيوديرما كريم اتوديرم ألترا المرطب المغذي 500 مل",
    subtitle: "عناية يومية فائقة الترطيب للبشرة الجافة والحساسة لجميع أفراد الأسرة",
    price: { amount: 18000, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/21140a6d-cfda-4564-b2be-4769a4cee0ab-1000x1000-BOwjlQ2KTwi1ZTXOv12hTTxVmYrYTJtgLOqJQSqJ.jpg", alt: "بيوديرما كريم اتوديرم ألترا المرطب المغذي 500 مل" }
    ],
    categories: [category("c-body")],
    brandId: "b-bioderma",
    rating: { average: 4.8, count: 430 },
    inStock: true,
  },
  {
    id: "p-12",
    slug: "eucerin-dermo-capillaire-shampoo-250",
    name: "يوسيرين ديرمو كابيلير شامبو العناية اليومية لفروة الرأس 250 مل",
    subtitle: "يحافظ على توازن فروة الرأس ويمنح الشعر لمعاناً طبيعياً وحماية من الجفاف",
    price: { amount: 9500, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/bb6f737d-a65f-45b0-8a51-f7c1319ec31b-1000x1000-F7z8AaaVuVDY7DhCFBRZLe9Gro4l52TrIam6ibul.jpg", alt: "يوسيرين ديرمو كابيلير شامبو العناية اليومية لفروة الرأس 250 مل" }
    ],
    categories: [category("c-hair")],
    brandId: "b-eucerin",
    rating: { average: 4.7, count: 340 },
    inStock: true,
  },
  {
    id: "p-13",
    slug: "the-ordinary-niacinamide-10-zinc-1",
    name: "ذا اورديناري سيروم نياسيناميد 10% زنك 1% لتقليل المسام 30 مل",
    subtitle: "يعمل على توازن إفراز الدهون وتوحيد لون البشرة والحد من التصبغات والعيوب",
    price: { amount: 7900, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/ef8e3eb3-6a3b-41e0-806f-b76e09a8caf4-1000x1000-zeKpD5i5VXGnwDTGW9o8zTNnrg31az5iSbKkzii4.jpg", alt: "ذا اورديناري سيروم نياسيناميد 10% زنك 1% لتقليل المسام 30 مل" }
    ],
    categories: [category("c-serums")],
    brandId: "b-theordinary",
    rating: { average: 4.7, count: 1240 },
    inStock: true,
  },
  {
    id: "p-14",
    slug: "cerave-foaming-cleanser-normal-to-oily-236",
    name: "سيرافي غسول رغوي للبشرة العادية إلى الدهنية 236 مل",
    subtitle: "ينظف ويزيل الدهون بلطف مع الحفاظ على الحاجز الواقي للبشرة بالنياسيناميد",
    price: { amount: 14500, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/4fd18e28-8768-445f-a1c1-64e5219bcc63-1000x1000-UG1RCSLP8sxvDBWzVDysvvtBwo7SHPZYETLemo4s.jpg", alt: "سيرافي غسول رغوي للبشرة العادية إلى الدهنية 236 مل" }
    ],
    categories: [category("c-cleansers")],
    brandId: "b-cerave",
    rating: { average: 4.9, count: 890 },
    inStock: true,
  },
  {
    id: "p-15",
    slug: "bioderma-cicabio-soothing-repairing-cream-40",
    name: "بيوديرما كريم سيكابيو لترميم وتهدئة البشرة المتضررة 40 مل",
    subtitle: "يسرع التئام وترميم الجلد ويخفف الشعور بالانزعاج والرغبة بالحك",
    price: { amount: 8900, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/ef8e3eb3-6a3b-41e0-806f-b76e09a8caf4-1000x1000-zeKpD5i5VXGnwDTGW9o8zTNnrg31az5iSbKkzii4.jpg", alt: "بيوديرما كريم سيكابيو لترميم وتهدئة البشرة المتضررة 40 مل" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-bioderma",
    rating: { average: 4.8, count: 310 },
    inStock: true,
  },
  {
    id: "p-16",
    slug: "velvet-matte-liquid-lipstick-shuraim",
    name: "شريم أحمر شفاه سائل مخملي يدوم طويلاً",
    subtitle: "لون غني ومكثف بثبات فائق يمنح الشفاه لمسة مخملية ناعمة دون تشقق",
    price: { amount: 8500, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/cf36a5c2-0b0a-4106-8a26-04ad21c71995-1000x1000-MRRceVUSNmUhJyAEv4hEEseYqWUADVeQFJuK3Yrq.jpg", alt: "شريم أحمر شفاه سائل مخملي يدوم طويلاً" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-aigital",
    rating: { average: 4.9, count: 420 },
    inStock: true,
  },
  {
    id: "p-17",
    slug: "royal-amber-oud-parfum-100",
    name: "عطر رويال عنبر وعود شرقي فاخر 100 مل",
    subtitle: "توليفة راقية آسرة تجمع نفحات العود الكمبودي والعنبر الدافئ والورد الطائفي",
    price: { amount: 32000, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/f73cf581-e5d5-47ca-b0f1-92e597346023-1000x1000-tme1QmGXQxUEIGtQviCcXJYsKPYkYiaJp2xEvtco.jpg", alt: "عطر رويال عنبر وعود شرقي فاخر 100 مل" }
    ],
    categories: [category("c-fragrance")],
    brandId: "b-aigital",
    rating: { average: 5, count: 180 },
    inStock: true,
  },
  {
    id: "p-18",
    slug: "numbuzin-no3-skin-softening-serum-50",
    name: "نامبوزين سيروم رقم 3 لتنعيم نسيج البشرة 50 مل",
    subtitle: "معزز بخلاصة التخمير وببتيدات متطورة لتضييق المسام وتنعيم ملمس البشرة",
    price: { amount: 13800, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/af978eed-8745-481e-ac99-7c1cedae7d15-1000x1000-A7Bms3kbjwN3nUYTAx1JdUvLDXv58k6lb97zGOjn.jpg", alt: "نامبوزين سيروم رقم 3 لتنعيم نسيج البشرة 50 مل" }
    ],
    categories: [category("c-korean")],
    brandId: "b-boj",
    rating: { average: 4.8, count: 290 },
    inStock: true,
  },
  {
    id: "p-19",
    slug: "medicube-zero-pore-pads-70",
    name: "ميديكيوب وسادات تنقية المسام زيرو بور 70 قطعة",
    subtitle: "وسادات مقشرة مزدوجة تنظف المسام بعمق وتقلل من مظهر المسام الواسعة",
    price: { amount: 16500, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/61a1d084-f840-4dd2-9ae3-7060a9de88f8-1000x1000-hyN18ZNE7QdkYmg1yK1wwqfb2gMwsvEfAdAvIRy9.jpg", alt: "ميديكيوب وسادات تنقية المسام زيرو بور 70 قطعة" }
    ],
    categories: [category("c-korean")],
    brandId: "b-boj",
    rating: { average: 4.9, count: 350 },
    inStock: true,
  },
  {
    id: "p-20",
    slug: "glow-lab-nude-eyeshadow-palette-18",
    name: "جلو لاب باليت ظلال العيون ترابية ومعدنية 18 لون",
    subtitle: "تدرجات ألوان نيود وترابية بتركيبات حريرية مات وميتاليك تناسب كافة الإطلالات",
    price: { amount: 14900, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/c2451f15-013d-48e9-a414-cdef8d14899d-1000x1000-S7koBnaoADBFS186XLJOoaSwcRHrKzymMRz7Uj2f.jpg", alt: "جلو لاب باليت ظلال العيون ترابية ومعدنية 18 لون" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-glowlab",
    rating: { average: 4.7, count: 215 },
    inStock: true,
  },
  {
    id: "p-21",
    slug: "shuraim-luxury-hair-oil-serum-100",
    name: "شريم سيروم وزيت الأرجان الفاخر للشعر 100 مل",
    subtitle: "تغذية عميقة ولمعان حريري فوري يحمي أطراف الشعر من التقصف والحرارة",
    price: { amount: 11900, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/e59f10f8-790d-401e-8943-cde5af51c8a7-1000x1000-z5fnfIkFFH01IFDrJSeLo5pBHc189AAeaFm816VN.jpg", alt: "شريم سيروم وزيت الأرجان الفاخر للشعر 100 مل" }
    ],
    categories: [category("c-hair")],
    brandId: "b-aigital",
    rating: { average: 4.9, count: 310 },
    inStock: true,
  },
  {
    id: "p-22",
    slug: "bioderma-atoderm-hands-nails-cream-50",
    name: "بيوديرما كريم اتوديرم المرطب لليدين والأظافر 50 مل",
    subtitle: "عناية يومية مغذية ومحمية تترك قفازاً واقياً غير دهني على اليدين",
    price: { amount: 4900, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/4fd18e28-8768-445f-a1c1-64e5219bcc63-1000x1000-UG1RCSLP8sxvDBWzVDysvvtBwo7SHPZYETLemo4s.jpg", alt: "بيوديرما كريم اتوديرم المرطب لليدين والأظافر 50 مل" }
    ],
    categories: [category("c-hand")],
    brandId: "b-bioderma",
    rating: { average: 4.8, count: 180 },
    inStock: true,
  },
  {
    id: "p-23",
    slug: "eucerin-sun-sensitive-protect-lotion-extra-light-150",
    name: "يوسيرين لوشن حماية من الشمس فائق الخفة للبشرة الحساسة SPF50+ 150 مل",
    subtitle: "امتصاص فوري ومقاوم للماء يحمي البشرة من أضرار أشعة الشمس UVA و UVB",
    price: { amount: 16900, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/19dd96ee-c81c-4680-8e9e-dca472c2ea83-1000x1000-dT8qHEQm0dvmXy9t0oHKKoBjovO34KDFGNhxEkeL.jpg", alt: "يوسيرين لوشن حماية من الشمس فائق الخفة للبشرة الحساسة SPF50+ 150 مل" }
    ],
    categories: [category("c-sunscreen")],
    brandId: "b-eucerin",
    rating: { average: 4.8, count: 240 },
    inStock: true,
  },
  {
    id: "p-24",
    slug: "musk-tahira-pure-body-hair-mist-100",
    name: "مسك الطهارة معطر فاخر للجسم والشعر 100 مل",
    subtitle: "عبير النظافة الفاتن بنفحات المسك الأبيض والبودرة النقية يدوم طوال اليوم",
    price: { amount: 18500, currency: "YER" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/0ed73ac7-95eb-44eb-bf99-ce714139b422-1000x1000-nnOV7LuUE8QRm5UBw8AGpuSt2JjkcX3DUOnSPzUf.jpg", alt: "مسك الطهارة معطر فاخر للجسم والشعر 100 مل" }
    ],
    categories: [category("c-fragrance")],
    brandId: "b-aigital",
    rating: { average: 5, count: 530 },
    inStock: true,
  }
]

export const mockCollections: Collection[] = [
  {
    id: "col-new-in",
    slug: "new-in",
    name: "وصل حديثاً",
    kind: "editorial",
    productIds: ["p-17", "p-18", "p-19", "p-20", "p-21", "p-22", "p-23", "p-24"],
  },
  {
    id: "col-best-sellers",
    slug: "best-sellers",
    name: "الأكثر مبيعاً",
    kind: "seasonal",
    productIds: ["p-9", "p-10", "p-11", "p-12", "p-13", "p-14", "p-15", "p-16"],
  },
]

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
  {
    id: "b-cerave",
    slug: "cerave",
    name: "سيرافي - CeraVe",
    description: "عناية طبية متطورة بمركب السيراميد.",
    logo: "https://cdn.salla.sa/onxjbX/ptHqLZHG3CDkYritMyW5Z9PYwaZZlUoeC65gcCzw.jpg",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/95afbdc5-4d37-485e-93c4-ff786e2ac9fa.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/95afbdc5-4d37-485e-93c4-ff786e2ac9fa.webp",
    featured: true,
  },
  {
    id: "b-bioderma",
    slug: "bioderma",
    name: "بيوديرما - Bioderma",
    description: "حلول مبتكرة للعناية بالبشرة الحساسة.",
    logo: "https://cdn.salla.sa/onxjbX/ZFzlWkQpk0rH8nMYga5goNNhtdMYEJKinR5vM0JR.png",
    productImage: "https://cdn.files.salla.network/other/1099831979/e4ed08f6-ec64-4572-a412-49c7e5a65bc0-original.webp",
    image: "https://cdn.files.salla.network/other/1099831979/e4ed08f6-ec64-4572-a412-49c7e5a65bc0-original.webp",
    featured: true,
  },
  {
    id: "b-laroche",
    slug: "la-roche-posay",
    name: "لاروش بوزيه - La Roche-Posay",
    description: "مستحضرات علاجية موصى بها من أطباء الجلدية.",
    logo: "https://cdn.salla.sa/onxjbX/wEckbmn39pGd7WQWaxU8pLDjmaM3GuZrzdITXY7o.png",
    productImage: "https://cdn.files.salla.network/other/1099831979/b074f17a-cbeb-46a2-8d6b-44ccf5ecb1d7-original.webp",
    image: "https://cdn.files.salla.network/other/1099831979/b074f17a-cbeb-46a2-8d6b-44ccf5ecb1d7-original.webp",
    featured: true,
  },
  {
    id: "b-eucerin",
    slug: "eucerin",
    name: "يوسيرين - Eucerin",
    description: "عناية فائقة وترطيب عميق مثبت إكلينيكياً.",
    logo: "https://cdn.salla.sa/onxjbX/sFCY4Ftn8DOsK4RK0urRpmcdafSSeMaNmnIO1Tih.png",
    productImage: "https://cdn.files.salla.network/other/1099831979/bd0bb7bc-ccee-46db-933a-a83f96a58c07-original.webp",
    image: "https://cdn.files.salla.network/other/1099831979/bd0bb7bc-ccee-46db-933a-a83f96a58c07-original.webp",
    featured: true,
  },
  {
    id: "b-cosrx",
    slug: "cosrx",
    name: "كوسركس - COSRX",
    description: "رواد العناية بالبشرة الكورية وحلزون البحر.",
    logo: "https://cdn.salla.sa/onxjbX/XXcVfZC0AcfrpJzSf1d5Kr3uOp71wMZtkiZLhVzG.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/fe17d70b-7fcf-4cfd-97a5-c3c03b2b6967.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/fe17d70b-7fcf-4cfd-97a5-c3c03b2b6967.webp",
    featured: true,
  },
  {
    id: "b-boj",
    slug: "beauty-of-joseon",
    name: "بيوتي اوف جوسون - Beauty of Joseon",
    description: "أسرار الجمال الكوري التقليدي الممزوج بالعلم الحديث.",
    logo: "https://cdn.salla.sa/onxjbX/ONDuIyIelzjCHHW7S9hhmp5Q242LqAl555rkKwNZ.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/e490801d-d978-4963-89bd-115817b9a921.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/e490801d-d978-4963-89bd-115817b9a921.webp",
    featured: true,
  },
  {
    id: "b-anua",
    slug: "anua",
    name: "انوا - Anua",
    description: "عناية طبيعية مهدئة بمستخلص نبتة القلب.",
    logo: "https://cdn.salla.sa/onxjbX/nVW1IOMs3X7PvfAWiJru2iiqQtl3gaTqDdl2mLST.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/9dfcdb43-d701-4be6-9281-1326c48e803b.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/9dfcdb43-d701-4be6-9281-1326c48e803b.webp",
    featured: true,
  },
  {
    id: "b-theordinary",
    slug: "the-ordinary",
    name: "ذا اورديناري - The Ordinary",
    description: "سيرومات ومكونات نقية بتركيزات فعالة.",
    logo: "https://cdn.salla.sa/onxjbX/f9MCXcsnZR4pUapfInxOZ373IPWQAkXmsbJsk4dY.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/d288d56a-7952-4ed5-a385-5c09c0a7ac56.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/d288d56a-7952-4ed5-a385-5c09c0a7ac56.webp",
    featured: true,
  },
  {
    id: "b-skin1004",
    slug: "skin-1004",
    name: "سكين 1004 - Skin 1004",
    description: "خلاصة السنتيلا النقية من مدغشقر لتهدئة البشرة وترميمها.",
    logo: "https://cdn.salla.sa/onxjbX/nAw0plKtZk0vRFaHaw3X0DNshxnV1U1OnPdjz1va.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/bc7f0688-00ec-4682-b6b0-2efb9d76e10a.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/bc7f0688-00ec-4682-b6b0-2efb9d76e10a.webp",
    featured: true,
  },
  {
    id: "b-cetaphil",
    slug: "cetaphil",
    name: "سيتافيل - Cetaphil",
    description: "ترطيب طبي لطيف وموصى به للبشرة الأكثر حساسية.",
    logo: "https://cdn.salla.sa/onxjbX/M1IzSsJXzl10IPylZBngrmrvfElE7EZTWiqtmQKm.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/04ba3e75-6b13-46a2-b2aa-76e5cb371aa4.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/04ba3e75-6b13-46a2-b2aa-76e5cb371aa4.webp",
    featured: true,
  },
  {
    id: "b-vichy",
    slug: "vichy",
    name: "فيشي - Vichy",
    description: "مياه فيشي البركانية لتقوية حاجز البشرة ونضارتها.",
    logo: "https://cdn.salla.sa/onxjbX/pv6lrdCUqrL01b5VtlsSSuDkY66NoWEaY8zM3lxF.png",
    productImage: "https://cdn.files.salla.network/other/1099831979/afc9355b-f58c-41df-8afb-c4367e25a14e-original.webp",
    image: "https://cdn.files.salla.network/other/1099831979/afc9355b-f58c-41df-8afb-c4367e25a14e-original.webp",
    featured: true,
  },
  {
    id: "b-medicube",
    slug: "medicube",
    name: "ميديكيوب - Medicube",
    description: "ابتكارات طبية كورية متقدمة للعناية بالمسام والشباب.",
    logo: "https://cdn.salla.sa/onxjbX/pSKezpndABzMbrL37Gtk2XMhP7OayOwF1P7WF7Qu.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/e490801d-d978-4963-89bd-115817b9a921.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/e490801d-d978-4963-89bd-115817b9a921.webp",
    featured: true,
  },
  {
    id: "b-mielle",
    slug: "mielle",
    name: "ميلي - MIELLE",
    description: "عناية عضوية فائقة للشعر بزيت إكليل الجبل والنعناع.",
    logo: "https://cdn.salla.sa/onxjbX/piKh6Jirm54j0YahiA57NvgwXuIraBF9C88q8Qnh.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/ed19cd0b-3c6c-4a0f-8484-d2aebeb3674a.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/ed19cd0b-3c6c-4a0f-8484-d2aebeb3674a.webp",
    featured: true,
  },
  {
    id: "b-avene",
    slug: "avene",
    name: "افين - Avene",
    description: "مياه حرارية طبيعية مهدئة ومعالجة للبشرة المتهيجة.",
    logo: "https://cdn.salla.sa/onxjbX/9bQekiXFQN76xvzQIWXIUWtJtPKiqGVH9xUeomJ4.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/c20b15e3-91ea-4e61-8e92-ff9bc48f8513.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/c20b15e3-91ea-4e61-8e92-ff9bc48f8513.webp",
    featured: true,
  },
  {
    id: "b-somebymi",
    slug: "some-by-mi",
    name: "سوم باي مي - Some By Mi",
    description: "علاجات المعجزة الكورية بأحماض التقشير الطبيعية AHA BHA PHA.",
    logo: "https://cdn.salla.sa/onxjbX/tAuS6QJmDo9jpJvfg7gnWB2LCoyZXhX3veWTx6bp.jpg",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/01aaddbd-a848-4b61-aef7-4f45f65b1908.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/01aaddbd-a848-4b61-aef7-4f45f65b1908.webp",
    featured: true,
  },
  {
    id: "b-laneige",
    slug: "laneige",
    name: "لانيج – Laneige",
    description: "أقنعة الشفاه والترطيب المائي العميق للبشرة النضرة.",
    logo: "https://cdn.salla.sa/onxjbX/zELOxyQuZKTvgM80EeSsANtsAft0ofsHmoTDOVZV.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/41942b62-dd70-4f3c-8011-cd497ad590d3.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/41942b62-dd70-4f3c-8011-cd497ad590d3.webp",
    featured: true,
  },
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
    price: { amount: 14.5, currency: "OMR", compareAtAmount: 18.5 },
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
    price: { amount: 16.9, currency: "OMR", compareAtAmount: 22 },
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
    price: { amount: 13.9, currency: "OMR", compareAtAmount: 17.5 },
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
    price: { amount: 11.5, currency: "OMR", compareAtAmount: 15 },
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
    price: { amount: 5.9, currency: "OMR", compareAtAmount: 8 },
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
    price: { amount: 15.2, currency: "OMR", compareAtAmount: 19.8 },
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
    price: { amount: 17.5, currency: "OMR", compareAtAmount: 21 },
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
    price: { amount: 12.8, currency: "OMR", compareAtAmount: 16 },
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
    price: { amount: 10.9, currency: "OMR" },
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
    price: { amount: 12.5, currency: "OMR" },
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
    price: { amount: 18, currency: "OMR" },
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
    price: { amount: 9.5, currency: "OMR" },
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
    price: { amount: 7.9, currency: "OMR" },
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
    price: { amount: 14.5, currency: "OMR" },
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
    price: { amount: 8.9, currency: "OMR" },
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
    price: { amount: 8.5, currency: "OMR" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/cf36a5c2-0b0a-4106-8a26-04ad21c71995-1000x1000-MRRceVUSNmUhJyAEv4hEEseYqWUADVeQFJuK3Yrq.jpg", alt: "شريم أحمر شفاه سائل مخملي يدوم طويلاً" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-shuraim",
    rating: { average: 4.9, count: 420 },
    inStock: true,
  },
  {
    id: "p-17",
    slug: "royal-amber-oud-parfum-100",
    name: "عطر رويال عنبر وعود شرقي فاخر 100 مل",
    subtitle: "توليفة راقية آسرة تجمع نفحات العود الكمبودي والعنبر الدافئ والورد الطائفي",
    price: { amount: 32, currency: "OMR" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/f73cf581-e5d5-47ca-b0f1-92e597346023-1000x1000-tme1QmGXQxUEIGtQviCcXJYsKPYkYiaJp2xEvtco.jpg", alt: "عطر رويال عنبر وعود شرقي فاخر 100 مل" }
    ],
    categories: [category("c-fragrance")],
    brandId: "b-shuraim",
    rating: { average: 5, count: 180 },
    inStock: true,
  },
  {
    id: "p-18",
    slug: "numbuzin-no3-skin-softening-serum-50",
    name: "نامبوزين سيروم رقم 3 لتنعيم نسيج البشرة 50 مل",
    subtitle: "معزز بخلاصة التخمير وببتيدات متطورة لتضييق المسام وتنعيم ملمس البشرة",
    price: { amount: 13.8, currency: "OMR" },
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
    price: { amount: 16.5, currency: "OMR" },
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
    price: { amount: 14.9, currency: "OMR" },
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
    price: { amount: 11.9, currency: "OMR" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/e59f10f8-790d-401e-8943-cde5af51c8a7-1000x1000-z5fnfIkFFH01IFDrJSeLo5pBHc189AAeaFm816VN.jpg", alt: "شريم سيروم وزيت الأرجان الفاخر للشعر 100 مل" }
    ],
    categories: [category("c-hair")],
    brandId: "b-shuraim",
    rating: { average: 4.9, count: 310 },
    inStock: true,
  },
  {
    id: "p-22",
    slug: "bioderma-atoderm-hands-nails-cream-50",
    name: "بيوديرما كريم اتوديرم المرطب لليدين والأظافر 50 مل",
    subtitle: "عناية يومية مغذية ومحمية تترك قفازاً واقياً غير دهني على اليدين",
    price: { amount: 4.9, currency: "OMR" },
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
    price: { amount: 16.9, currency: "OMR" },
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
    price: { amount: 18.5, currency: "OMR" },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/0ed73ac7-95eb-44eb-bf99-ce714139b422-1000x1000-nnOV7LuUE8QRm5UBw8AGpuSt2JjkcX3DUOnSPzUf.jpg", alt: "مسك الطهارة معطر فاخر للجسم والشعر 100 مل" }
    ],
    categories: [category("c-fragrance")],
    brandId: "b-shuraim",
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

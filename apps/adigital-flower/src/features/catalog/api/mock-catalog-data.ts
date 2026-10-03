import type { Brand, Collection, Product, ProductCategory } from "@rawnaq/types"

// Stand-in data source populated with authentic cosmetics, beauty devices, makeup, and skincare from cosmetics.sa
export const mockCategories: ProductCategory[] = [
  {
    id: "c-skincare",
    name: "العناية بالبشرة",
    slug: "skincare",
    parentId: null,
    level: 1,
    sortOrder: 1,
    image: "https://cdn.salla.sa/onxjbX/14c31764-c45f-48c7-a147-2131892eb705-1000x997.60479041916-MJykuQdLqcOCfzYUKoFPslxTAnV8zVZdntPYVw4I.jpg",
  },
  {
    id: "c-devices",
    name: "أجهزة العناية والجمال",
    slug: "electronics",
    parentId: null,
    level: 1,
    sortOrder: 2,
    image: "https://cdn.salla.sa/onxjbX/I4FseleecogdDozFXNLY8NYhyYoeOlFNchZFcr7j.jpg",
  },
  {
    id: "c-bundles",
    name: "بكجات التوفير",
    slug: "bundles",
    parentId: null,
    level: 1,
    sortOrder: 3,
    image: "https://cdn.salla.sa/onxjbX/pW3a5XAX4LyeB4f5KGYDLdRwtm6RPhuUiL6mPinU.png",
  },
  {
    id: "c-korean",
    name: "العناية الكورية",
    slug: "korean-care",
    parentId: null,
    level: 1,
    sortOrder: 4,
    image: "https://cdn.salla.sa/onxjbX/00c65a6e-d206-46c5-a20b-8eb7440aa957-1000x1000-iZJFecvuC5ODZ7kBSL2NkGjFWSwgBVCpSy2W5hNp.png",
  },
  {
    id: "c-makeup",
    name: "المكياج والتجميل",
    slug: "makeup",
    parentId: null,
    level: 1,
    sortOrder: 5,
    image: "https://cdn.salla.sa/onxjbX/cf36a5c2-0b0a-4106-8a26-04ad21c71995-1000x1000-MRRceVUSNmUhJyAEv4hEEseYqWUADVeQFJuK3Yrq.jpg",
  },
  {
    id: "c-hair",
    name: "العناية بالشعر",
    slug: "hair-care",
    parentId: null,
    level: 1,
    sortOrder: 6,
    image: "https://cdn.salla.sa/onxjbX/bb6f737d-a65f-45b0-8a51-f7c1319ec31b-1000x1000-F7z8AaaVuVDY7DhCFBRZLe9Gro4l52TrIam6ibul.jpg",
  },
  {
    id: "c-fragrance",
    name: "العطور الفاخرة",
    slug: "fragrance",
    parentId: null,
    level: 1,
    sortOrder: 7,
    image: "https://cdn.salla.sa/onxjbX/f73cf581-e5d5-47ca-b0f1-92e597346023-1000x1000-tme1QmGXQxUEIGtQviCcXJYsKPYkYiaJp2xEvtco.jpg",
  },
  {
    id: "c-sunscreen",
    name: "واقيات الشمس",
    slug: "sunscreen",
    parentId: null,
    level: 1,
    sortOrder: 8,
    image: "https://cdn.salla.sa/onxjbX/218f8c72-737b-44d9-b4f6-98e7c9a68b2b-1000x1000-75CSqnyWkJKxAau5weY3vs0smbNOdvxURX9F3PJm.jpg",
  },
  {
    id: "c-serums",
    name: "سيرومات علاجية",
    slug: "serums",
    parentId: null,
    level: 1,
    sortOrder: 9,
    image: "https://cdn.salla.sa/onxjbX/ef8e3eb3-6a3b-41e0-806f-b76e09a8caf4-1000x1000-zeKpD5i5VXGnwDTGW9o8zTNnrg31az5iSbKkzii4.jpg",
  },
  {
    id: "c-cleansers",
    name: "تنظيف البشرة",
    slug: "cleansers",
    parentId: null,
    level: 1,
    sortOrder: 10,
    image: "https://cdn.salla.sa/onxjbX/c9f4135d-0195-4b32-b376-b60bf80a5972-1000x1000-k0GRCZ82cKdkfl4iXIeLXu1rtyRUhTZM2QV1yXkW.jpg",
  },
  {
    id: "c-moisturizers",
    name: "ترطيب وتغذية",
    slug: "moisturizers",
    parentId: null,
    level: 1,
    sortOrder: 11,
    image: "https://cdn.salla.sa/onxjbX/cacfa04f-c99b-4ad8-93b3-47a473d7cfeb-1000x1000-QnjqENdKF3k7f2OPf0d5ksZsCDId5Y0x8OzoBNXr.jpg",
  },
  {
    id: "c-body",
    name: "العناية بالجسم",
    slug: "body-care",
    parentId: null,
    level: 1,
    sortOrder: 12,
    image: "https://cdn.salla.sa/onxjbX/21140a6d-cfda-4564-b2be-4769a4cee0ab-1000x1000-BOwjlQ2KTwi1ZTXOv12hTTxVmYrYTJtgLOqJQSqJ.jpg",
  },
  {
    id: "c-hand",
    name: "العناية باليدين",
    slug: "hand-care",
    parentId: null,
    level: 1,
    sortOrder: 13,
    image: "https://cdn.salla.sa/onxjbX/9ee233d5-fdca-44cc-a6da-75462aac768f-1000x1000-jAmuD7OZ2KbdtYZCc6H33V6xAYoKxnIw19p3AXJL.jpg",
  },
  {
    id: "c-accessories",
    name: "إكسسوارات وأدوات الجمال",
    slug: "accessories",
    parentId: null,
    level: 1,
    sortOrder: 14,
    image: "https://cdn.salla.sa/onxjbX/xSpIicw1QylPgp85ezxxEeG7imh68gzvYZUb7XRv.png",
  },
  // Subcategories
  { id: "c-cleansers-sub", name: "تنظيف البشرة", slug: "cleansers-sub", parentId: "c-skincare", level: 2, sortOrder: 1 },
  { id: "c-moisturizers-sub", name: "ترطيب البشرة", slug: "moisturizers-sub", parentId: "c-skincare", level: 2, sortOrder: 2 },
  { id: "c-serums-sub", name: "سيرومات علاجية", slug: "serums-sub", parentId: "c-skincare", level: 2, sortOrder: 3 },
  { id: "c-sunscreen-sub", name: "واقي شمس", slug: "sunscreen-sub", parentId: "c-skincare", level: 2, sortOrder: 4 },
  { id: "c-face", name: "الوجه والأساس", slug: "face", parentId: "c-makeup", level: 2, sortOrder: 1 },
  { id: "c-eyes", name: "العيون والحواجب", slug: "eyes", parentId: "c-makeup", level: 2, sortOrder: 2 },
  { id: "c-lips", name: "الشفاه", slug: "lips", parentId: "c-makeup", level: 2, sortOrder: 3 },
  { id: "c-shampoo", name: "شامبو وبلسم", slug: "shampoo", parentId: "c-hair", level: 2, sortOrder: 1 },
  { id: "c-hair-oils", name: "زيوت وماسكات", slug: "hair-oils", parentId: "c-hair", level: 2, sortOrder: 2 },
  { id: "c-smart-hair", name: "أجهزة الشعر والتصفيف", slug: "hair-devices", parentId: "c-devices", level: 2, sortOrder: 1 },
  { id: "c-smart-skin", name: "أجهزة تدليك وتقشير البشرة", slug: "skin-devices", parentId: "c-devices", level: 2, sortOrder: 2 },
]

export const mockBrands: Brand[] = [
  {
    id: "b-medicube",
    slug: "medicube",
    name: "ميديكيوب - Medicube",
    description: "العناية الكورية المبتكرة وأدوات تدليك غواشا المتقدمة.",
    logo: "https://cdn.salla.sa/onxjbX/pSKezpndABzMbrL37Gtk2XMhP7OayOwF1P7WF7Qu.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/e490801d-d978-4963-89bd-115817b9a921.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/e490801d-d978-4963-89bd-115817b9a921.webp",
    featured: true,
  },
  {
    id: "b-anua",
    slug: "anua",
    name: "انوا - Anua",
    description: "العناية الطبيعية المهدئة ومستخلصات نبتة القلب والخوخ.",
    logo: "https://cdn.salla.sa/onxjbX/nVW1IOMs3X7PvfAWiJru2iiqQtl3gaTqDdl2mLST.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/9dfcdb43-d701-4be6-9281-1326c48e803b.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/9dfcdb43-d701-4be6-9281-1326c48e803b.webp",
    featured: true,
  },
  {
    id: "b-cosrx",
    slug: "cosrx",
    name: "كوسركس - COSRX",
    description: "رواد العناية بالبشرة الكورية بخلاصة الحلزون وسيرومات النضارة.",
    logo: "https://cdn.salla.sa/onxjbX/XXcVfZC0AcfrpJzSf1d5Kr3uOp71wMZtkiZLhVzG.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/fe17d70b-7fcf-4cfd-97a5-c3c03b2b6967.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/fe17d70b-7fcf-4cfd-97a5-c3c03b2b6967.webp",
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
    id: "b-boj",
    slug: "beauty-of-joseon",
    name: "بيوتي اوف جوسون - Beauty of Joseon",
    description: "أسرار الجمال الكوري التقليدي الممزوج بأحدث المكونات العلمية.",
    logo: "https://cdn.salla.sa/onxjbX/ONDuIyIelzjCHHW7S9hhmp5Q242LqAl555rkKwNZ.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/e490801d-d978-4963-89bd-115817b9a921.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/e490801d-d978-4963-89bd-115817b9a921.webp",
    featured: true,
  },
  {
    id: "b-cerave",
    slug: "cerave",
    name: "سيرافي - CeraVe",
    description: "عناية طبية متطورة بمركب السيراميدات الثلاثية الأساسية.",
    logo: "https://cdn.salla.sa/onxjbX/ptHqLZHG3CDkYritMyW5Z9PYwaZZlUoeC65gcCzw.jpg",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/95afbdc5-4d37-485e-93c4-ff786e2ac9fa.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/95afbdc5-4d37-485e-93c4-ff786e2ac9fa.webp",
    featured: true,
  },
  {
    id: "b-bioderma",
    slug: "bioderma",
    name: "بيوديرما - Bioderma",
    description: "حلول طبية مبتكرة لحماية البشرة الحساسة وترميمها.",
    logo: "https://cdn.salla.sa/onxjbX/ZFzlWkQpk0rH8nMYga5goNNhtdMYEJKinR5vM0JR.png",
    productImage: "https://cdn.files.salla.network/other/1099831979/e4ed08f6-ec64-4572-a412-49c7e5a65bc0-original.webp",
    image: "https://cdn.files.salla.network/other/1099831979/e4ed08f6-ec64-4572-a412-49c7e5a65bc0-original.webp",
    featured: true,
  },
  {
    id: "b-eucerin",
    slug: "eucerin",
    name: "يوسيرين - Eucerin",
    description: "عناية فائقة وترطيب عميق مثبت إكلينيكياً لحماية البشرة.",
    logo: "https://cdn.salla.sa/onxjbX/sFCY4Ftn8DOsK4RK0urRpmcdafSSeMaNmnIO1Tih.png",
    productImage: "https://cdn.files.salla.network/other/1099831979/bd0bb7bc-ccee-46db-933a-a83f96a58c07-original.webp",
    image: "https://cdn.files.salla.network/other/1099831979/bd0bb7bc-ccee-46db-933a-a83f96a58c07-original.webp",
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
    id: "b-theordinary",
    slug: "the-ordinary",
    name: "ذا اورديناري - The Ordinary",
    description: "سيرومات علاجية نقية بتركيزات عالية وفعالة لمكافحة العيوب.",
    logo: "https://cdn.salla.sa/onxjbX/f9MCXcsnZR4pUapfInxOZ373IPWQAkXmsbJsk4dY.png",
    productImage: "https://cdn.files.salla.network/homepage/1099831979/d288d56a-7952-4ed5-a385-5c09c0a7ac56.webp",
    image: "https://cdn.files.salla.network/homepage/1099831979/d288d56a-7952-4ed5-a385-5c09c0a7ac56.webp",
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
    id: "b-maybelline",
    slug: "maybelline",
    name: "ميبيلين - Maybelline",
    description: "ماسكات وبودرات الوجه ومثبتات المكياج العالمية.",
    logo: "https://cdn.salla.sa/onxjbX/W3hnJQB9ej7YtEWpLVI3jUcjBPD11uBDFNZ0b8Yn.png",
    image: "https://cdn.files.salla.network/homepage/1099831979/d341d7a9-6032-4fb4-aed7-ed7a2ce95489-original.webp",
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
  {
    id: "b-anola",
    slug: "anola",
    name: "Anola",
    description: "أجهزة وتقنيات إزالة الشعر والعناية الذكية.",
    featured: true,
  },
  {
    id: "b-biodance",
    slug: "biodance",
    name: "Biodance",
    description: "ماسكات وبوسترات الكولاجين الكورية الثورية للبشرة الزجاجية.",
    featured: true,
  },
  {
    id: "b-centellian",
    slug: "centellian24",
    name: "Centellian24",
    description: "كريمات وسيرومات PDRN المعتمدة لعلاج محيط العين والشد.",
    featured: true,
  },
  {
    id: "b-benefit",
    slug: "benefit",
    name: "Benefit Cosmetics",
    description: "أشهر مستحضرات التنت، البرونزر والماسكارا العالمية.",
    featured: true,
  },
  {
    id: "b-rarebeauty",
    slug: "rare-beauty",
    name: "Rare Beauty",
    description: "مستحضرات التجميل الراقية وبلاشر الخدود الأكثر شهرة.",
    featured: true,
  },
  {
    id: "b-nars",
    slug: "nars",
    name: "NARS",
    description: "كونسيلر وخافي عيوب ومستحضرات الأساس الاحترافية.",
    featured: true,
  },
  {
    id: "b-harmony",
    slug: "harmony-beauty",
    name: "Harmony Beauty",
    description: "باليتات ظلال العيون وألوان المكياج الغنية بتركيبات حريرية.",
    featured: true,
  },
  {
    id: "b-palcare",
    slug: "palcare",
    name: "Palcare",
    description: "أمبولات وسيرومات تقوية بصيلات الشعر مع الميلاتونين.",
    featured: true,
  },
  {
    id: "b-alfaparf",
    slug: "alfaparf",
    name: "Alfaparf Milano",
    description: "علاجات الكيراتين الإيطالية والبلسم الخالي من السلفات.",
    featured: true,
  },
  {
    id: "b-exa",
    slug: "exa",
    name: "EXA",
    description: "لوشنات لبان الذكر ومعطرات المسك الفاخرة للجسم.",
    featured: true,
  },
  {
    id: "b-dermaroller",
    slug: "derma-roller",
    name: "Derma Roller System",
    description: "أنظمة ديرما رولر متعددة الرؤوس لتحفيز الكولاجين ونمو الشعر.",
    featured: true,
  },
  {
    id: "b-aigital",
    slug: "aigital",
    name: "Aigital Flower",
    description: "مستحضرات أيجيتال فلاور الحصرية للجمال والأناقة.",
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

const rawProducts: Product[] = [
  // --- SECTION 1: SMART BEAUTY DEVICES & ELECTRONICS ---
  {
    id: "p-anola-device",
    slug: "anola-hair-removal-device",
    name: "جهاز إزالة الشعر الأصلي من أنولا",
    subtitle: "رأس دوار مزدوج ومصباح LED ذكي لإزالة الشعر بدقة وبدون ألم",
    price: { amount: 16500, currency: "YER", compareAtAmount: 33000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/I4FseleecogdDozFXNLY8NYhyYoeOlFNchZFcr7j.jpg", alt: "جهاز إزالة الشعر الأصلي من أنولا" }
    ],
    categories: [category("c-devices")],
    brandId: "b-anola",
    rating: { average: 5, count: 48 },
    inStock: true,
  },
  {
    id: "p-medicube-guasha",
    slug: "medicube-anti-wrinkle-neck-cream-guasha",
    name: "كريم الرقبة المضاد للتجاعيد مع أداة غواشا بالـ PDRN والكولاجين من ميديكيوب 90 جم",
    subtitle: "دمج مبتكر بين الكريم المغذي للشد وأداة التدليك الكورية لشد الرقبة والفك",
    price: { amount: 26500, currency: "YER", compareAtAmount: 35000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/CAZuWYMkTeVTtYuIJCJ7gnEiINAzWW8u58qoG5pM.png", alt: "كريم الرقبة المضاد للتجاعيد مع أداة غواشا من ميديكيوب" }
    ],
    categories: [category("c-devices"), category("c-korean")],
    brandId: "b-medicube",
    rating: { average: 4.9, count: 62 },
    inStock: true,
  },
  {
    id: "p-dermaroller-5in1",
    slug: "derma-roller-system-5-in-1",
    name: "ديرما رولر سيستم 5 في 1 للعناية بالشعر والبشرة",
    subtitle: "رؤوس متعددة بإبر التيتانيوم لتحفيز إنتاج الكولاجين وعلاج تساقط الشعر",
    price: { amount: 8500, currency: "YER", compareAtAmount: 14500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/B4wMVTn8ybrxARJf9idsRKOx6NyRqJbkgLTBue1C.png", alt: "ديرما رولر سيستم 5 في 1" }
    ],
    categories: [category("c-devices"), category("c-accessories")],
    brandId: "b-dermaroller",
    rating: { average: 4.8, count: 114 },
    inStock: true,
  },
  {
    id: "p-dermaroller-4in1",
    slug: "derma-roller-system-4-in-1",
    name: "مجموعة ديرما رولر 4 في 1 للعناية بالبشرة",
    subtitle: "أداة تجديد ونضارة الوجه وتقليص المسام وامتصاص السيرومات بعمق",
    price: { amount: 9900, currency: "YER", compareAtAmount: 16500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/etKiAsOB9z3IR1TB1obhUtEoUbrwDRfnuMVSxJW0.png", alt: "مجموعة ديرما رولر 4 في 1" }
    ],
    categories: [category("c-devices"), category("c-accessories")],
    brandId: "b-dermaroller",
    rating: { average: 4.7, count: 83 },
    inStock: true,
  },
  {
    id: "p-dermaroller-6in1",
    slug: "derma-roller-system-6-in-1",
    name: "ديرما رولر سيستم 6 في 1 المطور للعناية المتكاملة",
    subtitle: "نظام شامل يتضمن رؤوس السيليكون وفرشاة التنظيف وإبر الديرما المجهرية",
    price: { amount: 7500, currency: "YER", compareAtAmount: 12000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/rlcHyAiNkDxGNfpv2c454YFegC44t2RNZ92Uy3QG.png", alt: "ديرما رولر سيستم 6 في 1" }
    ],
    categories: [category("c-devices"), category("c-accessories")],
    brandId: "b-dermaroller",
    rating: { average: 4.8, count: 76 },
    inStock: true,
  },

  // --- SECTION 2: AUTHENTIC 50% OFF BUNDLES & FEATURED DEALS ---
  {
    id: "p-bundle-morning-glow",
    slug: "bundle-morning-radiance-protection",
    name: "باكج إشراقة الصباح والحماية المتكاملة",
    subtitle: "مجموعة متكاملة للعناية الصباحية وحماية البشرة وإشراقتها طوال اليوم",
    price: { amount: 42000, currency: "YER", compareAtAmount: 84000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/pW3a5XAX4LyeB4f5KGYDLdRwtm6RPhuUiL6mPinU.png", alt: "باكج إشراقة الصباح والحماية" }
    ],
    categories: [category("c-bundles"), category("c-skincare")],
    brandId: "b-aigital",
    rating: { average: 5, count: 95 },
    inStock: true,
  },
  {
    id: "p-bundle-rosegold-spa",
    slug: "bundle-rose-gold-spa",
    name: "باكج روز قولد سبا المنزلي الفاخر",
    subtitle: "تجربة سبا منزلية متكاملة لترطيب ونعومة فائقة وتجديد خلايا الجسم",
    price: { amount: 21000, currency: "YER", compareAtAmount: 42000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/kMc5VH0OZgUSqU2NxEAchnk7cCyIxXuS1fC8ckvv.png", alt: "باكج روز قولد سبا" }
    ],
    categories: [category("c-bundles"), category("c-body")],
    brandId: "b-aigital",
    rating: { average: 4.9, count: 88 },
    inStock: true,
  },
  {
    id: "p-bundle-cocoa-vanilla",
    slug: "bundle-cocoa-vanilla-dream",
    name: "باكج كاكاو فانيلا دريم للترطيب العميق",
    subtitle: "روتين غني بعبير الكاكاو والفانيلا الآسر لتغذية وترطيب البشرة الجافة",
    price: { amount: 29000, currency: "YER", compareAtAmount: 58000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/aJE1TidEEYMIxEmXFstpUkXYyug4xhj4541jxR8s.png", alt: "باكج كاكاو فانيلا دريم" }
    ],
    categories: [category("c-bundles"), category("c-body")],
    brandId: "b-aigital",
    rating: { average: 5, count: 120 },
    inStock: true,
  },
  {
    id: "p-bundle-oral-care",
    slug: "bundle-fresh-breath-24-7",
    name: "باكج الفم لنَفَس واثق 24/7",
    subtitle: "عناية قصوى بصحة الفم والأسنان وتبييض لطيف وانتعاش يدوم طوال اليوم",
    price: { amount: 25000, currency: "YER", compareAtAmount: 50000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/6DJfuWOaod60cb3lxFst5qFnZqpKCU0vJYQ6XWQo.png", alt: "باكج الفم لنفس واثق" }
    ],
    categories: [category("c-bundles")],
    brandId: "b-aigital",
    rating: { average: 4.8, count: 64 },
    inStock: true,
  },
  {
    id: "p-bundle-baby-soft",
    slug: "bundle-baby-softness-first-bath",
    name: "باكج نعومة البيبي من أول استخدام",
    subtitle: "تركيبة فائقة الرقة تغذي البشرة وتمنحها ملمساً حريراً كبشرة الأطفال",
    price: { amount: 56000, currency: "YER", compareAtAmount: 112000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/orbl3Y5gFfchc6Es67Ewe3CbU7CaOYy9vatrWIdL.png", alt: "باكج نعومة البيبي" }
    ],
    categories: [category("c-bundles"), category("c-body")],
    brandId: "b-aigital",
    rating: { average: 4.9, count: 140 },
    inStock: true,
  },
  {
    id: "p-bundle-fresh-smooth",
    slug: "bundle-fresh-and-smooth",
    name: "باكج فريش آند سموث للانتعاش اليومي",
    subtitle: "روتين متوازن لتقشير لطيف وتنعيم فوري وحماية من الجفاف والروائح",
    price: { amount: 23000, currency: "YER", compareAtAmount: 46000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/VX83LPdi4CLEkr2Ktcg1NQKNpcKfr3RBEieJlLBL.png", alt: "باكج فريش آند سموث" }
    ],
    categories: [category("c-bundles"), category("c-body")],
    brandId: "b-aigital",
    rating: { average: 4.8, count: 79 },
    inStock: true,
  },
  {
    id: "p-bundle-sun-360",
    slug: "bundle-360-sun-defense-protection",
    name: "باكج حماية 360 درجة من أشعة الشمس",
    subtitle: "حماية فائقة من الأشعة الضارة مع ترطيب خفيف ومقاومة التصبغات",
    price: { amount: 31000, currency: "YER", compareAtAmount: 62000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/jMJ6xCsuXqflAlTlWKYFyHARTBndAMrVB1RiACRP.png", alt: "باكج حماية 360 درجة" }
    ],
    categories: [category("c-bundles"), category("c-sunscreen")],
    brandId: "b-aigital",
    rating: { average: 5, count: 160 },
    inStock: true,
  },
  {
    id: "p-bundle-glass-skin",
    slug: "bundle-glass-skin-hydration",
    name: "باكج الترطيب الزجاجي للبشرة الجافة",
    subtitle: "إكسير الجمال الكوري للترطيب العميق والحصول على مظهر البشرة الزجاجية المشرقة",
    price: { amount: 67000, currency: "YER", compareAtAmount: 134000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/rsNmCuvHIj8JhniMD5tFgPRqBC6WKx8uw76nqhoh.png", alt: "باكج الترطيب الزجاجي" }
    ],
    categories: [category("c-bundles"), category("c-korean")],
    brandId: "b-aigital",
    rating: { average: 5, count: 210 },
    inStock: true,
  },
  {
    id: "p-bundle-dual-cleansing",
    slug: "bundle-dual-cleansing-pore-blackheads",
    name: "الباكج المزدوج لتنظيف المسام والرؤوس السوداء",
    subtitle: "تقنية التنظيف المزدوج الكورية لإزالة الشوائب والرواسب والدهون العميقة",
    price: { amount: 56000, currency: "YER", compareAtAmount: 112000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/iXl4qcrbfgxOIr4eC0KIoXMtPntDp9PG7QMmCl10.png", alt: "الباكج المزدوج لتنظيف المسام" }
    ],
    categories: [category("c-bundles"), category("c-cleansers")],
    brandId: "b-aigital",
    rating: { average: 4.9, count: 185 },
    inStock: true,
  },
  {
    id: "p-bundle-peach-glow",
    slug: "bundle-peach-radiance-tone-evening",
    name: "باكج الخوخ لإشراقة وتوحيد لون البشرة",
    subtitle: "خلاصة الخوخ الكوري والنياسيناميد لتفتيح التصبغات ونضارة فورية مذهلة",
    price: { amount: 43000, currency: "YER", compareAtAmount: 86000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/itp2aeBMCUvj2eYMexpYYVaUuksT8C2EdGOfJlqu.png", alt: "باكج الخوخ لإشراقة البشرة" }
    ],
    categories: [category("c-bundles"), category("c-korean")],
    brandId: "b-aigital",
    rating: { average: 5, count: 175 },
    inStock: true,
  },
  {
    id: "p-bundle-skin-barrier",
    slug: "bundle-sensitive-skin-barrier-rescue",
    name: "باكج إنقاذ البشرة الحساسة وإصلاح حاجزها",
    subtitle: "تركيبة علاجية متقدمة لتهدئة الاحمرار وترميم حاجز البشرة المتضرر",
    price: { amount: 62000, currency: "YER", compareAtAmount: 124000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/3E1tD5xrRHm0Y92c9tDJzLcHwuBujgTCpXrR5Jrk.png", alt: "باكج إنقاذ البشرة الحساسة" }
    ],
    categories: [category("c-bundles"), category("c-skincare")],
    brandId: "b-aigital",
    rating: { average: 5, count: 130 },
    inStock: true,
  },

  // --- SECTION 3: KOREAN SKINCARE EXCELLENCE ---
  {
    id: "p-cosrx-snail-96",
    slug: "cosrx-advanced-snail-96-mucin-essence",
    name: "كوسركس خلاصة إفرازات الحلزون 96 لتجديد ونضارة البشرة 100 مل",
    subtitle: "إكسير الشباب الكوري الأكثر شهرة لترميم نسيج البشرة وإشراقتها الفورية",
    price: { amount: 11500, currency: "YER", compareAtAmount: 15000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/00c65a6e-d206-46c5-a20b-8eb7440aa957-1000x1000-iZJFecvuC5ODZ7kBSL2NkGjFWSwgBVCpSy2W5hNp.png", alt: "كوسركس خلاصة إفرازات الحلزون 96" }
    ],
    categories: [category("c-korean"), category("c-serums")],
    brandId: "b-cosrx",
    rating: { average: 4.9, count: 850 },
    inStock: true,
  },
  {
    id: "p-boj-sun-rice",
    slug: "beauty-of-joseon-relief-sun-rice-probiotics",
    name: "بيوتي اوف جوسون واقي شمس الأرز والبروبيوتيك SPF50+",
    subtitle: "واقي الشمس العضوي الكوري الخفيف والمغذي بمستخلص الأرز لتفتيح وحماية البشرة",
    price: { amount: 10900, currency: "YER", compareAtAmount: 14000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/8ea64796-bd81-4d08-bc39-a9d785663f3f-1000x1000-VLaupRTvwkvu8oys0QO4FJ1k5AUcPTSV0Gyyn9Vk.jpg", alt: "بيوتي اوف جوسون واقي شمس الأرز" }
    ],
    categories: [category("c-korean"), category("c-sunscreen")],
    brandId: "b-boj",
    rating: { average: 5, count: 980 },
    inStock: true,
  },
  {
    id: "p-anua-heartleaf-toner",
    slug: "anua-heartleaf-77-soothing-toner-250",
    name: "أنوا تونر هارت ليف 77% المهدئ للبشرة 250 مل",
    subtitle: "التونر الكوري رقم 1 لتهدئة الاحمرار وتنقية المسام وترطيب البشرة الحساسة",
    price: { amount: 12500, currency: "YER", compareAtAmount: 15500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/0bbb88ee-ea9c-4717-9976-e543fe5aa3ab-1000x1000-HR4H83TPPempjyl41xWYtVqoFkNNsnqDWVLhw2c4.jpg", alt: "أنوا تونر هارت ليف 77%" }
    ],
    categories: [category("c-korean"), category("c-cleansers")],
    brandId: "b-anua",
    rating: { average: 4.9, count: 610 },
    inStock: true,
  },
  {
    id: "p-anua-pdrn-mask",
    slug: "anua-pdrn-hyaluronic-serum-mask-23ml",
    name: "أنوا ماسك سيروم PDRN وحمض الهيالورونيك 100 للترطيب والإشراقة 23 مل",
    subtitle: "ماسك ورقي كوري غني بجزيئات PDRN لتجديد الخلايا وترطيب فوري عميق",
    price: { amount: 3800, currency: "YER", compareAtAmount: 4800 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/GDbqZVKnN6yJGLg4l9eE0sQY7hTriClD2EH6LxOs.jpg", alt: "أنوا ماسك سيروم PDRN" }
    ],
    categories: [category("c-korean"), category("c-skincare")],
    brandId: "b-anua",
    rating: { average: 4.9, count: 320 },
    inStock: true,
  },
  {
    id: "p-anua-tranexamic-mask",
    slug: "anua-niacinamide-tranexamic-acid-mask-28ml",
    name: "ماسك سيروم النياسيناميد وحمض الترانيكساميك من انوا 28 مل",
    subtitle: "علاج مكثف لتفتيح آثار الحبوب وتوحيد لون البشرة والحد من التصبغات",
    price: { amount: 3800, currency: "YER", compareAtAmount: 4900 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/fTNqsIjNPh34s6bpHOP77ad47kiUGuvWkSUYRTDc.png", alt: "ماسك النياسيناميد والترانيكساميك من انوا" }
    ],
    categories: [category("c-korean"), category("c-skincare")],
    brandId: "b-anua",
    rating: { average: 4.8, count: 190 },
    inStock: true,
  },
  {
    id: "p-anua-peach-mask",
    slug: "anua-peach-niacinamide-mask-25ml",
    name: "قناع الوجه بالخوخ والنياسيناميد من انوا 25 مل",
    subtitle: "مستخلص فاكهة الخوخ الكورية لإعادة الحيوية والإشراقة الوردية للبشرة الباهتة",
    price: { amount: 3800, currency: "YER", compareAtAmount: 4500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/6d44nPNtUwB9d8GFaQItlAX93jL0zz1f6tZsQAvN.png", alt: "قناع الوجه بالخوخ من انوا" }
    ],
    categories: [category("c-korean"), category("c-skincare")],
    brandId: "b-anua",
    rating: { average: 4.9, count: 240 },
    inStock: true,
  },
  {
    id: "p-biodance-bubble-booster",
    slug: "biodance-collagen-peptide-liposome-bubble-booster-95ml",
    name: "كولاجين ببتيد ليبوسوم بابل بوستر من بيودانس 95 مل",
    subtitle: "رغوة الفقاعات الدقيقة بالكولاجين والببتيدات لتغذية مكثفة ونضارة فائقة",
    price: { amount: 16500, currency: "YER", compareAtAmount: 22000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/vhylF7xHvEvmCPccEuRCuQCjzStx76AuBpJOM90f.png", alt: "كولاجين بابل بوستر بيودانس" }
    ],
    categories: [category("c-korean"), category("c-serums")],
    brandId: "b-biodance",
    rating: { average: 4.9, count: 410 },
    inStock: true,
  },
  {
    id: "p-biodance-jelly-mist",
    slug: "biodance-collagen-peptide-jelly-serum-mist-50ml",
    name: "رذاذ سيروم الجيلي بالكولاجين والببتيدات من بيودانس 50 مل",
    subtitle: "ميست هلامي مبتكر يرطب البشرة الجافة ويمنحها لمعان الهايدروجل الزجاجي",
    price: { amount: 14900, currency: "YER", compareAtAmount: 19500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/JKOCaqpiwJO1b2pCUxtOA3L8K0RuVJ2ZrcbP620v.png", alt: "رذاذ سيروم الجيلي بيودانس" }
    ],
    categories: [category("c-korean"), category("c-serums")],
    brandId: "b-biodance",
    rating: { average: 4.8, count: 260 },
    inStock: true,
  },
  {
    id: "p-centellian-eye-shot",
    slug: "centellian24-pdrn-eye-shot-360-30ml",
    name: "كريم العين شوت 360 PDRN لشد محيط العين من سينتيليان 24+ 30 مل",
    subtitle: "تركيبة كورية طبية معززة بجزيئات PDRN لتنعيم الخطوط الدقيقة وتفتيح الهالات",
    price: { amount: 13500, currency: "YER", compareAtAmount: 17000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/uBQXSURhWbKYKCgr8voCEm2Ptkq0mg29NfM1vYsu.png", alt: "كريم العين شوت 360 سينتيليان" }
    ],
    categories: [category("c-korean"), category("c-skincare")],
    brandId: "b-centellian",
    rating: { average: 4.8, count: 180 },
    inStock: true,
  },
  {
    id: "p-medicube-zero-pore",
    slug: "medicube-zero-pore-pads-70",
    name: "ميديكيوب وسادات تنقية المسام زيرو بور 70 قطعة",
    subtitle: "وسادات مقشرة مزدوجة تنظف المسام بعمق وتقلل من مظهر المسام الواسعة",
    price: { amount: 16500, currency: "YER", compareAtAmount: 21000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/61a1d084-f840-4dd2-9ae3-7060a9de88f8-1000x1000-hyN18ZNE7QdkYmg1yK1wwqfb2gMwsvEfAdAvIRy9.jpg", alt: "ميديكيوب وسادات تنقية المسام زيرو بور" }
    ],
    categories: [category("c-korean"), category("c-cleansers")],
    brandId: "b-medicube",
    rating: { average: 4.9, count: 350 },
    inStock: true,
  },

  // --- SECTION 4: MAKEUP, COSMETICS & BEAUTY ACCESSORIES ---
  {
    id: "p-harmony-palette-42",
    slug: "harmony-beauty-eyeshadow-palette-42-colors",
    name: "مجموعة ظلال العيون 42 لون من هارموني بيوتي - 42 جم",
    subtitle: "تشكيلة ألوان مذهلة بين المات والشيمر عالي الصبغة لإطلالات احترافية متكاملة",
    price: { amount: 9900, currency: "YER", compareAtAmount: 16800 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/xSpIicw1QylPgp85ezxxEeG7imh68gzvYZUb7XRv.png", alt: "مجموعة ظلال العيون 42 لون من هارموني بيوتي" }
    ],
    categories: [category("c-makeup"), category("c-accessories")],
    brandId: "b-harmony",
    rating: { average: 4.9, count: 380 },
    inStock: true,
  },
  {
    id: "p-benefit-benetint",
    slug: "benefit-benetint-rose-tinted-lip-cheek-stain-6ml",
    name: "تنت الشفاه والخدود بيني تنت روز تينتد من بنفت - 6 مل",
    subtitle: "التنت الوردي الأصلي المقاوم للمسح لإطلالة موردة طبيعية تدوم لساعات",
    price: { amount: 16500, currency: "YER", compareAtAmount: 21500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/qoZrVKUq5hIPR2MHZYWnz2jeoelLgH4YZhiKuihc.png", alt: "تنت بيني تنت روز تينتد من بنفت" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-benefit",
    rating: { average: 5, count: 620 },
    inStock: true,
  },
  {
    id: "p-rare-beauty-trio",
    slug: "rare-beauty-soft-pinch-cheeks-lips-trio-set",
    name: "مجموعة سوفت بينش الثلاثية للخدود والشفاه من رير بيوتي 3 قطع",
    subtitle: "المجموعة الأكثر طلباً عالمياً بدرجات سوفت بينش الساحرة وقوام خفيف ثابت",
    price: { amount: 28500, currency: "YER", compareAtAmount: 36000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/UjI9Y7vJKtuoEmQZpEVkoi00j1wrQzGbKsdgHh0X.png", alt: "مجموعة سوفت بينش الثلاثية من رير بيوتي" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-rarebeauty",
    rating: { average: 5, count: 540 },
    inStock: true,
  },
  {
    id: "p-nars-concealer",
    slug: "nars-radiant-creamy-concealer-6ml",
    name: "كونسيلر نارس كريمي خافي عيوب للبشرة – 6 مل",
    subtitle: "تغطية متوسطة إلى كاملة بلمسة نهائية طبيعية ومضيئة تخفي العيوب فورياً",
    price: { amount: 19800, currency: "YER", compareAtAmount: 24500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/ouhsMk83VJ1SmgxMVY5ZBUrCCA885B0TMfotRgZi.jpg", alt: "كونسيلر نارس كريمي" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-nars",
    rating: { average: 4.9, count: 480 },
    inStock: true,
  },
  {
    id: "p-note-powder",
    slug: "note-luminous-silk-compact-powder-10g",
    name: "بودرة مضغوطة لومينوس سيلك من نوت - 10 جم",
    subtitle: "تغطية حريرية خفيفة ترطب البشرة بزيت الأرجان وتمنع لمعان الدهون الزائدة",
    price: { amount: 7500, currency: "YER", compareAtAmount: 9800 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/hwEDKFUuS73HduUplzen4jxp3j57kzIZcsUeU3qM.png", alt: "بودرة مضغوطة لومينوس سيلك من نوت" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-harmony",
    rating: { average: 4.7, count: 195 },
    inStock: true,
  },
  {
    id: "p-christine-concealer",
    slug: "christine-full-coverage-concealer-06-15ml",
    name: "كونسيلر خافي العيوب تغطية كاملة رقم 06 من كرستين - 15 مل",
    subtitle: "إخفاء احترافي للهالات السوداء وتصبغات البشرة بقوام كريمي سهل الدمج",
    price: { amount: 6800, currency: "YER", compareAtAmount: 9200 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/7zvKOxIqdFPeZmJpXF26Vcgalz4BgXm0ag09fxHv.png", alt: "كونسيلر خافي العيوب من كرستين" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-harmony",
    rating: { average: 4.6, count: 150 },
    inStock: true,
  },
  {
    id: "p-elf-lash-roll",
    slug: "elf-lash-n-roll-curling-lifting-mascara-9g",
    name: "ماسكارا لاش اند رول لرفع الرموش من ايلف 9.2 جم",
    subtitle: "فرشاة مقوسة مبتكرة تمسك بكل رمش وترفعه وتمنحه كثافة وانحناء يدوم طوال اليوم",
    price: { amount: 8900, currency: "YER", compareAtAmount: 11900 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/Yf8b7BIPYLKI4L897mhvG437WEBB2qnc46VMdwAP.png", alt: "ماسكارا لاش اند رول من ايلف" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-benefit",
    rating: { average: 4.8, count: 310 },
    inStock: true,
  },
  {
    id: "p-golden-rose-brow",
    slug: "golden-rose-angled-brow-pencil-with-brush-102",
    name: "جولدن روز - قلم حواجب مشطوف مع فرشاة - درجة 102 - 1.1 جم",
    subtitle: "رسم دقيق لشعيرات الحاجب مع فرشاة مدمجة لتمشيط وتوزيع اللون بمثالية",
    price: { amount: 6700, currency: "YER", compareAtAmount: 8900 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/R2wEup4inXx7Q8kjyN6P5n1skQYJXRrlKIPQHQji.png", alt: "قلم حواجب مشطوف جولدن روز" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-harmony",
    rating: { average: 4.7, count: 215 },
    inStock: true,
  },
  {
    id: "p-maybelline-fitme",
    slug: "maybelline-fit-me-concealer-natural",
    name: "كونسيلر فيت مي ميبيلين نيويورك خافي عيوب - طبيعي",
    subtitle: "تغطية خالية من الزيوت تمنح منطقة محيط العين مظهراً منتعشاً ومشرقاً",
    price: { amount: 8200, currency: "YER", compareAtAmount: 10500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/rRvQRVQE977n3tc8L9r7sjz3HOyZ4LYzFXCrOk0O.jpg", alt: "كونسيلر فيت مي ميبيلين" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-maybelline",
    rating: { average: 4.8, count: 420 },
    inStock: true,
  },
  {
    id: "p-aigital-matte-lipstick",
    slug: "aigital-velvet-matte-liquid-lipstick",
    name: "أيجيتال فلاور أحمر شفاه سائل مخملي يدوم طويلاً",
    subtitle: "لون غني ومكثف بثبات فائق يمنح الشفاه لمسة مخملية ناعمة دون تشقق",
    price: { amount: 8500, currency: "YER", compareAtAmount: 11000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/cf36a5c2-0b0a-4106-8a26-04ad21c71995-1000x1000-MRRceVUSNmUhJyAEv4hEEseYqWUADVeQFJuK3Yrq.jpg", alt: "أيجيتال فلاور أحمر شفاه سائل مخملي" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-aigital",
    rating: { average: 4.9, count: 420 },
    inStock: true,
  },

  // --- SECTION 5: DERMO-COSMETICS, SKINCARE & HEALTH ---
  {
    id: "p-cerave-cleanser",
    slug: "cerave-hydrating-cleanser-236",
    name: "سيرافي غسول مرطب للبشرة العادية إلى الجافة 236 مل",
    subtitle: "ينظف ويرطب ويساعد على استعادة الحاجز الواقي للبشرة بثلاثة سيراميدات أساسية",
    price: { amount: 14500, currency: "YER", compareAtAmount: 18500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/14c31764-c45f-48c7-a147-2131892eb705-1000x997.60479041916-MJykuQdLqcOCfzYUKoFPslxTAnV8zVZdntPYVw4I.jpg", alt: "سيرافي غسول مرطب للبشرة 236 مل" }
    ],
    categories: [category("c-cleansers")],
    brandId: "b-cerave",
    rating: { average: 4.9, count: 480 },
    inStock: true,
  },
  {
    id: "p-cerave-lotion",
    slug: "cerave-moisturising-lotion-236",
    name: "سيرافي لوشن مرطب للبشرة الجافة مع حمض الهيالورونيك 236 مل",
    subtitle: "قوام خفيف سريع الامتصاص يرطب بعمق طوال اليوم بتقنية MVE الحاصلة على براءة اختراع",
    price: { amount: 12800, currency: "YER", compareAtAmount: 16000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/14c31764-c45f-48c7-a147-2131892eb705-1000x997.60479041916-MJykuQdLqcOCfzYUKoFPslxTAnV8zVZdntPYVw4I.jpg", alt: "سيرافي لوشن مرطب للبشرة 236 مل" }
    ],
    categories: [category("c-moisturizers")],
    brandId: "b-cerave",
    rating: { average: 4.9, count: 740 },
    inStock: true,
  },
  {
    id: "p-bioderma-sensibio",
    slug: "bioderma-sensibio-gel-moussant-500",
    name: "بيوديرما سنسيبيو جل رغوي منظف ومهدئ للبشرة الحساسة 500 مل",
    subtitle: "تنظيف لطيف يعزز ترطيب البشرة الطبيعي ويهدئ التهيج والاحمرار",
    price: { amount: 16900, currency: "YER", compareAtAmount: 22000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/ef8e3eb3-6a3b-41e0-806f-b76e09a8caf4-1000x1000-zeKpD5i5VXGnwDTGW9o8zTNnrg31az5iSbKkzii4.jpg", alt: "بيوديرما سنسيبيو جل رغوي 500 مل" }
    ],
    categories: [category("c-cleansers")],
    brandId: "b-bioderma",
    rating: { average: 4.8, count: 320 },
    inStock: true,
  },
  {
    id: "p-bioderma-atoderm",
    slug: "bioderma-atoderm-creme-ultra-500",
    name: "بيوديرما كريم اتوديرم ألترا المرطب المغذي 500 مل",
    subtitle: "عناية يومية فائقة الترطيب للبشرة الجافة والحساسة لجميع أفراد الأسرة",
    price: { amount: 18000, currency: "YER", compareAtAmount: 23000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/21140a6d-cfda-4564-b2be-4769a4cee0ab-1000x1000-BOwjlQ2KTwi1ZTXOv12hTTxVmYrYTJtgLOqJQSqJ.jpg", alt: "بيوديرما كريم اتوديرم ألترا 500 مل" }
    ],
    categories: [category("c-body")],
    brandId: "b-bioderma",
    rating: { average: 4.8, count: 430 },
    inStock: true,
  },
  {
    id: "p-eucerin-sun",
    slug: "eucerin-sun-oil-control-gel-cream",
    name: "يوسيرين جل كريم حماية من الشمس للتحكم باللمعان SPF50+",
    subtitle: "حماية فائقة من الأشعة فوق البنفسجية مع تأثير مطفي يدوم حتى 8 ساعات",
    price: { amount: 13900, currency: "YER", compareAtAmount: 17500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/218f8c72-737b-44d9-b4f6-98e7c9a68b2b-1000x1000-75CSqnyWkJKxAau5weY3vs0smbNOdvxURX9F3PJm.jpg", alt: "يوسيرين جل كريم حماية من الشمس" }
    ],
    categories: [category("c-sunscreen")],
    brandId: "b-eucerin",
    rating: { average: 4.9, count: 512 },
    inStock: true,
  },
  {
    id: "p-eucerin-hand",
    slug: "eucerin-urea-repair-hand-cream-75",
    name: "يوسيرين كريم اليدين يوريا ريبير بلس 5% يوريا 75 مل",
    subtitle: "إغاثة فورية وترطيب مكثف يدوم 48 ساعة للأيدي شديدة الجفاف والخشونة",
    price: { amount: 5900, currency: "YER", compareAtAmount: 8000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/9ee233d5-fdca-44cc-a6da-75462aac768f-1000x1000-jAmuD7OZ2KbdtYZCc6H33V6xAYoKxnIw19p3AXJL.jpg", alt: "يوسيرين كريم اليدين يوريا ريبير" }
    ],
    categories: [category("c-hand")],
    brandId: "b-eucerin",
    rating: { average: 4.8, count: 290 },
    inStock: true,
  },
  {
    id: "p-theordinary-retinoid",
    slug: "the-ordinary-granactive-retinoid-2-emulsion-30ml",
    name: "سيروم مستحلب جرانكتيف ريتينويد 2% من ذا اورديناري 30 مل",
    subtitle: "مكافحة متطورة لعلامات التقدم في السن وتجديد البشرة بفاعلية دون تهيج",
    price: { amount: 10800, currency: "YER", compareAtAmount: 14500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/oew0dNiq7ih8vTLEbmY0PTKyXaPuIHWVgw7XuWxP.png", alt: "سيروم جرانكتيف ريتينويد 2% ذا اورديناري" }
    ],
    categories: [category("c-serums")],
    brandId: "b-theordinary",
    rating: { average: 4.9, count: 420 },
    inStock: true,
  },
  {
    id: "p-theordinary-niacinamide",
    slug: "the-ordinary-niacinamide-10-zinc-1",
    name: "ذا اورديناري سيروم نياسيناميد 10% زنك 1% لتقليل المسام 30 مل",
    subtitle: "يعمل على توازن إفراز الدهون وتوحيد لون البشرة والحد من التصبغات والعيوب",
    price: { amount: 7900, currency: "YER", compareAtAmount: 10500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/ef8e3eb3-6a3b-41e0-806f-b76e09a8caf4-1000x1000-zeKpD5i5VXGnwDTGW9o8zTNnrg31az5iSbKkzii4.jpg", alt: "ذا اورديناري سيروم نياسيناميد 10%" }
    ],
    categories: [category("c-serums")],
    brandId: "b-theordinary",
    rating: { average: 4.7, count: 1240 },
    inStock: true,
  },

  // --- SECTION 6: HAIRCARE & LUXURY BODY MISTS ---
  {
    id: "p-palcare-ampoules",
    slug: "palcare-progres-hair-strengthening-melatonin-30-ampoules",
    name: "سيروم تقوية الشعر بروجريس مع ميلاتونين من بال كير 30 أمبولة",
    subtitle: "تركيبة طبية مكثفة معززة بالميلاتونين لوقف تساقط الشعر وتحفيز نمو البصيلات",
    price: { amount: 98000, currency: "YER", compareAtAmount: 198000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/Tm0ZjlBWHW86P2TQxdEG0bc8ivZ4GUj7s1e7B8ma.png", alt: "سيروم تقوية الشعر بال كير 30 امبول" }
    ],
    categories: [category("c-hair")],
    brandId: "b-palcare",
    rating: { average: 5, count: 94 },
    inStock: true,
  },
  {
    id: "p-alfaparf-shampoo",
    slug: "alfaparf-keratin-therapy-shampoo-250ml",
    name: "شامبو كيراتين ثيرابي لتغذية وترطيب الشعر من الفابارف 250 مل",
    subtitle: "شامبو إيطالي خالي من السلفات والأملاح يحافظ على الكيراتين ويمنح الشعر نعومة الحرير",
    price: { amount: 9200, currency: "YER", compareAtAmount: 12500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/kN53peRsBetIwd6PcRRYi8pvWuUe2ow3nFC7uKTc.png", alt: "شامبو كيراتين ثيرابي الفابارف" }
    ],
    categories: [category("c-hair")],
    brandId: "b-alfaparf",
    rating: { average: 4.9, count: 210 },
    inStock: true,
  },
  {
    id: "p-exa-lotion",
    slug: "exa-natural-frankincense-body-lotion-500ml",
    name: "لوشن للجسم طبيعي بخلاصة لبان الذكر من اكسا 500 مل",
    subtitle: "ترطيب عميق يشد الجلد ويوحد لون الجسم بخلاصة لبان الذكر العماني واليمني الطبيعي",
    price: { amount: 3800, currency: "YER", compareAtAmount: 5500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/hpcouZwaSEpYwJUa14Be1uJfPNUnzm49SNrHq3mQ.png", alt: "لوشن للجسم بخلاصة لبان الذكر من اكسا" }
    ],
    categories: [category("c-body")],
    brandId: "b-exa",
    rating: { average: 4.8, count: 340 },
    inStock: true,
  },
  {
    id: "p-exa-mist-powder",
    slug: "exa-musk-powder-body-mist-200ml",
    name: "معطر الجسم والمناطق الحساسة مسك بودرة من اكسا 200 مل",
    subtitle: "عبير البودرة النقية والمسك الأبيض يمنحك شعوراً بالانتعاش والنظافة طوال اليوم",
    price: { amount: 3800, currency: "YER", compareAtAmount: 5500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/QF8cCdeKv6r55llFr6isUQQWjfjNMdUGP4HvRMj4.png", alt: "معطر مسك بودرة اكسا" }
    ],
    categories: [category("c-fragrance"), category("c-body")],
    brandId: "b-exa",
    rating: { average: 4.9, count: 520 },
    inStock: true,
  },
  {
    id: "p-exa-mist-berry",
    slug: "exa-musk-cranberry-body-mist-200ml",
    name: "معطر الجسم والمناطق الحساسة مسك توت بري من اكسا 200 مل",
    subtitle: "مزيج منعش من التوت البري والمسك الفاخر لترطيب وتعطير الجسم الآمن",
    price: { amount: 3800, currency: "YER", compareAtAmount: 5500 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/K5FPm8BiH4tQb0P4TeYgelGqXe3evt8qefSxdJEV.png", alt: "معطر مسك توت بري اكسا" }
    ],
    categories: [category("c-fragrance"), category("c-body")],
    brandId: "b-exa",
    rating: { average: 4.8, count: 390 },
    inStock: true,
  },
  {
    id: "p-musk-tahara",
    slug: "musk-tahira-pure-body-hair-mist-100",
    name: "مسك الطهارة معطر فاخر للجسم والشعر 100 مل",
    subtitle: "عبير النظافة الفاتن بنفحات المسك الأبيض والبودرة النقية يدوم طوال اليوم",
    price: { amount: 18500, currency: "YER", compareAtAmount: 23000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/0ed73ac7-95eb-44eb-bf99-ce714139b422-1000x1000-nnOV7LuUE8QRm5UBw8AGpuSt2JjkcX3DUOnSPzUf.jpg", alt: "مسك الطهارة معطر فاخر للجسم والشعر 100 مل" }
    ],
    categories: [category("c-fragrance")],
    brandId: "b-aigital",
    rating: { average: 5, count: 530 },
    inStock: true,
  },
  {
    id: "p-aigital-royal-amber",
    slug: "royal-amber-oud-parfum-100",
    name: "عطر رويال عنبر وعود شرقي فاخر 100 مل",
    subtitle: "توليفة راقية آسرة تجمع نفحات العود الكمبودي والعنبر الدافئ والورد الطائفي",
    price: { amount: 32000, currency: "YER", compareAtAmount: 42000 },
    images: [
      { url: "https://cdn.salla.sa/onxjbX/f73cf581-e5d5-47ca-b0f1-92e597346023-1000x1000-tme1QmGXQxUEIGtQviCcXJYsKPYkYiaJp2xEvtco.jpg", alt: "عطر رويال عنبر وعود شرقي فاخر 100 مل" }
    ],
    categories: [category("c-fragrance")],
    brandId: "b-aigital",
    rating: { average: 5, count: 180 },
    inStock: true,
  },
]

export const mockProducts: Product[] = rawProducts.map((product) => ({
  ...product,
  brand: product.brandId ? mockBrands.find((b) => b.id === product.brandId) : undefined,
}))

export const mockCollections: Collection[] = [
  {
    id: "col-new-in",
    slug: "new-in",
    name: "وصل حديثاً",
    kind: "editorial",
    productIds: [
      "p-anola-device",
      "p-medicube-guasha",
      "p-biodance-bubble-booster",
      "p-rare-beauty-trio",
      "p-palcare-ampoules",
      "p-bundle-morning-glow",
      "p-anua-pdrn-mask",
      "p-benefit-benetint"
    ],
  },
  {
    id: "col-best-sellers",
    slug: "best-sellers",
    name: "الأكثر مبيعاً",
    kind: "seasonal",
    productIds: [
      "p-cosrx-snail-96",
      "p-boj-sun-rice",
      "p-anua-heartleaf-toner",
      "p-cerave-cleanser",
      "p-eucerin-sun",
      "p-theordinary-niacinamide",
      "p-harmony-palette-42",
      "p-bundle-glass-skin"
    ],
  },
  {
    id: "col-flash-deals",
    slug: "flash-deals",
    name: "عروض التوفير وبكجات الجمال",
    kind: "seasonal",
    productIds: [
      "p-anola-device",
      "p-bundle-morning-glow",
      "p-bundle-rosegold-spa",
      "p-bundle-sun-360",
      "p-bundle-glass-skin",
      "p-harmony-palette-42",
      "p-palcare-ampoules",
      "p-dermaroller-5in1"
    ],
  },
  {
    id: "col-devices",
    slug: "electronics",
    name: "أجهزة العناية والجمال الذكية",
    kind: "editorial",
    productIds: [
      "p-anola-device",
      "p-medicube-guasha",
      "p-dermaroller-5in1",
      "p-dermaroller-4in1",
      "p-dermaroller-6in1"
    ],
  },
]

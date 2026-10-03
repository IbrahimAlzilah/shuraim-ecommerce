import type { Brand, Collection, Product, ProductCategory } from "@rawnaq/types"

// Categories for Shuraim Beauty Store
export const mockCategories: ProductCategory[] = [
  {
    "id": "c-skincare",
    "name": "العناية بالبشرة",
    "slug": "skincare",
    "parentId": null,
    "level": 1,
    "sortOrder": 1,
    "image": "/images/categories/skincare.webp"
  },
  {
    "id": "c-hair",
    "name": "العناية بالشعر",
    "slug": "hair-care",
    "parentId": null,
    "level": 1,
    "sortOrder": 2,
    "image": "/images/categories/haircare.webp"
  },
  {
    "id": "c-body",
    "name": "بودرة وعناية الجسم",
    "slug": "body-care",
    "parentId": null,
    "level": 1,
    "sortOrder": 3,
    "image": "/images/categories/bodycare.webp"
  },
  {
    "id": "c-makeup",
    "name": "المكياج والتجميل",
    "slug": "makeup",
    "parentId": null,
    "level": 1,
    "sortOrder": 4,
    "image": "/images/categories/makeup.webp"
  },
  {
    "id": "c-fragrance",
    "name": "العطور والمسك الفاخر",
    "slug": "fragrance",
    "parentId": null,
    "level": 1,
    "sortOrder": 5,
    "image": "/images/categories/fragrance.webp"
  },
  {
    "id": "c-summer",
    "name": "روتين الصيف والنضارة",
    "slug": "summer-routine",
    "parentId": null,
    "level": 1,
    "sortOrder": 6,
    "image": "/images/categories/summer.webp"
  },
  {
    "id": "c-deals",
    "name": "عروض وتخفيضات حصرية",
    "slug": "deals",
    "parentId": null,
    "level": 1,
    "sortOrder": 7,
    "image": "/images/categories/offers.webp"
  },
  {
    "id": "c-boxes",
    "name": "بوكسات وهدايا التجميل",
    "slug": "boxes-bundles",
    "parentId": null,
    "level": 1,
    "sortOrder": 8,
    "image": "/images/categories/boxes.webp"
  },
  {
    "id": "c-electronics",
    "name": "أجهزة التجميل والعناية",
    "slug": "electronics",
    "parentId": null,
    "level": 1,
    "sortOrder": 9,
    "image": "/images/categories/electronics.webp"
  }
];

export const mockBrands: Brand[] = [
  {
    "id": "b-shreem",
    "slug": "shreem",
    "name": "شريم - Shreem Beauty",
    "description": "العلامة الرائدة لمتجر شريم بيوتي في سلطنة عُمان - زيوت شعر طبيعية وأعشاب أصلية 100%.",
    "logo": "/images/logo.jpg",
    "image": "/images/logo.jpg",
    "productImage": "/images/products/shreem-raw-afghan-hashish-oil.jpg",
    "featured": true
  },
  {
    "id": "b-cosrx",
    "slug": "cosrx",
    "name": "كوسركس - COSRX",
    "description": "حلول كورية مبتكرة للعناية الفائقة بالبشرة بمكونات طبيعية مركزة.",
    "logo": "/images/brands/cosrx.svg",
    "image": "/images/brands/cosrx.svg",
    "productImage": "/images/products/cosrx-snail-92-all-in-one-cream.jpg",
    "featured": true
  },
  {
    "id": "b-anua",
    "slug": "anua",
    "name": "أنوا - Anua",
    "description": "أشهر علامة كورية لتهدئة البشرة بمستخلصات الهارت ليف والنياسيناميد.",
    "logo": "/images/brands/anua.svg",
    "image": "/images/brands/anua.svg",
    "productImage": "/images/products/anua-niacinamide-txa-serum-1.jpg",
    "featured": true
  },
  {
    "id": "b-medicube",
    "slug": "medicube",
    "name": "ميديكيوب - Medicube",
    "description": "عناية طبية متطورة وتقنيات ديرما كورية لإغلاق المسام ونضارة البشرة.",
    "logo": "/images/brands/medicube.svg",
    "image": "/images/brands/medicube.svg",
    "productImage": "/images/products/medicube-red-moisture-sun-cream.jpg",
    "featured": true
  },
  {
    "id": "b-skin1004",
    "slug": "skin1004",
    "name": "سكين 1004 - SKIN1004",
    "description": "خلاصة عشبة السنتيلا النقية من مدغشقر لتهدئة وترميم حاجز البشرة.",
    "logo": "/images/brands/skin1004.svg",
    "image": "/images/brands/skin1004.svg",
    "productImage": "/images/products/skin1004-centella-ampoule-1.jpg",
    "featured": true
  },
  {
    "id": "b-cerave",
    "slug": "cerave",
    "name": "سيرافي - CeraVe",
    "description": "العناية المطورة بالتعاون مع أطباء الجلدية بالسيراميدات الأساسية.",
    "logo": "/images/brands/cerave.svg",
    "image": "/images/brands/cerave.svg",
    "productImage": "/images/products/cerave-hydrating-mineral-sunscreen-spf30.jpg",
    "featured": true
  },
  {
    "id": "b-laroche-posay",
    "slug": "laroche-posay",
    "name": "لا روش بوزيه - La Roche-Posay",
    "description": "العناية الجلدية الفرنسية الموثوقة للبشرة الحساسة ومشاكل المسام والتصبغات.",
    "logo": "/images/brands/laroche-posay.svg",
    "image": "/images/brands/laroche-posay.svg",
    "productImage": "/images/products/laroche-posay-glycolic-b5-serum.jpg",
    "featured": true
  },
  {
    "id": "b-acm",
    "slug": "acm",
    "name": "إيه سي إم - ACM",
    "description": "مختبرات الجلدية الفرنسية لحلول التصبغات، احمرار البشرة، وعلاج حب الشباب.",
    "logo": "/images/brands/acm.svg",
    "image": "/images/brands/acm.svg",
    "productImage": "/images/products/acm-depiwhite-advanced-cream.jpg",
    "featured": true
  },
  {
    "id": "b-axis-y",
    "slug": "axis-y",
    "name": "أكسيس واي - AXIS-Y",
    "description": "العناية الكورية المستوحاة من المناخ لتفتيح وتصحيح البقع الداكنة.",
    "logo": "/images/brands/axis-y.svg",
    "image": "/images/brands/axis-y.svg",
    "productImage": "/images/products/axis-y-dark-spot-glow-serum.jpg",
    "featured": true
  },
  {
    "id": "b-beauty-of-joseon",
    "slug": "beauty-of-joseon",
    "name": "بيوتي أوف جوسون - Beauty of Joseon",
    "description": "أسرار الجمال الكوري التقليدي بالهانبانغ، الأرز، والجينسنغ الملكي.",
    "logo": "/images/brands/beauty-of-joseon.svg",
    "image": "/images/brands/beauty-of-joseon.svg",
    "productImage": "/images/products/beauty-of-joseon-rice-toner.jpg",
    "featured": true
  },
  {
    "id": "b-secret-key",
    "slug": "secret-key",
    "name": "سيكريت كي - Secret Key",
    "description": "سلسلة سنوا وايت الشهيرة لتفتيح ونضارة الجسم والبشرة.",
    "logo": "/images/brands/secret-key.svg",
    "image": "/images/brands/secret-key.svg",
    "productImage": "/images/products/secret-key-snow-white-milky-pack.jpg",
    "featured": false
  },
  {
    "id": "b-qv",
    "slug": "qv",
    "name": "كيو في - QV Skincare",
    "description": "الترطيب الطبي الفائق الموصى به من أطباء الجلدية للبشرة الجافة والحساسة.",
    "logo": "/images/brands/qv.svg",
    "image": "/images/brands/qv.svg",
    "productImage": "/images/products/qv-moisturising-cream.jpg",
    "featured": true
  },
  {
    "id": "b-the-ordinary",
    "slug": "the-ordinary",
    "name": "ذا أورديناري - The Ordinary",
    "description": "تركيبات علاجية مركزة ونزيهة لمشاكل البشرة وترطيب الجسم.",
    "logo": "/images/brands/the-ordinary.svg",
    "image": "/images/brands/the-ordinary.svg",
    "productImage": "/images/products/the-ordinary-inulin-body-lotion.jpg",
    "featured": false
  },
  {
    "id": "b-dr-althea",
    "slug": "dr-althea",
    "name": "دكتور ألثيا - Dr. Althea",
    "description": "عناية طبية كورية متقدمة لترميم وتقوية حاجز البشرة الحساسة.",
    "logo": "/images/brands/dr-althea.svg",
    "image": "/images/brands/dr-althea.svg",
    "productImage": "/images/products/dr-althea-147-barrier-cream-1.jpg",
    "featured": false
  },
  {
    "id": "b-roseberry",
    "slug": "roseberry",
    "name": "روز بيري - Roseberry",
    "description": "أفخم مستحضرات التجميل والعناية بتركيبات استثنائية وعصرية.",
    "logo": "/images/brands/roseberry.jpg",
    "image": "/images/brands/roseberry.jpg",
    "productImage": "/images/products/pink-whitening-firming-soap.jpg",
    "featured": true
  },
  {
    "id": "b-golf-orchid",
    "slug": "golf-orchid",
    "name": "جولف أوركيد - Golf Orchid",
    "description": "أفخم روائح العطور الشرقية، مباخر، ومخمريات مسك الشعر والجسم.",
    "logo": "/images/brands/golf-orchid.jpg",
    "image": "/images/brands/golf-orchid.jpg",
    "productImage": "/images/brands/golf-orchid.jpg",
    "featured": true
  },
  {
    "id": "b-k-secret",
    "slug": "k-secret",
    "name": "كيه سيكريت - K-Secret Seoul 1988",
    "description": "سلسلة سول 1988 ببروبيوتيك السيكا والريتينال والجينسنغ الأسود.",
    "logo": "/images/brands/k-secret.svg",
    "image": "/images/brands/k-secret.svg",
    "productImage": "/images/products/seoul-1988-retinal-black-ginseng-serum.jpg",
    "featured": false
  },
  {
    "id": "b-bioderma",
    "slug": "bioderma",
    "name": "بيوديرما - Bioderma",
    "description": "العناية البيولوجية الفرنسية لحماية حاجز البشرة وترطيبها بعمق.",
    "logo": "/images/brands/bioderma.svg",
    "image": "/images/brands/bioderma.svg",
    "productImage": "/images/products/bioderma-atoderm-creme-ultra.jpg",
    "featured": false
  },
  {
    "id": "b-embryolisse",
    "slug": "embryolisse",
    "name": "إمبريوليس - Embryolisse",
    "description": "سر خبراء التجميل الفرنسي للترطيب والتهيئة المثالية للمكياج.",
    "logo": "/images/brands/embryolisse.svg",
    "image": "/images/brands/embryolisse.svg",
    "productImage": "/images/products/embryolisse-lait-creme-concentre.jpg",
    "featured": false
  },
  {
    "id": "b-celimax",
    "slug": "celimax",
    "name": "سيليماكس - Celimax",
    "description": "مستحضرات ديرما كورية فعالة بشفافية تامة ومكونات مثبتة سريرياً.",
    "logo": "/images/brands/celimax.svg",
    "image": "/images/brands/celimax.svg",
    "productImage": "/images/products/celimax-retinol-shot-serum.jpg",
    "featured": false
  },
  {
    "id": "b-pastil",
    "slug": "pastil",
    "name": "باستيل - Pastil",
    "description": "عجائن وموردات طبيعية فورية للخدود والشفاه بمستخلصات نقية 100%.",
    "logo": "/images/brands/pastil.svg",
    "image": "/images/brands/pastil.svg",
    "productImage": "/images/products/pastil-cheek-tint-paste.jpg",
    "featured": false
  },
  {
    "id": "b-skala",
    "slug": "skala",
    "name": "سكالا - Skala",
    "description": "كريمات وماسكات الشعر البرازيلية الشهيرة لتغذية وترميم الخصلات التالفة.",
    "logo": "/images/brands/skala.svg",
    "image": "/images/brands/skala.svg",
    "productImage": "/images/products/skala-hair-nutrition-cream-1000g.jpg",
    "featured": false
  },
  {
    "id": "b-kenta",
    "slug": "kenta",
    "name": "كينتا - Kenta",
    "description": "الكريم المغربي المعتمد للعناية الحساسة والتلطيف والتفتيح الآمن.",
    "logo": "/images/brands/kenta.svg",
    "image": "/images/brands/kenta.svg",
    "productImage": "/images/products/kenta-bebe-creme-soin.jpg",
    "featured": false
  },
  {
    "id": "b-magic-skin",
    "slug": "magic-skin",
    "name": "ماجيك سكين - Magic Skin",
    "description": "حلول متقدمة للعناية والتفتيح وأجهزة التجميل المنزلية الحديثة.",
    "logo": "/images/brands/magic-skin.png",
    "image": "/images/brands/magic-skin.png",
    "productImage": "/images/products/s88-total-white-underarm-cream.jpg",
    "featured": false
  },
  {
    "id": "b-otory",
    "slug": "otory",
    "name": "عطري - Otory",
    "description": "أصالة العطور الشرقية ومسك الطهارة الملكي الفواح.",
    "logo": "/images/brands/otory.jpg",
    "image": "/images/brands/otory.jpg",
    "productImage": "/images/products/alatar-black-musk-soap.jpg",
    "featured": false
  },
  {
    "id": "b-cetaphil",
    "slug": "cetaphil",
    "name": "سيتافيل - Cetaphil",
    "description": "غسولات ومرطبات طبية لطيفة ينصح بها أطباء الجلدية حول العالم.",
    "logo": "/images/brands/cetaphil.svg",
    "image": "/images/brands/cetaphil.svg",
    "productImage": "/images/products/cetaphil-gentle-skin-cleanser.jpg",
    "featured": false
  },
  {
    "id": "b-mason",
    "slug": "mason-natural",
    "name": "ماسون ناتشورال - Mason Natural",
    "description": "مكملات وكريمات الكولاجين الأمريكية الأصلية لنضارة البشرة وشبابها.",
    "logo": "/images/brands/mason.svg",
    "image": "/images/brands/mason.svg",
    "productImage": "/images/products/mason-natural-collagen-beauty-cream.jpg",
    "featured": false
  },
  {
    "id": "b-rdl",
    "slug": "rdl",
    "name": "آر دي إل - RDL",
    "description": "محاليل بيبي فيس ومستحضرات تنظيف وتفتيح البشرة.",
    "logo": "/images/brands/rdl.svg",
    "image": "/images/brands/rdl.svg",
    "productImage": "/images/products/rdl-babyface-facial-cleanser.jpg",
    "featured": false
  },
  {
    "id": "b-eqqualberry",
    "slug": "eqqualberry",
    "name": "إكوالبيري - EQQUALBERRY",
    "description": "عناية كورية نقية بالبشرة لتهدئة وترميم حاجز البشرة الطبيعي.",
    "logo": "/images/brands/eqqualberry.svg",
    "image": "/images/brands/eqqualberry.svg",
    "featured": false
  }
];

function category(id: string): ProductCategory {
  const found = mockCategories.find((c) => c.id === id);
  if (!found) {
    throw new Error(`Unknown mock category id: ${id}`);
  }
  return found;
}

const rawProducts: Product[] = [
  {
    id: "prod-cosrx-hyaluronic-cream",
    slug: "cosrx-hyaluronic-acid-intensive-cream",
    name: "كريم الترطيب المكثف بحمض الهيالورونيك 100 جم من كوسركس",
    subtitle: "ترطيب عميق يدوم 24 ساعة • لبشرة ممتلئة ونضرة",
    description: "كريم مرطب مكثف بتركيز عالٍ من حمض الهيالورونيك وخلاصة نبات نبق البحر، يعمل على حبس الرطوبة داخل خلايا البشرة ليعيد إليها مرونتها وتوهجها الطبيعي دون ملمس دهني.",
    badges: ["الأكثر طلباً", "ترطيب مكثف"],
    price: { amount: 6.8, currency: "OMR", compareAtAmount: 9.5 },
    images: [
      { url: "/images/products/cosrx-hyaluronic-intensive-cream.jpg", alt: "كريم الترطيب المكثف بحمض الهيالورونيك من كوسركس" },
      { url: "/images/products/cosrx-snail-92-all-in-one-cream.jpg", alt: "كوسركس كريم الحلزون وخيارات الترطيب" },
      { url: "/images/banners/summer-sunscreen-collection-banner.jpg", alt: "مجموعة العناية والنضارة الفائقة من شريم" }
    ],
    categories: [category("c-skincare"), category("c-summer")],
    brandId: "b-cosrx",
    rating: { average: 4.9, count: 245 },
    inStock: true,
    stockCount: 65
  },
  {
    id: "prod-cosrx-snail-92-cream",
    slug: "cosrx-advanced-snail-92-all-in-one-cream",
    name: "كريم الحلزون 92 الكل في واحد 100 جم من كوسركس",
    subtitle: "الأكثر مبيعاً عالمياً • ترميم فوري ونضارة زجاجية",
    description: "يحتوي على 92% من إفرازات الحلزون المفلترة الغنية بالعناصر المغذية. يساعد على تهدئة البشرة المتهيجة، ترميم حاجز الجلد المتضرر، ومنح البشرة مظهراً ممتلئاً ومشرقاً.",
    badges: ["الأكثر مبيعاً", "ترند تيك توك"],
    price: { amount: 7.2, currency: "OMR", compareAtAmount: 10.0 },
    images: [
      { url: "/images/products/cosrx-snail-92-all-in-one-cream.jpg", alt: "كريم الحلزون 92 الكل في واحد من كوسركس" },
      { url: "/images/products/cosrx-snail-96-mucin-essence.jpg", alt: "خلاصة الحلزون 96 المتقدمة المتكاملة" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "مجموعة السيرومات والعناية الكورية الفاخرة" }
    ],
    categories: [category("c-skincare"), category("c-deals")],
    brandId: "b-cosrx",
    rating: { average: 4.95, count: 520 },
    inStock: true,
    stockCount: 88
  },
  {
    id: "prod-cosrx-snail-96-essence",
    slug: "cosrx-advanced-snail-96-mucin-power-essence",
    name: "خلاصة الحلزون 96 المتقدمة 100 مل من كوسركس",
    subtitle: "إكسير النضارة والإصلاح • ملمس حريري مهدئ",
    description: "إيسنس مركز يحتوي على 96% من موسين الحلزون الطبيعي. يتغلغل في طبقات البشرة ليعزز حاجز الترطيب ويخفف البقع والتصبغات مع تغذية مكثفة تترك البشرة ناعمة ومرنة.",
    badges: ["ترند عالمي", "نضارة فورية"],
    price: { amount: 6.9, currency: "OMR", compareAtAmount: 9.8 },
    images: [
      { url: "/images/products/cosrx-snail-96-mucin-essence.jpg", alt: "خلاصة الحلزون 96 المتقدمة من كوسركس" },
      { url: "/images/products/cosrx-snail-radiance-dual-essence.jpg", alt: "خلاصة الحلزون المزدوجة بالنياسيناميد" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "سيرومات العناية الكورية الأصلية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-cosrx",
    rating: { average: 4.9, count: 480 },
    inStock: true,
    stockCount: 75
  },
  {
    id: "prod-cosrx-snail-radiance-dual-essence",
    slug: "cosrx-advanced-snail-radiance-dual-essence",
    name: "خلاصة الحلزون المزدوجة بلس النياسيناميد 80 مل من كوسركس",
    subtitle: "تركيبة مزدوجة بقوة مضاعفة • ترطيب وتفتيح في ضغطة واحدة",
    description: "ابتكار فريد يجمع بين خلاصة الحلزون المرطبة بنسبة 74.3% ومركب النياسيناميد المنقي بنسبة 5% في مضخة ثنائية تمنح بشرتك إشراقة وتوحيداً استثنائياً للون.",
    badges: ["تركيبة مزدوجة", "تفتيح وترطيب"],
    price: { amount: 8.5, currency: "OMR", compareAtAmount: 11.5 },
    images: [
      { url: "/images/products/cosrx-snail-radiance-dual-essence.jpg", alt: "خلاصة الحلزون المزدوجة من كوسركس" },
      { url: "/images/products/cosrx-galactomyces-95-essence.jpg", alt: "خلاصة الجالاكتوميسيس 95 للتفتيح" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "مجموعة السيرومات الحصرية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-cosrx",
    rating: { average: 4.85, count: 190 },
    inStock: true,
    stockCount: 42
  },
  {
    id: "prod-cosrx-galactomyces-95-essence",
    slug: "cosrx-galactomyces-95-tone-balancing-essence",
    name: "خلاصة الجالاكتوميسيس 95 لتوحيد لون البشرة 100 مل من كوسركس",
    subtitle: "تفتيح متوازن وتجديد خلايا • تخمير مغذٍ للبشرة",
    description: "تحتوي على 95% من مادة الجالاكتوميسيس المخمرة مع حمض الهيالورونيك والنياسيناميد، لتغذية البشرة وتفتيحها وتنقيتها من الشوائب والبهتان.",
    badges: ["تفتيح ونقاء"],
    price: { amount: 7.0, currency: "OMR", compareAtAmount: 9.9 },
    images: [
      { url: "/images/products/cosrx-galactomyces-95-essence.jpg", alt: "خلاصة الجالاكتوميسيس 95 من كوسركس" },
      { url: "/images/products/cosrx-hyaluronic-intensive-cream.jpg", alt: "كريم الترطيب بحمض الهيالورونيك" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "عروض السيرومات الكورية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-cosrx",
    rating: { average: 4.8, count: 165 },
    inStock: true,
    stockCount: 50
  },
  {
    id: "prod-anua-hyaluronic-cleanser",
    slug: "anua-hyaluronic-acid-8-panthenol-cleanser",
    name: "غسول رغوي لطيف ومرطب بالهيالورونيك والبانثينول 150 مل من أنوا",
    subtitle: "تنظيف فائق النعومة • لا يسبب جفاف البشرة",
    description: "غسول رغوي ناعم مدعم بـ 8 أنواع من حمض الهيالورونيك والبانثينول المهدئ، يزيل الرواسب والدهون مع الحفاظ على حاجز الرطوبة الطبيعي للبشرة.",
    badges: ["ترطيب عميق", "لطيف على البشرة"],
    price: { amount: 5.5, currency: "OMR", compareAtAmount: 7.9 },
    images: [
      { url: "/images/products/anua-hyaluronic-foaming-cleanser.jpg", alt: "غسول رغوي بالهيالورونيك والبانثينول من أنوا" },
      { url: "/images/products/anua-heartleaf-quercetinol-foam.jpg", alt: "غسول هارت ليف كويرسيتينول المنظف للمسام" },
      { url: "/images/banners/anua-heartleaf-collection-banner.jpg", alt: "مجموعة منتجات أنوا الكورية الأصلية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-anua",
    rating: { average: 4.9, count: 215 },
    inStock: true,
    stockCount: 60
  },
  {
    id: "prod-anua-heartleaf-quercetinol-foam",
    slug: "anua-heartleaf-quercetinol-pore-deep-cleansing-foam",
    name: "غسول رغوي هارت ليف كويرسيتينول للمسام العميقة 150 مل من أنوا",
    subtitle: "الترند الكوري الأول للمسام • تنظيف عميق وتهدئة فورية",
    description: "غسول رغوي يحتوي على 33.22% من ماء نبات الهارت ليف وخلاصة الكويرسيتينول مع بودرة الهارت ليف الناعمة لتقشير المسام بلطف والتخلص من الرؤوس السوداء.",
    badges: ["ترند تيك توك", "تنظيف مسام عميق"],
    price: { amount: 5.8, currency: "OMR", compareAtAmount: 8.2 },
    images: [
      { url: "/images/products/anua-heartleaf-quercetinol-foam.jpg", alt: "غسول هارت ليف كويرسيتينول من أنوا" },
      { url: "/images/products/anua-heartleaf-cleansing-oil.jpg", alt: "زيت هارت ليف المنظف للتحكم بالمسام" },
      { url: "/images/banners/anua-heartleaf-collection-banner.jpg", alt: "تشكيلة أنوا الكاملة لتهدئة البشرة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-anua",
    rating: { average: 4.92, count: 340 },
    inStock: true,
    stockCount: 80
  },
  {
    id: "prod-anua-heartleaf-cleansing-oil",
    slug: "anua-heartleaf-pore-control-cleansing-oil",
    name: "زيت تنظيف الوجه هارت ليف للتحكم بالمسام 200 مل من أنوا",
    subtitle: "إزالة الرؤوس السوداء والمكياج المقاوم للماء بكل سهولة",
    description: "زيت تنظيف كوري خفيف غير كوميدوجينيك، يذيب المكياج والشوائب والدهون المتراكمة داخل المسام دون انسداد، معزز بخلاصة الهارت ليف لتهدئة البشرة.",
    badges: ["الأكثر مبيعاً", "إزالة الرؤوس السوداء"],
    price: { amount: 6.9, currency: "OMR", compareAtAmount: 9.8 },
    images: [
      { url: "/images/products/anua-heartleaf-cleansing-oil.jpg", alt: "زيت تنظيف هارت ليف من أنوا" },
      { url: "/images/products/anua-heartleaf-80-ampoule.jpg", alt: "أمبولة هارت ليف 80% المهدئة" },
      { url: "/images/banners/anua-heartleaf-collection-banner.jpg", alt: "مجموعة روتين أنوا للمسام" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-anua",
    rating: { average: 4.9, count: 410 },
    inStock: true,
    stockCount: 70
  },
  {
    id: "prod-anua-niacinamide-txa-serum",
    slug: "anua-niacinamide-10-txa-4-dark-spot-serum",
    name: "سيروم النياسيناميد 10% وحمض الترانيكساميك 4% 30 مل من أنوا",
    subtitle: "مصحح البقع الداكنة والتصبغات • نتائج ملحوظة خلال 14 يوماً",
    description: "تركيبة مركزة متطورة تجمع بين 10% نياسيناميد و4% حمض ترانيكساميك مع ألفا أربوتين، تعمل بتناغم على تلاشي التصبغات العنيدة وآثار الحبوب وتوحيد لون البشرة.",
    badges: ["تفتيح التصبغات", "الأكثر طلباً"],
    price: { amount: 7.5, currency: "OMR", compareAtAmount: 10.5 },
    images: [
      { url: "/images/products/anua-niacinamide-txa-serum-1.jpg", alt: "سيروم النياسيناميد والترانيكساميك من أنوا - صورة 1" },
      { url: "/images/products/anua-niacinamide-txa-serum-2.jpg", alt: "سيروم النياسيناميد والترانيكساميك من أنوا - صورة 2" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "سيرومات كورية مصححة للبشرة" }
    ],
    categories: [category("c-skincare"), category("c-deals")],
    brandId: "b-anua",
    rating: { average: 4.88, count: 290 },
    inStock: true,
    stockCount: 65
  },
  {
    id: "prod-anua-heartleaf-80-ampoule",
    slug: "anua-heartleaf-80-moisture-soothing-ampoule",
    name: "أمبولة هارت ليف 80% المهدئة للبشرة الحساسة من أنوا",
    subtitle: "تهدئة مكثفة للبشرة الملتهبة والحساسة • قوام حريري مائي",
    description: "تحتوي على 80% من مستخلص الهارت ليف المزروع في كوريا لتوفير راحة فورية للبشرة المتهيجة والحساسة وحمايتها من العوامل البيئية الضارة.",
    badges: ["تهدئة فورية", "مناسب للحساسة"],
    price: { amount: 7.2, currency: "OMR", compareAtAmount: 9.9 },
    images: [
      { url: "/images/products/anua-heartleaf-80-ampoule.jpg", alt: "أمبولة هارت ليف 80% من أنوا" },
      { url: "/images/products/anua-birch-70-moisture-serum.jpg", alt: "سيروم ترطيب شجرة البتولا" },
      { url: "/images/banners/anua-heartleaf-collection-banner.jpg", alt: "تشكيلة أنوا المهدئة للبشرة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-anua",
    rating: { average: 4.86, count: 185 },
    inStock: true,
    stockCount: 45
  },
  {
    id: "prod-anua-pdrn-hyaluronic-serum",
    slug: "anua-pdrn-hyaluronic-acid-capsule-100-serum",
    name: "سيروم كبسولات PDRN وحمض الهيالورونيك 100 من أنوا",
    subtitle: "تقنية الكبسولات الذكية • تحفيز الكولاجين وشد البشرة",
    description: "سيروم كبسولي متطور يحتوي على جزيئات PDRN المستخلصة وحمض الهيالورونيك، يتغلغل بعمق لتحفيز إنتاج الكولاجين وتحسين مرونة البشرة وملء الخطوط.",
    badges: ["تقنية PDRN", "مكافحة الشيخوخة"],
    price: { amount: 8.9, currency: "OMR", compareAtAmount: 12.5 },
    images: [
      { url: "/images/products/anua-pdrn-hyaluronic-capsule-serum.jpg", alt: "سيروم كبسولات PDRN من أنوا" },
      { url: "/images/products/anua-birch-70-moisture-serum.jpg", alt: "سيروم الترطيب العميق من أنوا" },
      { url: "/images/banners/anua-heartleaf-collection-banner.jpg", alt: "مجموعة منتجات أنوا الفاخرة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-anua",
    rating: { average: 4.93, count: 150 },
    inStock: true,
    stockCount: 38
  },
  {
    id: "prod-anua-heartleaf-silky-sun-cream",
    slug: "anua-heartleaf-silky-moisture-sun-cream-spf50",
    name: "واقي شمس هارت ليف الحريري المرطب SPF 50+ من أنوا",
    subtitle: "حماية فائقة من الأشعة فوق البنفسجية • ملمس خفيف غير دهني",
    description: "واقي شمس كوري كيميائي يوفر حماية واسعة النطاق SPF 50+ PA++++ مع ملمس حريري سريع الامتصاص، لا يترك أي أثر أبيض ويهدئ البشرة تحت أشعة الشمس.",
    badges: ["حماية SPF 50+", "بدون أثر أبيض"],
    price: { amount: 6.2, currency: "OMR", compareAtAmount: 8.8 },
    images: [
      { url: "/images/products/anua-heartleaf-silky-sun-cream.jpg", alt: "واقي شمس هارت ليف الحريري من أنوا" },
      { url: "/images/banners/summer-sunscreen-collection-banner.jpg", alt: "تشكيلة واقيات الشمس الصيفية" },
      { url: "/images/banners/anua-heartleaf-collection-banner.jpg", alt: "عناية الصيف والوقاية من الشمس" }
    ],
    categories: [category("c-skincare"), category("c-summer")],
    brandId: "b-anua",
    rating: { average: 4.9, count: 260 },
    inStock: true,
    stockCount: 75
  },
  {
    id: "prod-anua-birch-70-serum",
    slug: "anua-birch-70-moisture-boosting-serum",
    name: "سيروم شجرة البتولا 70% لتعزيز ترطيب البشرة من أنوا",
    subtitle: "انتعاش مائي فائق • ترطيب متعدد الطبقات",
    description: "غني بـ 70% من ماء شجرة البتولا اليابانية مع مركب حمض الهيالورونيك، يعيد توازن رطوبة البشرة الجافة والباهتة ويمنحها إشراقة ندية فورية.",
    badges: ["ترطيب وانتعاش"],
    price: { amount: 6.8, currency: "OMR", compareAtAmount: 9.4 },
    images: [
      { url: "/images/products/anua-birch-70-moisture-serum.jpg", alt: "سيروم شجرة البتولا 70% من أنوا" },
      { url: "/images/products/anua-pdrn-hyaluronic-capsule-serum.jpg", alt: "سيروم كبسولات الهيالورونيك" },
      { url: "/images/banners/anua-heartleaf-collection-banner.jpg", alt: "مجموعة منتجات أنوا الكورية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-anua",
    rating: { average: 4.82, count: 120 },
    inStock: true,
    stockCount: 40
  },
  {
    id: "prod-shreem-raw-afghan-oil",
    slug: "shreem-raw-afghan-hashish-oil-original",
    name: "شريم - زيت الحشيش الأفغاني الخام الأصلي لإنبات وتكثيف الشعر",
    subtitle: "المنتج التوقيع لمتجر شريم • طبيعي 100% لخصلات قوية ولامعة",
    description: "الزيت الأفغاني الخام الأصلي تحت علامة شريم بيوتي المعتمدة. يعزز نمو بصيلات الشعر، يملأ الفراغات في مقدمة الرأس واللحية، يمنع التساقط ويمنح الشعر لمعاناً وكثافة استثنائية.",
    badges: ["توقيع شريم", "طبيعي 100%", "الأكثر طلباً"],
    price: { amount: 12.5, currency: "OMR", compareAtAmount: 18.0 },
    images: [
      { url: "/images/products/shreem-raw-afghan-hashish-oil.jpg", alt: "زيت الحشيش الأفغاني الخام الأصلي من شريم" },
      { url: "/images/products/shreem-oilex-hair-growth.jpg", alt: "زيت أويلكس لنمو وتكثيف الشعر" },
      { url: "/images/banners/shreem-hair-oils-collection-banner.jpg", alt: "مجموعة زيوت وشامبوهات شريم الطبيعية" }
    ],
    categories: [category("c-hair"), category("c-deals")],
    brandId: "b-shreem",
    rating: { average: 4.98, count: 680 },
    inStock: true,
    stockCount: 95
  },
  {
    id: "prod-shreem-camel-hump-balm",
    slug: "shreem-camel-hump-balm-joints-relief",
    name: "شريم - دهان سنام الجمل الطبيعي الفعال لآلام المفاصل والركبة",
    subtitle: "تركيبة شعبية أصيلة • راحة فورية ومرونة للحركة",
    description: "دهان سنام الجمل الطبيعي المطور تحت علامة شريم، مستخلص من دهن سنام الإبل مع زيوت عشبية دافئة لتخفيف آلام خشونة الركبة، التهابات المفاصل، وتيبس العضلات.",
    badges: ["توقيع شريم", "علاج طبيعي"],
    price: { amount: 5.5, currency: "OMR", compareAtAmount: 8.0 },
    images: [
      { url: "/images/products/shreem-camel-hump-balm.jpg", alt: "دهان سنام الجمل الطبيعي للمفاصل من شريم" },
      { url: "/images/products/shreem-yemeni-sidr-honey.jpg", alt: "عسل السدر والمنتجات الطبيعية من شريم" },
      { url: "/images/banners/shreem-hair-oils-collection-banner.jpg", alt: "منتجات العناية والصحة الطبيعية من شريم" }
    ],
    categories: [category("c-body")],
    brandId: "b-shreem",
    rating: { average: 4.9, count: 320 },
    inStock: true,
    stockCount: 85
  },
  {
    id: "prod-shreem-oilex-hair-growth",
    slug: "shreem-oilex-oil-nanotechnology-hair-growth",
    name: "شريم - زيت أويلكس بتقنية النانو الإنجليزية لتحفيز نمو الشعر 100 مل",
    subtitle: "تقنية نانو متطورة • امتصاص فائق وإنبات سريع",
    description: "تركيبة احترافية إنجليزية تعتمد على جزيئات النانو فائقة الصغر للتغلغل في جذور وبصيلات الشعر وتحفيز نمو الشعر وملء الفراغات والحد من التساقط.",
    badges: ["تقنية النانو", "إنبات الشعر"],
    price: { amount: 9.8, currency: "OMR", compareAtAmount: 14.5 },
    images: [
      { url: "/images/products/shreem-oilex-hair-growth.jpg", alt: "زيت أويلكس بتقنية النانو من شريم" },
      { url: "/images/products/shreem-raw-afghan-hashish-oil.jpg", alt: "زيت الحشيش الأفغاني الخام" },
      { url: "/images/banners/shreem-hair-oils-collection-banner.jpg", alt: "مجموعة العناية الفائقة بالشعر من شريم" }
    ],
    categories: [category("c-hair")],
    brandId: "b-shreem",
    rating: { average: 4.88, count: 240 },
    inStock: true,
    stockCount: 60
  },
  {
    id: "prod-shreem-yemeni-sidr-honey",
    slug: "shreem-yemeni-sidr-honey-natural-herbs",
    name: "شريم - عسل السدر اليمني الدوعني الطبيعي الفاخر",
    subtitle: "نقاء 100% من أودية حضرموت • قيمة غذائية وعلاجية استثنائية",
    description: "عسل سدر يمني أصيل مقطوف من أزهار شجر السدر البري في وادي دوعن، معزز بخصائص مناعية وعلاجية ممتازة وطعم غني لا يُقاوم.",
    badges: ["أصلي 100%", "جودة مضمونة"],
    price: { amount: 14.0, currency: "OMR", compareAtAmount: 19.5 },
    images: [
      { url: "/images/products/shreem-yemeni-sidr-honey.jpg", alt: "عسل السدر اليمني الفاخر من شريم" },
      { url: "/images/products/shreem-camel-hump-balm.jpg", alt: "منتجات العافية الطبيعية من شريم" },
      { url: "/images/banners/shreem-hair-oils-collection-banner.jpg", alt: "تراث وعافية طبيعية من شريم" }
    ],
    categories: [category("c-body")],
    brandId: "b-shreem",
    rating: { average: 4.96, count: 310 },
    inStock: true,
    stockCount: 40
  },
  {
    id: "prod-medicube-red-moisture-sun-cream",
    slug: "medicube-red-moisture-real-sun-cream-spf50",
    name: "واقي شمس ريد مويستشر ريل صن كريم SPF 50+ من ميديكيوب",
    subtitle: "حماية طبية عالية • ترطيب عميق بدون لمعان دهني",
    description: "واقي شمس طبي كوري متطور مصمم خصيصاً للبشرة المعرضة للحبوب والحساسة. يوفر ترطيباً مستمراً طوال اليوم مع حماية قصوى من الأشعة الضارة.",
    badges: ["حماية SPF 50+", "طبي للبشرة المعرضة للحبوب"],
    price: { amount: 7.9, currency: "OMR", compareAtAmount: 11.0 },
    images: [
      { url: "/images/products/medicube-red-moisture-sun-cream.jpg", alt: "واقي شمس ريد مويستشر من ميديكيوب - صورة العلبة" },
      { url: "/images/products/medicube-red-moisture-sun-tube.jpg", alt: "واقي شمس ريد مويستشر من ميديكيوب - صورة الأنبوب" },
      { url: "/images/products/medicube-red-moisture-sun-detail.jpg", alt: "واقي شمس ريد مويستشر - تفاصيل المنتج" },
      { url: "/images/products/medicube-red-moisture-sun-texture.jpg", alt: "واقي شمس ريد مويستشر - قوام الكريم" }
    ],
    categories: [category("c-skincare"), category("c-summer")],
    brandId: "b-medicube",
    rating: { average: 4.91, count: 280 },
    inStock: true,
    stockCount: 75
  },
  {
    id: "prod-medicube-zero-foam-cleanser",
    slug: "medicube-zero-foam-cleanser-pore-care",
    name: "غسول زيرو فوم لتنقية المسام وإزالة الشوائب من ميديكيوب",
    subtitle: "التحكم في الدهون والمسام • رغوة كثيفة ومنعشة",
    description: "غسول مسام مبتكر ينتج رغوة كثيفة ودقيقة تزيل حتى 99% من الأوساخ العالقة في مسام الوجه وتنظم إفراز الدهون دون أن تتسبب في جفاف الجلد.",
    badges: ["تنظيف مسام", "تحكم بالدهون"],
    price: { amount: 6.5, currency: "OMR", compareAtAmount: 9.0 },
    images: [
      { url: "/images/products/medicube-zero-foam-cleanser.jpg", alt: "غسول زيرو فوم من ميديكيوب" },
      { url: "/images/banners/medicube-zero-pore-mask-banner.jpg", alt: "ماسك زيرو بور من ميديكيوب" },
      { url: "/images/banners/medicube-collagen-jelly-banner.jpg", alt: "مجموعة منتجات ميديكيوب الكورية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-medicube",
    rating: { average: 4.87, count: 195 },
    inStock: true,
    stockCount: 55
  },
  {
    id: "prod-medicube-turmeric-night-wrapping-mask",
    slug: "medicube-kojic-acid-turmeric-night-wrapping-mask",
    name: "قناع الكركم وحمض الكوجيك الليلي المغلف للبشرة من ميديكيوب",
    subtitle: "تفتيح ليلي مكثف • استيقظي ببشرة مشرقة ومشدودة",
    description: "قناع ليلي مبتكر بتقنية التغليف يجمع بين حمض الكوجيك والكركم والريتينول وفيتامين C، يشكل طبقة واقية تحبس المواد الفعالة لتجديد ونضارة البشرة أثناء النوم.",
    badges: ["تفتيح ليلي", "ريتينول وفيتامين C"],
    price: { amount: 8.8, currency: "OMR", compareAtAmount: 12.5 },
    images: [
      { url: "/images/products/medicube-turmeric-night-wrapping-mask.jpg", alt: "قناع الكركم وحمض الكوجيك الليلي من ميديكيوب" },
      { url: "/images/banners/medicube-collagen-jelly-banner.jpg", alt: "كريم كولاجين جيلي من ميديكيوب" },
      { url: "/images/banners/medicube-zero-pore-mask-banner.jpg", alt: "منتجات العناية بالبشرة الليلية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-medicube",
    rating: { average: 4.89, count: 160 },
    inStock: true,
    stockCount: 45
  },
  {
    id: "prod-medicube-exosome-shot-2000",
    slug: "medicube-one-day-exosome-shot-2000",
    name: "سيروم إكسوسوم شوت 2000 لاكتو إكسوسوم ومقشر لطيف من ميديكيوب",
    subtitle: "تجديد فوري للمسام • نتائج ملموسة من أول استخدام",
    description: "سيروم مسام مجهري دقيق يحتوي على 2000 لاكتو إكسوسوم مع أحماض AHA وBHA وPHA لتقشير الخلايا الميتة وتحفيز تجديد أنسجة البشرة وتضييق المسام المفتوحة.",
    badges: ["تقنية الإكسوسوم", "عناية متقدمة بالمسام"],
    price: { amount: 10.5, currency: "OMR", compareAtAmount: 15.0 },
    images: [
      { url: "/images/products/medicube-exosome-shot-2000.jpg", alt: "سيروم إكسوسوم شوت 2000 من ميديكيوب" },
      { url: "/images/banners/medicube-collagen-jelly-banner.jpg", alt: "كريم الكولاجين من ميديكيوب" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "تشكيلة السيرومات المتطورة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-medicube",
    rating: { average: 4.94, count: 210 },
    inStock: true,
    stockCount: 35
  },
  {
    id: "prod-skin1004-centella-ampoule",
    slug: "skin1004-madagascar-centella-ampoule-100ml",
    name: "أمبولة مدغشقر سينتيلا النقية 100% 100 مل من سكين 1004",
    subtitle: "الذهب السائل الكوري • تهدئة مطلقة وإصلاح لحاجز البشرة",
    description: "أمبولة مهدئة أسطورية مصنوعة بنسبة 100% من مستخلص عشبة السينتيلا الآسيوية المحصودة من مدغشقر، تخفف الاحمرار وتعالج حب الشباب وتمنح البشرة راحة فائقة.",
    badges: ["الأكثر طلباً", "100% سينتيلا نقية"],
    price: { amount: 7.2, currency: "OMR", compareAtAmount: 10.2 },
    images: [
      { url: "/images/products/skin1004-centella-ampoule-1.jpg", alt: "أمبولة مدغشقر سينتيلا من سكين 1004 - صورة 1" },
      { url: "/images/products/skin1004-centella-ampoule-2.jpg", alt: "أمبولة مدغشقر سينتيلا من سكين 1004 - صورة 2" },
      { url: "/images/banners/skin1004-centella-ocean-banner.jpg", alt: "عالم سكين 1004 وسحر الطبيعة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-skin1004",
    rating: { average: 4.96, count: 540 },
    inStock: true,
    stockCount: 85
  },
  {
    id: "prod-skin1004-centella-soothing-cream",
    slug: "skin1004-madagascar-centella-soothing-cream",
    name: "كريم مدغشقر سينتيلا المهدئ لحاجز البشرة من سكين 1004",
    subtitle: "جل كريمي منعش • تبريد فوري وترميم فائق",
    description: "كريم خفيف غني بمستخلص السينتيلا و4 أنواع من السيراميدات النباتية التي تتطابق مع دهون البشرة الطبيعية لترميم حاجز الحماية ومنح ترطيب يدوم لساعات طويلة.",
    badges: ["ترميم حاجز البشرة", "انتعاش مائي"],
    price: { amount: 6.8, currency: "OMR", compareAtAmount: 9.5 },
    images: [
      { url: "/images/products/skin1004-centella-soothing-cream.jpg", alt: "كريم سينتيلا المهدئ من سكين 1004 - صورة 1" },
      { url: "/images/products/skin1004-centella-cream-detail.jpg", alt: "كريم سينتيلا المهدئ من سكين 1004 - صورة 2" },
      { url: "/images/banners/skin1004-centella-ocean-banner.jpg", alt: "مجموعة سكين 1004 الطبيعية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-skin1004",
    rating: { average: 4.88, count: 230 },
    inStock: true,
    stockCount: 60
  },
  {
    id: "prod-skin1004-centella-ampoule-foam",
    slug: "skin1004-madagascar-centella-ampoule-foam-125ml",
    name: "رغوة غسول أمبولة سينتيلا لتنظيف المسام 125 مل من سكين 1004",
    subtitle: "رغوة غنية ببيكربونات الصوديوم وخلاصة السينتيلا",
    description: "غسول وجه رغوي متوازن الحموضة (pH 5.5) ينظف المسام بعمق من الميكروبات والغبار الدقيق دون تجريد البشرة من زيوتها الطبيعية.",
    badges: ["حموضة متوازنة", "تنظيف لطيف"],
    price: { amount: 5.2, currency: "OMR", compareAtAmount: 7.5 },
    images: [
      { url: "/images/products/skin1004-centella-ampoule-foam.jpg", alt: "رغوة غسول أمبولة سينتيلا من سكين 1004" },
      { url: "/images/products/skin1004-centella-ampoule-1.jpg", alt: "أمبولة سينتيلا النقية" },
      { url: "/images/banners/skin1004-centella-ocean-banner.jpg", alt: "تشكيلة سكين 1004 الكورية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-skin1004",
    rating: { average: 4.85, count: 180 },
    inStock: true,
    stockCount: 50
  },
  {
    id: "prod-skin1004-tone-brightening-ampoule",
    slug: "skin1004-madagascar-centella-tone-brightening-ampoule",
    name: "أمبولة سينتيلا تون برايتنينج كبسول لتفتيح البشرة من سكين 1004",
    subtitle: "كبسولات الماديكاسوسايد المفتحة • توهج كوري ساحر",
    description: "أمبولة متطورة تحتوي على كبسولات الماديكاسوسايد سريعة الذوبان مع 4% نياسيناميد و2% حمض ترانيكساميك لتفتيح البقع الداكنة وتوحيد لون البشرة.",
    badges: ["تفتيح متقدم", "كبسولات ذكية"],
    price: { amount: 7.8, currency: "OMR", compareAtAmount: 10.9 },
    images: [
      { url: "/images/products/skin1004-tone-brightening-ampoule.jpg", alt: "أمبولة سينتيلا تون برايتنينج من سكين 1004" },
      { url: "/images/products/skin1004-centella-ampoule-1.jpg", alt: "أمبولة سينتيلا المهدئة" },
      { url: "/images/banners/skin1004-centella-ocean-banner.jpg", alt: "عالم سكين 1004 للعناية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-skin1004",
    rating: { average: 4.87, count: 140 },
    inStock: true,
    stockCount: 40
  },
  {
    id: "prod-cerave-mineral-sunscreen-spf30",
    slug: "cerave-hydrating-mineral-sunscreen-spf30-sheer-tint",
    name: "واقي شمس معدني مرطب SPF 30 مع لون خفيف من سيرافي",
    subtitle: "حماية معدنية 100% • تغطية طبيعية موحدة للبشرة",
    description: "واقي شمس معدني مع فلتر أكسيد الزنك وثاني أكسيد التيتانيوم، مدعم بالسيراميدات الأساسية والنياسيناميد. يمتزج بلون خفيف يناسب جميع ألوان البشرة لمنح إشراقة طبيعية صحية.",
    badges: ["معدني 100%", "تغطية موحدة", "SPF 30"],
    price: { amount: 8.2, currency: "OMR", compareAtAmount: 11.5 },
    images: [
      { url: "/images/products/cerave-hydrating-mineral-sunscreen-spf30.jpg", alt: "واقي شمس معدني ملون من سيرافي" },
      { url: "/images/products/cerave-resurfacing-retinol-serum.jpg", alt: "سيروم الريتينول من سيرافي" },
      { url: "/images/banners/summer-sunscreen-collection-banner.jpg", alt: "تشكيلة واقيات الشمس العالمية" }
    ],
    categories: [category("c-skincare"), category("c-summer")],
    brandId: "b-cerave",
    rating: { average: 4.89, count: 310 },
    inStock: true,
    stockCount: 65
  },
  {
    id: "prod-cerave-resurfacing-retinol-serum",
    slug: "cerave-resurfacing-retinol-serum-post-acne",
    name: "سيروم الريتينول لتجديد سطح البشرة وآثار الحبوب 30 مل من سيرافي",
    subtitle: "تقليل مظهر المسام والندبات • سيراميدات وخلاصة العرقسوس",
    description: "سيروم خفيف وسريع الامتصاص يحتوي على ريتينول مغلف وخلاصة جذر العرقسوس المفتحة و3 سيراميدات أساسية، يساعد على تجديد خلايا البشرة وتقليل التصبغات الناتجة عن حب الشباب.",
    badges: ["آثار الحبوب", "ريتينول طبي"],
    price: { amount: 8.9, currency: "OMR", compareAtAmount: 12.0 },
    images: [
      { url: "/images/products/cerave-resurfacing-retinol-serum.jpg", alt: "سيروم الريتينول لتجديد سطح البشرة من سيرافي" },
      { url: "/images/products/cerave-skin-renewing-retinol-serum.jpg", alt: "سيروم تجديد البشرة ومكافحة التجاعيد" },
      { url: "/images/banners/summer-sunscreen-collection-banner.jpg", alt: "مجموعة سيرافي للعناية الجلدية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-cerave",
    rating: { average: 4.91, count: 420 },
    inStock: true,
    stockCount: 70
  },
  {
    id: "prod-cerave-skin-renewing-retinol-serum",
    slug: "cerave-skin-renewing-retinol-serum-anti-aging",
    name: "سيروم تجديد البشرة ومكافحة التجاعيد بالريتينول من سيرافي",
    subtitle: "تنعيم الخطوط الرفيعة • حماية حاجز البشرة الواقي",
    description: "صُمم بالتعاون مع أطباء الجلد لتقليل علامات التقدم بالسن الدقيقة وتحسين مرونة الجلد عبر ريتينول مغلف تدريجي الإطلاق مدعم بحمض الهيالورونيك.",
    badges: ["مكافحة التجاعيد", "سيراميدات أساسية"],
    price: { amount: 8.8, currency: "OMR", compareAtAmount: 11.9 },
    images: [
      { url: "/images/products/cerave-skin-renewing-retinol-serum.jpg", alt: "سيروم تجديد البشرة بالريتينول من سيرافي" },
      { url: "/images/products/cerave-resurfacing-retinol-serum.jpg", alt: "سيروم تصحيح آثار الحبوب" },
      { url: "/images/banners/summer-sunscreen-collection-banner.jpg", alt: "عناية سيرافي المتكاملة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-cerave",
    rating: { average: 4.87, count: 260 },
    inStock: true,
    stockCount: 50
  },
  {
    id: "prod-laroche-glycolic-b5-serum",
    slug: "la-roche-posay-glycolic-b5-serum-dark-spots",
    name: "سيروم جليكوليك B5 المقشر والمفتح للون البشرة من لا روش بوزيه",
    subtitle: "تقشير دقيق وتوحيد لون • مناسب للبشرة الحساسة",
    description: "سيروم ميكرو-مقشر فريد يجمع بين 10% حمض الجليكوليك النقي، وحمض الترانيكساميك، وفيتامين B5 المهدئ، يساعد على إزالة الخلايا الميتة وتفتيح التصبغات وتنعيم ملمس البشرة.",
    badges: ["حمض الجليكوليك", "تفتيح فوري"],
    price: { amount: 13.5, currency: "OMR", compareAtAmount: 18.5 },
    images: [
      { url: "/images/products/laroche-posay-glycolic-b5-serum.jpg", alt: "سيروم جليكوليك B5 من لا روش بوزيه" },
      { url: "/images/products/laroche-posay-effaclar-k-lotion.jpg", alt: "لوشن إيفاكلار K+ المنقي للمسام" },
      { url: "/images/banners/summer-sunscreen-collection-banner.jpg", alt: "مجموعة العناية الجلدية الفرنسية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-laroche-posay",
    rating: { average: 4.93, count: 310 },
    inStock: true,
    stockCount: 45
  },
  {
    id: "prod-laroche-effaclar-k-lotion",
    slug: "la-roche-posay-effaclar-k-micro-exfoliating-lotion",
    name: "لوشن إيفاكلار K+ للتقشير الدقيق وتصفية المسام من لا روش بوزيه",
    subtitle: "مكافحة الرؤوس السوداء • تنقية وتجديد ملمس البشرة",
    description: "لوشن مرطب ومقشر يومي دقيق غني بحمض الساليسيليك وحمض ليبوهيدروكسي LHA، ينقي المسام بعمق ويمنع تكرار انسدادها ويقلل لمعان البشرة الدهنية.",
    badges: ["للبشرة الدهنية", "مكافحة الرؤوس السوداء"],
    price: { amount: 9.5, currency: "OMR", compareAtAmount: 13.0 },
    images: [
      { url: "/images/products/laroche-posay-effaclar-k-lotion.jpg", alt: "لوشن إيفاكلار K+ من لا روش بوزيه" },
      { url: "/images/products/laroche-posay-glycolic-b5-serum.jpg", alt: "سيروم جليكوليك B5 المفتح" },
      { url: "/images/banners/summer-sunscreen-collection-banner.jpg", alt: "روتين لا روش بوزيه الطبي" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-laroche-posay",
    rating: { average: 4.86, count: 215 },
    inStock: true,
    stockCount: 50
  },
  {
    id: "prod-acm-depiwhite-advanced-cream",
    slug: "acm-depiwhite-advanced-intensive-anti-brown-spot-cream",
    name: "كريم ديبي وايت أدفانسد المكثف لتفتيح البقع 40 مل من إيه سي إم",
    subtitle: "العلاج الفرنسي الذهبي للكلف والتصبغات • براءة اختراع معتمدة",
    description: "كريم موضعي فائق الفعالية يعمل على تقليل وتثبيط إنتاج الميلانين لتسريع تلاشي بقع الكلف، النمش، وآثار الشمس وتوحيد لون بشرة الوجه واليدين.",
    badges: ["علاج الكلف", "براءة اختراع فرنسية"],
    price: { amount: 9.8, currency: "OMR", compareAtAmount: 13.5 },
    images: [
      { url: "/images/products/acm-depiwhite-advanced-cream.jpg", alt: "كريم ديبي وايت أدفانسد من إيه سي إم" },
      { url: "/images/products/acm-sebionex-hydra-cream.jpg", alt: "كريم سبيونيكس هيدرا المرمم" },
      { url: "/images/banners/acm-dermatologie-collection-banner.jpg", alt: "مجموعة منتجات إيه سي إم الجلدية" }
    ],
    categories: [category("c-skincare"), category("c-deals")],
    brandId: "b-acm",
    rating: { average: 4.92, count: 380 },
    inStock: true,
    stockCount: 65
  },
  {
    id: "prod-acm-sebionex-hydra-cream",
    slug: "acm-sebionex-hydra-repairing-cream",
    name: "كريم سبيونيكس هيدرا المرطب والمصلح للبشرة 40 مل من إيه سي إم",
    subtitle: "إصلاح فوري للبشرة المعالجة والمجففة بأدوية حب الشباب",
    description: "عناية ترطيب مهدئة ومصلحة مصممة للبشرة المتضررة والمجففة جراء علاجات حب الشباب القوية، تعيد مرونة الجلد وتهدئ الاحمرار والشعور بالشد.",
    badges: ["ترميم مكثف", "مهدئ للبشرة"],
    price: { amount: 7.2, currency: "OMR", compareAtAmount: 9.8 },
    images: [
      { url: "/images/products/acm-sebionex-hydra-cream.jpg", alt: "كريم سبيونيكس هيدرا من إيه سي إم" },
      { url: "/images/products/acm-rosakalm-anti-redness-cream.jpg", alt: "كريم روزا كالم المهدئ" },
      { url: "/images/banners/acm-dermatologie-collection-banner.jpg", alt: "مختبرات إيه سي إم الجلدية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-acm",
    rating: { average: 4.88, count: 175 },
    inStock: true,
    stockCount: 50
  },
  {
    id: "prod-acm-rosakalm-cream",
    slug: "acm-rosakalm-anti-redness-cream",
    name: "كريم روزا كالم المهدئ ومضاد الاحمرار 40 مل من إيه سي إم",
    subtitle: "تهدئة الشعور بالحرارة وتخفيف الوردية واحمرار البشرة الحساسة",
    description: "كريم مرطب يومي خفيف يقلل بشكل ملحوظ من احمرار وتوهج البشرة الحساسة والمصابة بالوردية بفضل خلاصة نبات روسكوس وفيتامين E.",
    badges: ["مضاد للاحمرار", "للبشرة الحساسة"],
    price: { amount: 7.5, currency: "OMR", compareAtAmount: 10.2 },
    images: [
      { url: "/images/products/acm-rosakalm-anti-redness-cream.jpg", alt: "كريم روزا كالم من إيه سي إم" },
      { url: "/images/banners/acm-viticolor-gel-banner.jpg", alt: "جل فيتيكولور لإخفاء البهاق والتصبغات" },
      { url: "/images/banners/acm-dermatologie-collection-banner.jpg", alt: "علاجات إيه سي إم المتخصصة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-acm",
    rating: { average: 4.85, count: 130 },
    inStock: true,
    stockCount: 40
  },
  {
    id: "prod-axis-y-dark-spot-glow-serum",
    slug: "axis-y-dark-spot-correcting-glow-serum",
    name: "سيروم النياسيناميد وتصحيح البقع الداكنة 50 مل من أكسيس واي",
    subtitle: "توهج وإشراقة زجاجية • 5% نياسيناميد وسكوالين نباتي",
    description: "سيروم كوري شهير مصمم بمركب 6+1+1 النباتي المتقدم. يصحح البقع الداكنة ويحسن تفاوت لون البشرة مع الحفاظ على الترطيب العميق بفضل السكوالين وخلاصة البابايا.",
    badges: ["الأكثر طلباً", "توهج كوري"],
    price: { amount: 6.9, currency: "OMR", compareAtAmount: 9.8 },
    images: [
      { url: "/images/products/axis-y-dark-spot-glow-serum.jpg", alt: "سيروم النياسيناميد وتصحيح البقع من أكسيس واي" },
      { url: "/images/products/axis-y-artichoke-barrier-ampoule.jpg", alt: "أمبولة الخرشوف لترميم حاجز البشرة" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "سيرومات التوهج الكورية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-axis-y",
    rating: { average: 4.93, count: 480 },
    inStock: true,
    stockCount: 80
  },
  {
    id: "prod-axis-y-artichoke-ampoule",
    slug: "axis-y-artichoke-intensive-skin-barrier-ampoule",
    name: "أمبولة الخرشوف المكثفة لترميم حاجز البشرة 30 مل من أكسيس واي",
    subtitle: "حماية من الملوثات البيئية • ترطيب عميق مضاد للالتهاب",
    description: "أمبولة مركزة بخلاصة نبات الخرشوف والصبار وشجرة الشاي، تعيد بناء حاجز حماية البشرة المتضرر وتهدئ الالتهاب وتحمي خلايا الجلد من التلف اليومي.",
    badges: ["ترميم الحاجز", "خلاصة الخرشوف"],
    price: { amount: 6.8, currency: "OMR", compareAtAmount: 9.5 },
    images: [
      { url: "/images/products/axis-y-artichoke-barrier-ampoule.jpg", alt: "أمبولة الخرشوف المكثفة من أكسيس واي" },
      { url: "/images/products/axis-y-dark-spot-glow-serum.jpg", alt: "سيروم النياسيناميد المفتح" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "روتين أكسيس واي الكوري" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-axis-y",
    rating: { average: 4.87, count: 170 },
    inStock: true,
    stockCount: 45
  },
  {
    id: "prod-beauty-of-joseon-rice-toner",
    slug: "beauty-of-joseon-glow-deep-rice-toner",
    name: "تونر الأرز والجينسنغ الكوري لتوهج ونقاء البشرة من بيوتي أوف جوسون",
    subtitle: "تراث الجمال الكوري القديم • ترطيب عميق وتنعيم للمسام",
    description: "تونر كوري تقليدي فائق النقاء غني بماء نخالة الأرز ومستخلص الجينسنغ الكوري والألفا أربوتين، يغذي خلايا البشرة بعمق ويمنحها إشراقة متجانسة كالحرير.",
    badges: ["أسرار الهانبانغ", "إشراقة الأرز"],
    price: { amount: 7.2, currency: "OMR", compareAtAmount: 10.0 },
    images: [
      { url: "/images/products/beauty-of-joseon-rice-toner.jpg", alt: "تونر الأرز والجينسنغ من بيوتي أوف جوسون" },
      { url: "/images/products/korean-sun-relief-spf50.jpg", alt: "واقي شمس ريليف صن بالأرز" },
      { url: "/images/banners/beauty-of-joseon-collection-banner.jpg", alt: "تشكيلة بيوتي أوف جوسون الملكية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-beauty-of-joseon",
    rating: { average: 4.95, count: 420 },
    inStock: true,
    stockCount: 75
  },
  {
    id: "prod-beauty-of-joseon-relief-sun",
    slug: "beauty-of-joseon-relief-sun-rice-probiotics-spf50",
    name: "واقي الشمس ريليف صن بالأرز والبروبيوتيك SPF 50+ من بيوتي أوف جوسون",
    subtitle: "واقي الشمس رقم 1 عالمياً • ملمس كريمي مغذٍ ومريح",
    description: "واقي شمس كوري عضوي خفيف وغني بنسبة 30% من مستخلص الأرز ومخمرات الحبوب البروبيوتيك، يوفر حماية واسعة SPF 50+ مع ترطيب مغذٍ يشبه كريم الترطيب اليومي.",
    badges: ["الأكثر مبيعاً", "رقم 1 عالمياً"],
    price: { amount: 6.8, currency: "OMR", compareAtAmount: 9.8 },
    images: [
      { url: "/images/products/korean-sun-relief-spf50.jpg", alt: "واقي شمس ريليف صن من بيوتي أوف جوسون" },
      { url: "/images/products/beauty-of-joseon-rice-toner.jpg", alt: "تونر الأرز والجينسنغ الملكي" },
      { url: "/images/banners/beauty-of-joseon-collection-banner.jpg", alt: "مجموعة بيوتي أوف جوسون الأصلية" }
    ],
    categories: [category("c-skincare"), category("c-summer")],
    brandId: "b-beauty-of-joseon",
    rating: { average: 4.97, count: 710 },
    inStock: true,
    stockCount: 90
  },
  {
    id: "prod-secret-key-snow-white-milky-pack",
    slug: "secret-key-snow-white-milky-pack",
    name: "ماسك سنوا وايت ميلكي باك للتفتيح الفوري من سيكريت كي",
    subtitle: "بياض ناصع فوري • للجسم والوجه بملمس مخملي",
    description: "ماسك التبييض الكوري الشهير بخلاصة النياسيناميد، يمنح بشرة الوجه والجسم بياضاً فورياً مشرقاً وموحداً يدوم حتى 10 ساعات مع الاستخدام المنتظم.",
    badges: ["تفتيح فوري", "للوجه والجسم"],
    price: { amount: 5.8, currency: "OMR", compareAtAmount: 8.5 },
    images: [
      { url: "/images/products/secret-key-snow-white-milky-pack.jpg", alt: "ماسك سنوا وايت ميلكي باك من سيكريت كي" },
      { url: "/images/products/secret-key-snow-white-spot-gel.jpg", alt: "جل سنوا وايت الموضعي" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "مجموعة سنوا وايت للتفتيح المتكامل" }
    ],
    categories: [category("c-body"), category("c-skincare")],
    brandId: "b-secret-key",
    rating: { average: 4.84, count: 290 },
    inStock: true,
    stockCount: 65
  },
  {
    id: "prod-secret-key-snow-white-spot-gel",
    slug: "secret-key-snow-white-spot-gel",
    name: "جل سنوا وايت الموضعي لتفتيح البقع والمناطق الحساسة من سيكريت كي",
    subtitle: "تفتيح موضعي آمن • للمرفقين، الركبتين، والمناطق الداكنة",
    description: "جل شفاف مركز بمستخلصات نباتية لتفتيح البقع الداكنة في المناطق المعرضة للاحتكاك مثل المرفقين والركب والمناطق الحساسة.",
    badges: ["تفتيح موضعي", "آمن ولطيف"],
    price: { amount: 4.5, currency: "OMR", compareAtAmount: 6.8 },
    images: [
      { url: "/images/products/secret-key-snow-white-spot-gel.jpg", alt: "جل سنوا وايت الموضعي من سيكريت كي" },
      { url: "/images/products/secret-key-snow-white-milky-lotion.jpg", alt: "لوشن سنوا وايت ميلكي للجسم" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "عناية التفتيح الشاملة من شريم" }
    ],
    categories: [category("c-body")],
    brandId: "b-secret-key",
    rating: { average: 4.81, count: 180 },
    inStock: true,
    stockCount: 50
  },
  {
    id: "prod-secret-key-snow-white-milky-lotion",
    slug: "secret-key-snow-white-milky-lotion-120g",
    name: "لوشن سنوا وايت ميلكي لتفتيح وترطيب الجسم والوجه 120 جم من سيكريت كي",
    subtitle: "لوشن حليبي سريع الامتصاص • نضارة وإشراقة يومية",
    description: "لوشن ترطيب وتفتيح يومي خفيف لا يحتاج للغسل، يمنح الجسم والوجه مظهراً مشرقاً وناعماً برائحة منعشة وملمس غير لزج.",
    badges: ["لوشن يومي", "ترطيب وتفتيح"],
    price: { amount: 5.2, currency: "OMR", compareAtAmount: 7.5 },
    images: [
      { url: "/images/products/secret-key-snow-white-milky-lotion.jpg", alt: "لوشن سنوا وايت ميلكي من سيكريت كي" },
      { url: "/images/products/secret-key-snow-white-milky-pack.jpg", alt: "ماسك سنوا وايت ميلكي باك" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "روتين التفتيح الفوري سنوا وايت" }
    ],
    categories: [category("c-body")],
    brandId: "b-secret-key",
    rating: { average: 4.83, count: 160 },
    inStock: true,
    stockCount: 45
  },
  {
    id: "prod-qv-moisturising-cream",
    slug: "qv-cream-moisturising-cream-sensitive-skin",
    name: "كريم كيو في المرطب الطبي للبشرة الجافة والحساسة 500 جم من كيو في",
    subtitle: "الترطيب الطبي الأسترالي رقم 1 • حماية تدوم 24 ساعة",
    description: "كريم ترطيب مكثف وعالي التركيز مصمم للبشرة الجافة جداً والمتهيجة والحساسة. خالي من العطور واللانولين، مناسب لجميع أفراد الأسرة من الرضع إلى الكبار.",
    badges: ["طبي معتمد", "خالي من العطور", "حجم عائلي"],
    price: { amount: 7.9, currency: "OMR", compareAtAmount: 11.0 },
    images: [
      { url: "/images/products/qv-moisturising-cream.jpg", alt: "كريم كيو في المرطب للبشرة الحساسة" },
      { url: "/images/products/qv-face-nurturing-night-cream.jpg", alt: "كريم كيو في الليلي المغذي للوجه" },
      { url: "/images/banners/qv-skincare-collection-banner.jpg", alt: "مجموعة منتجات كيو في الأسترالية" }
    ],
    categories: [category("c-body"), category("c-skincare")],
    brandId: "b-qv",
    rating: { average: 4.95, count: 580 },
    inStock: true,
    stockCount: 85
  },
  {
    id: "prod-qv-face-nurturing-night-cream",
    slug: "qv-face-nurturing-night-cream-50g",
    name: "كريم كيو في الليلي المغذي للوجه لتعزيز مرونة البشرة 50 جم من كيو في",
    subtitle: "تغذية ليلية للبشرة العادية إلى الحساسة • دعم الكولاجين والمرونة",
    description: "كريم ليلي غني بفيتامين B3 وفيتامين B5 وزيت القرطم لتغذية البشرة أثناء الليل وتقليل الخطوط الرفيعة واستعادة نضارتها وحيويتها بحلول الصباح.",
    badges: ["تغذية ليلية", "فيتامين B3 وB5"],
    price: { amount: 5.5, currency: "OMR", compareAtAmount: 7.8 },
    images: [
      { url: "/images/products/qv-face-nurturing-night-cream.jpg", alt: "كريم كيو في الليلي للوجه" },
      { url: "/images/products/qv-moisturising-cream.jpg", alt: "كريم كيو في المرطب الطبي" },
      { url: "/images/banners/qv-skincare-collection-banner.jpg", alt: "عناية كيو في الطبية الليلية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-qv",
    rating: { average: 4.88, count: 190 },
    inStock: true,
    stockCount: 50
  },
  {
    id: "prod-the-ordinary-inulin-lotion",
    slug: "the-ordinary-natural-moisturizing-factors-inulin-body-lotion",
    name: "لوشن ترطيب الجسم بعوامل الترطيب الطبيعية والإنولين 240 مل من ذا أورديناري",
    subtitle: "ترطيب سطحي فوري ودعم لميكروبيوم الجلد الطبيعي",
    description: "تركيبة ترطيب خفيفة للجسم معززة بعوامل الترطيب الطبيعية (NMF) وبريبايوتك الإنولين، تقوي حاجز البشرة وترطبها بعمق مع امتصاص سريع وملمس ناعم.",
    badges: ["دعم الميكروبيوم", "ترطيب غير دهني"],
    price: { amount: 6.8, currency: "OMR", compareAtAmount: 9.5 },
    images: [
      { url: "/images/products/the-ordinary-inulin-body-lotion.jpg", alt: "لوشن ترطيب الجسم بالإنولين من ذا أورديناري" },
      { url: "/images/products/the-ordinary-saccharomyces-milky-toner.jpg", alt: "تونر الحليب المخمر من ذا أورديناري" },
      { url: "/images/banners/body-lotions-frankincense-banner.jpg", alt: "تشكيلة لوشنات الجسم الفاخرة" }
    ],
    categories: [category("c-body")],
    brandId: "b-the-ordinary",
    rating: { average: 4.86, count: 210 },
    inStock: true,
    stockCount: 55
  },
  {
    id: "prod-the-ordinary-saccharomyces-toner",
    slug: "the-ordinary-saccharomyces-ferment-30-milky-toner",
    name: "تونر الحليب المخمر المقشر بساكارومايسيس 30% 100 مل من ذا أورديناري",
    subtitle: "تقشير ناعم وتنعيم ملمس البشرة • تفتيح وتوحيد اللون",
    description: "تونر حليبي مقشر لطيف بتقنية تخمير فطر الساكارومايسيس بتركيز 30% مع السكوالين، يعمل على تنعيم خشونة البشرة وتفتيح مظهرها وترطيبها طوال اليوم.",
    badges: ["تونر حليبي", "تقشير ناعم"],
    price: { amount: 7.2, currency: "OMR", compareAtAmount: 10.0 },
    images: [
      { url: "/images/products/the-ordinary-saccharomyces-milky-toner.jpg", alt: "تونر الحليب المخمر من ذا أورديناري" },
      { url: "/images/products/the-ordinary-inulin-body-lotion.jpg", alt: "لوشن ترطيب الجسم" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "تونرات وسيرومات التقشير اللطيف" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-the-ordinary",
    rating: { average: 4.87, count: 180 },
    inStock: true,
    stockCount: 45
  },
  {
    id: "prod-dr-althea-147-barrier-cream",
    slug: "dr-althea-147-barrier-cream-pro-lab",
    name: "كريم 147 لترميم وحماية حاجز البشرة 50 مل من دكتور ألثيا",
    subtitle: "سيراميدات متعددة وببتيدات • حماية قصوى للبشرة الحساسة المتضررة",
    description: "كريم حاجز غني بـ 7 أنواع من السيراميدات النباتية وحمض الهيالورونيك وخلاصة البابونج الأزرق، يرمم الجلد التالف ويهدئ الاحمرار ويوفر درع حماية متكامل.",
    badges: ["ترميم مكثف", "7 سيراميدات"],
    price: { amount: 7.9, currency: "OMR", compareAtAmount: 11.2 },
    images: [
      { url: "/images/products/dr-althea-147-barrier-cream-1.jpg", alt: "كريم 147 بارير من دكتور ألثيا - صورة 1" },
      { url: "/images/products/dr-althea-147-barrier-cream-2.jpg", alt: "كريم 147 بارير من دكتور ألثيا - صورة 2" },
      { url: "/images/products/dr-althea-147-barrier-cream-display.jpg", alt: "كريم 147 بارير - عرض المنتج" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-dr-althea",
    rating: { average: 4.94, count: 320 },
    inStock: true,
    stockCount: 60
  },
  {
    id: "prod-bioderma-atoderm-creme-ultra",
    slug: "bioderma-atoderm-creme-ultra-nourishing",
    name: "كريم بيوديرما أتوديرم ألترا المغذي والمرطب 200 مل من بيوديرما",
    subtitle: "عناية طبية فائقة للبشرة الحساسة والجافة جداً • لجميع أفراد الأسرة",
    description: "مركب حماية البشرة Skin Protect Complex الحائز على براءة اختراع، يحفز إنتاج حمض الهيالورونيك الطبيعي في الجلد ويعيد بناء حاجز الدهون لتغذية تدوم 24 ساعة.",
    badges: ["طبي موصى به", "ترطيب 24 ساعة"],
    price: { amount: 6.8, currency: "OMR", compareAtAmount: 9.5 },
    images: [
      { url: "/images/products/bioderma-atoderm-creme-ultra.jpg", alt: "كريم بيوديرما أتوديرم ألترا" },
      { url: "/images/products/bioderma-atoderm-creme-detail.jpg", alt: "كريم بيوديرما أتوديرم - تفاصيل العبوة" },
      { url: "/images/banners/body-lotions-frankincense-banner.jpg", alt: "عناية الترطيب الطبي للجسم" }
    ],
    categories: [category("c-body"), category("c-skincare")],
    brandId: "b-bioderma",
    rating: { average: 4.92, count: 440 },
    inStock: true,
    stockCount: 70
  },
  {
    id: "prod-embryolisse-lait-creme",
    slug: "embryolisse-lait-creme-concentre-75ml",
    name: "كريم ليت كونسينتري المرطب ومتعدد الاستخدامات 75 مل من إمبريوليس",
    subtitle: "سر عارضي الأزياء الفرنسيين • مرطب، برايمر، وماسك مغذٍ",
    description: "الكريم الفرنسي الأيقوني الشهير في كواليس عروض الأزياء العالمية. يعمل كمرطب يومي، برايمر مثالي تحت المكياج، حليب مزيل للمكياج، وماسك مغذٍ غني بزبدة الشيا والألوفيرا.",
    badges: ["برايمر ومرطب", "أيقونة فرنسية"],
    price: { amount: 8.5, currency: "OMR", compareAtAmount: 12.0 },
    images: [
      { url: "/images/products/embryolisse-lait-creme-concentre.jpg", alt: "كريم ليت كونسينتري من إمبريوليس" },
      { url: "/images/products/bioderma-atoderm-creme-ultra.jpg", alt: "كريم بيوديرما المرطب" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "كريمات الترطيب الفاخرة" }
    ],
    categories: [category("c-skincare"), category("c-makeup")],
    brandId: "b-embryolisse",
    rating: { average: 4.96, count: 510 },
    inStock: true,
    stockCount: 65
  },
  {
    id: "prod-seoul-1988-pine-cica-foam",
    slug: "k-secret-seoul-1988-cleansing-foam-pine-cica",
    name: "رغوة منظفة سول 1988 ببروبيوتيك الصنوبر والسيكا 150 مل من كيه سيكريت",
    subtitle: "تنقية المسام وتهدئة حب الشباب • توازن طبيعي للبشرة",
    description: "غسول كوري مهدئ يحتوي على مستخلص أوراق الصنوبر والسينتيلا المهدئة وبروبيوتيك، ينظف الدهون الزائدة وينقي المسام دون أن يسبب أي جفاف أو تحسس.",
    badges: ["بروبيوتيك وسيكا", "تنظيف المسام"],
    price: { amount: 5.6, currency: "OMR", compareAtAmount: 7.9 },
    images: [
      { url: "/images/products/seoul-1988-pine-cica-cleansing-foam.jpg", alt: "رغوة سول 1988 ببروبيوتيك الصنوبر" },
      { url: "/images/products/seoul-1988-retinal-black-ginseng-serum.jpg", alt: "سيروم الريتينال والجينسنغ الأسود" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "مجموعة سول 1988 الكورية الفاخرة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-k-secret",
    rating: { average: 4.88, count: 160 },
    inStock: true,
    stockCount: 45
  },
  {
    id: "prod-seoul-1988-retinal-serum",
    slug: "k-secret-seoul-1988-retinal-liposome-2-black-ginseng",
    name: "سيروم سول 1988 ريتينال ليبوزوم 2% مع الجينسنغ الأسود 30 مل من كيه سيكريت",
    subtitle: "ريتينال فعال وسريع المفعول • مكافحة التجاعيد وتوحيد البشرة",
    description: "سيروم متقدم بتقنية الريتينال الليبوزومي (أسرع 11 مرة من الريتينول العادي) مع 58% من مستخلص الجينسنغ الأسود لشد المسام وتنعيم الخطوط وتحسين نضارة البشرة.",
    badges: ["ريتينال ليبوزوم", "جينسنغ أسود"],
    price: { amount: 8.9, currency: "OMR", compareAtAmount: 12.8 },
    images: [
      { url: "/images/products/seoul-1988-retinal-black-ginseng-serum.jpg", alt: "سيروم سول 1988 ريتينال من كيه سيكريت" },
      { url: "/images/products/seoul-1988-pine-cica-cleansing-foam.jpg", alt: "غسول سول 1988 المنظف" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "سيرومات العناية الكورية المتقدمة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-k-secret",
    rating: { average: 4.94, count: 240 },
    inStock: true,
    stockCount: 50
  },
  {
    id: "prod-eqqualberry-lush-blush-serum",
    slug: "eqqualberry-lush-blush-nad-peptide-serum",
    name: "سيروم لوش بلش ناد بلس والببتيد المعزز لمرونة البشرة 30 مل من إيكوال بيري",
    subtitle: "تجديد طاقة الخلايا • امتلاء ونضارة وردية فورية",
    description: "تركيبة حصرية تجمع بين مركب NAD+ الحيوي ومجموعة الببتيدات المعززة، تعيد الحيوية للبشرة المجهدة وتمنحها توهجاً وامتلاءً طبيعياً.",
    badges: ["تقنية NAD+", "ببتيدات مركزة"],
    price: { amount: 8.5, currency: "OMR", compareAtAmount: 11.9 },
    images: [
      { url: "/images/products/eqqualberry-lush-blush-peptide-serum.jpg", alt: "سيروم لوش بلش ناد بلس من إيكوال بيري" },
      { url: "/images/products/eqqualberry-bakuchiol-plumping-serum.jpg", alt: "سيروم الباكوتشيول والسيراميد" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "سيرومات النضارة الكورية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-eqqualberry",
    rating: { average: 4.89, count: 145 },
    inStock: true,
    stockCount: 35
  },
  {
    id: "prod-eqqualberry-bakuchiol-serum",
    slug: "eqqualberry-deep-cera-bakuchiol-plumping-serum",
    name: "سيروم الباكوتشيول والسيراميد ديب سيرا لبشرة ممتلئة وشابة من إيكوال بيري",
    subtitle: "بديل الريتينول الطبيعي الآمن للحوامل • ملء الخطوط وشد البشرة",
    description: "سيروم غني بنسبة 4% باكوتشيول طبيعي مع مركب السيراميد، يوفر كافة فوائد الريتينول في محاربة التجاعيد وشد البشرة بدون أي تهيج أو تحسس للشمس.",
    badges: ["بديل الريتينول", "آمن للحساسة"],
    price: { amount: 8.9, currency: "OMR", compareAtAmount: 12.5 },
    images: [
      { url: "/images/products/eqqualberry-bakuchiol-plumping-serum.jpg", alt: "سيروم الباكوتشيول من إيكوال بيري" },
      { url: "/images/products/eqqualberry-lush-blush-peptide-serum.jpg", alt: "سيروم لوش بلش ناد بلس" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "عناية متقدمة بمكافحة التجاعيد" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-eqqualberry",
    rating: { average: 4.91, count: 165 },
    inStock: true,
    stockCount: 40
  },
  {
    id: "prod-celimax-retinol-shot-serum",
    slug: "celimax-retinol-shot-tightening-serum",
    name: "سيروم ريتينول شوت 0.1% وببتيد لشد البشرة 30 مل من سيليماكس",
    subtitle: "شد المسام والترهلات • مركب 9 ببتيدات وبانثينول مهدئ",
    description: "سيروم مصمم بتقنية امتصاص دقيقة لشد البشرة وتقليل اتساع المسام، يحتوي على ريتينول نقي بنسبة 0.1% مع مركب من 9 ببتيدات وبانثينول لمنع الجفاف.",
    badges: ["شد المسام", "9 ببتيدات"],
    price: { amount: 7.9, currency: "OMR", compareAtAmount: 11.0 },
    images: [
      { url: "/images/products/celimax-retinol-shot-serum.jpg", alt: "سيروم ريتينول شوت من سيليماكس" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "تشكيلة السيرومات الكورية" },
      { url: "/images/banners/beauty-of-joseon-collection-banner.jpg", alt: "روتين الشد والنضارة الفائقة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-celimax",
    rating: { average: 4.88, count: 190 },
    inStock: true,
    stockCount: 45
  },
  {
    id: "prod-pastil-cheek-tint-paste",
    slug: "pastil-advance-therapy-cheek-tint-paste",
    name: "عجينة مورد ومنفخ الخدود والوجه الفوري طبيعي 100% من باستيل",
    subtitle: "توريد ونفخ فوري في يوم واحد • تجربة أكبر برهان",
    description: "عجينة توريد الخدود الطبيعية 100% من باستيل، تمنح الخدود والشفاه لوناً وردياً ثابتاً ومظهراً ممتلئاً وجذاباً يدوم طويلاً بمكونات طبيعية آمنة.",
    badges: ["توريد ونفخ فوري", "طبيعي 100%"],
    price: { amount: 4.8, currency: "OMR", compareAtAmount: 7.0 },
    images: [
      { url: "/images/products/pastil-cheek-tint-paste.jpg", alt: "عجينة مورد الخدود من باستيل" },
      { url: "/images/products/pastil-cheek-tint-detail.jpg", alt: "عجينة مورد الخدود - تفاصيل القوام" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "منتجات التوريد والجمال الطبيعي" }
    ],
    categories: [category("c-makeup")],
    brandId: "b-pastil",
    rating: { average: 4.89, count: 280 },
    inStock: true,
    stockCount: 70
  },
  {
    id: "prod-kenta-bebe-creme",
    slug: "kenta-bebe-creme-de-soin-marocain",
    name: "كريم كينتا المغربي لتلطيف وتفتيح المناطق الحساسة 30 جم من كينتا",
    subtitle: "الكريم المغربي رقم 1 • تلطيف وتفتيح آمن وفعال",
    description: "الكريم المغربي الأصيل المعتمد لتهدئة تسلخات الجلد وتفتيح الأماكن الحساسة، الإبطين، وبين الفخذين بأمان تام وخالٍ من الكورتيزون والعطور الضارة.",
    badges: ["أصلي مغربي", "تفتيح آمن"],
    price: { amount: 3.5, currency: "OMR", compareAtAmount: 5.0 },
    images: [
      { url: "/images/products/kenta-bebe-creme-soin.jpg", alt: "كريم كينتا المغربي الأصلي" },
      { url: "/images/products/s88-total-white-underarm-cream.jpg", alt: "كريم توتال وايت للمناطق الحساسة" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "عناية التفتيح والنعومة للجسم" }
    ],
    categories: [category("c-body")],
    brandId: "b-kenta",
    rating: { average: 4.93, count: 460 },
    inStock: true,
    stockCount: 80
  },
  {
    id: "prod-s88-total-white-underarm",
    slug: "s88-total-white-underarm-cream",
    name: "كريم توتال وايت لتفتيح وتنعيم الإبطين والمناطق الحساسة من S88",
    subtitle: "تفتيح فعال وتنعيم الملمس • التخلص من سواد الاحتكاك",
    description: "كريم تايلاندي أصلي غني ببروتين الحليب ومستخلصات الفواكه الطبيعية، يساعد على تفتيح وتوحيد لون منطقة تحت الإبطين وإزالة الروائح الكريهة.",
    badges: ["تفتيح الإبطين", "بروتين الحليب"],
    price: { amount: 3.8, currency: "OMR", compareAtAmount: 5.5 },
    images: [
      { url: "/images/products/s88-total-white-underarm-cream.jpg", alt: "كريم توتال وايت للإبطين من S88" },
      { url: "/images/products/kenta-bebe-creme-soin.jpg", alt: "كريم كينتا المغربي" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "مجموعة العناية بالمناطق الحساسة" }
    ],
    categories: [category("c-body")],
    brandId: "b-magic-skin",
    rating: { average: 4.86, count: 230 },
    inStock: true,
    stockCount: 65
  },
  {
    id: "prod-kareem-arousa-whitening",
    slug: "kareem-arousa-body-face-whitening-scrub",
    name: "كريم العروسة الأصلي لسنفرة وتفتيح الجسم والبشرة",
    subtitle: "سر إشراقة العروس • سنفرة طبيعية لإزالة الجلد الميت والسواد",
    description: "كريم وسنفرة العروسة الشهير بمكونات طبيعية من العسل والزيوت والأعشاب، يزيل طبقات الجلد الميت وينعم الجسم ويكسبه بياضاً ونعومة كبشرة الأطفال.",
    badges: ["حمام مغربي وعناية عروس", "سنفرة طبيعية"],
    price: { amount: 4.5, currency: "OMR", compareAtAmount: 6.5 },
    images: [
      { url: "/images/products/kareem-arousa-whitening-cream.jpg", alt: "كريم العروسة الأصلي لسنفرة وتفتيح الجسم" },
      { url: "/images/products/w-cream-collagen-whitening.jpg", alt: "كريم الكولاجين للتفتيح" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "بكج العناية وتفتيح العروس" }
    ],
    categories: [category("c-body")],
    brandId: "b-magic-skin",
    rating: { average: 4.9, count: 350 },
    inStock: true,
    stockCount: 75
  },
  {
    id: "prod-alatar-black-musk-soap",
    slug: "alatar-black-tahara-musk-luxury-soap",
    name: "صابون مسك الطهارة الأسود الفاخر من العطار",
    subtitle: "نقاء وانتعاش ملكي يدوم • تركيبة مرطبة ومعطرة",
    description: "صابون مسك الطهارة الأسود الأصلي برائحة المسك الشرقية الفواحة، ينظف البشرة بلطف ويمنح الجسم رائحة جذابة تدوم طوال اليوم مع ترطيب مهدئ.",
    badges: ["مسك أصلي", "رائحة ملكية"],
    price: { amount: 2.5, currency: "OMR", compareAtAmount: 3.8 },
    images: [
      { url: "/images/products/alatar-black-musk-soap.jpg", alt: "صابون مسك الطهارة الأسود من العطار" },
      { url: "/images/products/pink-whitening-firming-soap.jpg", alt: "صابونة التفتيح والشد الوردية" },
      { url: "/images/banners/luxury-soaps-collection-banner.jpg", alt: "تشكيلة الصابون والمسك الفاخر" }
    ],
    categories: [category("c-fragrance"), category("c-body")],
    brandId: "b-otory",
    rating: { average: 4.92, count: 280 },
    inStock: true,
    stockCount: 90
  },
  {
    id: "prod-pink-whitening-firming-soap",
    slug: "pink-whitening-firming-hydrated-soap-100g",
    name: "صابونة التفتيح الوردية لشد ونضارة وترطيب البشرة 100 جم",
    subtitle: "تفتيح وتوريد وشد فوري • رغوة كريمية غنية",
    description: "صابونة تجميلية وردية غنية بمركبات الجلوتاثيون والكولاجين لتفتيح البشرة وتوريدها وشد الترهلات وتنعيم ملمس الجلد.",
    badges: ["تفتيح وشد", "رغوة وردية"],
    price: { amount: 2.2, currency: "OMR", compareAtAmount: 3.5 },
    images: [
      { url: "/images/products/pink-whitening-firming-soap.jpg", alt: "صابونة التفتيح والشد الوردية" },
      { url: "/images/products/alatar-black-musk-soap.jpg", alt: "صابون مسك الطهارة" },
      { url: "/images/banners/luxury-soaps-collection-banner.jpg", alt: "مجموعة صابون الاستحمام والتفتيح" }
    ],
    categories: [category("c-body")],
    brandId: "b-roseberry",
    rating: { average: 4.84, count: 170 },
    inStock: true,
    stockCount: 80
  },
  {
    id: "prod-skala-hair-nutrition-cream",
    slug: "skala-brazilian-hair-nutrition-cream-1000g",
    name: "كريم سكالا البرازيلي 2 في 1 لتغذية وترطيب الشعر الجاف والتالف 1000 جم",
    subtitle: "حجم اقتصادي ضخم 1 كجم • حمام كريم + ليف إن مرطب",
    description: "كريم الشعر البرازيلي النباتي الشهير عالمياً. يغذي ألياف الشعر الجاف والمتقصف بعمق، يفك التشابك ويسهل التصفيف ليمنح خصلات ناعمة كالحرير.",
    badges: ["حجم ضخم 1 كجم", "برازيلي 100%"],
    price: { amount: 5.9, currency: "OMR", compareAtAmount: 8.5 },
    images: [
      { url: "/images/products/skala-hair-nutrition-cream-1000g.jpg", alt: "كريم سكالا البرازيلي للشعر 1000 جم" },
      { url: "/images/products/argan-repair-hair-serum.jpg", alt: "سيروم الأركان المعالج للشعر" },
      { url: "/images/banners/roseberry-pomegranate-hair-banner.jpg", alt: "عناية الشعر المتكاملة من شريم" }
    ],
    categories: [category("c-hair")],
    brandId: "b-skala",
    rating: { average: 4.95, count: 480 },
    inStock: true,
    stockCount: 85
  },
  {
    id: "prod-argan-repair-hair-serum",
    slug: "argan-oil-repair-strengthens-hair-serum",
    name: "سيروم زيت الأركان الطبيعي لإصلاح وتقوية وتغذية الشعر",
    subtitle: "حماية من حرارة السشوار • لمعان حريري ومكافحة التقصف",
    description: "سيروم شعر مغذٍ بزيت الأركان النقي، يغلف خصلات الشعر بطبقة حريرية تحميها من الحرارة وتمنع تطاير وهيشان الشعر وتصلح الأطراف المتقصفة.",
    badges: ["زيت الأركان", "مكافحة الهيشان"],
    price: { amount: 4.8, currency: "OMR", compareAtAmount: 6.9 },
    images: [
      { url: "/images/products/argan-repair-hair-serum.jpg", alt: "سيروم زيت الأركان لإصلاح الشعر" },
      { url: "/images/products/skala-hair-nutrition-cream-1000g.jpg", alt: "كريم سكالا البرازيلي" },
      { url: "/images/banners/shreem-hair-oils-collection-banner.jpg", alt: "مجموعة العناية بالشعر الطبيعية" }
    ],
    categories: [category("c-hair")],
    brandId: "b-magic-skin",
    rating: { average: 4.87, count: 195 },
    inStock: true,
    stockCount: 60
  },
  {
    id: "prod-apple-natural-hair-color",
    slug: "apple-hair-color-natural-water-dye-pack",
    name: "صبغة شعر التفاح الأخضر الطبيعية بدون أمونيا مع تغطية كاملة للشيب",
    subtitle: "صبغة الماء النقية • لا تلطخ الجلد ولا تساقط للشعر",
    description: "صبغة شعر طبيعية مبتكرة بخلاصة التفاح الأخضر، تغطي الشيب بنسبة 100% خلال 15 دقيقة فقط بدون أمونيا أو مواد كيميائية حارقة ولا تسبب تصبغ الجلد أو الملابس.",
    badges: ["بدون أمونيا", "تغطية شيب 100%"],
    price: { amount: 3.9, currency: "OMR", compareAtAmount: 5.8 },
    images: [
      { url: "/images/products/apple-natural-hair-color-pack.jpg", alt: "صبغة شعر التفاح الأخضر الطبيعية" },
      { url: "/images/products/apple-natural-hair-color-detail.jpg", alt: "صبغة شعر التفاح - تفاصيل العبوة" },
      { url: "/images/banners/hair-dye-henna-collection-banner.jpg", alt: "تشكيلة صبغات الشعر بالحناء والأعشاب" }
    ],
    categories: [category("c-hair")],
    brandId: "b-roseberry",
    rating: { average: 4.9, count: 320 },
    inStock: true,
    stockCount: 75
  },
  {
    id: "prod-cetaphil-gentle-cleanser",
    slug: "cetaphil-gentle-skin-cleanser-sensitive-skin-500ml",
    name: "منظف البشرة اللطيف للبشرة الجافة إلى العادية والحساسة 500 مل من سيتافيل",
    subtitle: "الموصى به من أطباء الجلدية • نياسيناميد وجلسرين وبانثينول",
    description: "تركيبة طبية لطيفة ورقيقة خالية من الصابون والبارابين والعطور، تنظف البشرة بفعالية دون الإخلال بحاجزها الواقي الطبيعي.",
    badges: ["طبي معتمد", "للبشرة الحساسة"],
    price: { amount: 7.5, currency: "OMR", compareAtAmount: 10.5 },
    images: [
      { url: "/images/products/cetaphil-gentle-skin-cleanser.jpg", alt: "منظف البشرة اللطيف من سيتافيل" },
      { url: "/images/products/bioderma-atoderm-creme-ultra.jpg", alt: "كريم الترطيب بيوديرما" },
      { url: "/images/banners/body-lotions-frankincense-banner.jpg", alt: "منتجات العناية الجلدية الطبية" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-cetaphil",
    rating: { average: 4.94, count: 510 },
    inStock: true,
    stockCount: 70
  },
  {
    id: "prod-mason-collagen-beauty-cream",
    slug: "mason-natural-collagen-beauty-cream-57g",
    name: "كريم الكولاجين الأمريكي النقي لصحة وشباب البشرة 57 جم من ماسون ناتشورال",
    subtitle: "كولاجين نقي 100% • مرونة وشباب وترطيب مضاعف",
    description: "كريم كولاجين ممتاز عالي الجودة مصنوع في الولايات المتحدة الأمريكية، يعزز مرونة الجلد ويقلل من مظهر التجاعيد والخطوط التعبيرية ويمنح ملمساً مشدوداً وناعماً.",
    badges: ["كولاجين نقي", "صنع في أمريكا"],
    price: { amount: 4.5, currency: "OMR", compareAtAmount: 6.8 },
    images: [
      { url: "/images/products/mason-natural-collagen-beauty-cream.jpg", alt: "كريم الكولاجين من ماسون ناتشورال" },
      { url: "/images/products/w-cream-collagen-whitening.jpg", alt: "كريم الكولاجين المفتح" },
      { url: "/images/banners/medicube-collagen-jelly-banner.jpg", alt: "مجموعة منتجات الكولاجين الفاخرة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-mason",
    rating: { average: 4.86, count: 270 },
    inStock: true,
    stockCount: 65
  },
  {
    id: "prod-w-cream-collagen-whitening",
    slug: "w-cream-collagen-instant-whitening-cream",
    name: "كريم الكولاجين دبليو كريم للتبييض والنضارة الفورية 113 جم",
    subtitle: "تفتيح وترطيب فوري • كولاجين وحماية من الشمس",
    description: "كريم نهاري غني بالكولاجين البحري وخلاصة التفتيح، يمنح البشرة بياضاً طبيعياً فورياً مع حماية خفيفة من أشعة الشمس وملمس ناعم كالمخمل.",
    badges: ["تفتيح فوري", "كولاجين مغذٍ"],
    price: { amount: 3.8, currency: "OMR", compareAtAmount: 5.5 },
    images: [
      { url: "/images/products/w-cream-collagen-whitening.jpg", alt: "كريم دبليو كريم كولاجين للتفتيح" },
      { url: "/images/products/mason-natural-collagen-beauty-cream.jpg", alt: "كريم الكولاجين الأمريكي" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "كريمات التفتيح والنضارة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-magic-skin",
    rating: { average: 4.82, count: 190 },
    inStock: true,
    stockCount: 55
  },
  {
    id: "prod-rdl-babyface-facial-cleanser",
    slug: "rdl-babyface-astringent-melawhite-60ml",
    name: "محلول بيبي فيس المنظف والمفتح للبشرة مع ميلاوايت 60 مل من RDL",
    subtitle: "تنقية المسام وتفتيح البقع • بشرة طفولية نضرة",
    description: "محلول تنظيف وتفتيح كلاسيكي معزز بمركب ميلاوايت، ينظف الدهون العميقة في المسام ويساعد على تقليل الرؤوس السوداء وتفتيح وتصفية الوجه.",
    badges: ["بيبي فيس الأصلي", "تنقية المسام"],
    price: { amount: 2.8, currency: "OMR", compareAtAmount: 4.0 },
    images: [
      { url: "/images/products/rdl-babyface-facial-cleanser.jpg", alt: "محلول بيبي فيس من RDL" },
      { url: "/images/products/skin-beauty-whitening-face-wash.jpg", alt: "غسول سكين بيوتي المفتح" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "عناية التصفية وتفتيح البشرة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-rdl",
    rating: { average: 4.79, count: 180 },
    inStock: true,
    stockCount: 60
  },
  {
    id: "prod-skin-beauty-whitening-face-wash",
    slug: "skin-beauty-whitening-brightening-face-wash",
    name: "غسول سكين بيوتي المبيض ومنقي البشرة لجميع أنواع البشرة",
    subtitle: "إزالة الشوائب وتفتيح يومي • انتعاش ونضارة مستمرة",
    description: "غسول وجه يومي لطيف ينظف الأوساخ والمكياج والدهون الزائدة، ويمنح البشرة إشراقة وتفتيحاً متدرجاً بفضل مستخلصات التبييض الطبيعية.",
    badges: ["غسول مبيض", "لجميع أنواع البشرة"],
    price: { amount: 3.2, currency: "OMR", compareAtAmount: 4.8 },
    images: [
      { url: "/images/products/skin-beauty-whitening-face-wash.jpg", alt: "غسول سكين بيوتي المبيض" },
      { url: "/images/products/rdl-babyface-facial-cleanser.jpg", alt: "محلول بيبي فيس المفتح" },
      { url: "/images/banners/body-whitening-care-banner.jpg", alt: "مجموعة غسولات وتفتيح البشرة" }
    ],
    categories: [category("c-skincare")],
    brandId: "b-magic-skin",
    rating: { average: 4.81, count: 150 },
    inStock: true,
    stockCount: 50
  },
  {
    id: "prod-camu-zinc-supplement",
    slug: "camu-zinc-dietary-supplement-natural-immunity",
    name: "مكمل غذائي كامو زنك لدعم المناعة ونضارة البشرة",
    subtitle: "فيتامين C طبيعي مع الزنك النقي • إشراقة وصحة من الداخل",
    description: "مكمل غذائي طبيعي مستخلص من ثمار الكامو كامو الغنية بأعلى نسبة فيتامين C في الطبيعة مع عنصر الزنك الحيوي لتعزيز المناعة وبناء كولاجين البشرة.",
    badges: ["فيتامين C طبيعي", "صحة ونضارة"],
    price: { amount: 6.5, currency: "OMR", compareAtAmount: 9.0 },
    images: [
      { url: "/images/products/camu-zinc-dietary-supplement.jpg", alt: "مكمل كامو زنك الغذائي" },
      { url: "/images/banners/collagen-vitamins-supplements-banner.jpg", alt: "مجموعة المكملات والفيتامينات الطبيعية" },
      { url: "/images/banners/beauty-of-joseon-collection-banner.jpg", alt: "العناية المتكاملة بالصحة والجمال" }
    ],
    categories: [category("c-body")],
    brandId: "b-magic-skin",
    rating: { average: 4.88, count: 130 },
    inStock: true,
    stockCount: 40
  },
  {
    id: "rb-elec-1",
    slug: "professional-2in1-ionic-hair-styler",
    name: "مصفف ومجفف الشعر الاحترافي 2 في 1 بالأيونات السالبة",
    subtitle: "حائز على أعلى تقييم • ضمان سنتين معتمد",
    description: "جهاز تصفيف وتجفيف احترافي بقوة 1200 واط مع تقنية الأيونات السالبة لمنع الهيشان ومنح الشعر نعومة ولمعاناً فائقاً بحركة واحدة سلسة.",
    badges: ["الأكثر طلباً", "ضمان سنتين"],
    price: { amount: 18.5, currency: "OMR", compareAtAmount: 26.0 },
    images: [
      { url: "/images/categories/electronics.webp", alt: "مصفف ومجفف الشعر الاحترافي 2 في 1 بالأيونات السالبة" },
      { url: "/images/products/skala-hair-nutrition-cream-1000g.jpg", alt: "عناية التصفيف والتغذية المتكاملة للشعر" },
      { url: "/images/banners/roseberry-pomegranate-hair-banner.jpg", alt: "أجهزة وأدوات تصفيف الشعر الحديثة" }
    ],
    categories: [category("c-electronics"), category("c-hair")],
    brandId: "b-roseberry",
    rating: { average: 4.9, count: 340 },
    inStock: true,
    stockCount: 45
  },
  {
    id: "rb-elec-2",
    slug: "ultrasonic-deep-skin-scrubber-peeling",
    name: "جهاز تنظيف وتقشير البشرة بالموجات فوق الصوتية",
    subtitle: "تنظيف مسام احترافي بالمنزل • شحن USB سريع",
    description: "جهاز إزالة الرؤوس السوداء وتنظيف المسام العميق بالموجات فوق الصوتية مع وضع التدليك وامتصاص السيرومات بفعالية مضاعفة.",
    badges: ["ترند العناية", "نتائج فورية"],
    price: { amount: 14.9, currency: "OMR", compareAtAmount: 21.0 },
    images: [
      { url: "/images/categories/skincare.webp", alt: "جهاز تنظيف وتقشير البشرة بالموجات فوق الصوتية" },
      { url: "/images/products/medicube-zero-foam-cleanser.jpg", alt: "غسول تنقية المسام المتوافق" },
      { url: "/images/banners/medicube-zero-pore-mask-banner.jpg", alt: "أجهزة وتقنيات العناية بالبشرة" }
    ],
    categories: [category("c-electronics"), category("c-skincare")],
    brandId: "b-magic-skin",
    rating: { average: 4.8, count: 195 },
    inStock: true,
    stockCount: 30
  },
  {
    id: "rb-elec-3",
    slug: "ceramic-thermal-straightening-brush",
    name: "فرشاة فرد وتمليس الشعر الحرارية بسيراميك التورمالين",
    subtitle: "فرد فوري وسلس لجميع أنواع الشعر • حماية من الحرارة",
    description: "فرشاة تمليس سريعة التسخين بحرارة قابلة للتعديل حتى 230 درجة مئوية مع حماية متطورة من الحروق وتوزيع متساوٍ للحرارة.",
    badges: ["توفير الوقت", "حماية متطورة"],
    price: { amount: 16.5, currency: "OMR", compareAtAmount: 23.5 },
    images: [
      { url: "/images/categories/haircare.webp", alt: "فرشاة فرد وتمليس الشعر الحرارية بسيراميك التورمالين" },
      { url: "/images/products/argan-repair-hair-serum.jpg", alt: "سيروم الحماية والتغذية الحرارية" },
      { url: "/images/banners/shreem-hair-oils-collection-banner.jpg", alt: "مجموعة تصفيف وتمليس الشعر" }
    ],
    categories: [category("c-electronics"), category("c-hair")],
    brandId: "b-roseberry",
    rating: { average: 4.9, count: 210 },
    inStock: true,
    stockCount: 50
  },
  {
    id: "rb-elec-4",
    slug: "led-facial-massager-ems-therapy",
    name: "جهاز شد وتدليك الوجه والرقبة بالعلاج الضوئي LED وموجات EMS",
    subtitle: "نضارة وشد للبشرة بالمنزل • تصميم مريح وانسيابي",
    description: "تقنية مبتكرة لمكافحة علامات التقدم بالسن وشد بشرة الوجه والرقبة من خلال التحفيز العضلي EMS والأضواء العلاجية (الأحمر، الأزرق، والأخضر).",
    badges: ["ابتكار عالمي", "نضارة فورية"],
    price: { amount: 19.9, currency: "OMR", compareAtAmount: 28.0 },
    images: [
      { url: "/images/categories/summer.webp", alt: "جهاز شد وتدليك الوجه والرقبة بالعلاج الضوئي LED" },
      { url: "/images/products/anua-niacinamide-txa-serum-1.jpg", alt: "سيروم تعزيز امتصاص العلاج الضوئي" },
      { url: "/images/banners/korean-serums-collection-banner.jpg", alt: "تقنيات وأجهزة العناية المنزلية المتطورة" }
    ],
    categories: [category("c-electronics"), category("c-skincare")],
    brandId: "b-magic-skin",
    rating: { average: 4.8, count: 160 },
    inStock: true,
    stockCount: 22
  }
];

export const mockProducts: Product[] = rawProducts.map((product) => ({
  ...product,
  brand: product.brandId ? mockBrands.find((b) => b.id === product.brandId) : undefined,
}));

export const mockCollections: Collection[] = [
  {
    id: "col-best-deals",
    slug: "flash-deals",
    name: "عروض وصفقات حصرية",
    description: "أقوى التخفيضات والصفقات على باقة من أفضل المنتجات المختارة.",
    kind: "seasonal",
    productIds: [
      "prod-cosrx-snail-96",
      "prod-anua-niacinamide-txa",
      "prod-skin1004-centella-ampoule",
      "prod-medicube-collagen-jelly",
      "prod-shreem-raw-hashish-oil",
      "prod-beauty-of-joseon-rice-toner"
    ]
  },
  {
    id: "col-korean-skincare",
    slug: "korean-skincare",
    name: "عالم العناية الكورية",
    description: "أقوى المنتجات الكورية الأكثر شهرة وترنداً لبشرة زجاجية نضرة.",
    kind: "editorial",
    productIds: [
      "prod-cosrx-snail-96",
      "prod-cosrx-snail-92-cream",
      "prod-anua-heartleaf-80-ampoule",
      "prod-anua-niacinamide-txa",
      "prod-skin1004-centella-ampoule",
      "prod-beauty-of-joseon-rice-toner",
      "prod-medicube-red-moisture-sun-cream",
      "prod-axis-y-dark-spot-serum"
    ]
  },
  {
    id: "col-shreem-haircare",
    slug: "shreem-natural-care",
    name: "عناية شريم الطبيعية للشعر",
    description: "زيوت الحشيش الأفغاني وشامبوهات الأعشاب الطبيعية من توقيع شريم.",
    kind: "regional",
    productIds: [
      "prod-shreem-raw-hashish-oil",
      "prod-shreem-camel-hump-balm",
      "prod-shreem-yemeni-sidr-honey",
      "prod-shreem-oilex-hair-growth",
      "prod-skala-hair-nutrition-cream",
      "prod-argan-repair-hair-serum"
    ]
  },
  {
    id: "col-summer-protection",
    slug: "summer-protection",
    name: "روتين الصيف والوقاية من الشمس",
    description: "أفضل واقيات الشمس العالمية والمهدئات لترطيب وحماية البشرة.",
    kind: "seasonal",
    productIds: [
      "prod-anua-heartleaf-silky-sun-cream",
      "prod-medicube-red-moisture-sun-cream",
      "prod-cerave-mineral-sunscreen-spf30",
      "prod-korean-sun-relief-spf50"
    ]
  },
  {
    id: "col-body-whitening",
    slug: "body-whitening-care",
    name: "تفتيح وترطيب الجسم الفائق",
    description: "كريمات التفتيح وسنفرات العروس والعناية بالمناطق الحساسة.",
    kind: "editorial",
    productIds: [
      "prod-secret-key-snow-white-milky-pack",
      "prod-secret-key-snow-white-milky-lotion",
      "prod-secret-key-snow-white-spot-gel",
      "prod-s88-underarm-cream",
      "prod-kenta-bebe-creme",
      "prod-the-ordinary-inulin-body-lotion"
    ]
  }
];

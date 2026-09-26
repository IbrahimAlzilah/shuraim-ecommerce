import type { NavItem } from "@rawnaq/types"

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "skincare",
    title: { ar: "العناية بالبشرة", en: "Skincare" },
    slug: "skincare",
    columns: [
      {
        title: { ar: "تنظيف البشرة", en: "Cleansers" },
        items: [
          { id: "c1", name: { ar: "غسول الوجه المهدئ", en: "Facial Cleanser" }, slug: "facial-cleansers", isPopular: true },
          { id: "c2", name: { ar: "تونر ومياه ميسيلار", en: "Toners & Micellar" }, slug: "toners" },
          { id: "c3", name: { ar: "مقشرات لطيفة", en: "Exfoliators" }, slug: "exfoliators" },
        ],
      },
      {
        title: { ar: "علاجات وسيروم", en: "Treatments & Serums" },
        items: [
          { id: "s1", name: { ar: "سيروم الهيالورونيك", en: "Hyaluronic Acid" }, slug: "hyaluronic-serums", isPopular: true },
          { id: "s2", name: { ar: "سيروم النياسيناميد", en: "Niacinamide" }, slug: "niacinamide-serums", isPopular: true },
          { id: "s3", name: { ar: "فيتامين سي لنضارة البشرة", en: "Vitamin C" }, slug: "vitamin-c" },
          { id: "s4", name: { ar: "ريتينول تجديد الشباب", en: "Retinol" }, slug: "retinol" },
        ],
      },
      {
        title: { ar: "ترطيب وحماية", en: "Moisturizers & Sunscreen" },
        items: [
          { id: "m1", name: { ar: "كريمات ترطيب عميق", en: "Deep Moisturizers" }, slug: "moisturizers", isPopular: true },
          { id: "m2", name: { ar: "واقيات شمس شائعة", en: "Sunscreens" }, slug: "sunscreens", isPopular: true },
          { id: "m3", name: { ar: "كريمات محيط العين", en: "Eye Creams" }, slug: "eye-creams" },
        ],
      },
    ],
    featuredBrands: [
      { id: "b1", name: "The Ordinary", slug: "the-ordinary" },
      { id: "b2", name: "CeraVe", slug: "cerave" },
      { id: "b3", name: "La Roche-Posay", slug: "la-roche-posay" },
    ],
    banner: {
      title: { ar: "بشرة متألقة تدوم", en: "Radiant Skin Forever" },
      subtitle: { ar: "أقوى سيرومات الترطيب والعلاج الأصلية 100%", en: "Top 100% Authentic Serums" },
      imageUrl: "https://cdn.files.salla.network/homepage/1099831979/e13e31a9-fe41-49fd-8cc5-1337746df01a_1440x587.webp",
      link: "/products?category=skincare",
      badge: "خصومات حصرية",
    },
  },
  {
    id: "makeup",
    title: { ar: "المكياج", en: "Makeup" },
    slug: "makeup",
    columns: [
      {
        title: { ar: "مكياج الوجه", en: "Face" },
        items: [
          { id: "f1", name: { ar: "كريم الأساس (Foundation)", en: "Foundation" }, slug: "foundation", isPopular: true },
          { id: "f2", name: { ar: "كونسيلر وخافي عيوب", en: "Concealer" }, slug: "concealer" },
          { id: "f3", name: { ar: "بودرة تثبيت حرة", en: "Setting Powder" }, slug: "setting-powder" },
          { id: "f4", name: { ar: "بلاشر وهايلايتر", en: "Blush & Highlighter" }, slug: "blush" },
        ],
      },
      {
        title: { ar: "مكياج العيون والشفاه", en: "Eyes & Lips" },
        items: [
          { id: "el1", name: { ar: "ماسكارا تكثيف وتطويل", en: "Mascara" }, slug: "mascara", isPopular: true },
          { id: "el2", name: { ar: "أيلاينر ثابت ومقاوم", en: "Eyeliner" }, slug: "eyeliner" },
          { id: "el3", name: { ar: "أحمر شفاه مات ومرطب", en: "Lipstick" }, slug: "lipstick", isPopular: true },
          { id: "el4", name: { ar: "ملمع شفاه (Lip Gloss)", en: "Lip Gloss" }, slug: "lip-gloss" },
        ],
      },
    ],
    featuredBrands: [
      { id: "mb1", name: "Rare Beauty", slug: "rare-beauty" },
      { id: "mb2", name: "Benefit", slug: "benefit" },
      { id: "mb3", name: "NARS", slug: "nars" },
    ],
    banner: {
      title: { ar: "إطلالة ساحرة لكل يوم", en: "Enchanting Look" },
      subtitle: { ar: "أحدث درجات المكياج العالمية بتركيبات ثابتة", en: "New Luxury Shades" },
      imageUrl: "https://cdn.files.salla.network/homepage/1099831979/4fd8017c-73ef-48f6-8f6f-dfd7a4146845.webp",
      link: "/products?category=makeup",
    },
  },
  {
    id: "accessories",
    title: { ar: "الإكسسوارات والعدسات", en: "Accessories & Lenses" },
    slug: "accessories",
    columns: [
      {
        title: { ar: "مجوهرات وإكسسوارات عصرية", en: "Jewelry & Modern Accessories" },
        items: [
          { id: "acc1", name: { ar: "سلاسل وقلادات مطلية", en: "Necklaces & Pendants" }, slug: "necklaces", isPopular: true },
          { id: "acc2", name: { ar: "أساور وخلاخل راقية", en: "Bracelets & Anklets" }, slug: "bracelets", isPopular: true },
          { id: "acc3", name: { ar: "خواتم وأقراط أنيقة", en: "Rings & Earrings" }, slug: "earrings" },
        ],
      },
      {
        title: { ar: "نظارات وعدسات تجميلية", en: "Eyewear & Beauty Lenses" },
        items: [
          { id: "acc4", name: { ar: "عدسات لنس مي الأصلية", en: "Lensme Lenses" }, slug: "lenses", isPopular: true },
          { id: "acc5", name: { ar: "حقائب يد ومحافظ صغيرة", en: "Handbags & Wallets" }, slug: "handbags" },
          { id: "acc6", name: { ar: "إكسسوارات شعر وأطواق", en: "Hair Accessories" }, slug: "hair-accessories" },
        ],
      },
    ],
    banner: {
      title: { ar: "لمسة أناقة تميز حضورك", en: "Elevate Your Elegance" },
      subtitle: { ar: "أحدث صيحات العدسات والإكسسوارات العصرية بتصاميم راقية", en: "Latest Trendy Lenses & Fashion Accessories" },
      imageUrl: "https://cdn.files.salla.network/homepage/1099831979/f31348e7-53ed-43c4-affe-36a890b287a1.webp",
      link: "/products?category=accessories",
      badge: "تشكيلة جديدة",
    },
  },
  {
    id: "electronics",
    title: { ar: "الأجهزة والجمال الذكي", en: "Beauty Tech & Devices" },
    slug: "electronics",
    badge: "أجهزة",
    columns: [
      {
        title: { ar: "أجهزة العناية الذكية", en: "Smart Beauty Devices" },
        items: [
          { id: "el-dev1", name: { ar: "جهاز إزالة الشعر أنولا بدون ألم", en: "Anola Hair Removal Device" }, slug: "electronics", isPopular: true },
          { id: "el-dev2", name: { ar: "أداة تدليك غواشا لشد الرقبة والوجه", en: "Gua Sha Face & Neck Lifting" }, slug: "electronics", isPopular: true },
          { id: "el-dev3", name: { ar: "أنظمة ديرما رولر لتحفيز الكولاجين", en: "Derma Roller Systems" }, slug: "electronics", isPopular: true },
        ],
      },
      {
        title: { ar: "تصفيف الشعر والإلكترونيات", en: "Hair Styling & Tech Gadgets" },
        items: [
          { id: "el-dev4", name: { ar: "مصففات ومجففات شعر أيونية", en: "Ionic Hair Dryers & Stylers" }, slug: "electronics", isPopular: true },
          { id: "el-dev5", name: { ar: "أجهزة تمويج الشعر السيراميكية", en: "Ceramic Curling Irons" }, slug: "electronics" },
          { id: "el-dev6", name: { ar: "ماكينات العناية الشخصية", en: "Personal Care Shavers" }, slug: "electronics" },
        ],
      },
    ],
    banner: {
      title: { ar: "تقنيات العناية والجمال الذكي", en: "Smart Beauty & Lifestyle Tech" },
      subtitle: { ar: "أجهزة ذكية متطورة للعناية بالبشرة والشعر بتقنيات مبتكرة", en: "Advanced smart devices for skincare & hair" },
      imageUrl: "https://cdn.files.salla.network/homepage/1099831979/5f79bc6f-e5c0-4cd0-aec7-f7dd4b397e6e.webp",
      link: "/products?category=electronics",
      badge: "أحدث التقنيات",
    },
  },
  {
    id: "fragrances",
    title: { ar: "العطور", en: "Fragrances" },
    slug: "fragrances",
    columns: [
      {
        title: { ar: "تشكيلة العطور الفاخرة", en: "Luxury Perfumes" },
        items: [
          { id: "fg1", name: { ar: "عطور نسائية فاخرة", en: "Women's Perfume" }, slug: "fragrance", isPopular: true },
          { id: "fg2", name: { ar: "عطور النيش الشرقية والعود", en: "Niche & Oud Fragrances" }, slug: "fragrance", isPopular: true },
          { id: "fg3", name: { ar: "مسك الطهارة الأصلي", en: "Musk Tahara" }, slug: "fragrance" },
          { id: "fg4", name: { ar: "معطرات الجسم والمناطق الحساسة", en: "Body Mists" }, slug: "fragrance", isPopular: true },
        ],
      },
    ],
    banner: {
      title: { ar: "روائح آسرة تأسر الحواس", en: "Captivating Fragrances" },
      subtitle: { ar: "توليفات ملكية تجمع العود الكمبودي والمسك والزهور النادرة", en: "Royal Blends of Oud, Musk & Rare Florals" },
      imageUrl: "https://cdn.files.salla.network/homepage/1099831979/d1599950-3a07-4d56-ab8d-3915ed34e5df.webp",
      link: "/products?category=fragrance",
      badge: "عطور نيش",
    },
  },
  {
    id: "offers",
    title: { ar: "عروض حصرية 🔥", en: "Special Offers" },
    slug: "offers",
    isSpecial: true,
    columns: [
      {
        title: { ar: "باقات التوفير والخصومات", en: "Mega Savings & Bundles" },
        items: [
          { id: "off1", name: { ar: "خصومات حصرية حتى 50%", en: "Discounts up to 50%" }, slug: "bundles", isPopular: true },
          { id: "off2", name: { ar: "بكجات العناية بالبشرة", en: "Skincare Bundles" }, slug: "bundles", isPopular: true },
          { id: "off3", name: { ar: "عروض الأجهزة والجمال الذكي", en: "Beauty Tech Deals" }, slug: "electronics", isPopular: true },
          { id: "off4", name: { ar: "باقات العدسات والإكسسوارات", en: "Lenses & Accessories Offers" }, slug: "accessories" },
        ],
      },
    ],
    banner: {
      title: { ar: "عروض التوفير وبكجات الجمال الكبرى", en: "Mega Savings & Beauty Bundles" },
      subtitle: { ar: "خصومات حصرية تصل حتى 50% على باقات العناية المتكاملة", en: "Exclusive Discounts up to 50%" },
      imageUrl: "https://cdn.files.salla.network/homepage/1099831979/c0f07d94-6379-4490-8690-f4565a0e52c9.webp",
      link: "/products?category=bundles",
      badge: "خصم حتى 50%",
    },
  },
]

export const POPULAR_SEARCHES = [
  "أجهزة تنظيف البشرة الذكية",
  "سلاسل وإكسسوارات مطلية",
  "سيروم الهيالورونيك",
  "مصفف شعر أيوني احترافي",
  "فاونديشن كونسيلر مات",
  "جهاز ليزر منزلي IPL",
  "عطور نيش فاخرة",
  "نظارات شمسية عصرية",
]

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
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&auto=format&fit=crop&q=80",
      link: "/categories/skincare",
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
      { id: "mb1", name: "Huda Beauty", slug: "huda-beauty" },
      { id: "mb2", name: "Dior Makeup", slug: "dior" },
      { id: "mb3", name: "Charlotte Tilbury", slug: "charlotte-tilbury" },
    ],
    banner: {
      title: { ar: "إطلالة ساحرة لكل يوم", en: "Enchanting Look" },
      subtitle: { ar: "أحدث درجات المكياج العالمية بتركيبات ثابتة", en: "New Luxury Shades" },
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&auto=format&fit=crop&q=80",
      link: "/categories/makeup",
    },
  },
  {
    id: "accessories",
    title: { ar: "الإكسسوارات", en: "Accessories" },
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
        title: { ar: "نظارات ومقتنيات", en: "Eyewear & Lifestyle" },
        items: [
          { id: "acc4", name: { ar: "نظارات شمسية عصرية", en: "Sunglasses" }, slug: "sunglasses", isPopular: true },
          { id: "acc5", name: { ar: "حقائب يد ومحافظ صغيرة", en: "Handbags & Wallets" }, slug: "handbags" },
          { id: "acc6", name: { ar: "إكسسوارات شعر وأطواق", en: "Hair Accessories" }, slug: "hair-accessories" },
        ],
      },
    ],
    banner: {
      title: { ar: "لمسة أناقة تميز حضورك", en: "Elevate Your Elegance" },
      subtitle: { ar: "أحدث صيحات المجوهرات والإكسسوارات العصرية بتصاميم راقية", en: "Latest Trendy Jewelry & Fashion Accessories" },
      imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=80",
      link: "/categories/accessories",
      badge: "تشكيلة جديدة",
    },
  },
  {
    id: "electronics",
    title: { ar: "الإلكترونيات والجمال الذكي", en: "Beauty Tech & Electronics" },
    slug: "electronics",
    badge: "تقنية",
    columns: [
      {
        title: { ar: "أجهزة العناية الذكية", en: "Smart Beauty Devices" },
        items: [
          { id: "el-dev1", name: { ar: "أجهزة تنظيف الوجه بالموجات", en: "Sonic Face Cleansers" }, slug: "sonic-cleansers", isPopular: true },
          { id: "el-dev2", name: { ar: "أجهزة تدليك وشد البشرة", en: "Skin Lifting & Microcurrent" }, slug: "skin-lifting", isPopular: true },
          { id: "el-dev3", name: { ar: "أجهزة إزالة الشعر بالليزر المنزلي", en: "IPL Laser Hair Removal" }, slug: "ipl-hair-removal", isPopular: true },
        ],
      },
      {
        title: { ar: "تصفيف الشعر والإلكترونيات", en: "Hair Styling & Tech Gadgets" },
        items: [
          { id: "el-dev4", name: { ar: "مصففات ومجففات شعر أيونية", en: "Ionic Hair Dryers & Stylers" }, slug: "hair-dryers", isPopular: true },
          { id: "el-dev5", name: { ar: "أجهزة تمويج الشعر السيراميكية", en: "Ceramic Curling Irons" }, slug: "curling-irons" },
          { id: "el-dev6", name: { ar: "ساعات ذكية وسماعات أنيقة", en: "Smart Watches & Earbuds" }, slug: "smart-wearables" },
        ],
      },
    ],
    banner: {
      title: { ar: "تقنيات العناية والجمال الذكي", en: "Smart Beauty & Lifestyle Tech" },
      subtitle: { ar: "أجهزة ذكية متطورة للعناية بالبشرة والشعر ومواكبة العصر", en: "Advanced smart devices for skincare, hair & modern lifestyle" },
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&auto=format&fit=crop&q=80",
      link: "/categories/electronics",
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
          { id: "fg1", name: { ar: "عطور نسائية فاخرة", en: "Women's Perfume" }, slug: "women-perfumes", isPopular: true },
          { id: "fg2", name: { ar: "عطور النيش العالمية", en: "Niche Fragrances" }, slug: "niche-perfumes", isPopular: true },
          { id: "fg3", name: { ar: "بخور وعود فاخر", en: "Oud & Bakhoor" }, slug: "oud-bakhoor" },
          { id: "fg4", name: { ar: "معطرات الجسم والشعر", en: "Hair & Body Mists" }, slug: "body-mists" },
        ],
      },
    ],
  },
  {
    id: "offers",
    title: { ar: "عروض حصرية 🔥", en: "Special Offers" },
    slug: "offers",
    isSpecial: true,
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

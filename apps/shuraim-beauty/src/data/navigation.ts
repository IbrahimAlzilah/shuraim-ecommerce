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
      badge: "خصومات الصيف",
    },
  },
  {
    id: "k-beauty",
    title: { ar: "الجمال الكوري ✨", en: "K-Beauty" },
    slug: "k-beauty",
    badge: "ترند",
    columns: [
      {
        title: { ar: "روائع العناية الكورية", en: "K-Beauty Heroes" },
        items: [
          { id: "kb1", name: { ar: "خلاصة الحلزون (Snail Mucin)", en: "Snail Mucin" }, slug: "snail-mucin", isPopular: true },
          { id: "kb2", name: { ar: "سنتيلا لتهدئة الاحمرار", en: "Centella Asiatica" }, slug: "centella", isPopular: true },
          { id: "kb3", name: { ar: "واقيات شمس خفيفة كالماء", en: "Watery Sunscreen" }, slug: "korean-sunscreen", isPopular: true },
          { id: "kb4", name: { ar: "ماسكات ورقية مرطبة", en: "Sheet Masks" }, slug: "sheet-masks" },
        ],
      },
      {
        title: { ar: "روتين الزجاج (Glass Skin)", en: "Glass Skin Routine" },
        items: [
          { id: "gs1", name: { ar: "إيسنس تنقية المسام", en: "Essence" }, slug: "essence" },
          { id: "gs2", name: { ar: "كريمات حليب الأرز", en: "Rice Cream" }, slug: "rice-cream", isPopular: true },
          { id: "gs3", name: { ar: "مقشرات التونر اليومية", en: "Daily Toner Pads" }, slug: "toner-pads" },
        ],
      },
    ],
    featuredBrands: [
      { id: "kb-b1", name: "Beauty of Joseon", slug: "beauty-of-joseon" },
      { id: "kb-b2", name: "COSRX", slug: "cosrx" },
      { id: "kb-b3", name: "Anua", slug: "anua" },
      { id: "kb-b4", name: "Skin1004", slug: "skin1004" },
    ],
    banner: {
      title: { ar: "بشرة زجاجية ونضارة كورية", en: "Korean Glass Skin" },
      subtitle: { ar: "أشهر المنتجات الفيروسية المعتمدة رسمياً", en: "Top Viral Products" },
      imageUrl: "https://images.unsplash.com/photo-1512290900672-1f5533146b9a?w=400&auto=format&fit=crop&q=80",
      link: "/categories/k-beauty",
      badge: "الأكثر طلباً",
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
    id: "haircare",
    title: { ar: "العناية بالشعر", en: "Haircare" },
    slug: "haircare",
    columns: [
      {
        title: { ar: "منتجات العناية", en: "Care Products" },
        items: [
          { id: "h1", name: { ar: "شامبو وبلسم علاجي", en: "Shampoo & Conditioner" }, slug: "shampoo", isPopular: true },
          { id: "h2", name: { ar: "زيوت وسيروم التقوية", en: "Hair Oils & Serum" }, slug: "hair-oils", isPopular: true },
          { id: "h3", name: { ar: "ماسكات ترميم الشعر", en: "Hair Masks" }, slug: "hair-masks" },
        ],
      },
    ],
  },
  {
    id: "fragrances",
    title: { ar: "العطور", en: "Fragrances" },
    slug: "fragrances",
    columns: [
      {
        title: { ar: "تشكيلة العطور", en: "Perfumes" },
        items: [
          { id: "fg1", name: { ar: "عطور نسائية فاخرة", en: "Women's Perfume" }, slug: "women-perfumes", isPopular: true },
          { id: "fg2", name: { ar: "عطور النيش العالمية", en: "Niche Fragrances" }, slug: "niche-perfumes", isPopular: true },
          { id: "fg3", name: { ar: "مسك وبخور فاخر", en: "Musk & Bakhoor" }, slug: "musk-bakhoor" },
          { id: "fg4", name: { ar: "معطرات الشعر والجسم", en: "Hair & Body Mists" }, slug: "body-mists" },
        ],
      },
    ],
  },
  {
    id: "brands",
    title: { ar: "الماركات العالمية", en: "Brands" },
    slug: "brands",
  },
  {
    id: "offers",
    title: { ar: "عروض حصرية 🔥", en: "Special Offers" },
    slug: "offers",
    isSpecial: true,
  },
]

export const POPULAR_SEARCHES = [
  "سيروم الحلزون كوزريكس",
  "واقي شمس بيوتي اوف جوسون",
  "غسول سيرافي للبشرة الدهنية",
  "سيروم نياسيناميد ذا اوردينري",
  "عطور نيش فاخرة",
  "فاونديشن لومينوس",
  "أحمر شفاه مات ثابت",
  "زيت روزماري للشعر",
]

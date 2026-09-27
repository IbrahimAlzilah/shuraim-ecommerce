import type { NavItem } from "@rawnaq/types"

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "skincare",
    title: { ar: "العناية بالبشرة", en: "Skincare" },
    slug: "skincare",
    columns: [
      {
        title: { ar: "تنظيف وترطيب", en: "Cleansers & Moisturizers" },
        items: [
          { id: "c1", name: { ar: "غسول الوجه المهدئ", en: "Facial Cleanser" }, slug: "facial-cleansers", isPopular: true },
          { id: "c2", name: { ar: "تونر ومياه ميسيلار", en: "Toners & Micellar" }, slug: "toners" },
          { id: "c3", name: { ar: "مقشرات نضارة طبيعية", en: "Exfoliators" }, slug: "exfoliators" },
        ],
      },
      {
        title: { ar: "سيرومات وعلاجات", en: "Treatments & Serums" },
        items: [
          { id: "s1", name: { ar: "سيروم الهيالورونيك والترطيب", en: "Hyaluronic Acid" }, slug: "hyaluronic-serums", isPopular: true },
          { id: "s2", name: { ar: "سيروم النياسيناميد وتوحيد اللون", en: "Niacinamide" }, slug: "niacinamide-serums", isPopular: true },
          { id: "s3", name: { ar: "فيتامين سي لنضارة البشرة", en: "Vitamin C" }, slug: "vitamin-c" },
          { id: "s4", name: { ar: "مرطبات الشفاه بنكهات الفواكه", en: "Lip Balms" }, slug: "lip-balms", isPopular: true },
        ],
      },
      {
        title: { ar: "حماية وترميم", en: "Moisturizers & Protection" },
        items: [
          { id: "m1", name: { ar: "كريمات حماية شمس SPF", en: "SPF Sunscreens" }, slug: "sunscreens", isPopular: true },
          { id: "m2", name: { ar: "كريمات ترطيب فائقة", en: "Deep Moisturizers" }, slug: "moisturizers" },
          { id: "m3", name: { ar: "عناية محيط العين", en: "Eye Care" }, slug: "eye-creams" },
        ],
      },
    ],
    featuredBrands: [
      { id: "b1", name: "Roseberry", slug: "roseberry" },
      { id: "b2", name: "Magic Skin", slug: "magic-skin" },
      { id: "b3", name: "Y-Herb", slug: "y-herb" },
    ],
    banner: {
      title: { ar: "بشرة متألقة تدوم", en: "Radiant Skin Forever" },
      subtitle: { ar: "أقوى مستحضرات الترطيب والعلاج الأصلية 100%", en: "Top 100% Authentic Skincare" },
      imageUrl: "/images/categories/skincare.webp",
      link: "/categories/skincare",
      badge: "خصومات الصيف",
    },
  },
  {
    id: "makeup",
    title: { ar: "المكياج", en: "Makeup" },
    slug: "makeup",
    columns: [
      {
        title: { ar: "مكياج الوجه والأساس", en: "Face" },
        items: [
          { id: "f1", name: { ar: "كريم الأساس بحماية SPF", en: "Foundation SPF" }, slug: "foundation", isPopular: true },
          { id: "f2", name: { ar: "كونسيلر دبل ديوتي بيوتي", en: "Concealer" }, slug: "concealer", isPopular: true },
          { id: "f3", name: { ar: "برايمر جل مطفي وناعم", en: "Matte Primer" }, slug: "primer" },
          { id: "f4", name: { ar: "مثبت مكياج طويل الأمد", en: "Setting Spray" }, slug: "setting-spray", isPopular: true },
        ],
      },
      {
        title: { ar: "العيون والشفاه", en: "Eyes & Lips" },
        items: [
          { id: "el1", name: { ar: "باليتات ظلال العيون الملونة", en: "Eyeshadow Palettes" }, slug: "eyeshadow", isPopular: true },
          { id: "el2", name: { ar: "طقم مورد خدود وشفاه سائل", en: "Lip & Cheek Tint" }, slug: "lip-tint", isPopular: true },
          { id: "el3", name: { ar: "ليب جلاس ملمع ومكبر شفاه", en: "Lip Gloss" }, slug: "lip-gloss" },
          { id: "el4", name: { ar: "رموش شعر الحصان الطبيعية", en: "Natural Lashes" }, slug: "lashes" },
        ],
      },
    ],
    featuredBrands: [
      { id: "mb1", name: "Roseberry", slug: "roseberry" },
      { id: "mb2", name: "Bessan Beauty", slug: "bessan-beauty" },
      { id: "mb3", name: "Barabora", slug: "barabora" },
    ],
    banner: {
      title: { ar: "إطلالة ساحرة لكل يوم", en: "Enchanting Look" },
      subtitle: { ar: "أحدث درجات المكياج بتركيبات ثابتة ومميزة", en: "New Luxury Beauty Shades" },
      imageUrl: "/images/categories/makeup.webp",
      link: "/categories/makeup",
      badge: "الأكثر مبيعاً",
    },
  },
  {
    id: "fragrances",
    title: { ar: "العطور والمسك", en: "Fragrances & Musk" },
    slug: "fragrance",
    columns: [
      {
        title: { ar: "تشكيلة العطور الفاخرة", en: "Perfumes" },
        items: [
          { id: "fg1", name: { ar: "عطور نسائية فاخرة", en: "Women's Perfume" }, slug: "women-perfumes", isPopular: true },
          { id: "fg2", name: { ar: "عطور رجالية جذابة", en: "Men's Perfumes" }, slug: "men-perfumes", isPopular: true },
          { id: "fg3", name: { ar: "عطور ميني للشنطة والسفر", en: "Mini Perfumes" }, slug: "mini-perfumes" },
        ],
      },
      {
        title: { ar: "المسك والمخمريات", en: "Musk & Khamriya" },
        items: [
          { id: "m1", name: { ar: "بكج مسك الطهارة الأصلي", en: "Tahara Musk Package" }, slug: "tahara-musk", isPopular: true },
          { id: "m2", name: { ar: "مخمرية مسك الرمان للشعر والجسم", en: "Pomegranate Musk" }, slug: "pomegranate-musk", isPopular: true },
          { id: "m3", name: { ar: "أطقم المسك للإهداء والمناسبات", en: "Musk Gift Sets" }, slug: "musk-sets" },
        ],
      },
    ],
    featuredBrands: [
      { id: "fb1", name: "Gulf Orchid", slug: "golf-orchid" },
      { id: "fb2", name: "Heila Beauty", slug: "heila-beauty" },
      { id: "fb3", name: "Otory", slug: "otory" },
    ],
    banner: {
      title: { ar: "عبير يأسر الحواس", en: "Scent That Captivates" },
      subtitle: { ar: "أرقى العطور ومسك الطهارة بثبات يدوم طويلاً", en: "Luxury Perfumes & Long-Lasting Musk" },
      imageUrl: "/images/categories/fragrance.webp",
      link: "/categories/fragrance",
      badge: "رائج الآن",
    },
  },
  {
    id: "body-care",
    title: { ar: "بودرة وعناية الجسم", en: "Body Care & Powder" },
    slug: "body-care",
    columns: [
      {
        title: { ar: "بودرة ومعطرات الجسم", en: "Powders & Mists" },
        items: [
          { id: "bp1", name: { ar: "بودرة معطرة بتركيز عالي", en: "Perfumed Body Powder" }, slug: "body-powder", isPopular: true },
          { id: "bp2", name: { ar: "بودرة لافيرن وبودرة فلورا", en: "Luxury Scented Powders" }, slug: "luxury-powders", isPopular: true },
          { id: "bp3", name: { ar: "زيوت ترطيب الجسم المعطرة", en: "Hydrating Body Oils" }, slug: "body-oils" },
          { id: "bp4", name: { ar: "مجموعات العناية النسائية", en: "Women Care Packages" }, slug: "women-care" },
        ],
      },
    ],
    featuredBrands: [
      { id: "bb1", name: "Roseberry", slug: "roseberry" },
      { id: "bb2", name: "Magic Skin", slug: "magic-skin" },
      { id: "bb3", name: "Y-Herb", slug: "y-herb" },
    ],
    banner: {
      title: { ar: "نعومة وانتعاش لا مثيل له", en: "Unmatched Softness" },
      subtitle: { ar: "أشهر بودرات وزيوت الجسم المعطرة بتركيزات مركزة", en: "Top Perfumed Powders & Oils" },
      imageUrl: "/images/categories/bodycare.webp",
      link: "/categories/body-care",
      badge: "عروض الصيف",
    },
  },
  {
    id: "boxes-bundles",
    title: { ar: "بوكسات وهدايا 🎁", en: "Boxes & Gifts" },
    slug: "boxes-bundles",
    badge: "مميّز",
    columns: [
      {
        title: { ar: "مجموعات وبكجات متكاملة", en: "Gift Sets & Bundles" },
        items: [
          { id: "bx1", name: { ar: "بوكس عطور الشعر 4 عطور", en: "Hair Mist 4-Pack Box" }, slug: "hair-mist-box", isPopular: true },
          { id: "bx2", name: { ar: "بكج مسك الطهارة 4 تولات", en: "Tahara Musk 4-Tola" }, slug: "tahara-box", isPopular: true },
          { id: "bx3", name: { ar: "أطقم المسك من هيلة بيوتي", en: "Heila Beauty Musk Set" }, slug: "heila-musk-set", isPopular: true },
          { id: "bx4", name: { ar: "تشكيلة عطور ميني فخمة", en: "Mini Perfume Collection" }, slug: "mini-perfume-set" },
        ],
      },
    ],
    featuredBrands: [
      { id: "bxb1", name: "Gulf Orchid", slug: "golf-orchid" },
      { id: "bxb2", name: "Heila Beauty", slug: "heila-beauty" },
      { id: "bxb3", name: "Roseberry", slug: "roseberry" },
    ],
    banner: {
      title: { ar: "هدايا فاخرة وبكجات قيمة", en: "Luxury Gift Sets" },
      subtitle: { ar: "أجمل البوكسات لإهدائها لأحبائك أو تدليل نفسك", en: "The Perfect Gifts for You & Loved Ones" },
      imageUrl: "/images/categories/boxes.webp",
      link: "/categories/boxes-bundles",
      badge: "الأكثر طلباً",
    },
  },
  {
    id: "electronics",
    title: { ar: "أجهزة التجميل", en: "Beauty Devices" },
    slug: "electronics",
    columns: [
      {
        title: { ar: "أجهزة تصفيف الشعر", en: "Hair Styling Devices" },
        items: [
          { id: "el1", name: { ar: "مصفف ومجفف الشعر الاحترافي 2 في 1", en: "2-in-1 Ionic Styler" }, slug: "hair-styler", isPopular: true },
          { id: "el2", name: { ar: "فرشاة فرد وتمليس الشعر الحرارية", en: "Ceramic Straightening Brush" }, slug: "straightening-brush", isPopular: true },
        ],
      },
      {
        title: { ar: "أجهزة العناية بالبشرة", en: "Skincare Devices" },
        items: [
          { id: "sd1", name: { ar: "جهاز تنظيف وتقشير البشرة بالألتراسونيك", en: "Ultrasonic Skin Scrubber" }, slug: "ultrasonic-scrubber", isPopular: true },
          { id: "sd2", name: { ar: "جهاز تدليك وشد الوجه بالضوء LED", en: "LED & EMS Face Sculptor" }, slug: "led-facial-device", isPopular: true },
        ],
      },
    ],
    banner: {
      title: { ar: "تقنيات الجمال المتطورة", en: "Advanced Beauty Tech" },
      subtitle: { ar: "أحدث أجهزة التصفيف والعناية بالبشرة مع ضمان معتمد", en: "Latest Styling & Skincare Devices with Warranty" },
      imageUrl: "/images/categories/electronics.webp",
      link: "/categories/electronics",
      badge: "ضمان معتمد",
    },
  },
  {
    id: "brands",
    title: { ar: "الماركات", en: "Brands" },
    slug: "brands",
  },
  {
    id: "offers",
    title: { ar: "عروض حصرية 🔥", en: "Exclusive Deals" },
    slug: "deals",
    isSpecial: true,
  },
]

export const POPULAR_SEARCHES = [
  "بوكس عطور الشعر جولف أوركيد",
  "طقم مورد خدود وشفايف روز بيري",
  "كونسيلر دبل ديوتي بيوتي",
  "بودرة معطرة للجسم لافيرن",
  "بكج مسك الطهارة 4 تولات",
  "عطر برافو الفاخر",
  "مصفف ومجفف الشعر الاحترافي",
  "باليت ظل العيون 24 لون",
]

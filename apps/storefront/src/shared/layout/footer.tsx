import { CheckCircle, Phone, Mail } from "lucide-react"
import { useTranslations } from "next-intl"

import { Link } from "@rawnaq/i18n/navigation"

export function Footer() {
  const t = useTranslations("Footer")
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/20 text-foreground transition-colors">
      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Bio */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="inline-block group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.jpg"
                alt="شريم | Shuraim Beauty"
                className="h-12 w-auto object-contain rounded-md dark:bg-white dark:p-1 transition-opacity group-hover:opacity-90"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              منصة الجمال والعناية المتخصصة في تقديم أشهر الماركات العالمية والكورية الأصلية. نحرص على تقديم تجربة تسوق راقية تجمع بين الجودة، التميز، والأسعار المناسبة.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-emerald-600" />
                <span>متجر مرخص ومعتمد في سلطنة عُمان (MOCIIP)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">الرقم التعريفي الضريبي (VAT):</span>
                <span dir="ltr">OM1100098765</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">السجل التجاري:</span>
                <span dir="ltr">CR 1384920 (مسقط)</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-foreground">أقسام المتجر</h4>
            <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
              <li>
                <Link href="/products?category=skincare" className="hover:text-primary transition-colors">
                  العناية بالبشرة
                </Link>
              </li>
              <li>
                <Link href="/products?category=makeup" className="hover:text-primary transition-colors">
                  المكياج ومستحضرات التجميل
                </Link>
              </li>
              <li>
                <Link href="/products?category=hair-care" className="hover:text-primary transition-colors">
                  العناية بالشعر
                </Link>
              </li>
              <li>
                <Link href="/products?category=fragrance" className="hover:text-primary transition-colors">
                  العطور الأصلية
                </Link>
              </li>
              <li>
                <Link href="/products?category=korean-care" className="hover:text-primary transition-colors">
                  العناية الكورية
                </Link>
              </li>
              <li>
                <Link href="/products?category=bundles" className="hover:text-primary transition-colors">
                  بكجات التوفير
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-foreground">روابط تهمك</h4>
            <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-primary transition-colors">
                  الشحن والتوصيل
                </Link>
              </li>
              <li>
                <Link href="/returns-policy" className="hover:text-primary transition-colors">
                  سياسة الاسترجاع والاستبدال
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service & WhatsApp */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-foreground">خدمة العملاء</h4>
            <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <p>نسعد بخدمتكِ والإجابة على أي استفسارات تخص منتجاتك المفضلة.</p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border bg-background p-2.5 font-medium text-foreground hover:border-primary transition-colors"
              >
                <Phone className="size-4 text-emerald-600 shrink-0" />
                <div className="flex flex-col text-start">
                  <span className="font-bold text-emerald-600">خدمة الواتساب</span>
                  <span className="text-[11px] text-muted-foreground">رد فوري خلال دقائق</span>
                </div>
              </a>

              <a
                href="mailto:care@rawnaq.com"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
              >
                <Mail className="size-3.5" />
                <span>care@rawnaq.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Gateways */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row text-xs text-muted-foreground">
          <p>
            متجر شريم © {year} — {t("rights")}
          </p>

          {/* Payment Method Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-md border bg-background px-2 py-1 font-bold text-[10px] text-foreground">
              خصم عُمان OmanNet
            </span>
            <span className="rounded-md border bg-background px-2 py-1 font-bold text-[10px] text-foreground">
              ثواني Thawani
            </span>
            <span className="rounded-md border bg-background px-2 py-1 font-bold text-[10px] text-foreground">
              Apple Pay
            </span>
            <span className="rounded-md border bg-background px-2 py-1 font-bold text-[10px] text-foreground">
              تابي Tabby
            </span>
            <span className="rounded-md border bg-background px-2 py-1 font-bold text-[10px] text-foreground">
              Visa / Master
            </span>
            <span className="rounded-md border bg-background px-2 py-1 text-[10px] text-foreground">
              دفع عند الاستلام
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

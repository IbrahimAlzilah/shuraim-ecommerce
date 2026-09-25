import { Lock, RotateCcw, ShieldCheck, Truck } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function WhyUsSection() {
  const t = await getTranslations("Home.whyUs")

  const items = [
    {
      icon: ShieldCheck,
      title: t("authentic.title"),
      description: t("authentic.description"),
    },
    {
      icon: Truck,
      title: t("shipping.title"),
      description: t("shipping.description"),
    },
    {
      icon: RotateCcw,
      title: t("returns.title"),
      description: t("returns.description"),
    },
    {
      icon: Lock,
      title: t("payment.title"),
      description: t("payment.description"),
    },
  ]

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="flex items-start gap-3.5 rounded-2xl border border-border bg-card/60 p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-primary/40 hover:shadow-xs"
            >
              <div className="mt-0.5 text-primary shrink-0">
                <Icon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

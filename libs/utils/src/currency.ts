export function formatCurrency(
  amount: number,
  currency: string,
  locale: string,
): string {
  const formatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount)

  // Remove trailing period from currency abbreviations (e.g. "ر.ي." -> "ر.ي", "ر.ع." -> "ر.ع", "ر.س." -> "ر.س")
  return formatted.replace(/([\u0600-\u06FF]+(?:\.[\u0600-\u06FF]+)*)\./g, "$1")
}


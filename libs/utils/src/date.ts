export function formatDate(
  date: Date | string | number,
  locale: string,
  options?: Intl.DateTimeFormatOptions,
): string {
  const value = date instanceof Date ? date : new Date(date)
  return new Intl.DateTimeFormat(locale, options).format(value)
}

export function formatHijriDate(date: Date | string | number): string {
  return formatDate(date, "ar-SA-u-ca-islamic", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function formatCurrency(value: number, locale: string, fractionDigits = 2): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}

export function formatEolText(
  date: string | undefined,
  windowMonths: number | undefined,
  locale: string,
  unknownLabel: string,
  monthsShortLabel: string,
): string {
  if (!date) return unknownLabel;

  const formattedDate = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  })
    .format(new Date(date))
    .replace(".", "");

  if (!windowMonths) return formattedDate;
  return `${formattedDate} (${windowMonths} ${monthsShortLabel})`;
}

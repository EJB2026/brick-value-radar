export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}

export function formatEolText(date?: string, windowMonths?: number): string {
  if (!date) return "Onbekend";

  const formattedDate = new Intl.DateTimeFormat("nl-NL", {
    month: "short",
    year: "numeric",
  })
    .format(new Date(date))
    .replace(".", "");

  if (!windowMonths) return formattedDate;
  return `${formattedDate} (${windowMonths} mnd)`;
}

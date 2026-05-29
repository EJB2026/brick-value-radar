import type { InvestmentAdvice } from "../types/lego";
import type { Messages } from "../i18n/translations";
import { formatCurrency } from "./formatters";

export function formatAdvice(
  advice: InvestmentAdvice,
  messages: Messages,
  intlLocale: string,
): string {
  if (advice.type === "buyBelow") {
    const amount = formatCurrency(advice.amountEur ?? 0, intlLocale, 0);
    return messages.set.adviceText.buyBelow(amount);
  }

  return messages.set.adviceText[advice.type];
}

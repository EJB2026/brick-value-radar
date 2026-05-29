import type { LegoSet } from "../../types/lego";
import { useI18n } from "../../i18n/I18nProvider";
import { formatAdvice } from "../../utils/advice";
import { formatCurrency, formatEolText, formatPercentage } from "../../utils/formatters";

type MobileSetCardProps = {
  set: LegoSet;
};

export function MobileSetCard({ set }: MobileSetCardProps) {
  const { intlLocale, messages } = useI18n();

  return (
    <article className={`mobile-set-card status-${set.radarStatus}`}>
      <div className="mobile-card-main">
        <img src={set.imageUrl} alt={`${set.setNumber} ${set.name}`} />
        <div className="mobile-score" aria-label={messages.set.investmentScore(set.investmentScore)}>
          <strong>{set.investmentScore}</strong>
          <span>/100</span>
        </div>
        <div className="mobile-set-heading">
          <span>{set.setNumber}</span>
          <h3>{set.name}</h3>
          <em className={`status-badge ${set.radarStatus}`}>{messages.status.labels[set.radarStatus]}</em>
        </div>
      </div>

      <dl className="mobile-metrics">
        <div>
          <dt>{messages.set.lowestPrice}</dt>
          <dd>{formatCurrency(set.currentLowestPriceEur, intlLocale)}</dd>
        </div>
        <div>
          <dt>{messages.set.discount}</dt>
          <dd>{formatPercentage(set.discountPercentage)}</dd>
        </div>
        <div>
          <dt>{messages.set.eol}</dt>
          <dd>
            {formatEolText(
              set.estimatedEolDate,
              set.estimatedEolWindowMonths,
              intlLocale,
              messages.format.unknown,
              messages.format.monthsShort,
            )}
          </dd>
        </div>
      </dl>

      <div className="mobile-advice">
        <span aria-hidden="true">{set.radarStatus === "koopwaardig" ? "↗" : "◉"}</span>
        <strong>
          {messages.set.advice}: {formatAdvice(set.advice, messages, intlLocale)}
        </strong>
        <span aria-hidden="true">›</span>
      </div>
    </article>
  );
}

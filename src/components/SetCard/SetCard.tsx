import type { LegoSet } from "../../types/lego";
import { useI18n } from "../../i18n/I18nProvider";
import { formatAdvice } from "../../utils/advice";
import { formatCurrency, formatEolText, formatPercentage } from "../../utils/formatters";

type SetCardProps = {
  set: LegoSet;
};

export function SetCard({ set }: SetCardProps) {
  const { intlLocale, messages } = useI18n();

  return (
    <article className={`set-card status-${set.radarStatus}`}>
      <div className="card-visual">
        <div className="score-ring" aria-label={messages.set.investmentScore(set.investmentScore)}>
          <strong>{set.investmentScore}</strong>
          <span>/100</span>
        </div>
        <img src={set.imageUrl} alt={`${set.setNumber} ${set.name}`} />
      </div>

      <div className="set-title-row">
        <div>
          <span className="set-number">{set.setNumber}</span>
          <h3>{set.name}</h3>
        </div>
        <span className={`status-badge ${set.radarStatus}`}>{messages.status.labels[set.radarStatus]}</span>
      </div>

      <dl className="metrics-list">
        <div>
          <dt>{messages.set.setNumber}</dt>
          <dd>{set.setNumber}</dd>
        </div>
        <div>
          <dt>{messages.set.lowestPrice}</dt>
          <dd className="positive">{formatCurrency(set.currentLowestPriceEur, intlLocale)}</dd>
        </div>
        <div>
          <dt>{messages.set.rrp}</dt>
          <dd>{formatCurrency(set.rrpEur, intlLocale)}</dd>
        </div>
        <div>
          <dt>{messages.set.marketValueNew}</dt>
          <dd className="positive">{formatCurrency(set.currentValueNewEur, intlLocale)}</dd>
        </div>
        <div>
          <dt>{messages.set.marketValueUsed}</dt>
          <dd className="positive">{formatCurrency(set.currentValueUsedEur, intlLocale)}</dd>
        </div>
        <div>
          <dt>{messages.set.discount}</dt>
          <dd className="positive">{formatPercentage(set.discountPercentage)}</dd>
        </div>
        <div>
          <dt>{messages.set.eol}</dt>
          <dd className="eol">
            {formatEolText(
              set.estimatedEolDate,
              set.estimatedEolWindowMonths,
              intlLocale,
              messages.format.unknown,
              messages.format.monthsShort,
            )}
          </dd>
        </div>
        <div>
          <dt>{messages.set.score}</dt>
          <dd className="score-value">★ {set.investmentScore}/100</dd>
        </div>
      </dl>

      <div className="advice-bar">
        <span aria-hidden="true">{set.radarStatus === "koopwaardig" ? "↗" : "◉"}</span>
        <strong>
          {messages.set.advice}: {formatAdvice(set.advice, messages, intlLocale)}
        </strong>
      </div>
    </article>
  );
}

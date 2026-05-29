import type { LegoSet } from "../types/lego";
import { formatCurrency, formatEolText, formatPercentage } from "../utils/formatters";

type MobileSetCardProps = {
  set: LegoSet;
};

const statusLabel = {
  koopwaardig: "Koopwaardig",
  volgen: "Volgen",
  wachten: "Wachten",
};

export function MobileSetCard({ set }: MobileSetCardProps) {
  return (
    <article className={`mobile-set-card status-${set.radarStatus}`}>
      <div className="mobile-card-main">
        <img src={set.imageUrl} alt={`${set.setNumber} ${set.name}`} />
        <div className="mobile-score" aria-label={`Investeringsscore ${set.investmentScore} van 100`}>
          <strong>{set.investmentScore}</strong>
          <span>/100</span>
        </div>
        <div className="mobile-set-heading">
          <span>{set.setNumber}</span>
          <h3>{set.name}</h3>
          <em className={`status-badge ${set.radarStatus}`}>{statusLabel[set.radarStatus]}</em>
        </div>
      </div>

      <dl className="mobile-metrics">
        <div>
          <dt>Laagste prijs</dt>
          <dd>{formatCurrency(set.currentLowestPriceEur)}</dd>
        </div>
        <div>
          <dt>Korting</dt>
          <dd>{formatPercentage(set.discountPercentage)}</dd>
        </div>
        <div>
          <dt>EOL</dt>
          <dd>{formatEolText(set.estimatedEolDate, set.estimatedEolWindowMonths)}</dd>
        </div>
      </dl>

      <div className="mobile-advice">
        <span aria-hidden="true">{set.radarStatus === "koopwaardig" ? "↗" : "◉"}</span>
        <strong>Advies: {set.adviceSummary}</strong>
        <span aria-hidden="true">›</span>
      </div>
    </article>
  );
}

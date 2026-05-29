import type { LegoSet } from "../../types/lego";
import { formatCurrency, formatEolText, formatPercentage } from "../../utils/formatters";

type SetCardProps = {
  set: LegoSet;
};

const statusLabel = {
  koopwaardig: "Koopwaardig",
  volgen: "Volgen",
  wachten: "Wachten",
};

export function SetCard({ set }: SetCardProps) {
  return (
    <article className={`set-card status-${set.radarStatus}`}>
      <div className="card-visual">
        <div className="score-ring" aria-label={`Investeringsscore ${set.investmentScore} van 100`}>
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
        <span className={`status-badge ${set.radarStatus}`}>{statusLabel[set.radarStatus]}</span>
      </div>

      <dl className="metrics-list">
        <div>
          <dt>Setnummer</dt>
          <dd>{set.setNumber}</dd>
        </div>
        <div>
          <dt>Laagste prijs</dt>
          <dd className="positive">{formatCurrency(set.currentLowestPriceEur)}</dd>
        </div>
        <div>
          <dt>Adviesprijs</dt>
          <dd>{formatCurrency(set.rrpEur)}</dd>
        </div>
        <div>
          <dt>Marktwaarde nieuw</dt>
          <dd className="positive">{formatCurrency(set.currentValueNewEur)}</dd>
        </div>
        <div>
          <dt>Marktwaarde gebruikt</dt>
          <dd className="positive">{formatCurrency(set.currentValueUsedEur)}</dd>
        </div>
        <div>
          <dt>Korting</dt>
          <dd className="positive">{formatPercentage(set.discountPercentage)}</dd>
        </div>
        <div>
          <dt>EOL</dt>
          <dd className="eol">{formatEolText(set.estimatedEolDate, set.estimatedEolWindowMonths)}</dd>
        </div>
        <div>
          <dt>Score</dt>
          <dd className="score-value">★ {set.investmentScore}/100</dd>
        </div>
      </dl>

      <div className="advice-bar">
        <span aria-hidden="true">{set.radarStatus === "koopwaardig" ? "↗" : "◉"}</span>
        <strong>Advies: {set.adviceSummary}</strong>
      </div>
    </article>
  );
}

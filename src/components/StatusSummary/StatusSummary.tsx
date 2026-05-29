import type { RadarStatus } from "../../types/lego";
import { useI18n } from "../../i18n/I18nProvider";

type StatusSummaryProps = {
  counts: {
    koopwaardig: number;
    volgen: number;
    wachten: number;
  };
  activeStatus: RadarStatus | null;
  onStatusSelect: (status: RadarStatus) => void;
};

export function StatusSummary({ counts, activeStatus, onStatusSelect }: StatusSummaryProps) {
  const { messages } = useI18n();

  return (
    <section className="status-grid" aria-label={messages.status.section}>
      <button
        className={`summary-card summary-buy ${activeStatus === "koopwaardig" ? "active" : ""}`}
        type="button"
        onClick={() => onStatusSelect("koopwaardig")}
        aria-pressed={activeStatus === "koopwaardig"}
      >
        <div className="summary-icon" aria-hidden="true">
          🛒
        </div>
        <div>
          <h2>{messages.status.labels.koopwaardig}</h2>
          <strong>{counts.koopwaardig}</strong>
          <p>{messages.status.descriptions.koopwaardig}</p>
        </div>
      </button>
      <button
        className={`summary-card summary-watch ${activeStatus === "volgen" ? "active" : ""}`}
        type="button"
        onClick={() => onStatusSelect("volgen")}
        aria-pressed={activeStatus === "volgen"}
      >
        <div className="summary-icon" aria-hidden="true">
          ◉
        </div>
        <div>
          <h2>{messages.status.labels.volgen}</h2>
          <strong>{counts.volgen}</strong>
          <p>{messages.status.descriptions.volgen}</p>
        </div>
      </button>
      <button
        className={`summary-card summary-wait ${activeStatus === "wachten" ? "active" : ""}`}
        type="button"
        onClick={() => onStatusSelect("wachten")}
        aria-pressed={activeStatus === "wachten"}
      >
        <div className="summary-icon" aria-hidden="true">
          ⧖
        </div>
        <div>
          <h2>{messages.status.labels.wachten}</h2>
          <strong>{counts.wachten}</strong>
          <p>{messages.status.descriptions.wachten}</p>
        </div>
      </button>
    </section>
  );
}

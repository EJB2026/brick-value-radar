import type { RadarStatus } from "../../types/lego";

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
  return (
    <section className="status-grid" aria-label="Status samenvatting">
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
          <h2>Koopwaardig</h2>
          <strong>{counts.koopwaardig}</strong>
          <p>Klaar om te kopen</p>
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
          <h2>Volgen</h2>
          <strong>{counts.volgen}</strong>
          <p>Houd in de gaten</p>
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
          <h2>Wachten</h2>
          <strong>{counts.wachten}</strong>
          <p>Nog niet interessant</p>
        </div>
      </button>
    </section>
  );
}

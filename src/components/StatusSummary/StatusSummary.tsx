type StatusSummaryProps = {
  counts: {
    koopwaardig: number;
    volgen: number;
    wachten: number;
  };
};

export function StatusSummary({ counts }: StatusSummaryProps) {
  return (
    <section className="status-grid" aria-label="Status samenvatting">
      <article className="summary-card summary-buy">
        <div className="summary-icon" aria-hidden="true">
          🛒
        </div>
        <div>
          <h2>Koopwaardig</h2>
          <strong>{counts.koopwaardig}</strong>
          <p>Klaar om te kopen</p>
        </div>
        <span className="summary-arrow" aria-hidden="true">
          ›
        </span>
      </article>
      <article className="summary-card summary-watch">
        <div className="summary-icon" aria-hidden="true">
          ◉
        </div>
        <div>
          <h2>Volgen</h2>
          <strong>{counts.volgen}</strong>
          <p>Houd in de gaten</p>
        </div>
        <span className="summary-arrow" aria-hidden="true">
          ›
        </span>
      </article>
      <article className="summary-card summary-wait">
        <div className="summary-icon" aria-hidden="true">
          ⧖
        </div>
        <div>
          <h2>Wachten</h2>
          <strong>{counts.wachten}</strong>
          <p>Nog niet interessant</p>
        </div>
        <span className="summary-arrow" aria-hidden="true">
          ›
        </span>
      </article>
    </section>
  );
}

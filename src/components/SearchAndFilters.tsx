export type ActiveFilters = {
  score80: boolean;
  discount20: boolean;
  eol12: boolean;
};

export type SortOption = "score-desc" | "score-asc" | "price-asc" | "discount-desc";

type SearchAndFiltersProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeFilters: ActiveFilters;
  onToggleFilter: (filter: keyof ActiveFilters) => void;
  sortOption: SortOption;
  onSortChange: (value: SortOption) => void;
};

export function SearchAndFilters({
  searchTerm,
  onSearchChange,
  activeFilters,
  onToggleFilter,
}: SearchAndFiltersProps) {
  return (
    <section className="search-section" aria-label="Zoeken en filters">
      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Zoek een setnummer, naam of thema..."
          aria-label="Zoek een setnummer, naam of thema"
        />
      </label>

      <div className="filter-row" aria-label="Filters">
        <button className="filter-chip" type="button" aria-label="Thema filter">
          <span aria-hidden="true">☷</span>
          Thema
          <span className="chip-caret" aria-hidden="true">
            ⌄
          </span>
        </button>
        <button
          className={`filter-chip ${activeFilters.score80 ? "active" : ""}`}
          type="button"
          onClick={() => onToggleFilter("score80")}
          aria-pressed={activeFilters.score80}
        >
          <span className="chip-icon gold" aria-hidden="true">
            ★
          </span>
          Score 80+
        </button>
        <button
          className={`filter-chip ${activeFilters.discount20 ? "active" : ""}`}
          type="button"
          onClick={() => onToggleFilter("discount20")}
          aria-pressed={activeFilters.discount20}
        >
          <span aria-hidden="true">◇</span>
          Korting 20%+
        </button>
        <button
          className={`filter-chip ${activeFilters.eol12 ? "active" : ""}`}
          type="button"
          onClick={() => onToggleFilter("eol12")}
          aria-pressed={activeFilters.eol12}
        >
          <span aria-hidden="true">◷</span>
          EOL &lt; 12 mnd
        </button>
        <button className="filter-chip filters-button" type="button" aria-label="Meer filters">
          <span aria-hidden="true">≡</span>
          Filters
        </button>
      </div>
    </section>
  );
}

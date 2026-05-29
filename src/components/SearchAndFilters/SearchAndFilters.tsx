import type { LegoThemeOption } from "../../types/lego";

export type ActiveFilters = {
  theme: string;
  score80: boolean;
  discount20: boolean;
  eol12: boolean;
};

export type ToggleFilter = Exclude<keyof ActiveFilters, "theme">;

export type SortOption = "score-desc" | "score-asc" | "price-asc" | "discount-desc";

type SearchAndFiltersProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeFilters: ActiveFilters;
  onToggleFilter: (filter: ToggleFilter) => void;
  filtersOpen: boolean;
  onToggleFiltersOpen: () => void;
  themeOptions: LegoThemeOption[];
  onThemeChange: (value: string) => void;
  sortOption: SortOption;
  onSortChange: (value: SortOption) => void;
};

export function SearchAndFilters({
  searchTerm,
  onSearchChange,
  activeFilters,
  onToggleFilter,
  filtersOpen,
  onToggleFiltersOpen,
  themeOptions,
  onThemeChange,
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

      <div className="filter-toolbar">
        <button
          className="filter-chip filters-button"
          type="button"
          onClick={onToggleFiltersOpen}
          aria-expanded={filtersOpen}
          aria-controls="mobile-filters-panel"
          aria-label={filtersOpen ? "Filters verbergen" : "Filters tonen"}
        >
          <span aria-hidden="true">≡</span>
          Filters
        </button>
      </div>

      <div className={`filter-row ${filtersOpen ? "open" : "collapsed"}`} id="mobile-filters-panel" aria-label="Filters">
        <label className={`filter-chip theme-select-chip ${activeFilters.theme !== "all" ? "active" : ""}`}>
          <span aria-hidden="true">☷</span>
          <span>Thema</span>
          <select
            value={activeFilters.theme}
            onChange={(event) => onThemeChange(event.target.value)}
            aria-label="Thema filter"
          >
            {themeOptions.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.label}
              </option>
            ))}
          </select>
        </label>
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
      </div>
    </section>
  );
}

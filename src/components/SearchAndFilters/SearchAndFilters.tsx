import type { LegoThemeOption } from "../../types/lego";
import { useI18n } from "../../i18n/I18nProvider";

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
  themeOptions: LegoThemeOption[];
  onThemeChange: (value: string) => void;
};

type FilterControlsProps = {
  activeFilters: ActiveFilters;
  onToggleFilter: (filter: ToggleFilter) => void;
  filtersOpen: boolean;
  onToggleFiltersOpen: () => void;
};

export function SearchAndTheme({
  searchTerm,
  onSearchChange,
  activeFilters,
  themeOptions,
  onThemeChange,
}: SearchAndFiltersProps) {
  const { messages } = useI18n();

  return (
    <section className="search-section" aria-label={messages.search.section}>
      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={messages.search.placeholder}
          aria-label={messages.search.label}
        />
      </label>

      <div className="theme-row">
        <label className={`filter-chip theme-select-chip ${activeFilters.theme !== "all" ? "active" : ""}`}>
          <span aria-hidden="true">☷</span>
          <span>{messages.search.theme}</span>
          <select
            value={activeFilters.theme}
            onChange={(event) => onThemeChange(event.target.value)}
            aria-label={messages.search.themeFilter}
          >
            {themeOptions.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.id === "all" ? messages.search.allThemes : theme.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}

export function FilterControls({
  activeFilters,
  onToggleFilter,
  filtersOpen,
  onToggleFiltersOpen,
}: FilterControlsProps) {
  const { messages } = useI18n();

  return (
    <section className="search-section filter-controls-section" aria-label={messages.filters.section}>
      <div className="filter-layout">
        <div className="filter-toolbar">
          <button
            className="filter-chip filters-button"
            type="button"
            onClick={onToggleFiltersOpen}
            aria-expanded={filtersOpen}
            aria-controls="mobile-filters-panel"
            aria-label={filtersOpen ? messages.filters.hide : messages.filters.show}
          >
            <span aria-hidden="true">≡</span>
            {messages.filters.label}
          </button>
        </div>

        <div className={`filters-panel ${filtersOpen ? "open" : "collapsed"}`} id="mobile-filters-panel">
          <button
            className={`filter-chip ${activeFilters.score80 ? "active" : ""}`}
            type="button"
            onClick={() => onToggleFilter("score80")}
            aria-pressed={activeFilters.score80}
          >
            <span className="chip-icon gold" aria-hidden="true">
              ★
            </span>
            {messages.filters.score80}
          </button>
          <button
            className={`filter-chip ${activeFilters.discount20 ? "active" : ""}`}
            type="button"
            onClick={() => onToggleFilter("discount20")}
            aria-pressed={activeFilters.discount20}
          >
            <span aria-hidden="true">◇</span>
            {messages.filters.discount20}
          </button>
          <button
            className={`filter-chip ${activeFilters.eol12 ? "active" : ""}`}
            type="button"
            onClick={() => onToggleFilter("eol12")}
            aria-pressed={activeFilters.eol12}
          >
            <span aria-hidden="true">◷</span>
            {messages.filters.eol12}
          </button>
        </div>
      </div>
    </section>
  );
}

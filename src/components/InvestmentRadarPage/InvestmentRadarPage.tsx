import { useMemo, useState } from "react";
import setsData from "../../data/sets.json";
import themesData from "../../data/themes.json";
import type { LegoSet, LegoThemeOption } from "../../types/lego";
import { getRadarStatus } from "../../utils/scoring";
import { Header } from "../Header/Header";
import { MobileSetCard } from "../MobileSetCard/MobileSetCard";
import { SearchAndFilters, type ActiveFilters, type SortOption, type ToggleFilter } from "../SearchAndFilters/SearchAndFilters";
import { SetCard } from "../SetCard/SetCard";
import { StatusSummary } from "../StatusSummary/StatusSummary";

const sets = setsData as LegoSet[];
const themeOptions = themesData as LegoThemeOption[];

const sortLabels: Record<SortOption, string> = {
  "score-desc": "Score hoog naar laag",
  "score-asc": "Score laag naar hoog",
  "price-asc": "Laagste prijs",
  "discount-desc": "Hoogste korting",
};

export function InvestmentRadarPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    theme: "all",
    score80: false,
    discount20: false,
    eol12: false,
  });
  const [sortOption, setSortOption] = useState<SortOption>("score-desc");

  const statusCounts = useMemo(
    () =>
      sets.reduce(
        (counts, set) => {
          const status = set.radarStatus ?? getRadarStatus(set.investmentScore);
          counts[status] += 1;
          return counts;
        },
        { koopwaardig: 0, volgen: 0, wachten: 0 },
      ),
    [],
  );

  const filteredAndSortedSets = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const selectedTheme = themeOptions.find((theme) => theme.id === activeFilters.theme);
    const selectedThemeLabel = selectedTheme?.id === "all" ? undefined : selectedTheme?.label;

    return sets
      .filter((set) => {
        const matchesSearch =
          normalizedSearch.length === 0 ||
          set.setNumber.toLowerCase().includes(normalizedSearch) ||
          set.name.toLowerCase().includes(normalizedSearch) ||
          set.theme.toLowerCase().includes(normalizedSearch);

        const matchesTheme = !selectedThemeLabel || set.theme === selectedThemeLabel;
        const matchesScore = !activeFilters.score80 || set.investmentScore >= 80;
        const matchesDiscount = !activeFilters.discount20 || set.discountPercentage >= 20;
        const matchesEol =
          !activeFilters.eol12 ||
          (typeof set.estimatedEolWindowMonths === "number" && set.estimatedEolWindowMonths < 12);

        return matchesSearch && matchesTheme && matchesScore && matchesDiscount && matchesEol;
      })
      .sort((first, second) => {
        switch (sortOption) {
          case "score-asc":
            return first.investmentScore - second.investmentScore;
          case "price-asc":
            return first.currentLowestPriceEur - second.currentLowestPriceEur;
          case "discount-desc":
            return second.discountPercentage - first.discountPercentage;
          case "score-desc":
          default:
            return second.investmentScore - first.investmentScore;
        }
      });
  }, [activeFilters, searchTerm, sortOption]);

  function toggleFilter(filter: ToggleFilter) {
    setActiveFilters((current) => ({
      ...current,
      [filter]: !current[filter],
    }));
  }

  function setThemeFilter(theme: string) {
    setActiveFilters((current) => ({
      ...current,
      theme,
    }));
  }

  return (
    <div className="app-shell">
      <Header />
      <main className="page-content">
        <SearchAndFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeFilters={activeFilters}
          onToggleFilter={toggleFilter}
          filtersOpen={filtersOpen}
          onToggleFiltersOpen={() => setFiltersOpen((current) => !current)}
          themeOptions={themeOptions}
          onThemeChange={setThemeFilter}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />

        <StatusSummary counts={statusCounts} />

        <section className="opportunity-section" aria-labelledby="top-kansen-title">
          <div className="section-heading">
            <div>
              <h1 id="top-kansen-title">Top kansen</h1>
              <span className="info-dot" aria-label="Gesorteerd op investeringsdata">
                i
              </span>
            </div>
            <label className="sort-select">
              <span>Sorteer</span>
              <select
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value as SortOption)}
                aria-label="Sorteer top kansen"
              >
                {Object.entries(sortLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filteredAndSortedSets.length > 0 ? (
            <>
              <div className="set-grid">
                {filteredAndSortedSets.map((set) => (
                  <SetCard key={set.setNumber} set={set} />
                ))}
              </div>
              <div className="mobile-set-list">
                {filteredAndSortedSets.map((set) => (
                  <MobileSetCard key={set.setNumber} set={set} />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <h2>Geen sets gevonden</h2>
              <p>Pas je zoekterm of filters aan om nieuwe kansen te zien.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <span>Prijzen en data bijgewerkt: 18 mei 2026, 08:45</span>
        <span>Data afkomstig van lokale mockdata</span>
      </footer>
    </div>
  );
}

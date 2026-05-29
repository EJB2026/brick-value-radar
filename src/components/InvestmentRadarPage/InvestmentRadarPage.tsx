import setsData from "../../data/sets.json";
import themesData from "../../data/themes.json";
import type { LegoSet, LegoThemeOption } from "../../types/lego";
import { Header } from "../Header/Header";
import {
  FilterControls,
  SearchAndTheme,
} from "../SearchAndFilters/SearchAndFilters";
import { OpportunitySection } from "./OpportunitySection";
import { StatusSummary } from "../StatusSummary/StatusSummary";
import { useInvestmentRadarControls } from "./useInvestmentRadarControls";
import { useInvestmentRadarData } from "./useInvestmentRadarData";

const sets = setsData as LegoSet[];
const themeOptions = themesData as LegoThemeOption[];

export function InvestmentRadarPage() {
  const {
    searchTerm,
    setSearchTerm,
    filtersOpen,
    activeStatus,
    activeFilters,
    sortOption,
    setSortOption,
    toggleStatusFilter,
    toggleFilter,
    setThemeFilter,
    toggleFiltersOpen,
  } = useInvestmentRadarControls();
  const { opportunityTitle, statusCounts, filteredAndSortedSets } = useInvestmentRadarData({
    sets,
    themeOptions,
    searchTerm,
    activeFilters,
    activeStatus,
    sortOption,
  });

  return (
    <div className="app-shell">
      <Header />
      <main className="page-content">
        <SearchAndTheme
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeFilters={activeFilters}
          themeOptions={themeOptions}
          onThemeChange={setThemeFilter}
        />

        <StatusSummary
          counts={statusCounts}
          activeStatus={activeStatus}
          onStatusSelect={toggleStatusFilter}
        />

        <FilterControls
          activeFilters={activeFilters}
          onToggleFilter={toggleFilter}
          filtersOpen={filtersOpen}
          onToggleFiltersOpen={toggleFiltersOpen}
        />

        <OpportunitySection
          title={opportunityTitle}
          sortOption={sortOption}
          onSortChange={setSortOption}
          sets={filteredAndSortedSets}
        />
      </main>

      <footer className="app-footer">
        <span>Prijzen en data bijgewerkt: 18 mei 2026, 08:45</span>
        <span>Data afkomstig van lokale mockdata</span>
      </footer>
    </div>
  );
}

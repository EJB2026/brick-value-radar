import { useState } from "react";
import type { RadarStatus } from "../../types/lego";
import type {
  ActiveFilters,
  SortOption,
  ToggleFilter,
} from "../SearchAndFilters/SearchAndFilters";

export function useInvestmentRadarControls() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState<RadarStatus | null>(null);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    theme: "all",
    score80: false,
    discount20: false,
    eol12: false,
  });
  const [sortOption, setSortOption] = useState<SortOption>("score-desc");

  function toggleStatusFilter(status: RadarStatus) {
    setActiveStatus((current) => (current === status ? null : status));
  }

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

  function toggleFiltersOpen() {
    setFiltersOpen((current) => !current);
  }

  return {
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
  };
}

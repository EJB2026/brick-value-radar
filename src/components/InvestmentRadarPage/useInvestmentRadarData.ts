import { useMemo } from "react";
import type { RadarStatus, LegoSet, LegoThemeOption } from "../../types/lego";
import { getRadarStatus } from "../../utils/scoring";
import type { ActiveFilters, SortOption } from "../SearchAndFilters/SearchAndFilters";
import { statusSectionTitles } from "./investmentRadarConfig";

type UseInvestmentRadarDataArgs = {
  sets: LegoSet[];
  themeOptions: LegoThemeOption[];
  searchTerm: string;
  activeFilters: ActiveFilters;
  activeStatus: RadarStatus | null;
  sortOption: SortOption;
};

export function useInvestmentRadarData({
  sets,
  themeOptions,
  searchTerm,
  activeFilters,
  activeStatus,
  sortOption,
}: UseInvestmentRadarDataArgs) {
  const opportunityTitle = activeStatus ? statusSectionTitles[activeStatus] : "Radar overzicht";

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
    [sets],
  );

  function matchesSearch(set: LegoSet, normalizedSearch: string) {
    return (
      normalizedSearch.length === 0 ||
      set.setNumber.toLowerCase().includes(normalizedSearch) ||
      set.name.toLowerCase().includes(normalizedSearch) ||
      set.theme.toLowerCase().includes(normalizedSearch)
    );
  }

  function matchesTheme(set: LegoSet, selectedThemeLabel?: string) {
    return !selectedThemeLabel || set.theme === selectedThemeLabel;
  }

  function matchesStatus(set: LegoSet, statusFilter: RadarStatus | null) {
    const setStatus = set.radarStatus ?? getRadarStatus(set.investmentScore);
    return !statusFilter || setStatus === statusFilter;
  }

  function matchesExtraFilters(set: LegoSet, filters: ActiveFilters) {
    const matchesScore = !filters.score80 || set.investmentScore >= 80;
    const matchesDiscount = !filters.discount20 || set.discountPercentage >= 20;
    const matchesEol =
      !filters.eol12 ||
      (typeof set.estimatedEolWindowMonths === "number" && set.estimatedEolWindowMonths < 12);

    return matchesScore && matchesDiscount && matchesEol;
  }

  function sortSets(first: LegoSet, second: LegoSet, currentSortOption: SortOption) {
    switch (currentSortOption) {
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
  }

  const filteredAndSortedSets = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const selectedTheme = themeOptions.find((theme) => theme.id === activeFilters.theme);
    const selectedThemeLabel = selectedTheme?.id === "all" ? undefined : selectedTheme?.label;

    return sets
      .filter((set) => matchesSearch(set, normalizedSearch))
      .filter((set) => matchesTheme(set, selectedThemeLabel))
      .filter((set) => matchesStatus(set, activeStatus))
      .filter((set) => matchesExtraFilters(set, activeFilters))
      .sort((first, second) => sortSets(first, second, sortOption));
  }, [activeFilters, activeStatus, searchTerm, sets, sortOption, themeOptions]);

  return {
    opportunityTitle,
    statusCounts,
    filteredAndSortedSets,
  };
}

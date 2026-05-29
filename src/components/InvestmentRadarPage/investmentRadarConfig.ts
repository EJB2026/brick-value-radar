import type { RadarStatus } from "../../types/lego";
import type { SortOption } from "../SearchAndFilters/SearchAndFilters";

export const sortLabels: Record<SortOption, string> = {
  "score-desc": "Score hoog naar laag",
  "score-asc": "Score laag naar hoog",
  "price-asc": "Laagste prijs",
  "discount-desc": "Hoogste korting",
};

export const statusSectionTitles: Record<RadarStatus, string> = {
  koopwaardig: "Top koopkansen",
  volgen: "Sets om te volgen",
  wachten: "Sets om af te wachten",
};

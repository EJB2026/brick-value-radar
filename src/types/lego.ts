export type RadarStatus = "koopwaardig" | "volgen" | "wachten";

export type RetirementStatus =
  | "available"
  | "retiring-soon"
  | "retired"
  | "unknown";

export type LegoSet = {
  setNumber: string;
  name: string;
  theme: string;
  subtheme?: string;
  yearReleased: number;
  yearRetired?: number | null;
  retirementStatus: RetirementStatus;
  pieces: number;
  imageUrl: string;

  minifigCount?: number;
  exclusiveMinifigCount?: number;

  rrpEur: number;
  currentLowestPriceEur: number;
  currentValueNewEur: number;
  currentValueUsedEur: number;

  discountPercentage: number;
  estimatedEolDate?: string;
  estimatedEolWindowMonths?: number;

  investmentScore: number;
  radarStatus: RadarStatus;
  buyBelowPriceEur?: number;
  adviceSummary: string;

  dataQualityScore?: number;
  lastUpdated: string;
};

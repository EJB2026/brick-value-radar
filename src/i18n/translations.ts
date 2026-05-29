import type { RadarStatus } from "../types/lego";
import type { SortOption } from "../components/SearchAndFilters/SearchAndFilters";

export type Locale = "nl" | "en";

export const localeLabels: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
};

export const intlLocales: Record<Locale, string> = {
  nl: "nl-NL",
  en: "en-GB",
};

export const translations = {
  nl: {
    header: {
      menu: "Menu openen",
      mainNavigation: "Hoofdnavigatie",
      dashboard: "Dashboard",
      sets: "Sets",
      radar: "Radar",
      portfolio: "Portefeuille",
      lightTheme: "Licht thema",
      profile: "Profiel",
      language: "Taal",
      switchLanguage: "Taal wijzigen naar Engels",
    },
    search: {
      section: "Zoeken en filters",
      placeholder: "Zoek een setnummer, naam of thema...",
      label: "Zoek een setnummer, naam of thema",
      theme: "Thema",
      themeFilter: "Thema filter",
      allThemes: "Alle thema's",
    },
    filters: {
      section: "Filters",
      show: "Filters tonen",
      hide: "Filters verbergen",
      label: "Filters",
      score80: "Score 80+",
      discount20: "Korting 20%+",
      eol12: "EOL < 12 mnd",
    },
    status: {
      section: "Status samenvatting",
      labels: {
        koopwaardig: "Koopwaardig",
        volgen: "Volgen",
        wachten: "Wachten",
      } satisfies Record<RadarStatus, string>,
      descriptions: {
        koopwaardig: "Klaar om te kopen",
        volgen: "Houd in de gaten",
        wachten: "Nog niet interessant",
      } satisfies Record<RadarStatus, string>,
    },
    opportunity: {
      titles: {
        overview: "Radar overzicht",
        koopwaardig: "Top koopkansen",
        volgen: "Sets om te volgen",
        wachten: "Sets om af te wachten",
      },
      sortedBy: "Gesorteerd op investeringsdata",
      sort: "Sorteer",
      sortAria: "Sorteer top kansen",
      emptyTitle: "Geen sets gevonden",
      emptyDescription: "Pas je zoekterm of filters aan om nieuwe kansen te zien.",
    },
    sort: {
      "score-desc": "Score hoog naar laag",
      "score-asc": "Score laag naar hoog",
      "price-asc": "Laagste prijs",
      "discount-desc": "Hoogste korting",
    } satisfies Record<SortOption, string>,
    set: {
      investmentScore: (score: number) => `Investeringsscore ${score} van 100`,
      setNumber: "Setnummer",
      lowestPrice: "Laagste prijs",
      rrp: "Adviesprijs",
      marketValueNew: "Marktwaarde nieuw",
      marketValueUsed: "Marktwaarde gebruikt",
      discount: "Korting",
      eol: "EOL",
      score: "Score",
      advice: "Advies",
      adviceText: {
        buyBelow: (amount: string) => `Koop onder ${amount}`,
        waitAndWatch: "Wacht & volg",
        watchPriceDrop: "Volg prijsdaling",
        waitForBetterDiscount: "Wacht op sterkere korting",
        watchMarketValue: "Volg marktwaarde",
        notInterestingYet: "Nog niet interessant",
      },
    },
    format: {
      unknown: "Onbekend",
      monthsShort: "mnd",
    },
    footer: {
      updated: "Prijzen en data bijgewerkt: 18 mei 2026, 08:45",
      source: "Data afkomstig van lokale mockdata",
    },
  },
  en: {
    header: {
      menu: "Open menu",
      mainNavigation: "Main navigation",
      dashboard: "Dashboard",
      sets: "Sets",
      radar: "Radar",
      portfolio: "Portfolio",
      lightTheme: "Light theme",
      profile: "Profile",
      language: "Language",
      switchLanguage: "Switch language to Dutch",
    },
    search: {
      section: "Search and filters",
      placeholder: "Search set number, name, or theme...",
      label: "Search set number, name, or theme",
      theme: "Theme",
      themeFilter: "Theme filter",
      allThemes: "All themes",
    },
    filters: {
      section: "Filters",
      show: "Show filters",
      hide: "Hide filters",
      label: "Filters",
      score80: "Score 80+",
      discount20: "Discount 20%+",
      eol12: "EOL < 12 mo",
    },
    status: {
      section: "Status summary",
      labels: {
        koopwaardig: "Worth buying",
        volgen: "Watch",
        wachten: "Wait",
      } satisfies Record<RadarStatus, string>,
      descriptions: {
        koopwaardig: "Ready to buy",
        volgen: "Keep an eye on",
        wachten: "Not interesting yet",
      } satisfies Record<RadarStatus, string>,
    },
    opportunity: {
      titles: {
        overview: "Radar overview",
        koopwaardig: "Top buying opportunities",
        volgen: "Sets to watch",
        wachten: "Sets to wait on",
      },
      sortedBy: "Sorted by investment data",
      sort: "Sort",
      sortAria: "Sort opportunities",
      emptyTitle: "No sets found",
      emptyDescription: "Adjust your search term or filters to see new opportunities.",
    },
    sort: {
      "score-desc": "Score high to low",
      "score-asc": "Score low to high",
      "price-asc": "Lowest price",
      "discount-desc": "Highest discount",
    } satisfies Record<SortOption, string>,
    set: {
      investmentScore: (score: number) => `Investment score ${score} out of 100`,
      setNumber: "Set number",
      lowestPrice: "Lowest price",
      rrp: "Recommended retail price",
      marketValueNew: "Market value new",
      marketValueUsed: "Market value used",
      discount: "Discount",
      eol: "EOL",
      score: "Score",
      advice: "Advice",
      adviceText: {
        buyBelow: (amount: string) => `Buy below ${amount}`,
        waitAndWatch: "Wait and watch",
        watchPriceDrop: "Watch for price drop",
        waitForBetterDiscount: "Wait for a stronger discount",
        watchMarketValue: "Watch market value",
        notInterestingYet: "Not interesting yet",
      },
    },
    format: {
      unknown: "Unknown",
      monthsShort: "mo",
    },
    footer: {
      updated: "Prices and data updated: 18 May 2026, 08:45",
      source: "Data from local mock data",
    },
  },
} as const;

export type Messages = (typeof translations)[Locale];

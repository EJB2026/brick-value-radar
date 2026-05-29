import { MobileSetCard } from "../MobileSetCard/MobileSetCard";
import { type SortOption } from "../SearchAndFilters/SearchAndFilters";
import { SetCard } from "../SetCard/SetCard";
import type { LegoSet } from "../../types/lego";
import { useI18n } from "../../i18n/I18nProvider";

type OpportunitySectionProps = {
  title: string;
  sortOption: SortOption;
  onSortChange: (value: SortOption) => void;
  sets: LegoSet[];
};

export function OpportunitySection({
  title,
  sortOption,
  onSortChange,
  sets,
}: OpportunitySectionProps) {
  const { messages } = useI18n();

  return (
    <section className="opportunity-section" aria-labelledby="top-kansen-title">
      <div className="section-heading">
        <div>
          <h1 id="top-kansen-title">{title}</h1>
          <span className="info-dot" aria-label={messages.opportunity.sortedBy}>
            i
          </span>
        </div>
        <label className="sort-select">
          <span>{messages.opportunity.sort}</span>
          <select
            value={sortOption}
            onChange={(event) => onSortChange(event.target.value as SortOption)}
            aria-label={messages.opportunity.sortAria}
          >
            {Object.entries(messages.sort).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {sets.length > 0 ? (
        <>
          <div className="set-grid">
            {sets.map((set) => (
              <SetCard key={set.setNumber} set={set} />
            ))}
          </div>
          <div className="mobile-set-list">
            {sets.map((set) => (
              <MobileSetCard key={set.setNumber} set={set} />
            ))}
          </div>
        </>
      ) : (
        <div className="empty-state">
          <h2>{messages.opportunity.emptyTitle}</h2>
          <p>{messages.opportunity.emptyDescription}</p>
        </div>
      )}
    </section>
  );
}

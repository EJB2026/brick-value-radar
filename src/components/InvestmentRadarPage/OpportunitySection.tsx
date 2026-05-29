import { MobileSetCard } from "../MobileSetCard/MobileSetCard";
import { type SortOption } from "../SearchAndFilters/SearchAndFilters";
import { SetCard } from "../SetCard/SetCard";
import type { LegoSet } from "../../types/lego";
import { sortLabels } from "./investmentRadarConfig";

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
  return (
    <section className="opportunity-section" aria-labelledby="top-kansen-title">
      <div className="section-heading">
        <div>
          <h1 id="top-kansen-title">{title}</h1>
          <span className="info-dot" aria-label="Gesorteerd op investeringsdata">
            i
          </span>
        </div>
        <label className="sort-select">
          <span>Sorteer</span>
          <select
            value={sortOption}
            onChange={(event) => onSortChange(event.target.value as SortOption)}
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
          <h2>Geen sets gevonden</h2>
          <p>Pas je zoekterm of filters aan om nieuwe kansen te zien.</p>
        </div>
      )}
    </section>
  );
}

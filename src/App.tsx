import { InvestmentRadarPage } from "./components/InvestmentRadarPage/InvestmentRadarPage";
import { I18nProvider } from "./i18n/I18nProvider";

export default function App() {
  return (
    <I18nProvider>
      <InvestmentRadarPage />
    </I18nProvider>
  );
}

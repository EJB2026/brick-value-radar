import { useI18n } from "../../i18n/I18nProvider";
import { localeLabels, type Locale } from "../../i18n/translations";

function BrickLogo() {
  return (
    <div className="brand-logo" aria-hidden="true">
      <span className="brick-stud stud-one" />
      <span className="brick-stud stud-two" />
      <span className="radar-ring" />
      <span className="radar-dot" />
    </div>
  );
}

export function Header() {
  const { locale, setLocale, messages } = useI18n();

  return (
    <header className="app-header">
      <div className="header-inner">
        <button className="icon-button menu-button" type="button" aria-label={messages.header.menu}>
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <a className="brand" href="/" aria-label="Brick Value Radar home">
          <BrickLogo />
          <span>Brick Value Radar</span>
        </a>

        <nav className="desktop-nav" aria-label={messages.header.mainNavigation}>
          <a className="active" href="#dashboard">
            {messages.header.dashboard}
          </a>
          <a href="#sets">{messages.header.sets}</a>
          <a href="#radar">{messages.header.radar}</a>
          <a href="#portefeuille">{messages.header.portfolio}</a>
        </nav>

        <div className="header-actions">
          <label className="language-select">
            <span className="sr-only">{messages.header.language}</span>
            <select
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              aria-label={messages.header.language}
            >
              {Object.entries(localeLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <button className="icon-button theme-button" type="button" aria-label={messages.header.lightTheme}>
            <span aria-hidden="true">☼</span>
          </button>
        </div>
      </div>
    </header>
  );
}

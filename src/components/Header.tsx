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
  return (
    <header className="app-header">
      <div className="header-inner">
        <button className="icon-button menu-button" type="button" aria-label="Menu openen">
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <a className="brand" href="/" aria-label="Brick Value Radar home">
          <BrickLogo />
          <span>Brick Value Radar</span>
        </a>

        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          <a className="active" href="#dashboard">
            Dashboard
          </a>
          <a href="#sets">Sets</a>
          <a href="#radar">Radar</a>
          <a href="#portefeuille">Portefeuille</a>
        </nav>

        <div className="header-actions">
          <button className="icon-button theme-button" type="button" aria-label="Licht thema">
            <span aria-hidden="true">☼</span>
          </button>
          <button className="profile-button" type="button" aria-label="Profiel">
            <span aria-hidden="true">●</span>
          </button>
        </div>
      </div>
    </header>
  );
}

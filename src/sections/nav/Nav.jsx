/* Nav — fixed floating bar, frosted glass on scroll, mobile dialog. */
function Nav({ onTweaksHint }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="nav-wrap">
      <div className="dev-banner">⚙ versão em desenvolvimento</div>
      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        <a className="brand" href="#top" aria-label="Início">
          <span className="mark">{P.brand.initials}</span>
          <span className="brand-text"><b>{P.brand.name}</b><span>{P.brand.kicker}</span></span>
        </a>
        <div className="nav-links">
          {P.nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </div>
        <a className="nav-cta" href="#contato">Falar comigo</a>
        <button className="nav-cta nav-burger" onClick={() => setOpen(true)} aria-label="Abrir menu" style={{ background: "var(--raised)", color: "var(--text-1)", width: 38, padding: 0, justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
        </button>
      </nav>
      {open && (
        <div role="dialog" aria-label="Menu" onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 80, background: "rgba(2,5,13,0.85)", backdropFilter: "blur(8px)", display: "grid", placeItems: "center", pointerEvents: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "center" }}>
            {[...P.nav, { label: "Contato", href: "#contato" }].map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{ fontFamily: "'Space Grotesk'", fontSize: 26, fontWeight: 600, color: "var(--text-1)" }}>{n.label}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

window.Nav = Nav;

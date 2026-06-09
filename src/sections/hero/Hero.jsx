/* Hero — full-width opener. Ghost text parallax, metrics, CTA stack. Uses ProfilePanel. */
function Hero() {
  const h = P.hero;
  return (
    <header className="hero shell" id="top" data-screen-label="Hero">
      <div className="hero-ghost" aria-hidden="true" data-parallax="0.10">LF</div>
      <div className="hero-grid">
        <div className="hero-left">
          <span className="hero-accent-bar reveal"></span>
          <p className="eyebrow reveal">{h.eyebrow}</p>
          <h1 className="hero-name reveal" style={{ transitionDelay: "60ms" }}>{h.name}</h1>
          <p className="hero-lead reveal" style={{ transitionDelay: "120ms" }}>{h.lead}</p>
          <p className="hero-summary reveal" style={{ transitionDelay: "160ms" }}>{h.summary}</p>
          <div className="hero-chips reveal" style={{ transitionDelay: "200ms" }}>
            {h.chips.map((c) => <span key={c} className="chip dot">{c}</span>)}
          </div>
          <div className="hero-actions reveal" style={{ transitionDelay: "260ms" }}>
            <a className="btn btn-primary" href="#cases">Ver minhas criações <Icon name="arrow" s={16} /></a>
            <a className="btn btn-secondary" href="https://github.com/LGugui" target="_blank" rel="noopener">GitHub <span className="ext">↗</span></a>
            <a className="btn btn-ghost" href="#contato">Falar comigo</a>
          </div>
          <div className="hero-metrics reveal" style={{ transitionDelay: "320ms" }}>
            {h.metrics.map((m) => (
              <div className="metric" key={m.l}>
                <div className="v">{m.v}<small>+</small></div>
                <div className="l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-panel-col reveal" style={{ transitionDelay: "180ms" }}>
          <div data-parallax="-0.03">
            <ProfilePanel />
          </div>
        </div>
      </div>
    </header>
  );
}

window.Hero = Hero;

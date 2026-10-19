/* Section components. Read content from window.PORTFOLIO (P). */
const P = window.PORTFOLIO;

/* ---- tiny Lucide-style line icons for delivery cards ---- */
const Icon = ({ name, s = 20 }) => {
  const common = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>,
    panel: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 9v12M14 13h4M14 16h4" /></>,
    bot: <><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 4v4M9 14h.01M15 14h.01M2 13h2M20 13h2" /></>,
    cube: <><path d="M12 2 3 7v10l9 5 9-5V7z" /><path d="M3 7l9 5 9-5M12 12v10" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
};

const ACCESS_LABEL = { publico: "repo público", interno: "case interno", privado: "case privado" };

/* external? */
const isExt = (href) => /^https?:/.test(href);

/* =================== NAV =================== */
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

/* =================== HERO =================== */
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

/* =================== SectionHead =================== */
function SectionHead({ num, title, sub, meta }) {
  return (
    <div className="section-head">
      <div>
        <div className="section-label reveal">
          <span className="num">{num}</span>
          <h2>{title}</h2>
        </div>
        {sub && <p className="section-sub reveal" style={{ transitionDelay: "40ms" }}>{sub}</p>}
      </div>
      {meta && <span className="section-meta reveal">{meta}</span>}
    </div>
  );
}

/* =================== CASES =================== */
function CaseCTA({ p }) {
  const ext = isExt(p.href);
  const muted = p.access !== "publico";
  return (
    <a className={"case-link" + (muted ? " muted" : "")} href={p.href}
       target={ext ? "_blank" : undefined} rel={ext ? "noopener" : undefined}>
      {p.linkLabel} {ext ? <span aria-hidden="true">↗</span> : <Icon name="arrow" s={15} />}
    </a>
  );
}

function FeaturedCase() {
  const f = P.featured;
  return (
    <article className="featured reveal" data-screen-label="Case destaque">
      <div className="featured-visual">
        <div className="featured-glow"></div>
        <div className="featured-emblem"><ProjectGlyph kind={f.glyph} size={132} /></div>
        <span className="emblem-code">{f.icon}</span>
        <span className="badge" style={{ position: "absolute", top: 16, left: 16, zIndex: 3 }}>destaque</span>
      </div>
      <div className="featured-body">
        <div className="top">
          <span className="featured-cat">{f.category}</span>
          <span className="status ativo"><span className="d"></span>{f.status}</span>
          <span className="access" data-a={f.access}>{ACCESS_LABEL[f.access]}</span>
        </div>
        <h3>{f.name}</h3>
        <p>{f.description}</p>
        <div className="insight-grid">
          <div className="insight"><div className="k">Problema</div><div className="t">{f.problem}</div></div>
          <div className="insight"><div className="k">Resultado</div><div className="t">{f.result}</div></div>
        </div>
        <div className="tag-row">{f.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        <CaseCTA p={f} />
      </div>
    </article>
  );
}

function ProjectCard({ p, i }) {
  return (
    <article className="pcard reveal" style={{ transitionDelay: `${i * 70}ms` }}>
      <div className="pcard-emblem">
        <div className="emblem-disc"><ProjectGlyph kind={p.glyph} size={52} /></div>
        <span className="emblem-code">{p.icon}</span>
      </div>
      <div className="pcard-body">
        <div className="pcard-top">
          <span className="pcard-cat">{p.category}</span>
          <span className={"status " + (p.status === "ativo" ? "ativo" : "concluido")}><span className="d"></span>{p.status}</span>
        </div>
        <h3>{p.name}</h3>
        <p className="desc">{p.description}</p>
        <div className="pr">
          <span className="k">Prob</span><span className="v">{p.problem}</span>
          <span className="k">Result</span><span className="v">{p.result}</span>
        </div>
        <div className="tag-row">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        <div className="pcard-foot">
          <span className="access" data-a={p.access}>{ACCESS_LABEL[p.access]}</span>
          <CaseCTA p={p} />
        </div>
      </div>
    </article>
  );
}

function Cases() {
  const [active, setActive] = React.useState("Todos");
  const list = active === "Todos" ? P.projects : P.projects.filter((p) => p.cats.includes(active));
  return (
    <section className="block shell" id="cases" data-screen-label="Cases e demos">
      <SectionHead num="01." title="Cases e demos"
        sub="Problema, solução, resultado e evidência em leitura rápida — prova antes de texto longo."
        meta={`${P.projects.length + 1} projetos`} />
      <div className="filter-row reveal">
        {P.filters.map((f) => (
          <button key={f} className={"filter" + (active === f ? " active" : "")} onClick={() => setActive(f)}>{f}</button>
        ))}
      </div>
      <FeaturedCase />
      <div className="project-grid">
        {list.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
      </div>
    </section>
  );
}

/* =================== DELIVERY =================== */
function Delivery() {
  const icons = ["layout", "panel", "bot", "cube"];
  return (
    <section className="block shell" id="entregas" data-screen-label="O que eu entrego">
      <SectionHead num="02." title="O que eu entrego"
        sub="Capacidades traduzidas em entregas concretas." meta="02 / entregas" />
      <div className="delivery-grid">
        {P.delivery.map((d, i) => (
          <article className="dcard reveal" key={d.title} style={{ transitionDelay: `${i * 70}ms` }}>
            <span className="dcard-ico"><Icon name={icons[i]} /></span>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
            <div className="tag-row">{d.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =================== SKILLS =================== */
function Skills() {
  return (
    <section className="block shell" id="skills" data-screen-label="Skills e conhecimento">
      <SectionHead num="03." title="Skills e conhecimento"
        sub="Tecnologias que uso em produção — amplitude como validação, não vitrine." meta="03 / skills" />
      <div className="skills-grid">
        {P.skills.map((k, i) => (
          <article className="kcard reveal" key={k.title} style={{ transitionDelay: `${i * 70}ms` }}>
            <h3>{k.title}</h3>
            <p>{k.text}</p>
            <div className="tag-row">{k.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
          </article>
        ))}
      </div>

      {/* Competências & habilidades + complementares — inline, abaixo das skills */}
      <div className="comp-head reveal">
        <span className="num">03.1</span>
        <h3>Competências &amp; habilidades</h3>
        <span className="comp-meta">conhecimento aplicado</span>
      </div>
      <div className="comp-cluster">
        {P.competencias.map((c, i) => (
          <div className="comp-group reveal" key={c.group} style={{ transitionDelay: `${i * 60}ms` }}>
            <span className="comp-label">{c.group}</span>
            <div className="comp-chips">
              {c.items.map((it) => <span key={it} className="comp-chip">{it}</span>)}
            </div>
          </div>
        ))}
        <div className="comp-group comp-extra reveal">
          <span className="comp-label">Complementares</span>
          <div className="comp-chips">
            {P.complementares.map((it) => <span key={it} className="comp-chip ghost">{it}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================== PROCESS =================== */
function Process() {
  return (
    <section className="block shell" id="processo" data-screen-label="Processo">
      <SectionHead num="04." title="Como eu penso"
        sub="O método por trás de cada entrega." meta="04 / processo" />
      <div className="process-grid">
        {P.process.map((s, i) => (
          <article className="scard reveal" key={s.step} style={{ transitionDelay: `${i * 70}ms` }}>
            <span className="step">{s.step}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="ghost-step" aria-hidden="true">{s.step}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =================== ABOUT =================== */
function About() {
  const a = P.about;
  return (
    <section className="block shell" id="sobre" data-screen-label="Sobre">
      <SectionHead num="05." title="Sobre"
        sub="Contexto, foco e o que estou construindo agora." meta="05 / sobre" />
      <div className="about-grid">
        <aside className="about-card reveal">
          <div className="avatar">{P.brand.initials}</div>
          <div className="role">{a.role}</div>
          <div className="loc">{a.loc}</div>
          <div className="about-stats">
            {a.stats.map((s) => <div className="s" key={s.l}><b>{s.v}</b><span>{s.l}</span></div>)}
          </div>
        </aside>
        <div className="about-text reveal" style={{ transitionDelay: "80ms" }}>
          {a.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="about-edu">
            <span className="edu-label">Formação</span>
            {a.education.map((e) => (
              <div className="edu-row" key={e.course}>
                <b>{e.course}</b>
                <span>{e.org}</span>
                <i>{e.note}</i>
              </div>
            ))}
          </div>
          <a className="case-link" href="#contato">Próximos projetos em polimento <Icon name="arrow" s={15} /></a>
        </div>
      </div>
    </section>
  );
}

/* =================== CONTACT =================== */
function Contact() {
  const c = P.contact;
  return (
    <section className="block shell" id="contato" data-screen-label="Contato">
      <div className="contact reveal">
        <div className="contact-glow"></div>
        <p className="eyebrow" style={{ position: "relative" }}>{c.eyebrow}</p>
        <h2>{c.title}</h2>
        <p>{c.text}</p>
        <div className="contact-actions">
          {c.links.map((l) => (
            <a key={l.label} className={"btn btn-" + l.style} href={l.href}
               target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener" : undefined}>
              {l.label}{l.ext && <span className="ext">↗</span>}
            </a>
          ))}
        </div>
        <p className="contact-mail">ou direto: <a href={"mailto:" + c.email}>{c.email}</a>{c.phone && <> · <a href={c.phoneHref}>{c.phone}</a></>}</p>
      </div>
    </section>
  );
}

/* =================== FOOTER =================== */
function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-in">
        <span className="c">© 2026 Luiz Fernando · Next.js + Tailwind + Framer Motion</span>
        <a className="top" href="#top">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Cases, Delivery, Skills, Process, About, Contact, Footer, Icon });

/* Cases — filter row, featured case, project grid. Uses ProjectGlyph. */

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

window.Cases = Cases;

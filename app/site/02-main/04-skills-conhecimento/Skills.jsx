/* Skills — tech clusters + competências grouped chips. */
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

window.Skills = Skills;

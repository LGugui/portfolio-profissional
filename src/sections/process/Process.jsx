/* Process — 3-step cards with ghost step number. */
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

window.Process = Process;

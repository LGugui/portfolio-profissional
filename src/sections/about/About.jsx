/* About — identity card + text + education. */
function About() {
  const a = P.about;
  return (
    <section className="block shell" id="sobre" data-screen-label="Sobre">
      <SectionHead num="05." title="Sobre"
        sub="Contexto, foco e o que estou construindo agora." meta="05 / sobre" />
      <div className="about-grid">
        <aside className="about-card reveal">
          <div className="avatar"><img src="./assets/about-photo.jpg" alt="Luiz Fernando" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'inherit'}} /></div>
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

window.About = About;

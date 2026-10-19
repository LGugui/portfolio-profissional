/* Delivery — 4 service cards with inline icons. */
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

window.Delivery = Delivery;

/* Contact — CTA section with glow effect. */
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

window.Contact = Contact;

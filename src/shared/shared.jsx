/* Shared globals — loaded first. Exports P, ACCESS_LABEL, isExt, Icon, SectionHead to window. */
const P = window.PORTFOLIO;

const ACCESS_LABEL = { publico: "repo público", interno: "case interno", privado: "case privado" };

const isExt = (href) => /^https?:/.test(href);

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

Object.assign(window, { P, ACCESS_LABEL, isExt, Icon, SectionHead });

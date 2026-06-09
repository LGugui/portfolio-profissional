/* ProjectGlyph — compact, centered visual representing each project's
   domain. Drawn in SVG (gold primary, blue support). Subtle motion gated
   by [data-motion="subtle"] and prefers-reduced-motion via CSS. */

function ProjectGlyph({ kind, size = 60 }) {
  const svg = (children, label) => (
    <svg className={"glyph glyph-" + kind} width={size} height={size} viewBox="0 0 60 60"
      fill="none" role="img" aria-label={label}
      strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
  const G = "var(--gold)", B = "var(--blue)", D = "var(--border)";

  switch (kind) {
    case "orbit": // 3D / WebGL — orbiting system
      return svg(<>
        <g className="g-spin" style={{ transformOrigin: "30px 30px" }}>
          <ellipse cx="30" cy="30" rx="22" ry="9" stroke={D} strokeWidth="1.3" transform="rotate(25 30 30)" />
          <ellipse cx="30" cy="30" rx="22" ry="9" stroke={D} strokeWidth="1.3" transform="rotate(-25 30 30)" />
          <circle cx="50" cy="21" r="2.6" fill={G} />
          <circle cx="11" cy="40" r="2.2" fill={B} />
        </g>
        <circle cx="30" cy="30" r="6" fill="none" stroke={G} strokeWidth="1.6" />
        <circle cx="30" cy="30" r="2.4" fill={G} className="g-pulse" />
      </>, "Experiência 3D");

    case "vision": // computer vision — hand landmarks / scan
      return svg(<>
        <path d="M30 46 L16 20 M30 46 L24 16 M30 46 L33 14 M30 46 L41 17 M30 46 L46 22" stroke={D} strokeWidth="1.3" />
        <circle cx="16" cy="20" r="2.4" fill={B} />
        <circle cx="24" cy="16" r="2.4" fill={G} />
        <circle cx="33" cy="14" r="2.4" fill={G} className="g-pulse" />
        <circle cx="41" cy="17" r="2.4" fill={G} />
        <circle cx="46" cy="22" r="2.4" fill={B} />
        <circle cx="30" cy="46" r="3.4" fill="none" stroke={G} strokeWidth="1.6" />
      </>, "Computer vision");

    case "network": // PKM / agents — knowledge graph
      return svg(<>
        <path d="M30 30 L14 16 M30 30 L46 15 M30 30 L15 45 M30 30 L47 43" stroke={D} strokeWidth="1.3" />
        <circle cx="14" cy="16" r="2.6" fill={B} />
        <circle cx="46" cy="15" r="2.6" fill={G} />
        <circle cx="15" cy="45" r="2.6" fill={G} />
        <circle cx="47" cy="43" r="2.6" fill={B} />
        <circle cx="30" cy="30" r="5.5" fill="none" stroke={G} strokeWidth="1.6" />
        <circle cx="30" cy="30" r="2.2" fill={G} className="g-pulse" />
      </>, "Rede de conhecimento");

    case "globe": // OSINT 3D — globe + signal arc
      return svg(<>
        <g className="g-spin-slow" style={{ transformOrigin: "30px 30px" }}>
          <circle cx="30" cy="30" r="19" stroke={D} strokeWidth="1.3" />
          <ellipse cx="30" cy="30" rx="8" ry="19" stroke={D} strokeWidth="1.1" />
          <line x1="11" y1="30" x2="49" y2="30" stroke={D} strokeWidth="1.1" />
          <ellipse cx="30" cy="30" rx="19" ry="9" stroke={D} strokeWidth="1.1" />
        </g>
        <path d="M22 18 Q40 6 46 22" stroke={B} strokeWidth="1.5" fill="none" />
        <circle cx="22" cy="18" r="2.4" fill={B} />
        <circle cx="46" cy="22" r="2.8" fill={G} className="g-pulse" />
      </>, "Globo OSINT");

    case "funnel": // CRM — pipeline funnel
      return svg(<>
        <rect x="12" y="15" width="36" height="6" rx="3" stroke={G} strokeWidth="1.5" />
        <rect x="18" y="27" width="24" height="6" rx="3" stroke={D} strokeWidth="1.5" />
        <rect x="24" y="39" width="12" height="6" rx="3" stroke={B} strokeWidth="1.5" />
        <circle cx="30" cy="52" r="2.6" fill={G} className="g-pulse" />
        <path d="M30 45 L30 49" stroke={D} strokeWidth="1.3" />
      </>, "Funil CRM");

    case "core": // AI local — processing core
    default:
      return svg(<>
        <circle cx="30" cy="30" r="18" stroke={D} strokeWidth="1.2" className="g-ring" />
        <circle cx="30" cy="30" r="11" stroke={D} strokeWidth="1.2" />
        <g className="g-spin" style={{ transformOrigin: "30px 30px" }}>
          <circle cx="48" cy="30" r="2.2" fill={B} />
          <circle cx="12" cy="30" r="2.2" fill={G} />
        </g>
        <path d="M30 24 L31.6 28.4 L36 30 L31.6 31.6 L30 36 L28.4 31.6 L24 30 L28.4 28.4 Z" fill={G} className="g-pulse" />
      </>, "Núcleo de IA");
  }
}

window.ProjectGlyph = ProjectGlyph;

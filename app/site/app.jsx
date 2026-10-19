/* App shell: loading screen, scroll-reveal, parallax, tweaks, composition. */
const { useState, useEffect, useRef } = React;

/* ---------------- Loading screen ---------------- */
function Loader({ hide, onDone }) {
  const [pct, setPct] = useState(0);
  const L = P.loading;
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setPct(100); const id = setTimeout(onDone, 150); return () => clearTimeout(id); }
    let v = 0, done = false;
    const id = setInterval(() => {
      v = Math.min(100, v + 7);
      setPct(v);
      if (v >= 100 && !done) { done = true; clearInterval(id); setTimeout(onDone, 280); }
    }, 110);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="loader" aria-hidden={hide}
      style={{ opacity: hide ? 0 : 1, visibility: hide ? "hidden" : "visible", pointerEvents: hide ? "none" : "auto" }}>
      <div className="loader-inner">
        <div className="loader-mark">{P.brand.initials}</div>
        <p className="loader-label">{L.label}</p>
        <h2 className="loader-title">{L.title}</h2>
        <div className="loader-track"><div className="loader-bar" style={{ width: pct + "%" }}></div></div>
        <div className="loader-pct">
          <span>{L.description}</span>
          <span>{String(pct).padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- App ---------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "duo",
  "density": "regular",
  "hero": "center",
  "motion": "lively"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [ready, setReady] = useState(false);

  // apply tweaks as root data-attrs
  useEffect(() => {
    const r = document.documentElement;
    r.setAttribute("data-accent", t.accent);
    r.setAttribute("data-density", t.density);
    r.setAttribute("data-hero", t.hero);
    r.setAttribute("data-motion", t.motion);
  }, [t.accent, t.density, t.hero, t.motion]);

  // hard fallback: never let the loader trap the page
  useEffect(() => {
    const id = setTimeout(() => setReady(true), 2100);
    return () => clearTimeout(id);
  }, []);

  // scroll reveal — start once the page is ready (loader gone)
  useEffect(() => {
    if (!ready) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll(".reveal");
    if (reduce) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    els.forEach((e) => io.observe(e));
    // safety: anything still hidden after 1.2s (e.g. tall first paint) gets revealed
    const sweep = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((e) => {
        const r = e.getBoundingClientRect();
        if (r.top < window.innerHeight) e.classList.add("in");
      });
    }, 1200);
    return () => { io.disconnect(); clearTimeout(sweep); };
  }, [ready]);

  // parallax (subtle, respects reduced motion + motion tweak)
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || t.motion === "subtle" || !ready) {
      document.querySelectorAll("[data-parallax]").forEach((e) => (e.style.transform = ""));
      return;
    }
    let raf = null;
    const nodes = Array.from(document.querySelectorAll("[data-parallax]"));
    const apply = () => {
      const y = window.scrollY;
      nodes.forEach((n) => {
        const f = parseFloat(n.getAttribute("data-parallax")) || 0;
        n.style.transform = `translate3d(0, ${(y * f).toFixed(1)}px, 0)`;
      });
      raf = null;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [t.motion, ready]);

  return (
    <React.Fragment>
      <Loader hide={ready} onDone={() => setReady(true)} />
      <div className="atmo" aria-hidden="true"></div>
      <div className="app">
        <Nav />
        <main>
          <Hero motionLevel={t.motion} />
          <Cases />
          <Delivery />
          <Skills />
          <Process />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>

      <TweaksPanel>
        <TweakSection label="Identidade visual" />
        <TweakRadio label="Acento" value={t.accent}
          options={[{ value: "gold", label: "Dourado" }, { value: "duo", label: "Dourado + azul" }]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Layout" />
        <TweakRadio label="Hero" value={t.hero}
          options={[{ value: "left", label: "Esquerda" }, { value: "center", label: "Centro" }]}
          onChange={(v) => setTweak("hero", v)} />
        <TweakRadio label="Densidade dos cards" value={t.density}
          options={[{ value: "compact", label: "Compacta" }, { value: "regular", label: "Padrão" }, { value: "comfy", label: "Ampla" }]}
          onChange={(v) => setTweak("density", v)} />
        <TweakSection label="Movimento" />
        <TweakRadio label="Motion" value={t.motion}
          options={[{ value: "subtle", label: "Sutil" }, { value: "lively", label: "Vivo" }]}
          onChange={(v) => setTweak("motion", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

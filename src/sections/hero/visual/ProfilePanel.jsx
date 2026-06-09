/* ProfilePanel — the hero's technical frame, now holding the user's photo.
   Keeps the "product panel" identity (chrome, live dot, corner ticks,
   vignette + scanline) but the centerpiece is a portrait image-slot.
   Markup matches the .profile-frame / .pf-* styles in sections.css. */

function ProfilePanel() {
  return (
    <div className="profile-panel">
      <div className="profile-frame">
        <div className="pf-head">
          <span className="dots"><i></i><i></i><i></i></span>
          <span className="ttl">perfil // luiz_fernando</span>
          <span className="live">online</span>
        </div>

        <div className="pf-photo">
          <image-slot id="hero-photo" placeholder="Arraste sua foto aqui" shape="rect" radius="0" src="./assets/hero-photo.jpg"></image-slot>
          <span className="pf-vignette" aria-hidden="true"></span>
          <span className="pf-scan" aria-hidden="true"></span>
        </div>

        <div className="pf-foot">
          <div className="pf-id">
            <b>Luiz Fernando</b>
            <span>builder · pt-BR / EN</span>
          </div>
          <span className="status ativo"><span className="d"></span>disponível</span>
        </div>

        <span className="pf-corner tl" aria-hidden="true"></span>
        <span className="pf-corner tr" aria-hidden="true"></span>
        <span className="pf-corner bl" aria-hidden="true"></span>
        <span className="pf-corner br" aria-hidden="true"></span>
      </div>
    </div>
  );
}

window.ProfilePanel = ProfilePanel;

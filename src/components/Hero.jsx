function ProofCard({ label, value, detail, className = '' }) {
  return (
    <div className={`proof-card ${className}`}>
      <span className="proof-card__label">{label}</span>
      <strong>{value}</strong>
      <span className="proof-card__detail">{detail}</span>
    </div>
  )
}

function WordlessPreview() {
  return (
    <div className="hero-preview hero-preview--wordless">
      <div className="preview-topline"><span>wordless / support</span><span>● live prototype</span></div>
      <div className="preview-message"><span className="muted-dot" /> order... wrong... <span className="cursor-dot" /></div>
      <div className="preview-result">
        <span className="preview-kicker">possible issue</span>
        <strong>Duplicate charge</strong>
        <span>We found a likely match in your recent activity.</span>
        <span className="preview-mock-button">Confirm issue <span>↗</span></span>
      </div>
      <div className="preview-rail"><span>context retrieval</span><span>semantic match</span><span>one tap</span></div>
    </div>
  )
}

function SystemMap() {
  return (
    <aside className="hero-system-map" aria-label="A preview of Avinash's product work">
      <div className="hero-system-map__grid" />
      <div className="hero-system-map__caption">selected systems / 2026</div>
      <WordlessPreview />
      <div className="hero-preview hero-preview--sepsis">
        <div className="preview-topline"><span>sepsis vitals</span><span>research / synthetic</span></div>
        <div className="vitals-row"><span><i /> HR <b>112</b></span><span><i /> RR <b>24</b></span><span><i /> SpO₂ <b>91%</b></span></div>
        <div className="signal-line"><span>vitals-only signal</span><strong>0.858 AUROC</strong></div>
        <div className="signal-bars"><span /><span /><span /><span /><span /><span /><span /></div>
      </div>
      <div className="system-connector" aria-hidden="true"><span /> <b>problem → system → proof</b> <span /></div>
    </aside>
  )
}

export default function Hero() {
  return (
    <header id="hero" className="hero-section">
      <div className="hero-inner page-wrap">
        <div className="hero-copy">
          <p className="eyebrow hero-line">AVINASH AMANCHI <span>·</span> BUILDER / RESEARCHER</p>
          <h1 className="hero-line">I build systems that move <em>beyond the prototype.</em></h1>
          <p className="hero-summary hero-line">
            AI, accessibility, healthcare, and applied systems — built around real constraints and often shaped by real users.
          </p>
          <div className="hero-actions hero-line">
            <a href="#projects" className="button button--primary">View the work <span>↓</span></a>
            <a href="/avinash-amanchi-resume.pdf" target="_blank" rel="noopener noreferrer" className="button button--quiet">Resume <span>↗</span></a>
          </div>
          <div className="proof-grid hero-line">
            <ProofCard label="recognition" value="3rd place" detail="OpenAI × Start2 × Zendesk" />
            <ProofCard label="product" value="100+" detail="EAA customers served" />
            <ProofCard label="research" value="National lab" detail="Berkeley Lab experience" />
          </div>
        </div>
        <SystemMap />
      </div>
      <div className="hero-footer page-wrap"><span>scroll to explore</span><span className="hero-footer__line" /></div>
    </header>
  )
}

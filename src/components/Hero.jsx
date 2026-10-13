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
      <div className="preview-topline"><span>wordless / support</span><span>● hackathon prototype</span></div>
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

function FieldCraftPreview() {
  return (
    <div className="hero-preview hero-preview--fieldcraft">
      <div className="preview-topline"><span>fieldcraft / invoice</span><span>● six-week pilot</span></div>
      <div className="fieldcraft-voice-note">“Toyota Camry interior detail, $180…”</div>
      <div className="fieldcraft-draft">
        <span>REVIEWABLE DRAFT</span>
        <strong>Interior detail <b>$180.00</b></strong>
      </div>
      <div className="fieldcraft-preview-footer"><span>ON-DEVICE SPEECH · OFFLINE-FIRST</span><strong>~08 → ~02 min</strong></div>
    </div>
  )
}

function SystemMap() {
  return (
    <aside className="hero-system-map" aria-label="A preview of Avinash's product work">
      <div className="hero-system-map__grid" />
      <div className="hero-system-map__caption">selected systems / 2026</div>
      <WordlessPreview />
      <FieldCraftPreview />
      <div className="system-connector" aria-hidden="true"><span /> <b>problem → system → proof</b> <span /></div>
    </aside>
  )
}

export default function Hero() {
  return (
    <header id="hero" className="hero-section">
      <div className="hero-inner page-wrap">
        <div className="hero-copy">
          <p className="eyebrow hero-line">AVINASH AMANCHI <span>·</span> PRODUCT / SOFTWARE ENGINEERING</p>
          <h1 className="hero-line">I build software for the work people <em>actually do.</em></h1>
          <p className="hero-summary hero-line">
            User-facing software and applied AI across accessibility, healthcare research, and field operations.
          </p>
          <div className="hero-actions hero-line">
            <a href="#projects" className="button button--primary">View selected work <span>↓</span></a>
            <a href="/avinash-amanchi-resume.pdf" target="_blank" rel="noopener noreferrer" className="button button--quiet">Resume <span>↗</span></a>
          </div>
          <div className="proof-grid hero-line">
            <ProofCard label="pilot" value="12 businesses" detail="Six weeks · 100+ jobs/invoices" />
            <ProofCard label="recognition" value="3rd place" detail="Hanwha AI Center · hackathon" />
            <ProofCard label="product" value="100+ clients" detail="EAA · four cities" />
          </div>
        </div>
        <SystemMap />
      </div>
      <div className="hero-footer page-wrap"><span>scroll to explore</span><span className="hero-footer__line" /></div>
    </header>
  )
}

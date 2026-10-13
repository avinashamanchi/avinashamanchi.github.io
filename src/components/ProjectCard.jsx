import { useEffect, useRef } from 'react'

function WordlessArt() {
  return <div className="project-art project-art--wordless">
    <div className="art-grid" />
    <div className="art-label">support request / 09:42</div>
    <img className="art-photo" src="/wordless-team.jpg" alt="Avinash Amanchi and his Wordless teammates holding their Third Place certificate" loading="lazy" decoding="async" />
    <div className="art-fragment">order…<br />wrong…</div>
    <div className="art-arrow">→</div>
    <div className="art-match"><span>LIKELY MATCH</span><strong>Duplicate charge</strong><small>one-tap confirmation</small></div>
    <div className="art-stamp">3RD<br /><small>PLACE</small></div>
  </div>
}

function FieldCraftArt() {
  return <div className="project-art project-art--fieldcraft">
    <div className="art-label">Illustrative flow · synthetic example</div>
    <div className="art-wave"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
    <p className="art-quote">“Toyota Camry interior detail, $180…”</p>
    <div className="art-arrow">↓</div>
    <div className="art-invoice"><div><span>INVOICE / 024</span><strong>Interior detail</strong></div><b>$180.00</b></div>
    <div className="art-time"><strong>~08</strong> min <span>→</span> <strong>~02</strong> min</div>
  </div>
}

function ProjectArt({ project }) {
  if (project.visual === 'wordless') return <WordlessArt />
  if (project.visual === 'fieldcraft') return <FieldCraftArt />
  return <div className="project-art project-art--sepsis">
    <img src={project.image} alt="Sepsis Vitals synthetic development interface preview" loading="lazy" decoding="async" />
    <div className="sepsis-overlay"><span>full-feature model</span><strong>0.9158</strong><small>synthetic test AUROC</small></div>
  </div>
}

function FieldCraftArchitecture() {
  return <figure className="project-architecture">
    <figcaption>FieldCraft voice-to-invoice flow <span>Architecture · no client data</span></figcaption>
    <ol className="project-architecture__steps">
      <li><strong>01 / CAPTURE</strong><h4>AVAudioEngine</h4><p>Microphone audio stays on device.</p></li>
      <li><strong>02 / TRANSCRIBE</strong><h4>Apple Speech</h4><p>On-device speech recognition turns audio into text.</p></li>
      <li><strong>03 / AFTER CONSENT</strong><h4>Edge Function</h4><p>Llama 3.3 extracts structured invoice fields.</p></li>
      <li><strong>04 / REVIEW</strong><h4>Validate + edit</h4><p>Zod and app schema validate the draft; each field remains editable.</p></li>
      <li><strong>05 / SAVE LOCALLY</strong><h4>SQLite + outbox</h4><p>Invoice, job, and client save together on device.</p></li>
      <li><strong>06 / WHEN ONLINE</strong><h4>Secure sync</h4><p>Outbox syncs to Supabase / Postgres.</p></li>
    </ol>
    <p className="project-architecture__fallback"><strong>Local fallback</strong> Typed job notes can extract basic client, hours, and material-price details without calling an AI service.</p>
    <p className="project-architecture__note">Illustrative architecture; no real customer, invoice, transcript, or audio data appears here.</p>
  </figure>
}

export default function ProjectCard({ project, index }) {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.12 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return <article ref={ref} className={`featured-project reveal ${index % 2 ? 'featured-project--reverse' : ''}`}>
    <div className="featured-project__art"><ProjectArt project={project} /></div>
    <div className="featured-project__copy">
      <p className="eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <div className="project-facts">
        {project.contribution && <div><span>My role</span><p>{project.contribution}</p></div>}
        <div><span>Problem</span><p>{project.problem}</p></div>
        <div><span>Built</span><p>{project.built}</p></div>
      </div>
      <div className="project-result">
        <span>Outcome</span>
        <strong>{project.result}</strong>
        {project.resultContext && <p className="project-result__context">{project.resultContext}</p>}
        {project.note && <p className="project-result__context">{project.note}</p>}
      </div>
      <div className="project-bottom">
        <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-links">
          {project.links.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer">View demo <span>↗</span></a>}
          {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer">View live project <span>↗</span></a>}
          {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">View code <span>↗</span></a>}
          {project.links.evaluationReport && <a href={project.links.evaluationReport} target="_blank" rel="noopener noreferrer">Evaluation report · June 20, 2026 <span>↗</span></a>}
          {project.links.article && <a href={project.links.article} target="_blank" rel="noopener noreferrer">Read the Patch story <span>↗</span></a>}
        </div>
      </div>
      <details className="project-details">
        <summary>Open case study <span>+</span></summary>
        <div className="project-details__body">
          {project.id === 'fieldcraft' && <FieldCraftArchitecture />}
          <div><span>Constraints</span><p>{project.constraints}</p></div>
          <div><span>Iteration</span><p>{project.iteration}</p></div>
          <div><span>Current limit</span><p>{project.limitation}</p></div>
          {project.links.article && <p className="project-note">Recognition and team photo reported by <a href={project.links.article} target="_blank" rel="noopener noreferrer">Dublin, CA Patch</a>.</p>}
        </div>
      </details>
    </div>
  </article>
}

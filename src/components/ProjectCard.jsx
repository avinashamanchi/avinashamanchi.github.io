import { useEffect, useRef } from 'react'

function WordlessArt() {
  return <div className="project-art project-art--wordless">
    <div className="art-grid" />
    <div className="art-label">support request / 09:42</div>
    <img className="art-photo" src="/wordless-team.jpg" alt="Avinash Amanchi and his Wordless teammates holding their Third Place certificate" />
    <div className="art-fragment">order…<br />wrong…</div>
    <div className="art-arrow">→</div>
    <div className="art-match"><span>LIKELY MATCH</span><strong>Duplicate charge</strong><small>one-tap confirmation</small></div>
    <div className="art-stamp">3RD<br /><small>PLACE</small></div>
  </div>
}

function FieldCraftArt() {
  return <div className="project-art project-art--fieldcraft">
    <div className="art-label">fieldcraft / job capture</div>
    <div className="art-wave"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
    <p className="art-quote">“Toyota Camry interior detail, $180…”</p>
    <div className="art-arrow">↓</div>
    <div className="art-invoice"><div><span>INVOICE / 024</span><strong>Interior detail</strong></div><b>$180.00</b></div>
    <div className="art-time"><strong>08</strong> min <span>→</span> <strong>02</strong> min</div>
  </div>
}

function ProjectArt({ project }) {
  if (project.visual === 'wordless') return <WordlessArt />
  if (project.visual === 'fieldcraft') return <FieldCraftArt />
  return <div className="project-art project-art--sepsis">
    <img src={project.image} alt="Sepsis Vitals interface preview" />
    <div className="sepsis-overlay"><span>vitals-only</span><strong>0.858</strong><small>AUROC</small></div>
  </div>
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
        <div><span>Problem</span><p>{project.problem}</p></div>
        <div><span>Built</span><p>{project.built}</p></div>
      </div>
      <div className="project-result"><span>Outcome</span><strong>{project.result}</strong></div>
      {project.comparison && <div className="research-comparison" aria-label="Sepsis Vitals model comparison">
        <div><span>full feature model</span><strong>{project.comparison.full}</strong></div>
        <b>remove labs ↓</b>
        <div><span>vitals only</span><strong>{project.comparison.vitals}</strong></div>
        <div className="comparison-delta"><span>difference</span><strong>{project.comparison.delta}</strong></div>
      </div>}
      <div className="project-bottom">
        <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-links">
          {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">View code <span>↗</span></a>}
          {project.links.article && <a href={project.links.article} target="_blank" rel="noopener noreferrer">Read the Patch story <span>↗</span></a>}
        </div>
      </div>
      <details className="project-details">
        <summary>Open case study <span>+</span></summary>
        <div className="project-details__body">
          <div><span>Constraints</span><p>{project.constraints}</p></div>
          <div><span>Iteration</span><p>{project.iteration}</p></div>
          <div><span>Current limit</span><p>{project.limitation}</p></div>
          {project.links.article && <p className="project-note">Recognition and team photo reported by <a href={project.links.article} target="_blank" rel="noopener noreferrer">Dublin, CA Patch</a>.</p>}
        </div>
      </details>
      {project.note && <p className="project-note">{project.note}</p>}
    </div>
  </article>
}

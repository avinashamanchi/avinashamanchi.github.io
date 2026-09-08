import { impactItems } from '../data/projects'
import useReveal from '../hooks/useReveal'

const capabilities = [
  ['Build', 'Python · JavaScript / TypeScript · React · FastAPI · SQL'],
  ['Ship', 'Git · APIs · Docker · GitHub Pages · Render'],
  ['Think', 'AI / ML integration · NLP · data analysis · user research'],
]

export default function Skills() {
  const headingRef = useReveal()
  const impactRef = useReveal()
  const toolkitRef = useReveal()

  return <section id="impact" className="impact-section section-space">
    <div className="page-wrap">
      <div ref={headingRef} className="impact-heading reveal">
        <p className="eyebrow">SELECTED IMPACT</p>
        <h2>Proof, in the places<br /><em>it actually counts.</em></h2>
      </div>
      <div ref={impactRef} className="impact-grid reveal-stagger">
        {impactItems.map((item) => <div className="impact-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </div>
      <div ref={toolkitRef} className="capabilities reveal">
        <p className="eyebrow">THE TOOLKIT</p>
        <div className="capabilities-grid">
          {capabilities.map(([title, items]) => <div key={title} className="capability"><span>{title}</span><p>{items}</p></div>)}
        </div>
      </div>
    </div>
  </section>
}

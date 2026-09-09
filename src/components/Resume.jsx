import useReveal from '../hooks/useReveal'

const experience = [
  { year: '2025—26', role: 'Co-Founder & Operations Manager', org: 'EAA Detailing', detail: 'Built the booking and digital acquisition systems behind 100+ customers across four cities.' },
  { year: '2024—26', role: 'Co-President', org: 'Computer Science Honors Society', detail: 'Co-led growth from 12 to 25 members in four months and organized weekly projects and three hackathons.' },
  { year: '2023', role: 'Research Intern', org: 'Lawrence Berkeley National Laboratory', detail: 'Processed root and leaf measurement data for a plant-growth study using Python and reproducible analysis workflows.' },
]

function Reveal({ children, className = '' }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export default function Resume() {
  return <section id="resume" className="resume-section section-space">
    <div className="page-wrap">
      <Reveal className="section-intro">
        <div><p className="eyebrow">EXPERIENCE / EDUCATION</p><h2>A timeline, not<br /><em>another résumé dump.</em></h2></div>
        <a href="/avinash-amanchi-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-link">View full résumé <span>↗</span></a>
      </Reveal>
      <div className="timeline">
        {experience.map((item) => <Reveal className="timeline-row" key={item.org}>
          <span className="timeline-year">{item.year}</span>
          <div className="timeline-copy"><h3>{item.role}</h3><p>{item.org}</p><span>{item.detail}</span></div>
        </Reveal>)}
      </div>
      <Reveal className="education-note"><span className="eyebrow">EDUCATION</span><p>Emerald High School · Dublin, California</p><span>Computer science, data structures, web development, and honors mathematics.</span></Reveal>
    </div>
  </section>
}

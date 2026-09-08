const experience = [
  { year: '2023', role: 'Research intern', org: 'Lawrence Berkeley National Laboratory', detail: 'Python scripts, scientific computing, and reproducible analysis.' },
  { year: '2024—26', role: 'President', org: 'Computer Science Honors Society', detail: 'Workshops, hackathons, mentorship, and technical community.' },
  { year: '2025—26', role: 'Co-founder / lead developer', org: 'EAA Detailing', detail: 'Digital infrastructure for 100+ customers across 4 cities.' },
]

export default function Resume() {
  return <section id="resume" className="resume-section section-space">
    <div className="page-wrap">
      <div className="section-intro reveal">
        <div><p className="eyebrow">EXPERIENCE / EDUCATION</p><h2>A timeline, not<br /><em>another résumé dump.</em></h2></div>
        <a href="/avinash-amanchi-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-link">View full résumé <span>↗</span></a>
      </div>
      <div className="timeline">
        {experience.map((item) => <div className="timeline-row reveal" key={item.org}>
          <span className="timeline-year">{item.year}</span>
          <div className="timeline-copy"><h3>{item.role}</h3><p>{item.org}</p><span>{item.detail}</span></div>
        </div>)}
      </div>
      <div className="education-note reveal"><span className="eyebrow">EDUCATION</span><p>Emerald High School · Dublin, California</p><span>Computer science, data structures, web development, and honors mathematics.</span></div>
    </div>
  </section>
}

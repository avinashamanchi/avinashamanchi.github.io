import { useEffect, useRef } from 'react'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend & UI',
    skills: ['JavaScript', 'React', 'Vite', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Backend & Data',
    skills: ['Python', 'Java', 'REST APIs', 'API Integrations', 'Data Visualization'],
  },
  {
    title: 'DevOps & Tooling',
    skills: ['Git / GitHub', 'Bash / Shell', 'Web Deployment', 'GitHub Pages', 'Render'],
  },
  {
    title: 'AI & Analytics',
    skills: ['AI / ML Tools', 'NLP', 'LLM Integration', 'ATS Analysis', 'Prompt Engineering'],
  },
]

export default function Skills() {
  const headerRef = useRef()
  const gridRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-10 bg-ash dark:bg-dark-surface">
      <div className="max-w-[1383px] mx-auto">
        <div ref={headerRef} className="reveal mb-14">
          <p className="font-body text-electric-blue text-[14px] font-medium mb-4">
            skills
          </p>
          <h2 className="font-display text-carbon dark:text-white text-[28px] md:text-[32px] font-medium leading-[1.2]">
            Technologies I work with.
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 reveal-stagger">
          {SKILL_CATEGORIES.map(({ title, skills }) => (
            <div key={title}>
              <h3 className="font-display text-carbon dark:text-white text-[16px] font-medium mb-5">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag font-body text-[13px] text-graphite dark:text-dark-text-secondary font-normal bg-white dark:bg-carbon px-3 py-1.5 rounded-tesla cursor-default transition-colors duration-tesla hover:bg-carbon hover:text-white dark:hover:bg-white dark:hover:text-carbon"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

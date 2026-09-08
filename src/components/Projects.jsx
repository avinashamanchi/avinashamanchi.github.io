import { featuredProjects, otherProjects } from '../data/projects'
import useReveal from '../hooks/useReveal'
import ProjectCard from './ProjectCard'

function Reveal({ children, className = '' }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function SmallProject({ project }) {
  return (
    <article className="small-project">
      <div className="small-project__image">
        <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
      </div>
      <div className="small-project__body">
        <div className="small-project__topline"><span>{project.stack}</span><span>↗</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="small-project__links">
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live <span>↗</span></a>}
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Code <span>↗</span></a>}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section section-space">
      <div className="page-wrap">
        <Reveal className="section-intro">
          <div>
            <p className="eyebrow">SELECTED WORK / 2023—26</p>
            <h2>Ideas are cheap.<br /><em>Evidence is the work.</em></h2>
          </div>
          <p className="section-intro__aside">Three projects where the constraint mattered as much as the code.</p>
        </Reveal>

        <div className="featured-list">
          {featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>

        <div className="other-work">
          <Reveal className="other-work__heading">
            <p className="eyebrow">MORE THINGS I’VE BUILT</p>
            <p>Different problems. Same habit: ship, listen, refine.</p>
          </Reveal>
          <div className="small-project-grid">
            {otherProjects.map((project) => <SmallProject key={project.id} project={project} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import GitHubMetrics from './GitHubMetrics'
import MicroDemo from './MicroDemo'

export default function ProjectCard({ project }) {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <article ref={ref} className="project-card reveal rounded-[12px] p-8 md:p-10 transition-colors duration-tesla hover:bg-ash dark:hover:bg-dark-surface">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <span className="font-body text-electric-blue text-[12px] font-medium uppercase tracking-[0.08em]">
            {project.category}
          </span>
          <h3 className="font-display text-carbon dark:text-white text-[22px] md:text-[24px] font-medium leading-[1.25] mt-2">
            {project.title}
          </h3>
        </div>
        <div className="lg:w-2/3">
          <div className="mb-6">
            <h4 className="font-body text-carbon dark:text-white text-[13px] font-medium uppercase tracking-[0.06em] mb-2">
              Context &amp; Problem
            </h4>
            <p className="font-body text-graphite dark:text-dark-text-secondary text-[15px] leading-[1.7]">
              {project.context}
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-body text-carbon dark:text-white text-[13px] font-medium uppercase tracking-[0.06em] mb-2">
              Stack
            </h4>
            <p className="font-body text-graphite dark:text-dark-text-secondary text-[15px] leading-[1.7]">
              {project.stack}
            </p>
          </div>
          <div className="mb-8">
            <h4 className="font-body text-carbon dark:text-white text-[13px] font-medium uppercase tracking-[0.06em] mb-2">
              Outcome
            </h4>
            <p className="font-body text-graphite dark:text-dark-text-secondary text-[15px] leading-[1.7]">
              {project.outcome}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-electric-blue text-white font-body text-[13px] font-medium px-5 h-[38px] rounded-tesla transition-all duration-tesla hover:opacity-90"
              >
                live demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white dark:bg-transparent text-graphite dark:text-dark-text-secondary font-body text-[13px] font-medium px-5 h-[38px] rounded-tesla transition-all duration-tesla hover:bg-ash dark:hover:bg-dark-surface border border-cloud dark:border-dark-border"
              >
                github
              </a>
            )}
          </div>

          {project.repo && (
            <GitHubMetrics owner={project.repo.owner} repo={project.repo.name} />
          )}

          {project.hasMicroDemo && <MicroDemo />}
        </div>
      </div>
    </article>
  )
}

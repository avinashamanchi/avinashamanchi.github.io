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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className="project-card reveal rounded-[12px] border border-cloud dark:border-dark-border overflow-hidden transition-colors duration-tesla hover:border-electric-blue/30"
    >
      {/* Project Image */}
      {project.imageGradient && (
        <div
          className="relative w-full aspect-[21/9]"
          style={{
            background: `linear-gradient(135deg, ${project.imageGradient[0]}, ${project.imageGradient[1]})`,
          }}
        >
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="w-3 h-3 rounded-full bg-white/15" />
            <span className="w-3 h-3 rounded-full bg-white/10" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <span className="text-white/60 text-[12px] font-body uppercase tracking-[0.1em] mb-2">
              {project.category}
            </span>
            <span className="text-white text-[24px] md:text-[32px] font-display font-medium text-center leading-tight">
              {project.title}
            </span>
          </div>
        </div>
      )}

      <div className="p-8 md:p-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column */}
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <span className="font-body text-electric-blue text-[12px] font-medium uppercase tracking-[0.08em]">
              {project.category}
            </span>
            <h3 className="font-display text-carbon dark:text-white text-[22px] md:text-[24px] font-medium leading-[1.25] mt-2">
              {project.title}
            </h3>
            {project.course && (
              <p className="font-body text-pewter dark:text-silver-fog text-[13px] mt-3">
                {project.course}
              </p>
            )}
            {project.dates && (
              <p className="font-body text-pewter dark:text-silver-fog text-[13px] mt-1">
                {project.dates}
              </p>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3">
            {/* Objective */}
            <div className="mb-6">
              <h4 className="font-body text-carbon dark:text-white text-[13px] font-medium uppercase tracking-[0.06em] mb-2">
                Objective
              </h4>
              <p className="font-body text-graphite dark:text-dark-text-secondary text-[15px] leading-[1.7]">
                {project.context}
              </p>
            </div>

            {/* My Responsibilities */}
            {project.responsibilities && project.responsibilities.length > 0 && (
              <div className="mb-6">
                <h4 className="font-body text-carbon dark:text-white text-[13px] font-medium uppercase tracking-[0.06em] mb-2">
                  My Responsibilities
                </h4>
                <ul className="list-disc list-inside space-y-1.5 font-body text-graphite dark:text-dark-text-secondary text-[15px] leading-[1.7]">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* What I Learned */}
            {project.learnings && (
              <div className="mb-6">
                <h4 className="font-body text-carbon dark:text-white text-[13px] font-medium uppercase tracking-[0.06em] mb-2">
                  What I Learned
                </h4>
                <p className="font-body text-graphite dark:text-dark-text-secondary text-[15px] leading-[1.7]">
                  {project.learnings}
                </p>
              </div>
            )}

            {/* Skills Demonstrated */}
            {project.skillsExemplified && project.skillsExemplified.length > 0 && (
              <div className="mb-6">
                <h4 className="font-body text-carbon dark:text-white text-[13px] font-medium uppercase tracking-[0.06em] mb-2">
                  Skills Demonstrated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.skillsExemplified.map((skill) => (
                    <span
                      key={skill}
                      className="font-body text-[12px] text-electric-blue bg-electric-blue/10 px-2.5 py-1 rounded-tesla font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Stack */}
            <div className="mb-6">
              <h4 className="font-body text-carbon dark:text-white text-[13px] font-medium uppercase tracking-[0.06em] mb-2">
                Stack
              </h4>
              <p className="font-body text-graphite dark:text-dark-text-secondary text-[15px] leading-[1.7]">
                {project.stack}
              </p>
            </div>

            {/* Outcome */}
            <div className="mb-8">
              <h4 className="font-body text-carbon dark:text-white text-[13px] font-medium uppercase tracking-[0.06em] mb-2">
                Outcome
              </h4>
              <p className="font-body text-graphite dark:text-dark-text-secondary text-[15px] leading-[1.7]">
                {project.outcome}
              </p>
            </div>

            {/* Links */}
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
              {project.documentation && (
                <a
                  href={project.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white dark:bg-transparent text-graphite dark:text-dark-text-secondary font-body text-[13px] font-medium px-5 h-[38px] rounded-tesla transition-all duration-tesla hover:bg-ash dark:hover:bg-dark-surface border border-cloud dark:border-dark-border"
                >
                  documentation
                </a>
              )}
            </div>

            {project.repo && (
              <GitHubMetrics owner={project.repo.owner} repo={project.repo.name} />
            )}

            {project.hasMicroDemo && <MicroDemo />}
          </div>
        </div>
      </div>
    </article>
  )
}

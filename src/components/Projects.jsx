import { useEffect, useRef } from 'react'
import { projects, inDevelopment } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const headerRef = useRef()
  const devHeaderRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    if (devHeaderRef.current) observer.observe(devHeaderRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1383px] mx-auto">
        <div ref={headerRef} className="reveal mb-14">
          <p className="font-body text-electric-blue text-[14px] font-medium mb-4">
            projects
          </p>
          <h2 className="font-display text-carbon dark:text-white text-[28px] md:text-[32px] font-medium leading-[1.2]">
            Selected work.
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* In Development */}
        {inDevelopment.length > 0 && (
          <div className="mt-20">
            <div ref={devHeaderRef} className="reveal mb-10">
              <p className="font-body text-electric-blue text-[14px] font-medium mb-4">
                in development
              </p>
              <h2 className="font-display text-carbon dark:text-white text-[24px] md:text-[28px] font-medium leading-[1.2]">
                What I'm building next.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inDevelopment.map((item) => (
                <div
                  key={item.id}
                  className="reveal rounded-[12px] border border-cloud dark:border-dark-border overflow-hidden opacity-90"
                >
                  {item.image && (
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img
                        src={item.image}
                        alt={`${item.title} preview`}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-carbon dark:text-white text-[18px] font-medium">
                        {item.title}
                      </h3>
                      <span className="font-body text-[11px] text-electric-blue font-medium bg-electric-blue/10 px-2.5 py-1 rounded-tesla whitespace-nowrap">
                        {item.status}
                      </span>
                    </div>
                    <p className="font-body text-graphite dark:text-dark-text-secondary text-[14px] leading-[1.6] mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-body text-[12px] text-pewter dark:text-silver-fog bg-ash dark:bg-carbon px-2.5 py-1 rounded-tesla"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-white dark:bg-transparent text-graphite dark:text-dark-text-secondary font-body text-[13px] font-medium px-5 h-[36px] rounded-tesla transition-all duration-tesla hover:bg-ash dark:hover:bg-dark-surface border border-cloud dark:border-dark-border"
                      >
                        github
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1383px] mx-auto">
        <div ref={ref} className="reveal max-w-[680px]">
          <p className="font-body text-electric-blue text-[14px] font-medium mb-4">
            about
          </p>
          <h2 className="font-display text-carbon dark:text-white text-[28px] md:text-[32px] font-medium leading-[1.2] mb-8">
            Building at the intersection of code and real&#8209;world impact.
          </h2>
          <div className="space-y-5 font-body text-graphite dark:text-dark-text-secondary text-[15px] leading-[1.7]">
            <p>
              I'm a full stack developer based in Dublin, California, and the
              President of the Computer Science Honors Society at Emerald High
              School. My path into technology began with a research internship at
              Lawrence Berkeley National Laboratory, where I developed a deep
              appreciation for rigorous problem&#8209;solving and
              interdisciplinary thinking.
            </p>
            <p>
              Since then, I've built and deployed multiple production
              applications&mdash;from an AI&#8209;powered resume analyzer to a
              conversation analysis platform used for real&#8209;world
              communication insights. I also co&#8209;founded EAA Detailing,
              scaling it to over 100 clients across four cities, which taught me
              to ship fast, think about users first, and measure every outcome.
            </p>
            <p>
              I work primarily with Python, JavaScript, React, and AI/ML tools.
              I'm driven by the belief that the best software starts with a
              genuine problem and ends with a deployed, measurable solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

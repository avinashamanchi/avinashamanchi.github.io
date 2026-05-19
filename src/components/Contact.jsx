import { useEffect, useRef } from 'react'

export default function Contact() {
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
    <footer id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-carbon">
      <div className="max-w-[1383px] mx-auto">
        <div ref={ref} className="reveal max-w-[560px]">
          <p className="font-body text-electric-blue text-[14px] font-medium mb-4">
            contact
          </p>
          <h2 className="font-display text-white text-[28px] md:text-[32px] font-medium leading-[1.2] mb-6">
            Let's build something together.
          </h2>
          <p className="font-body text-silver-fog text-[15px] leading-[1.7] mb-10">
            I'm always open to discussing new projects, collaboration
            opportunities, or just connecting over shared interests in
            technology and problem&#8209;solving.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="mailto:amanchi.avinash@gmail.com"
              className="inline-flex items-center justify-center bg-electric-blue text-white font-body text-[14px] font-medium px-6 h-[44px] rounded-tesla transition-all duration-tesla hover:opacity-90"
            >
              email me
            </a>
            <a
              href="https://www.linkedin.com/in/avinash-amanchi-56375b329/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[rgba(255,255,255,0.08)] text-white font-body text-[14px] font-medium px-6 h-[44px] rounded-tesla transition-all duration-tesla hover:bg-[rgba(255,255,255,0.15)]"
            >
              linkedin
            </a>
            <a
              href="https://github.com/avinashamanchi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[rgba(255,255,255,0.08)] text-white font-body text-[14px] font-medium px-6 h-[44px] rounded-tesla transition-all duration-tesla hover:bg-[rgba(255,255,255,0.15)]"
            >
              github
            </a>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.08)] pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="font-body text-[rgba(255,255,255,0.3)] text-[13px]">
                &copy; 2026 Avinash Amanchi. Dublin, CA.
              </p>
              <p className="font-body text-[rgba(255,255,255,0.3)] text-[13px]">
                designed &amp; built with precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useRef } from 'react'

export default function Resume() {
  const ref = useRef()

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
      { threshold: 0.1 }
    )
    const elements = ref.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resume" className="py-24 md:py-32 px-6 md:px-10 bg-ash dark:bg-dark-surface" ref={ref}>
      <div className="max-w-[1383px] mx-auto">
        {/* Section Header */}
        <div className="reveal mb-14">
          <p className="font-body text-electric-blue text-[14px] font-medium mb-4">
            resume
          </p>
          <h2 className="font-display text-carbon dark:text-white text-[28px] md:text-[32px] font-medium leading-[1.2] mb-2">
            Experience &amp; Education
          </h2>
          <p className="font-body text-graphite dark:text-dark-text-secondary text-[15px] leading-[1.7] max-w-[560px]">
            A summary of my academic background, professional experience, leadership roles, and technical skills.
          </p>
        </div>

        {/* Education */}
        <div className="reveal mb-12">
          <h3 className="font-display text-electric-blue text-[16px] font-medium mb-6 uppercase tracking-[0.08em]">
            Education
          </h3>
          <div className="bg-white dark:bg-carbon rounded-[12px] p-6 md:p-8 border border-cloud dark:border-dark-border">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="font-display text-carbon dark:text-white text-[18px] font-medium">
                  Emerald High School
                </h4>
                <p className="font-body text-graphite dark:text-dark-text-secondary text-[14px]">
                  Dublin, CA
                </p>
              </div>
              <span className="font-body text-pewter dark:text-silver-fog text-[14px] mt-1 md:mt-0 whitespace-nowrap">
                August 2022 &ndash; June 2026
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 font-body text-graphite dark:text-dark-text-secondary text-[14px] leading-[1.7]">
              <li>High School Diploma (Expected June 2026)</li>
              <li>President, Computer Science Honors Society (2024 &ndash; Present)</li>
              <li>Relevant Coursework: AP Computer Science A, Data Structures, Web Development, Honors Mathematics</li>
            </ul>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="reveal mb-12">
          <h3 className="font-display text-electric-blue text-[16px] font-medium mb-6 uppercase tracking-[0.08em]">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {/* Berkeley Lab */}
            <div className="bg-white dark:bg-carbon rounded-[12px] p-6 md:p-8 border border-cloud dark:border-dark-border">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="font-display text-carbon dark:text-white text-[18px] font-medium">
                    Research Intern
                  </h4>
                  <p className="font-body text-graphite dark:text-dark-text-secondary text-[14px]">
                    Lawrence Berkeley National Laboratory &mdash; Berkeley, CA
                  </p>
                </div>
                <span className="font-body text-pewter dark:text-silver-fog text-[14px] mt-1 md:mt-0 whitespace-nowrap">
                  May 2023 &ndash; August 2023
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 font-body text-graphite dark:text-dark-text-secondary text-[14px] leading-[1.7]">
                <li>Conducted data&#8209;driven analysis and scientific computing research at a U.S. Department of Energy national laboratory.</li>
                <li>Developed and optimized Python scripts for large&#8209;scale data processing and computational analysis pipelines.</li>
                <li>Collaborated with cross&#8209;functional research teams, applying rigorous methodology to active scientific workflows.</li>
                <li>Documented research findings and methodology following professional scientific standards.</li>
              </ul>
            </div>

            {/* EAA Detailing */}
            <div className="bg-white dark:bg-carbon rounded-[12px] p-6 md:p-8 border border-cloud dark:border-dark-border">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="font-display text-carbon dark:text-white text-[18px] font-medium">
                    Co&#8209;Founder &amp; Lead Developer
                  </h4>
                  <p className="font-body text-graphite dark:text-dark-text-secondary text-[14px]">
                    EAA Detailing &mdash; Dublin, CA
                  </p>
                </div>
                <span className="font-body text-pewter dark:text-silver-fog text-[14px] mt-1 md:mt-0 whitespace-nowrap">
                  April 2025 &ndash; February 2026
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 font-body text-graphite dark:text-dark-text-secondary text-[14px] leading-[1.7]">
                <li>Co&#8209;founded an automotive detailing business and built all digital infrastructure from scratch.</li>
                <li>Designed and deployed an online booking engine, client management pipeline, and marketing funnel.</li>
                <li>Scaled operations to 100+ clients across 4 cities with a system handling 20+ monthly appointments.</li>
                <li>Increased client acquisition by 30% through SEO optimization and targeted digital marketing campaigns.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership & Activities */}
        <div className="reveal mb-12">
          <h3 className="font-display text-electric-blue text-[16px] font-medium mb-6 uppercase tracking-[0.08em]">
            Leadership &amp; Activities
          </h3>
          <div className="bg-white dark:bg-carbon rounded-[12px] p-6 md:p-8 border border-cloud dark:border-dark-border">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="font-display text-carbon dark:text-white text-[18px] font-medium">
                  President, Computer Science Honors Society
                </h4>
                <p className="font-body text-graphite dark:text-dark-text-secondary text-[14px]">
                  Emerald High School &mdash; Dublin, CA
                </p>
              </div>
              <span className="font-body text-pewter dark:text-silver-fog text-[14px] mt-1 md:mt-0 whitespace-nowrap">
                2024 &ndash; Present
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 font-body text-graphite dark:text-dark-text-secondary text-[14px] leading-[1.7]">
              <li>Lead weekly meetings and organize coding workshops, hackathons, and guest speaker events for 30+ members.</li>
              <li>Mentor underclassmen in programming fundamentals, project development, and technical interview preparation.</li>
              <li>Coordinate with school administration to expand computer science resources and course offerings.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="reveal mb-10">
          <h3 className="font-display text-electric-blue text-[16px] font-medium mb-6 uppercase tracking-[0.08em]">
            Technical Skills
          </h3>
          <div className="bg-white dark:bg-carbon rounded-[12px] p-6 md:p-8 border border-cloud dark:border-dark-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-body text-carbon dark:text-white text-[14px] font-medium mb-2">
                  Languages
                </h4>
                <p className="font-body text-graphite dark:text-dark-text-secondary text-[14px] leading-[1.7]">
                  Python, JavaScript, Java, HTML5, CSS3, SQL
                </p>
              </div>
              <div>
                <h4 className="font-body text-carbon dark:text-white text-[14px] font-medium mb-2">
                  Frameworks &amp; Libraries
                </h4>
                <p className="font-body text-graphite dark:text-dark-text-secondary text-[14px] leading-[1.7]">
                  React, Vite, Tailwind CSS, REST APIs
                </p>
              </div>
              <div>
                <h4 className="font-body text-carbon dark:text-white text-[14px] font-medium mb-2">
                  Tools &amp; Platforms
                </h4>
                <p className="font-body text-graphite dark:text-dark-text-secondary text-[14px] leading-[1.7]">
                  Git, GitHub, Render, GitHub Pages, Bash, VS Code
                </p>
              </div>
              <div>
                <h4 className="font-body text-carbon dark:text-white text-[14px] font-medium mb-2">
                  Specializations
                </h4>
                <p className="font-body text-graphite dark:text-dark-text-secondary text-[14px] leading-[1.7]">
                  AI/ML Integration, NLP, LLM APIs, Data Analysis, SEO
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume */}
        <div className="reveal text-center mt-10">
          <a
            href="/avinash-amanchi-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-electric-blue text-white font-body text-[14px] font-medium px-8 h-[44px] rounded-tesla transition-all duration-tesla hover:opacity-90"
          >
            Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}

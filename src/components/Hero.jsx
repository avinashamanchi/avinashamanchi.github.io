export default function Hero() {
  return (
    <header
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-10 max-w-[1383px] mx-auto pt-[72px]"
    >
      <div className="max-w-[720px]">
        <p className="hero-line font-body text-electric-blue text-[14px] font-medium mb-6">
          full stack developer &amp; ai engineer
        </p>
        <h1 className="hero-line font-display text-carbon dark:text-white text-[clamp(36px,6vw,56px)] font-medium leading-[1.1] mb-6">
          Avinash Amanchi
        </h1>
        <p className="hero-line font-body text-graphite dark:text-dark-text-secondary text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[560px] mb-10">
          I build applications that solve real problems. From AI&#8209;powered
          analysis tools to accessibility&#8209;focused apps, I ship software
          that delivers measurable impact.
        </p>
        <div className="hero-line flex flex-wrap gap-3">
          <a
            href="/avinash-amanchi-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-electric-blue text-white font-body text-[14px] font-medium px-6 h-[44px] rounded-tesla transition-all duration-tesla hover:opacity-90 min-w-[180px]"
          >
            download resume
          </a>
          <a
            href="https://github.com/avinashamanchi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white dark:bg-transparent text-graphite dark:text-dark-text-secondary font-body text-[14px] font-medium px-6 h-[44px] rounded-tesla transition-all duration-tesla hover:bg-ash dark:hover:bg-dark-surface min-w-[180px] border border-cloud dark:border-dark-border"
          >
            github
          </a>
        </div>
      </div>
    </header>
  )
}

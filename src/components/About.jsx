import useReveal from '../hooks/useReveal'

export default function About() {
  const photoRef = useReveal()
  const copyRef = useReveal()

  return <section id="about" className="about-section section-space">
    <div className="page-wrap about-layout">
      <div ref={photoRef} className="about-photo reveal"><img src="/personalphoto.jpg" alt="Avinash Amanchi" loading="lazy" decoding="async" /><span>currently in<br />Dublin, CA</span></div>
      <div ref={copyRef} className="about-copy reveal">
        <p className="eyebrow">A LITTLE CONTEXT</p>
        <h2>I keep looking for the friction that stops someone from <em>moving forward.</em></h2>
        <p>I’m a builder and researcher interested in systems where the constraint is part of the problem: aphasia and communication, accessibility and usability, invoicing and time, clinical screening and limited lab access.</p>
        <p>That thread is what connects my projects. I like the stretch between a first conversation and a working system — asking better questions, shipping a small version, then letting real feedback change the design.</p>
        <div className="beyond-code"><span className="eyebrow">BEYOND THE TERMINAL</span><div><span>⚽ Varsity goalkeeper · 4 seasons</span><span>🏅 Scholar-athlete honors · 2×</span><span>🌎 National Spanish Exam · Gold / Top 5%</span></div></div>
      </div>
    </div>
  </section>
}

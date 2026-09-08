import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="site-shell text-[14px] leading-[1.43] font-normal">
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        <About />
      </main>
      <Contact />
    </div>
  )
}

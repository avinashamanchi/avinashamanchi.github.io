import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-white dark:bg-carbon text-graphite dark:text-dark-text-secondary text-[14px] leading-[1.43] font-normal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  )
}

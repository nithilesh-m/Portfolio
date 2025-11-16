import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Achievements from '@/components/sections/Achievements'
import Hackathons from '@/components/sections/Hackathons'
import Education from '@/components/sections/Education'
import Certificates from '@/components/sections/Certificates'
import Extracurricular from '@/components/sections/Extracurricular'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-bg text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-purple-900/10 pointer-events-none" />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Hackathons />
        <Education />
        <Certificates />
        <Extracurricular />
        <Contact />
      </div>
    </main>
  )
}


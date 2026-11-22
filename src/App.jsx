import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return (
    <div className="w-full max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Achievements />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

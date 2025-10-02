import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Volunteering from './components/Volunteering'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white text-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        {/* Add section wrappers with matching IDs and top padding for smooth navbar experience */}
        <section id="hero" className="pt-16">
          <Hero />
        </section>
        <section id="projects" className="pt-16">
          <Projects />
        </section>
        <section id="education" className="pt-16">
          <Education />
        </section>
        <section id="experience" className="pt-16">
          <Experience />
        </section>
        <section id="skills" className="pt-16">
          <Skills />
        </section>
        <section id="volunteering" className="pt-16">
          <Volunteering />
        </section>
        <section id="certifications" className="pt-16">
          <Certifications />
        </section>
        <section id="contact" className="pt-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
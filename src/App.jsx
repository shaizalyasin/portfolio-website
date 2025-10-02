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
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Volunteering />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
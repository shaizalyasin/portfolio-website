import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 backdrop-blur bg-white/70 border-b border-slate-200 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white font-bold">MS</div>
          <div>
            <div className="font-bold">Muhammad Shaizal Yasin</div>
            <div className="text-sm text-slate-600">MSc Data Science • AI & ML</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#projects" className="hover:text-teal-700">Projects</a>
          <a href="#skills" className="hover:text-teal-700">Skills</a>
          <a href="#education" className="hover:text-teal-700">Education</a>
          <a href="#experience" className="hover:text-teal-700">Experience</a>
          <a href="#volunteering" className="hover:text-teal-700">Volunteering</a>
          <a href="#contact" className="text-amber-500 font-semibold">Contact</a>
        </nav>
      </div>
    </header>
  )
}
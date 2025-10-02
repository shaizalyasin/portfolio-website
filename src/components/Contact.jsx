import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ContactForm from './ContactForm'

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className="py-12 pt-16">
      <h2 className="text-2xl font-bold text-teal-800 mb-6 flex items-center gap-2">
        <FaEnvelope className="text-2xl" /> Contact Me
      </h2>
      <div className="p-6 bg-white rounded-xl shadow w-full max-w-2xl mx-auto hover:-translate-y-2 hover:shadow-lg transition-transform duration-200">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="px-5 py-3 bg-slate-100 text-slate-700 rounded shadow hover:bg-slate-200 transition flex items-center gap-2 font-medium hover:-translate-y-2 hover:shadow-lg"
          >
            <FaEnvelope /> Message
          </button>
          <a href="mailto:shaizalyasin0713@gmail.com" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-slate-100 text-slate-700 rounded shadow hover:bg-slate-200 transition flex items-center gap-2 font-medium hover:-translate-y-2 hover:shadow-lg">
            <FaEnvelope /> Email
          </a>
          <a href="https://github.com/shaizalyasin" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-slate-100 text-slate-700 rounded shadow hover:bg-slate-200 transition flex items-center gap-2 font-medium hover:-translate-y-2 hover:shadow-lg">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/shaizal-yasin" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-slate-100 text-slate-700 rounded shadow hover:bg-slate-200 transition flex items-center gap-2 font-medium hover:-translate-y-2 hover:shadow-lg">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        {showForm && <ContactForm onClose={() => setShowForm(false)} />}
      </div>
    </section>
  )
}
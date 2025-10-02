import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold text-teal-800">Contact</h2>
      <div className="mt-4 p-6 bg-white rounded-xl shadow">
        <p className="text-slate-700">Email: <a href="mailto:shaizalyasin0713@gmail.com" className="text-amber-600">shaizalyasin0713@gmail.com</a></p>
        <p className="text-slate-700 mt-1">Location: Erlangen, Germany (Open to relocation.)</p>
        <div className="mt-4 flex gap-3">
          <a href="mailto:shaizalyasin0713@gmail.com" className="px-4 py-2 bg-teal-700 text-white rounded">Message</a>
          {/* <a href="#projects" className="px-4 py-2 border border-slate-200 rounded">See work</a> */}
        </div>
      </div>
    </section>
  )
}
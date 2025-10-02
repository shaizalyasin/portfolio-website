import React from 'react'

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-start gap-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800">Hi — I’m Muhammad. I build AI & data-driven systems.</h1>
      <p className="text-lg text-slate-700 max-w-2xl">
        MSc Data Science (FAU) student with experience in quantitative development, automation, and applied
        machine learning. I enjoy turning data into actionable insights and building production-ready
        analytics and AI systems.
      </p>
      <div className="flex gap-4">
        {/* <a href="#projects" className="px-4 py-2 bg-teal-700 text-white rounded-md shadow">View projects</a> */}
        {/* <a href="/M_Shaizal_Yasin_CV.pdf" download className="px-4 py-2 border border-amber-400 text-amber-600 rounded-md">Download CV</a> */}
      </div>
    </section>
  )
}
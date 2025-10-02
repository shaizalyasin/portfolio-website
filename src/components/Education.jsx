import React from 'react'

const education = [
  {
    school: "Friedrich-Alexander University (FAU) — Erlangen-Nürnberg",
    degree: "MSc Data Science (AI/ML)",
    period: "Apr 2025 – Present",
    location: "Erlangen, Germany",
    logo: "/fau-logo.png", // Place logo in public folder
    achievements: [
      "Relevant coursework: Deep Learning, Pattern Analysis, Decision Theory, Knowledge Discovery, Speech & Language Processing"
    ]
  },
  {
    school: "Eötvös Loránd University (ELTE)",
    degree: "BSc Computer Science",
    period: "Sep 2021 – Jul 2024",
    location: "Budapest, Hungary",
    logo: "/elte-logo.png", // Place logo in public folder
    achievements: [
      "Thesis: Pricing & Calibrating Financial Derivatives Using TensorFlow",
      "GPA: 4.52/5"
    ]
  }
]

export default function Education() {
  return (
    <section id="education" className="py-12 pt-16">
      <h2 className="text-2xl font-bold text-teal-800">Education</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-full">
            <div className="flex items-center gap-4 mb-2">
              <img src={e.logo} alt={e.school + " logo"} className="w-12 h-12 object-contain rounded" />
              <div>
                <div className="font-semibold text-lg">{e.school}</div>
                <div className="text-sm text-slate-600">{e.degree}</div>
                <div className="text-xs text-slate-500">{e.location}</div>
              </div>
            </div>
            <div className="text-sm text-slate-500 mb-2">{e.period}</div>
            <ul className="list-disc list-inside text-slate-700 text-sm">
              {e.achievements.map((a, j) => (
                <li key={j}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
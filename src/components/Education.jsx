import React from 'react'

const education = [
  {
    school: "Friedrich-Alexander University (FAU) — Erlangen-Nürnberg",
    degree: "MSc Data Science (AI/ML)",
    period: "Apr 2025 – Present",
    notes: ["Deep Learning, Pattern Analysis, Decision Theory, Knowledge Discovery, Speech & Language Processing"]
  },
  {
    school: "Eötvös Loránd University (ELTE)",
    degree: "BSc Computer Science",
    period: "Sep 2021 – Jul 2024",
    notes: ["Thesis: Pricing & Calibrating Financial Derivatives Using TensorFlow", "GPA: 4.52/5"]
  }
]

export default function Education() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-2xl font-bold text-teal-800">Education</h2>
      <div className="mt-6 space-y-4">
        {education.map((e, i) => (
          <div key={i} className="p-4 bg-white rounded-xl shadow">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">{e.school}</div>
                <div className="text-sm text-slate-600">{e.degree}</div>
              </div>
              <div className="text-sm text-slate-500">{e.period}</div>
            </div>
            {e.notes && <p className="mt-2 text-slate-700 text-sm">{e.notes.join(' · ')}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
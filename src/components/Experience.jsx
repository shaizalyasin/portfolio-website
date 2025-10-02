import React from 'react'

const experience = [
  {
    role: "Web Developer Intern",
    org: "Embassy of Pakistan, Budapest",
    period: "Sep 2024 – Present",
    details: ["Manage and maintain the embassy website; optimise for desktop & mobile."]
  },
  {
    role: "Market Quantitative Analysis Intern",
    org: "Citigroup Inc., Budapest",
    period: "Jun 2023 – Apr 2024",
    details: [
      "Developed Python framework to automate OPA reporting and optimized data workflows.",
      "Built Power BI dashboards and a React-based UI for analytics."
    ]
  },
  {
    role: "Teaching Assistant — Algorithms & Data Structures",
    org: "Eötvös Loránd University (ELTE), Budapest",
    period: "Feb 2023 – Jul 2024",
    details: ["Held weekly consultations for 80+ students, prepared and graded assignments and exams."]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-2xl font-bold text-teal-800">Experience</h2>
      <div className="mt-6 space-y-4">
        {experience.map((ex, i) => (
          <div key={i} className="p-4 bg-white rounded-xl shadow">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">{ex.role}</div>
                <div className="text-sm text-slate-600">{ex.org}</div>
              </div>
              <div className="text-sm text-slate-500">{ex.period}</div>
            </div>
            <ul className="mt-3 list-disc list-inside text-slate-700">
              {ex.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
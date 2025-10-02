import React from 'react'

const certifications = [
  { title: "IoT Fundamentals: Big Data & Analytics", date: "Jun 2023" },
  { title: "Financial Engineering and Risk Management", date: "Oct 2023" },
  { title: "Technical Support Fundamentals", date: "Dec 2022" },
  { title: "Work Smarter with Microsoft Excel", date: "Aug 2022" },
  { title: "HTML, CSS, and Javascript for Web Developers", date: "Aug 2022" },
  { title: "Ask Questions to Make Data-Driven Decisions", date: "Feb 2022" },
  { title: "Foundations: Data, Data, Everywhere", date: "Jan 2022" }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 pt-16">
      <h2 className="text-2xl font-bold text-teal-800 mb-6">Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((c, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="font-semibold text-teal-700 text-lg mb-1">{c.title}</div>
              <div className="text-sm text-slate-600">{c.issuer}</div>
            </div>
            <div className="mt-2 text-xs text-slate-500">{c.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
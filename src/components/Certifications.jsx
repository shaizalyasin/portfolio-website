import React from 'react'

const certifications = [
  { title: "IoT Fundamentals: Big Data & Analytics", issuer: "Cisco", date: "Jun 2023" },
  { title: "Ask Questions to Make Data-Driven Decisions", issuer: "Google", date: "Aug 2022", id: "HLHM88LYYYPX" }
]

export default function Certifications() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-teal-800">Certifications</h2>
      <div className="mt-4 space-y-2">
        {certifications.map((c, i) => (
          <div key={i} className="p-3 bg-white rounded-lg shadow-sm">
            <div className="font-medium">{c.title}</div>
            <div className="text-sm text-slate-500">{c.issuer} • {c.date} {c.id ? `• ID: ${c.id}` : ''}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
import React from 'react'

const volunteering = [
  { title: "Flood Relief Volunteer — Red Cross", period: "Sep 2024", details: "Filled sandbags, logistics and emergency support in Budapest." },
  { title: "Fair Play Volunteer — 45th FIDE Chess Olympiad", period: "Sep 2024", details: "Monitored fair play inside the playing hall and supported event operations." },
  { title: "Stage Manager — Craft Conference", period: "May 2023", details: "Managed Green Stage logistics and speaker coordination." }
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-12">
      <h2 className="text-2xl font-bold text-teal-800">Volunteering</h2>
      <div className="mt-4 space-y-3">
        {volunteering.map((v, i) => (
          <div key={i} className="p-4 bg-white rounded-xl shadow">
            <div className="flex justify-between">
              <div className="font-semibold">{v.title}</div>
              <div className="text-sm text-slate-500">{v.period}</div>
            </div>
            <p className="mt-2 text-slate-700 text-sm">{v.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
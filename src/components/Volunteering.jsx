import React from 'react'

const volunteering = [
  {
    title: "Flood Relief Volunteer — Red Cross",
    period: "Sep 2024",
    details: "Assisted the Red Cross Organization in flood relief efforts during an emergency in Budapest. Filled and positioned sandbags, supported logistical tasks, and collaborated with other volunteers to safeguard impacted areas. Demonstrated adaptability, teamwork, and commitment to community safety in high-pressure circumstances."
  },
  {
    title: "Fair Play Volunteer — 45th FIDE Chess Olympiad",
    period: "Sep 2024",
    details: "Volunteered with the fair play team at the 45th FIDE Chess Olympiad in Budapest, overseeing activities within the playing hall to uphold integrity and fair competition. Monitored player conduct, ensured compliance with tournament regulations, and supported smooth event operations. Demonstrated attention to detail, strong observational skills, and commitment to fair play standards in an international setting."
  },
  {
    title: "Stage Manager — Craft Conference",
    period: "May 2023",
    details: "Managed logistics and ensured smooth operation of the Green Stage at the Craft Conference, a major technology event organized by CraftHub. Maintained continuous communication with speakers to guarantee their needs were met and presentations ran seamlessly. Resolved technical issues and unforeseen challenges to maintain a professional and positive experience for speakers and attendees."
  }
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-12">
      <h2 className="text-2xl font-bold text-teal-800">Volunteering</h2>
      <div className="mt-4 space-y-3">
        {volunteering.map((v, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-full">
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
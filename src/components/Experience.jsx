import React from 'react'

const experience = [
  {
    role: "Quantitative Developer Intern",
    org: "Citigroup Inc., Budapest",
    period: "Jun 2023 – Apr 2024",
    details: [
      "Developed a Python framework to automate Ongoing Performance Analysis (OPA) reporting for multi-asset platforms (commodities, equities).",
      "Implemented new features and resolved bugs to ensure robust and accurate quantitative data processing.",
      "Contributed to React-based UI development, enhancing data accessibility for market analysts and quants.",
      "Collaborated in cross-functional teams to refine analytical workflows and improve cross-asset market data integration.",
      "Wrote comprehensive unit tests and documentation for framework components and quantitative algorithms."
    ]
  },
  {
    role: "Web Developer Intern",
    org: "Embassy of Pakistan, Budapest",
    period: "Sep 2024 – Mar 2025",
    details: [
      "Manage and maintain the embassy’s website, ensuring functionality, user experience, and timely updates for a global audience.",
      "Collaborate with internal teams to implement design enhancements and improve website performance, optimizing for both desktop and mobile platforms."
    ]
  },
  {
    role: "Teaching Assistant — Algorithms & Data Structures",
    org: "Eötvös Loránd University (ELTE), Budapest",
    period: "Feb 2023 – Jun 2024",
    details: [
      "Provided in-person and online consultations to over 80 students on Algorithms and Data Structures.",
      "Responded to student queries via MS Teams, providing prompt and helpful assistance.",
      "Reviewed and graded homework assignments, ensuring constructive feedback.",
      "Assisted with exam administration and grading for fair and accurate evaluation.",
      "Effectively conveyed complex concepts using strong communication and interpersonal skills."
    ]
  },
  {
    role: "Senior Student",
    org: "Eötvös Loránd University (ELTE), Budapest",
    period: "Sep 2022 – Jun 2024",
    details: [
      "Assisted mentor teachers in organizing lessons for learning methodology classes.",
      "Organized trips and leisure activities for newcomers.",
      "Coordinated coaching classes to help students understand academic regulations."
    ]
  },
  {
    role: "International Student Mentor",
    org: "HÖOK, Budapest",
    period: "Sep 2022 – Jul 2024",
    details: [
      "Applied creative and innovative thinking tools for students' personal, professional, and academic development.",
      "Assisted students in administrative tasks, enrolment, and institutional integration.",
      "Organized and coordinated cultural and extracurricular activities for international students."
    ]
  },
  {
    role: "Student Mentor",
    org: "Erasmus Student Network, Budapest",
    period: "Oct 2022 – Jul 2024",
    details: [
      "Facilitated integration of Erasmus newcomers by supporting document management and navigating educational, transportation, and healthcare systems.",
      "Promoted cross-cultural understanding and exchange.",
      "Enhanced communication skills by guiding and supporting a diverse student body.",
      "Engaged with individuals from various cultural backgrounds, enriching global perspective."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-2xl font-bold text-teal-800">Experience</h2>
      <div className="mt-6 space-y-4">
        {experience.map((ex, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <div>
             <div className="font-semibold text-lg text-teal-700 mb-1">{ex.role}</div>
              <div className="text-sm text-slate-600 mb-1">{ex.org}</div>
              <div className="text-xs text-slate-500 mb-2">{ex.period}</div>
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
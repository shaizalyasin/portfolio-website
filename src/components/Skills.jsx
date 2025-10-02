import React from 'react'

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "NumPy", "Pandas", "scikit-learn", "PyTorch", "TensorFlow", "SQL", "JavaScript", "C/C++", "React"]
  },
  {
    title: "Concepts",
    skills: ["OOP", "Data Structures", "Algorithms", "Machine Learning", "Data Analysis", "Time Series Forecasting", "Financial Modeling"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "CI/CD", "Docker", "Linux", "LaTeX", "Power BI", "Microsoft Excel", "Atlassian (Bitbucket, Confluence, Jira)"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Teaching/Mentoring", "Technical Communication", "Teamwork"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Languages",
    skills: ["English (Fluent)", "German (Basic, Learning)"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 pt-16">
      <h2 className="text-2xl font-bold text-teal-800 mb-6">Skills & Tools</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-full">
            <div className="font-semibold text-teal-700 mb-2">{group.title}</div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s, j) => (
                <span key={j} className="px-3 py-2 bg-teal-50 rounded-full text-sm text-teal-900 shadow">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
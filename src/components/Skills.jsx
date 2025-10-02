import React from 'react'

const skills = [
  "Python", "TensorFlow", "PyTorch", "LangChain", "SQL", "React", "FastAPI", "Docker", "Power BI", "Git", "CI/CD", "Linux"
]

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-bold text-teal-800">Skills & Tools</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <span key={i} className="px-3 py-2 bg-white rounded-full shadow text-sm">{s}</span>
        ))}
      </div>
    </section>
  )
}
import React from 'react'

const projects = [
  {
    title: "Pricing & Calibrating Financial Derivatives (TensorFlow)",
    date: "Feb 2024 – Jun 2024",
    description: "Implemented Black-Scholes, Binomial Tree, Monte Carlo, Vasicek, and Hull-White models using TensorFlow's automatic differentiation. Built an interactive Dash/Plotly dashboard.",
    link: "https://github.com/shaizalyasin/fin_deriv_tensorflow",
    stack: ["Python", "TensorFlow", "Dash", "Plotly"]
  },
  {
    title: "Progress Tracking System (Java Spring Boot)",
    date: "Nov 2023 – Feb 2024",
    description: "Spring Boot app with React frontend for tracking personal skill progress. Implemented token-based authentication, MySQL/H2 DB, JUnit tests and CI pipeline.",
    link: "#",
    stack: ["Java", "Spring Boot", "React", "MySQL", "JUnit"]
  },
  {
    title: "City Builder Game (Python & Pygame)",
    date: "Feb 2023 – Jun 2023",
    description: "Real-time city builder with zoning, services, balanced economy, and CI pipeline on GitLab.",
    link: "#",
    stack: ["Python", "Pygame", "GitLab", "CI"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-bold text-teal-800">Selected Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article key={i} className="p-6 bg-white rounded-2xl shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="text-sm text-slate-500">{p.date}</div>
              </div>
              <div className="text-sm text-slate-500">{p.stack.join(' · ')}</div>
            </div>
            <p className="mt-3 text-slate-700">{p.description}</p>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-amber-600 font-medium">View code →</a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
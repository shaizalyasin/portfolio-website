import React from 'react'

const projects = [
 {
    title: "Pricing & Calibrating Financial Derivatives (TensorFlow)",
    date: "Feb 2024 – Jun 2024",
    description: "Implemented and evaluated financial derivatives pricing models using TensorFlow, leveraging Automatic Differentiation (AD) for efficient and precise gradient calculations. Explored AD's impact on calibration speed and accuracy, focusing on Monte Carlo methods and high-dimensional models. Developed Black-Scholes, Binomial Tree, Monte Carlo, Vasicek, and Hull-White models, and built an interactive Dash/Plotly dashboard for visualization.",
    link: "https://github.com/shaizalyasin/fin_deriv_tensorflow",
    stack: ["Python", "TensorFlow", "Dash", "Plotly"]
  },
  {
    title: "Web Scraping Pipeline (Python)",
    date: "Aug 2025 – Sep 2025",
    description: "A modular, configuration-driven pipeline for scraping business directories and generating lead databases. Features checkpointing, YAML-based configs, robust email validation, and professional logging. Demonstrated on Europages and Yellow Pages UAE. Uses BeautifulSoup and Selenium for scraping.",
    link: "https://github.com/shaizalyasin/web-scraping-pipeline",
    stack: ["Python", "BeautifulSoup", "Selenium", "YAML", "Logging", "Data Cleaning"]
  },
   {
    title: "Neural Network Framework from Scratch (Python)",
    date: "Apr 2025 – Aug 2025",
    description: "Built a foundational deep learning framework in Python without high-level ML libraries. Features vectorized NumPy operations, custom layers, optimizers, image data generator with augmentation, regularization (L1/L2, Dropout, BatchNorm), CNN and RNN modules, and model serialization. Includes LeNet and LSTM implementations.",
    link: "https://github.com/shaizalyasin/deep-learning-framework",
    stack: ["Python", "NumPy", "Deep Learning"]
  },
   {
    title: "Document Q&A Assistant with RAG",
    date: "Jun 2025 – Sep 2025",
    description: "Implemented a Retrieval-Augmented Generation (RAG) system for document analysis and Q&A. Researched transformer-based models to enhance document intelligence and GenAI-driven responses. Built with LangChain, FAISS, FastAPI backend, and Streamlit dashboard. Demonstrates practical document intelligence and GenAI for real-world use cases.",
    link: "#",
    stack: ["Python", "LangChain", "FAISS", "FastAPI", "Streamlit", "GenAI"]
  },
  {
    title: "Progress Tracking System (Java Spring Boot)",
    date: "Feb 2023 – Jun 2023",
    description: "Built a Spring Boot web application for users to track personal skill progress. Developed a React-based GUI and implemented secure, token-based authentication using Spring Security. Followed the MVC architectural pattern and ensured reliability with JUnit 4 tests, MySQL, and H2 in-memory database.",
    link: "#",
    stack: ["Java", "Spring Boot", "React", "MySQL", "JUnit"]
  },
  {
    title: "City Builder Game (Python & Pygame)",
    date: "Feb 2023 – Jun 2023",
    description: "Developed a real-time city builder game in Python and Pygame featuring residential, industrial, and service zones, roads, and service buildings. Enhanced gameplay with interactive 3D graphics, fire departments, and educational systems. Balanced game economics and citizen satisfaction. Used SDLC methodology, GitLab for version control, and set up a CI pipeline for automated testing.",
    link: "#",
    stack: ["Python", "Pygame", "GitLab", "CI"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-bold text-teal-800"> Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article key={i} className="p-6 bg-white rounded-xl shadow transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between h-full">
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
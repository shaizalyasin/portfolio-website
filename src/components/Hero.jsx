import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-teal-100 to-white py-12">
      <img
        src="/profile.jpg"
        // alt="Muhammad Shaizal Yasin"
        className="w-80 h-80 rounded-full shadow-lg mb-6 object-cover"
      />
      <h1 className="text-4xl font-extrabold text-teal-800 mb-2">Muhammad Shaizal Yasin</h1>
      <h2 className="text-xl text-teal-600 mb-4">Quantitative Developer & Data Scientist</h2>
      <p className="max-w-xl text-center text-slate-700 mb-6">
        Building robust data-driven solutions in finance, AI, and web. Experienced in Python, TensorFlow, and quantitative analysis. Passionate about mentoring, research, and impactful technology.
      </p>
      <div className="flex gap-6 mb-4">
        <a href="https://github.com/shaizalyasin" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 text-2xl">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/shaizal-yasin/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 text-2xl">
          <FaLinkedin />
        </a>
        <a href="mailto:shaizalyasin0713@gmail.com" className="text-teal-700 hover:text-teal-900 text-2xl">
          <FaEnvelope />
        </a>
      </div>
      <a
        href="/Muhammad-Shaizal-Yasin-CV.pdf"
        target="_blank"
        className="px-6 py-2 bg-teal-700 text-white rounded-full shadow hover:bg-teal-800 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
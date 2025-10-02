import React from 'react'

export default function ContactForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow p-8 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-slate-500 hover:text-teal-700"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4 text-teal-800">Send a Message</h3>
        <form action="https://formspree.io/f/mldpnlye" method="POST" className="space-y-4">
          <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-2 rounded bg-slate-100" />
          <input type="email" name="email" required placeholder="Your Email" className="w-full px-4 py-2 rounded bg-slate-100" />
          <textarea name="message" required placeholder="Your Message" rows={5} className="w-full px-4 py-2 rounded bg-slate-100" />
          <button type="submit" className="w-full py-2 bg-teal-700 text-white rounded font-bold hover:bg-teal-800 transition">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
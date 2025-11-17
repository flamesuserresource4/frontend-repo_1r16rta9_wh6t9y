import { useState } from 'react'

export default function Hero({ onCelebrate, onUpdate }) {
  const [name, setName] = useState('Sister')
  const [message, setMessage] = useState('Wishing you a day as bright and beautiful as you are!')

  const handleCelebrate = () => {
    onUpdate({ name, message })
    onCelebrate()
  }

  return (
    <section className="w-full max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
        Happy Birthday 🎉
      </h1>
      <p className="mt-3 text-gray-600">
        Craft a personalized wish and shower her day with sparkles.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-pink-200/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Her name"
        />
        <button
          onClick={handleCelebrate}
          className="rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-600 px-4 py-3 font-semibold text-white shadow-lg shadow-pink-500/30 hover:opacity-95 active:scale-[0.98] transition"
        >
          Celebrate Now
        </button>
      </div>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        className="mt-3 w-full rounded-lg border border-indigo-200/60 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Your heartfelt message"
      />

      <p className="mt-4 text-sm text-gray-500">Tip: Keep it sweet, fun, and totally her.</p>
    </section>
  )
}

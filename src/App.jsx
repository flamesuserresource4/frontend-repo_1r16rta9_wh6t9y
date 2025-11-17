import { useState } from 'react'
import Hero from './components/Hero'
import WishCard from './components/WishCard'
import ConfettiCanvas from './components/ConfettiCanvas'

function App() {
  const [show, setShow] = useState(false)
  const [wish, setWish] = useState({ name: 'Sister', message: 'Wishing you a day as bright and beautiful as you are!' })

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-indigo-50">
      {show && <ConfettiCanvas trigger={show} />}

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />
      </div>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-pink-600 ring-1 ring-pink-200/60">
            <span>💖</span> For the best sister ever
          </p>
        </div>

        <Hero onCelebrate={() => setShow(true)} onUpdate={setWish} />

        <div className="mt-10">
          <WishCard name={wish.name} message={wish.message} />
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Made with love and sparkles ✨
        </footer>
      </main>
    </div>
  )
}

export default App

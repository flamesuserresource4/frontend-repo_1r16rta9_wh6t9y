import { motion } from 'framer-motion'

export default function WishCard({ name, message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur p-6 shadow-xl ring-1 ring-pink-200/50"
    >
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-pink-400/20 blur-3xl" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-800">
          To {name || 'Sister'}
        </h2>
        <span className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Birthday Love
        </span>
      </div>

      <p className="mt-4 text-lg leading-relaxed text-gray-700">
        {message}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-2 text-center text-pink-600">
        <span>🎂</span>
        <span>🎁</span>
        <span>🌸</span>
      </div>
    </motion.div>
  )
}

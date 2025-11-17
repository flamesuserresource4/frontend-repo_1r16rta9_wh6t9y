import { useEffect, useRef } from 'react'

// Lightweight confetti using canvas particles
export default function ConfettiCanvas({ trigger }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H

    const colors = ['#ff6bcb', '#f65aaa', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24']
    let particles = []

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawn = (n = 150) => {
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * -H * 0.2,
        r: 6 + Math.random() * 6,
        c: colors[(Math.random() * colors.length) | 0],
        s: 2 + Math.random() * 3,
        a: Math.random() * Math.PI * 2,
        w: 0.5 + Math.random(),
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of particles) {
        p.y += p.s
        p.x += Math.cos(p.a) * p.w
        p.a += 0.02
        if (p.y > H + 10) p.y = -10
        ctx.fillStyle = p.c
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(draw)
    }

    spawn(220)
    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [trigger])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10"
      aria-hidden
    />
  )
}

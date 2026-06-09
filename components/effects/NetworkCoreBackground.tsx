'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

const PARTICLE_COUNT_DESKTOP = 55
const PARTICLE_COUNT_MOBILE = 20

export default function NetworkCoreBackground({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const isMobile = () => window.innerWidth < 768

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    const count = isMobile() ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP
    const particles: Particle[] = []
    // On mobile the glow pulses from center; on desktop it follows the mouse.
    const glowPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let pulsePhase = 0

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile()) {
        glowPos.x = e.clientX
        glowPos.y = e.clientY
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Mobile: gentle autonomous pulse; Desktop: mouse-reactive glow
      let glowRadius: number
      let glowAlpha: number
      if (isMobile()) {
        pulsePhase += 0.015
        glowRadius = 220 + Math.sin(pulsePhase) * 60
        glowAlpha = isDark ? 0.08 + Math.sin(pulsePhase) * 0.04 : 0.04 + Math.sin(pulsePhase) * 0.02
        // Keep centered on mobile
        glowPos.x = canvas.width / 2
        glowPos.y = canvas.height / 2
      } else {
        glowRadius = 350
        glowAlpha = isDark ? 0.12 : 0.05
      }

      const gradient = ctx.createRadialGradient(glowPos.x, glowPos.y, 0, glowPos.x, glowPos.y, glowRadius)
      gradient.addColorStop(0, `rgba(0, 71, 224, ${glowAlpha})`)
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const total = particles.length
      for (let i = 0; i < total; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? 'rgba(64, 128, 255, 0.3)' : 'rgba(0, 71, 224, 0.3)'
        ctx.fill()

        for (let j = i + 1; j < total; j++) {
          const p2 = particles[j]
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = isDark
              ? `rgba(64, 128, 255, ${0.12 - dist / 900})`
              : `rgba(0, 71, 224, ${0.08 - dist / 1200})`
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

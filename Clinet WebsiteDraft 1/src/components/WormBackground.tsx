'use client'
import { useEffect, useRef } from 'react'

interface Props {
  count?: number
  alpha?: number
  speed?: number
  color?: string
}

export default function WormBackground({ count = 18, alpha = 0.07, speed = 1, color = '#5DCAA5' }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = parseInt(color.slice(1, 3), 16)
    const g = parseInt(color.slice(3, 5), 16)
    const b = parseInt(color.slice(5, 7), 16)
    let raf: number
    const init = () => {
      const W = c.offsetWidth, H = c.offsetHeight
      if (!W || !H) return null
      c.width = W; c.height = H
      return Array.from({ length: count }, () => {
        const segs = 14, len = 22 + Math.random() * 24, sl = len / segs
        const x = Math.random() * W, y = Math.random() * H, a = Math.random() * Math.PI * 2
        return {
          pts: Array.from({ length: segs }, (_, i) => ({ x: x - Math.cos(a) * sl * i, y: y - Math.sin(a) * sl * i })),
          segs, sl, sp: (0.25 + Math.random() * 0.45) * speed, angle: a,
          turn: (Math.random() - 0.5) * 0.04,
          uA: 0.3 + Math.random() * 0.3, uF: 0.04 + Math.random() * 0.03,
          uP: Math.random() * Math.PI * 2, tick: Math.random() * 200,
          th: 1.0 + Math.random() * 0.7, W, H,
        }
      })
    }
    let worms = init()
    const ctx = c.getContext('2d')!
    const draw = () => {
      if (!worms) { worms = init(); if (!worms) { raf = requestAnimationFrame(draw); return } }
      ctx.clearRect(0, 0, c.width, c.height)
      worms.forEach(w => {
        w.tick++
        w.angle += w.turn + Math.sin(w.tick * w.uF + w.uP) * w.uA * 0.06
        if (Math.random() < 0.003) w.turn = (Math.random() - 0.5) * 0.06
        const h = w.pts[0]
        const nx = h.x + Math.cos(w.angle) * w.sp, ny = h.y + Math.sin(w.angle) * w.sp
        w.pts[0].x = nx < -30 ? w.W + 30 : nx > w.W + 30 ? -30 : nx
        w.pts[0].y = ny < -30 ? w.H + 30 : ny > w.H + 30 ? -30 : ny
        for (let i = 1; i < w.segs; i++) {
          const p = w.pts[i - 1], cur = w.pts[i]
          const dx = cur.x - p.x, dy = cur.y - p.y, d = Math.sqrt(dx * dx + dy * dy)
          if (d === 0) continue
          cur.x -= dx * (d - w.sl) / d; cur.y -= dy * (d - w.sl) / d
        }
        ctx.beginPath(); ctx.moveTo(w.pts[0].x, w.pts[0].y)
        for (let i = 1; i < w.pts.length - 1; i++) {
          const mx = (w.pts[i].x + w.pts[i + 1].x) / 2, my = (w.pts[i].y + w.pts[i + 1].y) / 2
          ctx.quadraticCurveTo(w.pts[i].x, w.pts[i].y, mx, my)
        }
        ctx.lineTo(w.pts[w.pts.length - 1].x, w.pts[w.pts.length - 1].y)
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`; ctx.lineWidth = w.th
        ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke()
        ctx.beginPath(); ctx.arc(w.pts[0].x, w.pts[0].y, w.th * 0.7, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, alpha * 1.4)})`; ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    const ro = new ResizeObserver(() => { worms = null })
    ro.observe(c.parentElement ?? c)
    draw()
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [count, alpha, speed, color])

  return <canvas ref={ref} aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" />
}

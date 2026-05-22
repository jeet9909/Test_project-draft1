'use client'
import { useEffect, useRef, useState } from 'react'

const MESSAGES = [
  'Initializing C. elegans model...',
  'Culturing on NGM plates...',
  'Synchronizing L1 larvae...',
  'Running toxicity assay...',
  'Scoring phenotypes...',
  'Rendering data report...',
]

function startWorms(canvas: HTMLCanvasElement) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  const W = canvas.offsetWidth, H = canvas.offsetHeight
  canvas.width = W; canvas.height = H
  const ctx = canvas.getContext('2d')!
  const worms = Array.from({ length: 22 }, () => {
    const segs = 14, len = 24 + Math.random() * 20, sl = len / segs
    const x = Math.random() * W, y = Math.random() * H, a = Math.random() * Math.PI * 2
    return {
      pts: Array.from({ length: segs }, (_, i) => ({ x: x - Math.cos(a) * sl * i, y: y - Math.sin(a) * sl * i })),
      segs, sl, speed: 0.3 + Math.random() * 0.5, angle: a,
      turn: (Math.random() - 0.5) * 0.04,
      uAmp: 0.3 + Math.random() * 0.3, uFreq: 0.04 + Math.random() * 0.03,
      uPhase: Math.random() * Math.PI * 2, tick: Math.random() * 200,
      thick: 1.1 + Math.random() * 0.8, W, H,
    }
  })
  let raf: number
  const draw = () => {
    ctx.clearRect(0, 0, W, H)
    worms.forEach(w => {
      w.tick++
      w.angle += w.turn + Math.sin(w.tick * w.uFreq + w.uPhase) * w.uAmp * 0.06
      if (Math.random() < 0.003) w.turn = (Math.random() - 0.5) * 0.06
      const hd = w.pts[0]
      const nx = hd.x + Math.cos(w.angle) * w.speed
      const ny = hd.y + Math.sin(w.angle) * w.speed
      w.pts[0].x = nx < -30 ? W + 30 : nx > W + 30 ? -30 : nx
      w.pts[0].y = ny < -30 ? H + 30 : ny > H + 30 ? -30 : ny
      for (let i = 1; i < w.segs; i++) {
        const p = w.pts[i - 1], c = w.pts[i]
        const dx = c.x - p.x, dy = c.y - p.y, d = Math.sqrt(dx * dx + dy * dy)
        if (d === 0) continue
        c.x -= dx * (d - w.sl) / d; c.y -= dy * (d - w.sl) / d
      }
      ctx.beginPath(); ctx.moveTo(w.pts[0].x, w.pts[0].y)
      for (let i = 1; i < w.pts.length - 1; i++) {
        const mx = (w.pts[i].x + w.pts[i + 1].x) / 2, my = (w.pts[i].y + w.pts[i + 1].y) / 2
        ctx.quadraticCurveTo(w.pts[i].x, w.pts[i].y, mx, my)
      }
      ctx.lineTo(w.pts[w.pts.length - 1].x, w.pts[w.pts.length - 1].y)
      ctx.strokeStyle = 'rgba(93,202,165,0.15)'; ctx.lineWidth = w.thick
      ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke()
      ctx.beginPath(); ctx.arc(w.pts[0].x, w.pts[0].y, w.thick * 0.7, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(93,202,165,0.2)'; ctx.fill()
    })
    raf = requestAnimationFrame(draw)
  }
  draw()
  return () => cancelAnimationFrame(raf)
}

export default function WormLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)
  const [msgIdx, setMsgIdx] = useState(0)
  const [bar, setBar] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem('wl_shown')) return
    sessionStorage.setItem('wl_shown', '1')
    setVisible(true)
    const DURATION = 2600
    const iv = setInterval(() => setMsgIdx(i => (i + 1) % MESSAGES.length), DURATION / MESSAGES.length)
    const start = performance.now()
    let raf: number
    const step = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1)
      setBar((1 - Math.pow(1 - p, 3)) * 100)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    const t1 = setTimeout(() => setFading(true), DURATION)
    const t2 = setTimeout(() => setVisible(false), DURATION + 400)
    return () => { clearInterval(iv); cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    if (visible && canvasRef.current) return startWorms(canvasRef.current)
  }, [visible])

  if (!visible) return null

  return (
    <div
      style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.4s ease' }}
      className="fixed inset-0 z-[9999] bg-teal flex flex-col items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 text-center px-6">
        <p className="eyebrow text-[#9FE1CB] mb-2">Founded at Nirma University, Ahmedabad</p>
        <h1 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-tight mb-1">WormEra Research Lab</h1>
        <p className="eyebrow text-[#9FE1CB] mb-8">Science • Data • Impact</p>
        <div className="w-48 h-0.5 bg-white/10 rounded mx-auto mb-3 overflow-hidden">
          <div className="h-full bg-[#5DCAA5] rounded transition-all duration-75" style={{ width: `${bar}%` }} />
        </div>
        <p className="text-[11px] text-[#9FE1CB]/60 tracking-wider h-4">{MESSAGES[msgIdx]}</p>
      </div>
    </div>
  )
}

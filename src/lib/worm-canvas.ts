export interface WormConfig {
  count: number;
  alpha: number;
  speedMultiplier: number;
  color: string;
}

export const DEFAULT_CONFIG: WormConfig = {
  count: 18,
  alpha: 0.07,
  speedMultiplier: 1,
  color: '#5DCAA5',
};

interface Segment {
  x: number;
  y: number;
}

interface Worm {
  pts: Segment[];
  segs: number;
  segLen: number;
  speed: number;
  angle: number;
  turnRate: number;
  undulateAmp: number;
  undulateFreq: number;
  undulatePhase: number;
  tick: number;
  thickness: number;
  W: number;
  H: number;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 93, g: 202, b: 165 };
}

function makeWorm(W: number, H: number, speedMultiplier: number): Worm {
  const segs = 14;
  const len = 22 + Math.random() * 22;
  const segLen = len / segs;
  const x = Math.random() * W;
  const y = Math.random() * H;
  const angle = Math.random() * Math.PI * 2;
  const pts: Segment[] = [];
  for (let i = 0; i < segs; i++) {
    pts.push({ x: x - Math.cos(angle) * segLen * i, y: y - Math.sin(angle) * segLen * i });
  }
  return {
    pts, segs, segLen,
    speed: (0.25 + Math.random() * 0.5) * speedMultiplier,
    angle,
    turnRate: (Math.random() - 0.5) * 0.04,
    undulateAmp: 0.3 + Math.random() * 0.3,
    undulateFreq: 0.04 + Math.random() * 0.03,
    undulatePhase: Math.random() * Math.PI * 2,
    tick: Math.random() * 200,
    thickness: 1.1 + Math.random() * 0.8,
    W, H,
  };
}

function stepWorm(w: Worm): void {
  w.tick++;
  const lateral = Math.sin(w.tick * w.undulateFreq + w.undulatePhase) * w.undulateAmp * 0.06;
  w.angle += w.turnRate + lateral;
  if (Math.random() < 0.003) w.turnRate = (Math.random() - 0.5) * 0.06;
  const head = w.pts[0];
  const nx = head.x + Math.cos(w.angle) * w.speed;
  const ny = head.y + Math.sin(w.angle) * w.speed;
  const pad = 30;
  w.pts[0].x = nx < -pad ? w.W + pad : nx > w.W + pad ? -pad : nx;
  w.pts[0].y = ny < -pad ? w.H + pad : ny > w.H + pad ? -pad : ny;
  for (let i = 1; i < w.segs; i++) {
    const prev = w.pts[i - 1], cur = w.pts[i];
    const dx = cur.x - prev.x, dy = cur.y - prev.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist === 0) continue;
    const ratio = (dist - w.segLen) / dist;
    cur.x -= dx * ratio;
    cur.y -= dy * ratio;
  }
}

function drawWorm(ctx: CanvasRenderingContext2D, w: Worm, alpha: number, rgb: { r: number; g: number; b: number }): void {
  const pts = w.pts;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i + 1].x) / 2;
    const my = (pts[i].y + pts[i + 1].y) / 2;
    ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
  }
  ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
  ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
  ctx.lineWidth = w.thickness;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(pts[0].x, pts[0].y, w.thickness * 0.75, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${Math.min(1, alpha * 1.5)})`;
  ctx.fill();
}

export function startWormAnimation(
  canvas: HTMLCanvasElement,
  config: WormConfig
): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  const rgb = hexToRgb(config.color);
  let rafId: number;
  let worms: Worm[] = [];

  function init() {
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    if (W === 0 || H === 0) return;
    canvas.width = W;
    canvas.height = H;
    worms = Array.from({ length: config.count }, () => makeWorm(W, H, config.speedMultiplier));
  }

  function draw() {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    worms.forEach(w => { stepWorm(w); drawWorm(ctx, w, config.alpha, rgb); });
    rafId = requestAnimationFrame(draw);
  }

  init();
  draw();

  const ro = new ResizeObserver(() => { init(); });
  ro.observe(canvas.parentElement ?? canvas);

  return () => {
    cancelAnimationFrame(rafId);
    ro.disconnect();
  };
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { startWormAnimation } from '@/lib/worm-canvas';

const STATUS_MESSAGES = [
  'Initializing C. elegans model...',
  'Culturing on NGM plates...',
  'Synchronizing L1 larvae...',
  'Running toxicity assay...',
  'Scoring phenotypes...',
  'Rendering data report...',
];

interface WormLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function WormLoader({ onComplete, duration = 2600 }: WormLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [statusIndex, setStatusIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (!canvasRef.current) return;
    return startWormAnimation(canvasRef.current, {
      count: 22,
      alpha: 0.13,
      speedMultiplier: 0.85,
      color: '#5DCAA5',
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex(i => (i + 1) % STATUS_MESSAGES.length);
    }, duration / STATUS_MESSAGES.length);
    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    const start = performance.now();
    let raf: number;
    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setBarWidth(eased * 100);
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [duration]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, duration + 300);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#0A4F5C',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      zIndex: 9999,
    }}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px' }}>
        <p style={{
          fontSize: 11, letterSpacing: '0.22em', color: '#5DCAA5',
          textTransform: 'uppercase', marginBottom: 8, fontFamily: 'system-ui, sans-serif'
        }}>
          Founded at Nirma University, Ahmedabad
        </p>
        <h1 style={{
          fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 700, color: '#ffffff',
          letterSpacing: '-0.02em', marginBottom: 6, fontFamily: 'system-ui, sans-serif'
        }}>
          WormEra Research Lab
        </h1>
        <p style={{
          fontSize: 12, letterSpacing: '0.2em', color: '#9FE1CB',
          textTransform: 'uppercase', marginBottom: 32, fontFamily: 'system-ui, sans-serif'
        }}>
          Science &bull; Data &bull; Impact
        </p>

        <div style={{
          width: 200, height: 2, background: 'rgba(255,255,255,0.12)',
          borderRadius: 1, overflow: 'hidden', margin: '0 auto 14px'
        }}>
          <div style={{
            height: '100%', width: `${barWidth}%`,
            background: '#5DCAA5', borderRadius: 1,
            transition: 'width 0.05s linear',
          }} />
        </div>

        <p style={{
          fontSize: 11, color: 'rgba(159,225,203,0.65)',
          letterSpacing: '0.05em', fontFamily: 'system-ui, sans-serif',
          height: 16,
        }}>
          {STATUS_MESSAGES[statusIndex]}
        </p>
      </div>
    </div>
  );
}

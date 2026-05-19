'use client';

import { useEffect, useRef } from 'react';
import { startWormAnimation, WormConfig, DEFAULT_CONFIG } from '@/lib/worm-canvas';

interface WormBackgroundProps {
  config?: Partial<WormConfig>;
  className?: string;
}

export default function WormBackground({ config, className }: WormBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const merged: WormConfig = { ...DEFAULT_CONFIG, ...config };
    const stop = startWormAnimation(canvasRef.current, merged);
    return stop;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}

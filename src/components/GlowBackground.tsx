// src/components/GlowBackground.tsx
import { useEffect, useRef } from 'react';

export function GlowBackground() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;

    const ease = 1.0;  // au lieu de 0.02 → rattrape en 1 frame
    const intervalMs = 16;  // ~60 FPS max fluide

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const id = window.setInterval(() => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      if (ref.current) {
        ref.current.style.background = `
          radial-gradient(
            520px at ${currentX}px ${currentY}px,
            rgba(230, 57, 50, 0.26),
            transparent 70%
          ),
          #000000
        `;
      }
    }, intervalMs);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.clearInterval(id);
    };
  }, []);

  return <div ref={ref} className="glow-layer" />;
}

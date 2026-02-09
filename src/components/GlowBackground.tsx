// src/components/GlowBackground.tsx
import { useEffect, useRef } from 'react';

export function GlowBackground() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;

    const ease = 0.02;   // très lent
    const intervalMs = 30; // met à jour ~33 fois/sec (moins que RAF)

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
          )
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

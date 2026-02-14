// src/components/GlowBackground.tsx
import { useEffect, useRef } from 'react';

export function GlowBackground() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.background = `
          radial-gradient(
            520px at ${e.clientX}px ${e.clientY}px,
            rgba(230, 57, 50, 0.26),
            transparent 70%
          )
        `;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={ref} className="glow-layer" />;
}

// src/components/BeforeAfterSlider.tsx
import { useRef, useState } from 'react';

type BeforeAfterSliderProps = {
  beforeSrc: string;      // AVANT (en dessous)
  afterSrc: string;       // APRÈS (au dessus)
  alt?: string;
  initialPosition?: number; // 0–100, par défaut 50
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(
    Math.min(100, Math.max(0, initialPosition)),
  );

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    const clamped = Math.min(100, Math.max(0, percent));
    setPosition(clamped);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 1) return;
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setPosition(p => Math.max(0, p - 5));
    } else if (e.key === 'ArrowRight') {
      setPosition(p => Math.min(100, p + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className="before-after-wrapper"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '960px',
        aspectRatio: '16 / 9', // ✅ ratio commun, plus de height fixe
        overflow: 'hidden',
        cursor: 'ew-resize',
        borderRadius: '0.75rem',
      }}
    >
      {/* AVANT en dessous */}
      <img
        src={beforeSrc}
        alt={alt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* APRÈS au-dessus, recadré */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${position}%`,
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <img
          src={afterSrc}
          alt={alt}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Barre centrale */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: `${position}%`,
          transform: 'translateX(-50%)',
          width: '2px',
          height: '100%',
          backgroundColor: 'rgba(255,255,255,0.9)',
        }}
      />

      {/* Poignée accessible */}
      <button
        type="button"
        onKeyDown={handleKeyDown}
        style={{
          position: 'absolute',
          top: '50%',
          left: `${position}%`,
          transform: 'translate(-50%, -50%)',
          width: '32px',
          height: '32px',
          borderRadius: '999px',
          backgroundColor: '#ffffff',
          border: '2px solid #111827',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(15, 23, 42, 0.35)',
          cursor: 'grab',
        }}
        aria-label="Faire glisser pour comparer avant et après"
      >
        <span style={{ fontSize: '16px', lineHeight: 1 }}>{'↔'}</span>
      </button>
    </div>
  );
}

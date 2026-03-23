"use client";

import { useRef, useState, useEffect } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
  initialPosition?: number;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt = "Avant / Après",
  initialPosition = 50,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(initialPosition);
  const [drag, setDrag] = useState(false);

  const update = (x: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const percent = ((x - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, percent)));
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (drag) update(e.clientX);
    };

    const up = () => setDrag(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [drag]);

  useEffect(() => {
    const move = (e: TouchEvent) => {
      if (drag) update(e.touches[0].clientX);
    };

    const end = () => setDrag(false);

    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", end);

    return () => {
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, [drag]);

  const clip = `inset(0 ${100 - pos}% 0 0)`;

  const imageStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    pointerEvents: "none",
    userSelect: "none",
  };

  return (
    <div
      ref={ref}
      onMouseDown={(e) => {
        setDrag(true);
        update(e.clientX);
      }}
      onTouchStart={(e) => {
        setDrag(true);
        update(e.touches[0].clientX);
      }}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4/3",
        overflow: "hidden",
        borderRadius: "20px",
        cursor: drag ? "grabbing" : "ew-resize",
        userSelect: "none",
        background: "#0f172a",
        touchAction: "none",
      }}
    >
      {/* AFTER */}
      <img
        src={afterSrc}
        alt={`${alt} après`}
        style={imageStyle}
        draggable={false}
      />

      {/* BEFORE */}
      <img
        src={beforeSrc}
        alt={`${alt} avant`}
        draggable={false}
        style={{
          ...imageStyle,
          clipPath: clip,
          transition: drag ? "none" : "clip-path 0.25s ease",
        }}
      />

      {/* OVERLAY subtil */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* LABEL AVANT */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          background: "rgba(0,0,0,0.6)",
          padding: "6px 12px",
          borderRadius: "999px",
          fontSize: "12px",
          backdropFilter: "blur(6px)",
          color: "#fff",
          zIndex: 5,
        }}
      >
        Avant
      </div>

      {/* LABEL APRÈS */}
      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "rgba(0,0,0,0.6)",
          padding: "6px 12px",
          borderRadius: "999px",
          fontSize: "12px",
          backdropFilter: "blur(6px)",
          color: "#fff",
          zIndex: 5,
        }}
      >
        Après
      </div>

      {/* LIGNE CENTRALE */}
      <div
        style={{
          position: "absolute",
          left: `${pos}%`,
          top: 0,
          transform: "translateX(-50%)",
          width: "2px",
          height: "100%",
          background: "#fff",
          boxShadow: "0 0 15px rgba(255,255,255,0.9)",
          zIndex: 6,
          pointerEvents: "none",
        }}
      />

      {/* HANDLE */}
      <div
        style={{
          position: "absolute",
          left: `${pos}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "46px",
            borderRadius: "999px",
            background: "rgba(15,23,42,0.85)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 12px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            ←
          </span>

          <div
            style={{
              width: "1px",
              height: "16px",
              background: "rgba(255,255,255,0.3)",
            }}
          />

          <span
            style={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}
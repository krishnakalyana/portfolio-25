"use client";

import { useMemo } from "react";

const GLYPHS = [
  "ア",
  "カ",
  "タ",
  "ナ",
  "ス",
  "メ",
  "ラ",
  "Ω",
  "λ",
  "ψ",
  "∑",
  "≡",
  "◉",
  "◆",
  "▣",
  "✦",
  "☍",
];

export default function CyberFX() {
  const items = useMemo(
    () =>
      new Array(18).fill(0).map((_, i) => ({
        char: GLYPHS[i % GLYPHS.length],
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: `${(Math.random() * 4).toFixed(2)}s`,
        duration: `${(8 + Math.random() * 6).toFixed(2)}s`,
        scale: (0.85 + Math.random() * 1.15).toFixed(2),
      })),
    []
  );

  return (
    <div aria-hidden className="cyberfx fixed inset-0 pointer-events-none">
      {items.map((it, i) => (
        <span
          key={i}
          className="cyber-glyph"
          style={{
            left: `${it.left}%`,
            top: `${it.top}%`,
            animationDelay: it.delay,
            animationDuration: it.duration,
            transform: `scale(${it.scale})`,
          }}
        >
          {it.char}
        </span>
      ))}
      <div className="hud-corner tl" />
      <div className="hud-corner br" />
    </div>
  );
}



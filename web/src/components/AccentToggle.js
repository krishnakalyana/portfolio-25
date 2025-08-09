"use client";

import { useEffect, useState } from "react";

const PALETTES = {
  cyber: {
    name: "Cyber",
    accents: ["0, 221, 255", "255, 0, 170", "0, 255, 170"],
  },
  synth: {
    name: "Synth",
    accents: ["165, 105, 255", "255, 90, 150", "0, 255, 200"],
  },
  lime: {
    name: "Lime",
    accents: ["0, 255, 170", "170, 255, 0", "0, 200, 255"],
  },
};

function applyPalette(accents) {
  const root = document.documentElement;
  root.style.setProperty("--accent1", accents[0]);
  root.style.setProperty("--accent2", accents[1]);
  root.style.setProperty("--accent3", accents[2]);
}

export default function AccentToggle() {
  const [key, setKey] = useState("cyber");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("accentTheme") : null;
    const initialKey = saved && PALETTES[saved] ? saved : "cyber";
    setKey(initialKey);
    applyPalette(PALETTES[initialKey].accents);
  }, []);

  function onSelect(newKey) {
    setKey(newKey);
    const palette = PALETTES[newKey];
    applyPalette(palette.accents);
    localStorage.setItem("accentTheme", newKey);
  }

  return (
    <div className="flex items-center gap-1.5 text-xs">
      {Object.entries(PALETTES).map(([k, p]) => (
        <button
          key={k}
          onClick={() => onSelect(k)}
          aria-label={`Accent ${p.name}`}
          className={`h-7 px-2 rounded-md border transition-colors ${
            key === k ? "border-foreground/40" : "border-foreground/15 hover:border-foreground/30"
          }`}
          style={{
            background:
              key === k
                ? `linear-gradient(90deg, rgba(${p.accents[0]},0.35), rgba(${p.accents[1]},0.35))`
                : `linear-gradient(90deg, rgba(${p.accents[0]},0.2), rgba(${p.accents[1]},0.2))`,
          }}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}



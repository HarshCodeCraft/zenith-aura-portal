import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 mix-blend-screen blur-3xl transition-transform duration-150"
      style={{
        left: pos.x,
        top: pos.y,
        background: "radial-gradient(circle, #6C63FF 0%, #00E5FF 40%, transparent 70%)",
      }}
    />
  );
}

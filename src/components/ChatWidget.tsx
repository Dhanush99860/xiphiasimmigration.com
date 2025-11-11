"use client";

import React from "react";

type Props = { defaultOpen?: boolean };

export default function ChatWidget({ defaultOpen = false }: Props) {
  const url = process.env.NEXT_PUBLIC_N8N_CHAT_URL;
  if (!url) return null;

  const [open, setOpen] = React.useState(defaultOpen);
  const [bottomGutter, setBottomGutter] = React.useState(16); // px

  // Keep it right-bottom on all screens. Only bottom gutter changes.
  React.useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      // give a little more bottom space on larger screens to avoid footer widgets
      setBottomGutter(w >= 768 ? 96 : 16);
    };
    compute();
    const onResize = () => window.requestAnimationFrame(compute);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const z = 2147483000; // very high so nothing overlaps
  const bottomWithSafeArea = `calc(${bottomGutter}px + env(safe-area-inset-bottom, 0px))`;

  return (
    <>
      {/* Toggle bubble (always right-bottom) */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-controls="xiphias-chat-frame"
        onClick={() => setOpen(v => !v)}
        style={{
          position: "fixed",
          right: 16,
          bottom: bottomWithSafeArea,
          width: 56,
          height: 56,
          border: 0,
          borderRadius: 9999,
          background: "#0F2D81",
          color: "#fff",
          boxShadow: "0 12px 28px rgba(0,0,0,.24)",
          cursor: "pointer",
          fontSize: 22,
          lineHeight: "56px",
          zIndex: z,
        }}
        title={open ? "Close chat" : "Chat with us"}
      >
        {open ? "×" : "💬"}
      </button>

      {/* Chat panel (right-bottom, clamped to viewport) */}
      <iframe
        id="xiphias-chat-frame"
        title="XIPHIAS Chat"
        src={url}
        style={{
          position: "fixed",
          right: 16,
          bottom: `calc(${bottomWithSafeArea} + 64px)`, // sits above the bubble
          width: "min(380px, calc(100vw - 32px))",
          height: "min(560px, calc(100vh - 32px))",
          display: open ? "block" : "none",
          border: "none",
          borderRadius: 12,
          boxShadow: "0 18px 40px rgba(0,0,0,.22)",
          background: "#fff",
          zIndex: z - 1,
          contain: "layout style paint",
        }}
        sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
      />
    </>
  );
}
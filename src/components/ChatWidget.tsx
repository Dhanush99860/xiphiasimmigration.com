"use client";

import React from "react";

type Props = { defaultOpen?: boolean };
type FloatingLayout = {
  right: number;
  bottom: number;
  buttonSize: number;
  stackGap: number;
  panelWidth: number;
  panelHeight: number;
};

function getFloatingLayout(width: number): FloatingLayout {
  if (width < 640) {
    return {
      right: 12,
      bottom: 12,
      buttonSize: 52,
      stackGap: 10,
      panelWidth: 360,
      panelHeight: 460,
    };
  }

  if (width < 1024) {
    return {
      right: 14,
      bottom: 14,
      buttonSize: 54,
      stackGap: 10,
      panelWidth: 372,
      panelHeight: 520,
    };
  }

  return {
    right: 20,
    bottom: 20,
    buttonSize: 58,
    stackGap: 12,
    panelWidth: 390,
    panelHeight: 560,
  };
}

function BubbleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10h10" />
      <path d="M7 14h6" />
      <path d="M21 11a8 8 0 0 1-8 8H6l-3 3v-7a8 8 0 1 1 18-4Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function ChatWidget({ defaultOpen = false }: Props) {
  const url = process.env.NEXT_PUBLIC_N8N_CHAT_URL;
  if (!url) return null;

  const [open, setOpen] = React.useState(defaultOpen);
  const [shouldLoadFrame, setShouldLoadFrame] = React.useState(defaultOpen);
  const [layout, setLayout] = React.useState<FloatingLayout>(() =>
    getFloatingLayout(1280),
  );

  React.useEffect(() => {
    const applyLayout = () => {
      const next = getFloatingLayout(window.innerWidth);
      setLayout(next);

      const root = document.documentElement;
      root.style.setProperty("--floating-chat-right", `${next.right}px`);
      root.style.setProperty(
        "--floating-chat-bottom",
        `calc(${next.bottom}px + env(safe-area-inset-bottom, 0px))`,
      );
      root.style.setProperty("--floating-chat-size", `${next.buttonSize}px`);
      root.style.setProperty("--floating-chat-gap", `${next.stackGap}px`);
    };
    applyLayout();

    const onResize = () => window.requestAnimationFrame(applyLayout);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      const root = document.documentElement;
      root.style.removeProperty("--floating-chat-right");
      root.style.removeProperty("--floating-chat-bottom");
      root.style.removeProperty("--floating-chat-size");
      root.style.removeProperty("--floating-chat-gap");
    };
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("xiphias-chat-state", { detail: { open } }),
    );
  }, [open]);

  React.useEffect(
    () => () => {
      window.dispatchEvent(
        new CustomEvent("xiphias-chat-state", { detail: { open: false } }),
      );
    },
    [],
  );

  const z = 2147483000;
  const bottomWithSafeArea = `calc(${layout.bottom}px + env(safe-area-inset-bottom, 0px))`;
  const panelBottom = `calc(${bottomWithSafeArea} + ${layout.buttonSize + layout.stackGap}px)`;

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        aria-controls={shouldLoadFrame ? "xiphias-chat-frame" : undefined}
        onClick={() =>
          setOpen((v) => {
            const next = !v;
            if (next) setShouldLoadFrame(true);
            return next;
          })
        }
        style={{
          position: "fixed",
          right: layout.right,
          bottom: bottomWithSafeArea,
          width: layout.buttonSize,
          height: layout.buttonSize,
          border: "1px solid rgba(255,255,255,0.22)",
          borderRadius: 9999,
          background: "linear-gradient(135deg, #ceaf23ec 0%, #f0d043 100%)",
          color: "#000000",
          boxShadow:
            "0 12px 28px rgba(12,36,90,0.35), 0 2px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 140ms ease, filter 140ms ease",
          zIndex: z,
        }}
        title={open ? "Close chat" : "Chat with us"}
      >
        {open ? <CloseIcon /> : <BubbleIcon />}
      </button>

      {shouldLoadFrame && (
        <iframe
          id="xiphias-chat-frame"
          title="XIPHIAS Chat"
          src={url}
          loading="lazy"
          style={{
            position: "fixed",
            right: layout.right,
            bottom: panelBottom,
            width: `min(${layout.panelWidth}px, calc(100vw - ${layout.right * 2}px))`,
            height: `min(${layout.panelHeight}px, calc(100vh - ${layout.bottom * 2 + 16}px))`,
            display: open ? "block" : "none",
            border: "1px solid rgba(28,87,180,0.2)",
            borderRadius: 14,
            boxShadow: "0 18px 40px rgba(0,0,0,.22)",
            background: "#fff",
            zIndex: z - 1,
            contain: "layout style paint",
          }}
          sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
        />
      )}
    </>
  );
}

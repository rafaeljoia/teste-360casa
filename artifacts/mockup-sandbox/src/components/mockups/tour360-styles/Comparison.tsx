import React from "react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const PREVIEWS = [
  { label: "Moderno Minimalista", accent: "#C9A84C", path: "tour360-styles/Minimalista" },
  { label: "Dark & Sofisticado",   accent: "#2E86AB", path: "tour360-styles/Dark" },
  { label: "Aconchegante & Residencial", accent: "#C1440E", path: "tour360-styles/Aconchegante" },
];

export default function Comparison() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
        background: "#111",
        overflow: "hidden",
        gap: 0,
      }}
    >
      {PREVIEWS.map(({ label, accent, path }) => (
        <div
          key={path}
          style={{
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            borderRight: "2px solid #222",
            overflow: "hidden",
          }}
        >
          <iframe
            src={`${BASE}/preview/${path}`}
            title={label}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
            }}
            sandbox="allow-scripts allow-same-origin"
          />
          <div
            style={{
              position: "absolute",
              bottom: 14,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(8px)",
              border: `1.5px solid ${accent}`,
              borderRadius: 999,
              padding: "5px 18px",
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "system-ui, sans-serif",
              color: "#fff",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            <span style={{ color: accent, marginRight: 6 }}>●</span>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

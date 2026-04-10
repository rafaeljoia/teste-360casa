import React from "react";
import { Minimalista } from "./Minimalista";
import { Dark } from "./Dark";
import { Aconchegante } from "./Aconchegante";

export default function Comparison() {
  const styles = [
    { label: "Moderno Minimalista", accent: "#C9A84C", Component: Minimalista },
    { label: "Dark & Sofisticado",  accent: "#2E86AB", Component: Dark },
    { label: "Aconchegante & Residencial", accent: "#C1440E", Component: Aconchegante },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
        background: "#1a1a1a",
        gap: 0,
        overflow: "hidden",
      }}
    >
      {styles.map(({ label, accent, Component }) => (
        <div
          key={label}
          style={{
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRight: "2px solid #2a2a2a",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
              background: "rgba(0,0,0,0.72)",
              backdropFilter: "blur(8px)",
              border: `1.5px solid ${accent}`,
              borderRadius: 999,
              padding: "6px 18px",
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
          <div style={{ flex: 1, overflow: "hidden", transform: "scale(1)", transformOrigin: "top left" }}>
            <Component />
          </div>
        </div>
      ))}
    </div>
  );
}

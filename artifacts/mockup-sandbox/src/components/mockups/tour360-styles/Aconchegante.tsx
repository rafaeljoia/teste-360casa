import React, { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  MapPin
} from "lucide-react";

const TERRACOTA = "#C1440E";
const BEGE = "#F4ECD8";

export function Aconchegante() {
  const [activeScene, setActiveScene] = useState("sala");
  const [isPlaying, setIsPlaying] = useState(true);

  const scenes = [
    { id: "foto_entrada", label: "Fachada" },
    { id: "entrada-sala", label: "Hall de Entrada" },
    { id: "sala", label: "Sala de Estar" },
  ];

  return (
    <div
      className="relative w-full h-[720px] max-w-[1280px] mx-auto overflow-hidden flex flex-col select-none"
      style={{ fontFamily: "'Poppins', sans-serif", background: BEGE }}
    >
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');` }} />

      {/* 360 Background Simulation */}
      <div className="absolute inset-0 z-0">
        <img
          src="/__mockup/images/aconchegante-bg.png"
          alt="360 View"
          className="w-full h-full object-cover object-center"
          style={{
            transform: isPlaying ? "scale(1.1) translateX(-2%)" : "scale(1.05) translateX(0%)",
            transition: isPlaying
              ? "transform 20s linear infinite alternate"
              : "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(58,45,35,0.6) 0%, transparent 50%, rgba(58,45,35,0.3) 100%)`,
          }}
        />
      </div>

      {/* Top Navigation */}
      <div className="relative z-10 flex justify-center p-6">
        <div
          className="flex p-2 rounded-full shadow-lg border"
          style={{ background: "rgba(253,251,247,0.92)", borderColor: "#F4EFE6", backdropFilter: "blur(8px)" }}
        >
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(scene.id)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={
                activeScene === scene.id
                  ? { background: TERRACOTA, color: "white", boxShadow: "0 2px 8px rgba(193,68,14,0.3)" }
                  : { color: "#5C4A3D" }
              }
            >
              {scene.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Interface Area */}
      <div className="relative z-10 mt-auto p-8 flex items-end justify-between">
        {/* Scene Title */}
        <div
          className="px-6 py-4 rounded-3xl shadow-xl border max-w-xs"
          style={{ background: "rgba(253,251,247,0.97)", borderColor: "#F4EFE6" }}
        >
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: BEGE, color: TERRACOTA }}
            >
              <MapPin size={16} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: TERRACOTA }}>
              Você está em
            </p>
          </div>
          <h2 className="text-2xl font-semibold mt-1 ml-11" style={{ color: "#4A3C31" }}>
            {scenes.find((s) => s.id === activeScene)?.label}
          </h2>
          <p className="text-sm mt-2 ml-11" style={{ color: "#7A6B5D" }}>
            Explore cada detalhe deste ambiente aconchegante.
          </p>
        </div>

        {/* Controls */}
        <div className="flex gap-6 items-end">
          {/* Zoom & Auto-rotate Controls */}
          <div className="flex flex-col gap-3">
            <button
              className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors border"
              style={{ background: "rgba(253,251,247,0.92)", borderColor: "#F4EFE6", color: "#5C4A3D" }}
              onClick={() => setIsPlaying(!isPlaying)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = TERRACOTA;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(253,251,247,0.92)";
                e.currentTarget.style.color = "#5C4A3D";
              }}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </button>
            <div
              className="flex flex-col rounded-full shadow-lg border overflow-hidden"
              style={{ background: "rgba(253,251,247,0.92)", borderColor: "#F4EFE6" }}
            >
              <button
                className="w-12 h-12 flex items-center justify-center transition-colors"
                style={{ color: "#5C4A3D" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = BEGE)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "")}
              >
                <ZoomIn size={20} />
              </button>
              <div className="h-px w-8 mx-auto" style={{ background: BEGE }} />
              <button
                className="w-12 h-12 flex items-center justify-center transition-colors"
                style={{ color: "#5C4A3D" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = BEGE)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "")}
              >
                <ZoomOut size={20} />
              </button>
            </div>
          </div>

          {/* D-Pad Controls */}
          <div
            className="grid grid-cols-3 grid-rows-3 gap-2 p-3 rounded-[2rem] shadow-xl border"
            style={{ background: "rgba(253,251,247,0.92)", borderColor: "#F4EFE6" }}
          >
            <div />
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{ background: BEGE, color: "#5C4A3D" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = TERRACOTA;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = BEGE;
                e.currentTarget.style.color = "#5C4A3D";
              }}
            >
              <ChevronUp size={24} />
            </button>
            <div />
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{ background: BEGE, color: "#5C4A3D" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = TERRACOTA;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = BEGE;
                e.currentTarget.style.color = "#5C4A3D";
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <div
              className="w-12 h-12 rounded-full border-4"
              style={{ borderColor: BEGE }}
            />
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{ background: BEGE, color: "#5C4A3D" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = TERRACOTA;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = BEGE;
                e.currentTarget.style.color = "#5C4A3D";
              }}
            >
              <ChevronRight size={24} />
            </button>
            <div />
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{ background: BEGE, color: "#5C4A3D" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = TERRACOTA;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = BEGE;
                e.currentTarget.style.color = "#5C4A3D";
              }}
            >
              <ChevronDown size={24} />
            </button>
            <div />
          </div>
        </div>
      </div>

      {/* Style Label */}
      <div
        className="absolute top-8 left-8 px-4 py-2 rounded-full border shadow-md"
        style={{ background: "rgba(253,251,247,0.92)", borderColor: "#F4EFE6" }}
      >
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: TERRACOTA }}>
          Aconchegante & Residencial
        </span>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  ZoomIn, ZoomOut, Play, Pause, MapPin, Maximize,
  Info, Compass, Layers
} from "lucide-react";

const TEAL = "#2E86AB";

export function Dark() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeScene, setActiveScene] = useState("sala");

  return (
    <div className="relative w-full h-full min-h-[720px] bg-neutral-950 text-white overflow-hidden font-sans select-none flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/__mockup/images/dark-pano-bg.png"
          alt="360 Panorama"
          className="w-full h-full object-cover opacity-70"
          style={{ transform: "scale(1.05)", filter: "brightness(0.8) contrast(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
      </div>

      {/* Top Navigation */}
      <header className="relative z-10 w-full p-6 flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border flex items-center justify-center shadow-lg"
            style={{ borderColor: `${TEAL}33`, color: TEAL, boxShadow: `0 0 15px ${TEAL}26` }}
          >
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">VILLA LUMINOSA</h1>
            <p className="text-xs font-bold tracking-[0.2em] uppercase mt-0.5" style={{ color: TEAL }}>
              Premium Virtual Tour
            </p>
          </div>
        </div>

        <nav className="flex bg-black/50 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl">
          {["foto_entrada", "entrada-sala", "sala"].map((scene) => (
            <button
              key={scene}
              onClick={() => setActiveScene(scene)}
              className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300"
              style={
                activeScene === scene
                  ? {
                      background: `${TEAL}20`,
                      color: TEAL,
                      border: `1px solid ${TEAL}4D`,
                      boxShadow: `0 0 20px ${TEAL}33`,
                    }
                  : { color: "rgba(255,255,255,0.6)", border: "1px solid transparent" }
              }
            >
              {scene.replace("_", " ").replace("-", " ")}
            </button>
          ))}
        </nav>

        <div className="flex gap-3">
          <button
            className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors shadow-xl"
            onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <Info className="w-5 h-5" />
          </button>
          <button
            className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors shadow-xl"
            onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <Layers className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Center Reticle */}
      <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none">
        <div className="w-40 h-40 border border-white/10 rounded-full flex items-center justify-center relative">
          <div
            className="w-1 h-1 rounded-full shadow-lg"
            style={{ background: TEAL, boxShadow: `0 0 10px ${TEAL}` }}
          />
          <div
            className="absolute top-0 w-full h-full border rounded-full animate-[spin_15s_linear_infinite]"
            style={{ borderColor: `${TEAL}33`, borderTopColor: TEAL }}
          />
          <div className="absolute top-2 w-[calc(100%-16px)] h-[calc(100%-16px)] border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse] border-b-white/40" />
        </div>

        {/* Mock Hotspots */}
        <div className="absolute top-1/3 left-1/4 pointer-events-auto group cursor-pointer">
          <div
            className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ border: `1px solid ${TEAL}66`, boxShadow: `0 0 20px ${TEAL}33` }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full group-hover:animate-pulse"
              style={{ background: TEAL, boxShadow: `0 0 8px ${TEAL}` }}
            />
          </div>
          <div
            className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 backdrop-blur-xl text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-lg whitespace-nowrap"
            style={{ border: `1px solid ${TEAL}4D` }}
          >
            Kitchen Area
          </div>
        </div>

        <div className="absolute bottom-1/3 right-1/4 pointer-events-auto group cursor-pointer">
          <div className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="w-2.5 h-2.5 bg-white/80 rounded-full transition-colors" />
          </div>
          <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 backdrop-blur-xl text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-lg border border-white/20 whitespace-nowrap">
            Terrace
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <footer className="relative z-10 w-full p-8 flex items-end justify-between">
        {/* Scene Info */}
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 w-96 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full" style={{ background: TEAL }} />
          <div className="flex items-center gap-2 mb-3" style={{ color: TEAL }}>
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.15em] uppercase">Current View</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-2 tracking-tight capitalize text-white">
            {activeScene.replace("-", " ")}
          </h2>
          <p className="text-sm text-white/50 leading-relaxed font-medium">
            Experience the sophisticated architecture and premium materials. Move the view to explore.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center gap-6">
          {/* D-Pad */}
          <div className="relative w-36 h-36 bg-black/60 backdrop-blur-2xl rounded-full border border-white/10 p-2 shadow-2xl">
            <div className="absolute inset-3 border border-white/5 rounded-full" />
            <button
              className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:bg-white/10 rounded-full transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <ChevronUp className="w-6 h-6" />
            </button>
            <button
              className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:bg-white/10 rounded-full transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <ChevronDown className="w-6 h-6" />
            </button>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:bg-white/10 rounded-full transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:bg-white/10 rounded-full transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: `${TEAL}CC`, boxShadow: `0 0 8px ${TEAL}` }}
              />
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full p-2.5 shadow-2xl">
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <div className="w-px h-8 bg-white/10 mx-1" />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
              style={
                isPlaying
                  ? { background: TEAL, color: "black", boxShadow: `0 0 15px ${TEAL}66` }
                  : { background: "rgba(255,255,255,0.1)", color: "white" }
              }
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-1" />
              )}
            </button>
            <div className="w-px h-8 bg-white/10 mx-1" />
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Style Label */}
      <div
        className="absolute top-8 left-8 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border"
        style={{ borderColor: `${TEAL}33` }}
      >
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: TEAL }}>
          Dark & Sofisticado
        </span>
      </div>
    </div>
  );
}

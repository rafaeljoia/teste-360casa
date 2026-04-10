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
  MapPin,
  Info
} from "lucide-react";

export function Minimalista() {
  const [activeScene, setActiveScene] = useState("entrada-sala");
  const [isPlaying, setIsPlaying] = useState(true);

  const scenes = [
    { id: "foto_entrada", name: "Exterior Entry" },
    { id: "entrada-sala", name: "Entryway & Living" },
    { id: "sala", name: "Main Living Room" },
  ];

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-zinc-50 font-sans select-none flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-[150%] h-[150%] -left-[25%] -top-[25%] bg-cover bg-center transition-transform duration-[30s] ease-linear"
        style={{
          backgroundImage: 'url("/__mockup/images/minimalist-panorama.png")',
          transform: isPlaying ? 'translateX(-5%) scale(1.05)' : 'translateX(0) scale(1)',
        }}
      />

      {/* Top Navigation Bar */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1 bg-white/60 backdrop-blur-xl p-1.5 rounded-full border border-white/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)]">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(scene.id)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all duration-300 font-medium ${
                activeScene === scene.id
                  ? "bg-white shadow-sm text-amber-700"
                  : "text-zinc-600 hover:text-amber-700 hover:bg-white/40"
              }`}
            >
              {scene.name}
            </button>
          ))}
        </div>
      </div>

      {/* Scene Title Bar */}
      <div className="absolute bottom-10 left-10">
        <div className="bg-white/60 backdrop-blur-xl px-7 py-5 rounded-3xl border border-white/80 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] flex flex-col gap-1 max-w-sm">
          <div className="flex items-center gap-2 text-amber-700 mb-1">
            <MapPin size={16} strokeWidth={2.5} />
            <span className="text-xs font-semibold tracking-widest uppercase">Current View</span>
          </div>
          <h1 className="text-3xl font-light tracking-tight text-zinc-900">
            {scenes.find(s => s.id === activeScene)?.name || "Living Space"}
          </h1>
          <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
            Experience the seamless flow of light and space in this elegantly minimalist architectural design.
          </p>
        </div>
      </div>

      {/* Center Play/Pause */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center justify-center w-16 h-16 bg-white/70 backdrop-blur-xl rounded-full border border-white/80 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] text-amber-700 hover:bg-white hover:scale-105 transition-all duration-300 focus:outline-none"
        >
          {isPlaying ? (
            <Pause size={24} strokeWidth={1.5} className="fill-current" />
          ) : (
            <Play size={24} strokeWidth={1.5} className="ml-1 fill-current" />
          )}
        </button>
      </div>

      {/* Right Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4">
        {/* Zoom Controls */}
        <div className="flex flex-col gap-2 bg-white/60 backdrop-blur-xl p-2 rounded-2xl border border-white/80 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)]">
          <button className="p-3 rounded-xl text-zinc-600 hover:text-amber-700 hover:bg-white/80 transition-colors focus:outline-none">
            <ZoomIn size={20} strokeWidth={2} />
          </button>
          <div className="h-px bg-zinc-200/50 mx-2" />
          <button className="p-3 rounded-xl text-zinc-600 hover:text-amber-700 hover:bg-white/80 transition-colors focus:outline-none">
            <ZoomOut size={20} strokeWidth={2} />
          </button>
        </div>

        {/* D-Pad Controls */}
        <div className="grid grid-cols-3 grid-rows-3 gap-1 bg-white/60 backdrop-blur-xl p-2 rounded-2xl border border-white/80 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)]">
          <div />
          <button className="p-2 rounded-xl text-zinc-600 hover:text-amber-700 hover:bg-white/80 transition-colors flex items-center justify-center focus:outline-none">
            <ChevronUp size={20} strokeWidth={2.5} />
          </button>
          <div />
          
          <button className="p-2 rounded-xl text-zinc-600 hover:text-amber-700 hover:bg-white/80 transition-colors flex items-center justify-center focus:outline-none">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button className="p-2 rounded-xl text-amber-700/50 hover:text-amber-700 hover:bg-white/80 transition-colors flex items-center justify-center focus:outline-none">
            <Info size={18} strokeWidth={2} />
          </button>
          <button className="p-2 rounded-xl text-zinc-600 hover:text-amber-700 hover:bg-white/80 transition-colors flex items-center justify-center focus:outline-none">
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
          
          <div />
          <button className="p-2 rounded-xl text-zinc-600 hover:text-amber-700 hover:bg-white/80 transition-colors flex items-center justify-center focus:outline-none">
            <ChevronDown size={20} strokeWidth={2.5} />
          </button>
          <div />
        </div>
      </div>
    </div>
  );
}

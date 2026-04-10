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
      className="relative w-full h-[720px] max-w-[1280px] mx-auto overflow-hidden rounded-2xl shadow-2xl flex flex-col font-['Poppins',sans-serif] bg-[#E8E3D9]"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      `}} />
      
      {/* 360 Background Simulation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/__mockup/images/aconchegante-bg.png" 
          alt="360 View" 
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-30000 ease-linear origin-center"
          style={{
            transform: isPlaying ? 'scale(1.1) translateX(-2%)' : 'scale(1.05) translateX(0%)',
            transition: isPlaying ? 'transform 20s linear infinite alternate' : 'transform 0.5s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A2D23]/60 via-transparent to-[#3A2D23]/30 mix-blend-multiply"></div>
      </div>

      {/* Top Navigation */}
      <div className="relative z-10 flex justify-center p-6">
        <div className="flex bg-[#FDFBF7]/90 backdrop-blur-md p-2 rounded-full shadow-lg border border-[#F4EFE6]">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(scene.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeScene === scene.id
                  ? "bg-[#D3765A] text-white shadow-md"
                  : "text-[#5C4A3D] hover:bg-[#F4EFE6]"
              }`}
            >
              {scene.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Interface Area */}
      <div className="relative z-10 mt-auto p-8 flex items-end justify-between pointer-events-none">
        
        {/* Scene Title */}
        <div className="pointer-events-auto bg-[#FDFBF7]/95 backdrop-blur-sm px-6 py-4 rounded-3xl shadow-xl border border-[#F4EFE6] max-w-xs">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-[#E8E3D9] flex items-center justify-center text-[#D3765A]">
              <MapPin size={16} weight="fill" />
            </div>
            <p className="text-xs font-semibold text-[#D3765A] uppercase tracking-wider">Você está em</p>
          </div>
          <h2 className="text-2xl font-semibold text-[#4A3C31] mt-1 ml-11">
            {scenes.find(s => s.id === activeScene)?.label}
          </h2>
          <p className="text-sm text-[#7A6B5D] mt-2 ml-11">
            Explore cada detalhe deste ambiente aconchegante.
          </p>
        </div>

        {/* Controls */}
        <div className="pointer-events-auto flex gap-6 items-end">
          
          {/* Zoom & Auto-rotate Controls */}
          <div className="flex flex-col gap-3">
            <button 
              className="w-12 h-12 rounded-full bg-[#FDFBF7]/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#5C4A3D] hover:bg-[#D3765A] hover:text-white transition-colors border border-[#F4EFE6]"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </button>
            <div className="flex flex-col bg-[#FDFBF7]/90 backdrop-blur-sm rounded-full shadow-lg border border-[#F4EFE6] overflow-hidden">
              <button className="w-12 h-12 flex items-center justify-center text-[#5C4A3D] hover:bg-[#F4EFE6] transition-colors">
                <ZoomIn size={20} />
              </button>
              <div className="h-px w-8 mx-auto bg-[#E8E3D9]"></div>
              <button className="w-12 h-12 flex items-center justify-center text-[#5C4A3D] hover:bg-[#F4EFE6] transition-colors">
                <ZoomOut size={20} />
              </button>
            </div>
          </div>

          {/* D-Pad Controls */}
          <div className="grid grid-cols-3 grid-rows-3 gap-2 bg-[#FDFBF7]/90 backdrop-blur-sm p-3 rounded-[2rem] shadow-xl border border-[#F4EFE6]">
            <div />
            <button className="w-12 h-12 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#5C4A3D] hover:bg-[#D3765A] hover:text-white transition-colors">
              <ChevronUp size={24} />
            </button>
            <div />
            <button className="w-12 h-12 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#5C4A3D] hover:bg-[#D3765A] hover:text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="w-12 h-12 rounded-full border-4 border-[#E8E3D9]" />
            <button className="w-12 h-12 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#5C4A3D] hover:bg-[#D3765A] hover:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
            <div />
            <button className="w-12 h-12 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#5C4A3D] hover:bg-[#D3765A] hover:text-white transition-colors">
              <ChevronDown size={24} />
            </button>
            <div />
          </div>

        </div>
      </div>
    </div>
  );
}

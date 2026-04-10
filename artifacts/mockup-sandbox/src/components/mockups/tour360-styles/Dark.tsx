import React, { useState } from 'react';
import { 
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, 
  ZoomIn, ZoomOut, Play, Pause, MapPin, Maximize, 
  Info, Compass, Layers
} from 'lucide-react';

export function Dark() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeScene, setActiveScene] = useState('sala');

  return (
    <div className="relative w-full h-full min-h-[720px] bg-neutral-950 text-white overflow-hidden font-sans select-none flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/__mockup/images/dark-pano-bg.png" 
          alt="360 Panorama" 
          className="w-full h-full object-cover opacity-70"
          style={{ transform: 'scale(1.05)', filter: 'brightness(0.8) contrast(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
      </div>

      {/* Top Navigation */}
      <header className="relative z-10 w-full p-6 flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-teal-500/20 flex items-center justify-center text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">VILLA LUMINOSA</h1>
            <p className="text-teal-400 text-xs font-bold tracking-[0.2em] uppercase mt-0.5">Premium Virtual Tour</p>
          </div>
        </div>

        <nav className="flex bg-black/50 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl">
          {['foto_entrada', 'entrada-sala', 'sala'].map((scene) => (
            <button
              key={scene}
              onClick={() => setActiveScene(scene)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeScene === scene 
                  ? 'bg-teal-500/20 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] border border-teal-500/30' 
                  : 'text-white/60 hover:text-white hover:bg-white/10 border border-transparent'
              }`}
            >
              {scene.replace('_', ' ').replace('-', ' ')}
            </button>
          ))}
        </nav>

        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-teal-300 transition-colors shadow-xl">
            <Info className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-teal-300 transition-colors shadow-xl">
            <Layers className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Center Reticle / Compass / Hotspot */}
      <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none">
        <div className="w-40 h-40 border border-white/10 rounded-full flex items-center justify-center relative">
          <div className="w-1 h-1 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
          <div className="absolute top-0 w-full h-full border border-teal-500/20 rounded-full animate-[spin_15s_linear_infinite] border-t-teal-400" />
          <div className="absolute top-2 w-[calc(100%-16px)] h-[calc(100%-16px)] border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse] border-b-white/40" />
        </div>
        
        {/* Mock Hotspots */}
        <div className="absolute top-1/3 left-1/4 pointer-events-auto group cursor-pointer">
          <div className="w-10 h-10 bg-black/60 backdrop-blur-md border border-teal-500/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(20,184,166,0.2)]">
            <div className="w-2.5 h-2.5 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(20,184,166,1)] group-hover:animate-pulse" />
          </div>
          <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 backdrop-blur-xl text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-lg border border-teal-500/30 whitespace-nowrap">
            Kitchen Area
          </div>
        </div>

        <div className="absolute bottom-1/3 right-1/4 pointer-events-auto group cursor-pointer">
          <div className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform hover:border-teal-500/40">
            <div className="w-2.5 h-2.5 bg-white/80 rounded-full group-hover:bg-teal-400 transition-colors" />
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
          <div className="absolute top-0 left-0 w-1 h-full bg-teal-500" />
          <div className="flex items-center gap-2 mb-3 text-teal-400">
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.15em] uppercase">Current View</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-2 tracking-tight capitalize text-white">{activeScene.replace('-', ' ')}</h2>
          <p className="text-sm text-white/50 leading-relaxed font-medium">
            Experience the sophisticated architecture and premium materials of the main living space. Move the view to explore.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center gap-6">
          {/* D-Pad */}
          <div className="relative w-36 h-36 bg-black/60 backdrop-blur-2xl rounded-full border border-white/10 p-2 shadow-2xl">
            <div className="absolute inset-3 border border-white/5 rounded-full" />
            <button className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-teal-300 hover:bg-white/10 rounded-full transition-colors">
              <ChevronUp className="w-6 h-6" />
            </button>
            <button className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-teal-300 hover:bg-white/10 rounded-full transition-colors">
              <ChevronDown className="w-6 h-6" />
            </button>
            <button className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-teal-300 hover:bg-white/10 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/50 hover:text-teal-300 hover:bg-white/10 rounded-full transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
              <div className="w-2 h-2 rounded-full bg-teal-500/80 shadow-[0_0_8px_rgba(20,184,166,1)]" />
            </div>
          </div>
          
          {/* Action Bar */}
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full p-2.5 shadow-2xl">
            <button className="w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-teal-300 hover:bg-white/10 transition-colors">
              <ZoomOut className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-teal-300 hover:bg-white/10 transition-colors">
              <ZoomIn className="w-5 h-5" />
            </button>
            <div className="w-px h-8 bg-white/10 mx-1" />
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] ${
                isPlaying 
                  ? 'bg-teal-500 text-black hover:bg-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.4)]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
            </button>
            <div className="w-px h-8 bg-white/10 mx-1" />
            <button className="w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-teal-300 hover:bg-white/10 transition-colors">
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

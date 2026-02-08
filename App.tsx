import React from 'react';
import Hero from './components/Hero';
import Letter from './components/Letter';
import Moments from './components/Moments';
import Playlist from './components/Playlist';
import AICompanion from './components/AICompanion';
import { X } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#E0E0E0] py-4 md:py-12 px-2 md:px-4 flex justify-center items-start overflow-y-auto font-sans">
      
      {/* The Giant Poster Container */}
      <main className="relative w-full max-w-[900px] bg-paper shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] min-h-[2100px] border-[12px] border-white">
        
        {/* Poster Texture Overlay */}
        <div className="absolute inset-0 bg-noise pointer-events-none z-50 mix-blend-multiply opacity-50"></div>
        
        {/* Fold Lines (Visual Effect of folded poster) */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-black/5 z-40 pointer-events-none shadow-sm"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-black/5 z-40 pointer-events-none shadow-sm"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-black/5 z-40 pointer-events-none shadow-sm"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-black/5 z-40 pointer-events-none shadow-sm"></div>

        {/* Screws/Tape in corners */}
        <div className="absolute top-4 left-4 text-gray-300 z-50"><X size={24} strokeWidth={3} /></div>
        <div className="absolute top-4 right-4 text-gray-300 z-50"><X size={24} strokeWidth={3} /></div>
        <div className="absolute bottom-4 left-4 text-gray-300 z-50"><X size={24} strokeWidth={3} /></div>
        <div className="absolute bottom-4 right-4 text-gray-300 z-50"><X size={24} strokeWidth={3} /></div>

        {/* Tape at top */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-48 h-10 bg-white/40 rotate-1 z-50 backdrop-blur-sm shadow-sm border-l border-r border-white/60"></div>

        {/* Content Layers */}
        <div className="relative z-10 flex flex-col pb-32">
          <Hero />
          
          <div className="relative z-10">
             <Letter />
          </div>

          {/* New AI Companion Section - Placed between Letter and Playlist for flow */}
          <div className="relative z-20 -mt-8 mb-8">
             <AICompanion />
          </div>

          <div className="relative z-10">
             <Playlist />
          </div>

          {/* Official Merch Barcode Footer */}
          <div className="w-full py-8 mt-12 bg-paper border-t-2 border-dashed border-ink/20 flex flex-col items-center justify-center relative z-10">
             <div className="font-marker text-2xl text-ink mb-2 rotate-2">OFFICIAL FANCLUB</div>
             {/* CSS Barcode */}
             <div className="h-12 flex gap-1 items-end opacity-70">
                {[...Array(40)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-ink"
                      style={{
                        width: Math.random() > 0.5 ? '4px' : '8px',
                        height: Math.random() > 0.5 ? '100%' : '75%'
                      }}
                    ></div>
                ))}
             </div>
             <p className="text-[10px] font-mono text-ink/40 tracking-[0.5em] uppercase mt-2">
                ARANXITA-EDITION-2026
             </p>
          </div>
        </div>

        {/* STICKER LAYER: This sits on top of everything nicely scattered */}
        <Moments />

      </main>
    </div>
  );
}

export default App;
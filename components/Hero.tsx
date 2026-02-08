import React from 'react';
import { IMAGES } from '../constants';
import { Star, Compass, Zap, Ticket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden bg-paper border-b-2 border-dashed border-ink/30">
      
      {/* Infinite Marquee - Top & Bottom for chaos */}
      <div className="absolute top-6 left-0 w-full bg-ink text-primary py-1 overflow-hidden -rotate-1 z-20 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] border-y border-white">
         <div className="whitespace-nowrap animate-marquee font-black italic tracking-widest text-xs md:text-sm">
            ★★★★ 5-STAR ★★★★ MAXIDENT ★★★★ ODDINARY ★★★★ SKZ-REPLAY ★★★★ ATE ★★★★ 
            ★★★★ 5-STAR ★★★★ MAXIDENT ★★★★ ODDINARY ★★★★ SKZ-REPLAY ★★★★ ATE ★★★★
         </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-skzPink opacity-30 animate-spin-slow">
         <Compass size={140} strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* The "Ticket" Stub Badge */}
        <div className="absolute top-0 right-4 md:right-20 rotate-12 bg-white border-2 border-ink p-3 shadow-lg z-30 hidden md:block">
            <div className="border border-dashed border-ink p-2 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1 border-b border-ink w-full justify-center pb-1">
                    <Ticket size={16} /> <span className="font-mono text-xs font-bold">VIP PASS</span>
                </div>
                <div className="font-marker text-xl leading-none">ARANXITA</div>
                <div className="font-mono text-[10px] mt-1">ROW 1 • SEAT 143</div>
                <div className="w-full h-4 bg-ink mt-2 barcode-strip"></div>
            </div>
        </div>

        {/* Main Visual - Magazine Cutout Style */}
        <div className="relative mb-8 group mt-8">
           <div className="absolute inset-0 bg-skzPink rounded-full transform translate-x-3 translate-y-3"></div>
           <div className="absolute inset-0 bg-skzBlue rounded-full transform -translate-x-3 -translate-y-2"></div>
           
           <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                 <img src={IMAGES.logo} alt="SKZ" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500 filter contrast-110" />
                 {/* Noise overlay on image */}
                 <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
              </div>
              
              {/* Sticker overlay */}
              <div className="absolute -bottom-4 right-0 z-20">
                  <div className="bg-neon text-black font-marker text-xl px-4 py-2 rotate-[-10deg] shadow-[4px_4px_0px_rgba(0,0,0,1)] border-2 border-black animate-wiggle">
                    MY PACE!
                  </div>
              </div>
           </div>
        </div>

        {/* Typography */}
        <div className="relative">
            <h2 className="absolute -top-6 -left-4 md:-left-12 font-scribble text-skzPink text-2xl md:text-4xl -rotate-12 z-0 opacity-80">
                Favorite Girl
            </h2>
            <h1 className="text-7xl md:text-9xl font-black text-ink tracking-tighter leading-[0.85] mb-4 relative z-10 drop-shadow-[5px_5px_0px_#FFC4D6]">
              ARAN<span className="text-white text-stroke-ink">XITA</span>
            </h1>
        </div>
        
        {/* Subtitle Box with Industrial/Barcode feel */}
        <div className="flex flex-col items-center gap-2">
            <div className="bg-ink text-white px-8 py-2 transform -skew-x-12 shadow-[6px_6px_0px_#B5EAD7] border border-white">
                <p className="font-kr font-black text-xl md:text-2xl tracking-[0.2em] transform skew-x-12">
                스트레이 키즈 WORLD
                </p>
            </div>
            <div className="flex gap-2 text-[10px] font-mono tracking-widest uppercase mt-2 opacity-60">
                <span>Est. 2026</span> • <span>SKZ-RECORD</span> • <span>NOEASY</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
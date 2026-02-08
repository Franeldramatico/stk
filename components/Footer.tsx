import React from 'react';
import { Heart, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-primary via-skzRed to-secondary text-white py-12 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <Star className="absolute top-10 left-10 w-8 h-8 animate-spin-slow text-white" />
        <Star className="absolute bottom-10 right-20 w-12 h-12 text-gold" />
        <Star className="absolute top-1/2 left-1/3 w-6 h-6 text-white" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center items-center gap-2 mb-6">
             <Heart className="fill-white text-white w-6 h-6 animate-bounce" />
             <span className="text-xl font-bold tracking-widest uppercase">STAY WITH ME</span>
        </div>
        
        <p className="text-lg md:text-xl font-medium text-white/95 mb-8">
          "Hecho con amor para Aranxita por Panesito"
        </p>

        <button 
          onClick={scrollToTop}
          className="text-sm font-bold tracking-widest uppercase text-white/80 hover:text-white transition-colors py-2 border-b border-transparent hover:border-white"
        >
          Volver al inicio
        </button>

        <div className="mt-8 text-xs text-white/60">
           © 2026 Stray Kids Fanpage Project
        </div>
      </div>
    </footer>
  );
};

export default Footer;
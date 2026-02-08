import React from 'react';
import { Camera, Pin, Heart, Star, Paperclip } from 'lucide-react';

const Moments: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 md:z-20 overflow-hidden">
        
        {/* 
            === EL HILO AMARILLO (YELLOW STRING) === 
            Conecta todas las fotos. Extendido para llegar hasta abajo.
        */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-80 z-0" xmlns="http://www.w3.org/2000/svg">
            {/* Sombra del hilo */}
            <path 
                d="M 50,380 Q 450,300 850,380 T 50,650 T 850,850 T 50,1100 T 850,1350 T 150,1600 T 800,1850" 
                fill="none" 
                stroke="rgba(0,0,0,0.1)" 
                strokeWidth="6"
            />
            {/* El hilo amarillo real */}
            <path 
                d="M 50,380 Q 450,300 850,380 T 50,650 T 850,850 T 50,1100 T 850,1350 T 150,1600 T 800,1850" 
                fill="none" 
                stroke="#FFD700" 
                strokeWidth="3"
                strokeDasharray="10,5"
                strokeLinecap="round"
            />
        </svg>


        {/* 
            === INSTRUCCIONES PARA LAS 12 FOTOS ===
            Busca el comentario "AQUÍ VA LA IMAGEN" y reemplaza src="" con tu link.
            
            AJUSTE MOVIL: Se han reducido los tamaños (w- y h-) en móvil.
            ESCRITORIO: Se mantienen los tamaños originales con md:.
        */}

        {/* --- 1. Top Left: Polaroid Clásica --- */}
        <div className="absolute top-[240px] md:top-[350px] left-[-10px] md:left-[2%] w-24 h-32 md:w-44 md:h-56 rotate-[-6deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
            <div className="absolute -top-3 left-6 md:left-10 w-16 md:w-24 h-4 md:h-6 bg-skzPink/50 rotate-[-2deg] z-20 backdrop-blur-sm shadow-sm"></div>
            <div className="bg-white p-2 md:p-3 pb-6 md:pb-10 w-full h-full shadow-lg border border-gray-200 flex flex-col items-center justify-center">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100 relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300"><Camera size={16} className="md:w-6 md:h-6" /></div>
                    
                    {/* AQUÍ VA LA IMAGEN #1 (Polaroid - Arriba Izquierda) */}
                    <img src={new URL('../images/changbin 2.png', import.meta.url).href} alt="Changbin" className="absolute inset-0 w-full h-full object-cover" />
                
                </div>
            </div>
        </div>

        {/* --- 2. Top Right: Film Strip --- */}
        <div className="absolute top-[280px] md:top-[380px] right-[-10px] md:right-[2%] w-24 h-24 md:w-40 md:h-40 rotate-[8deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
            <div className="bg-ink p-1 md:p-2 w-full h-full shadow-lg flex items-center justify-center relative">
                 <div className="absolute top-0 left-0 w-full h-2 flex justify-between px-1">
                    {[...Array(5)].map((_,i) => <div key={i} className="w-1 h-1 md:w-1.5 md:h-1.5 bg-paper rounded-full mt-1"></div>)}
                 </div>
                 <div className="absolute bottom-0 left-0 w-full h-2 flex justify-between px-1">
                    {[...Array(5)].map((_,i) => <div key={i} className="w-1 h-1 md:w-1.5 md:h-1.5 bg-paper rounded-full mb-1"></div>)}
                 </div>
                <div className="w-full h-16 md:h-28 bg-gray-700 relative overflow-hidden group">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50"><span className="font-marker text-[8px] md:text-xs">FILM</span></div>
                    
                    {/* AQUÍ VA LA IMAGEN #2 (Rollo de Película - Arriba Derecha) */}
                    <img src={new URL('../images/changbin 3.png', import.meta.url).href} alt="Changbin" className="absolute inset-0 w-full h-full object-contain bg-black" />
                
                </div>
            </div>
        </div>

        {/* --- 3. Mid Left: Washi Tape --- */}
        <div className="absolute top-[520px] md:top-[620px] left-[-10px] md:left-[-20px] w-24 h-24 md:w-36 md:h-36 rotate-[4deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 md:w-16 h-3 md:h-4 bg-neon/70 z-20 shadow-sm rotate-2"></div>
            <div className="bg-white p-1.5 md:p-2 shadow-md w-full h-full border border-gray-300">
                <div className="w-full h-full bg-gray-100 relative overflow-hidden">
                    
                    {/* AQUÍ VA LA IMAGEN #3 (Pegada con Cinta - Costado Izquierdo Carta) */}
                    <img src={new URL('../images/changbin 4.png', import.meta.url).href} alt="Changbin" className="absolute inset-0 w-full h-full object-cover" />
                
                </div>
            </div>
        </div>

        {/* --- 4. Mid Right: Con Chincheta (Pin) --- */}
        <div className="absolute top-[600px] md:top-[580px] right-[-10px] md:right-[-20px] w-32 h-24 md:w-48 md:h-40 rotate-[-3deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
            <div className="absolute -top-3 left-1/2 text-skzRed z-20 drop-shadow-md"><Pin size={20} className="md:w-6 md:h-6" fill="currentColor" /></div>
            <div className="bg-white p-1.5 md:p-2 w-full h-full shadow-md transform">
                 <div className="w-full h-full bg-gray-50 border-2 border-dotted border-gray-300 flex items-center justify-center relative overflow-hidden">
                     
                     {/* AQUÍ VA LA IMAGEN #4 (Con Chincheta Roja - Costado Derecho Carta) */}
                     <img src={new URL('../images/changbin fresa dibujo.png', import.meta.url).href} alt="Changbin fresa" className="absolute inset-0 w-full h-full object-cover" />
                 
                 </div>
            </div>
        </div>

        {/* --- 5. Lower Left: Photobooth Strip --- */}
        <div className="absolute top-[750px] md:top-[850px] left-[2px] md:left-[10px] w-14 h-40 md:w-24 md:h-64 rotate-[-8deg] pointer-events-auto transition-transform hover:scale-105 hover:z-50 hover:rotate-0 duration-300">
            <div className="bg-white p-1 md:p-2 shadow-xl flex flex-col gap-1 md:gap-2 items-center">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-gray-100 overflow-hidden relative">
                    {/* AQUÍ VA LA IMAGEN #5.1 (Cabina de Fotos - Arriba) */}
                    <img src={new URL('../images/felix 1.png', import.meta.url).href} alt="Felix" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 md:w-20 md:h-20 bg-gray-100 overflow-hidden relative">
                    {/* AQUÍ VA LA IMAGEN #5.2 (Cabina de Fotos - Abajo, puede ser la misma o diferente) */}
                    <img src={new URL('../images/felix 1.png', import.meta.url).href} alt="Felix" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <span className="font-mono text-[6px] md:text-[8px] tracking-widest mt-1">SKZ-LIFE4CUT</span>
            </div>
        </div>

        {/* --- 6. AI Section Left: Post-it Style --- */}
        <div className="absolute top-[950px] md:top-[1050px] left-[-5px] md:left-[2%] w-24 h-24 md:w-40 md:h-40 rotate-[5deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
            <div className="bg-yellow-100 p-2 md:p-4 shadow-md w-full h-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute -top-4 right-6 w-8 h-8 bg-yellow-200/50 rounded-full blur-xl"></div>
                <div className="w-full h-full border-b border-yellow-200 relative overflow-hidden">
                     
                     {/* AQUÍ VA LA IMAGEN #6 (Post-it Amarillo - Lado Izquierdo Tamagotchi) */}
                    <img src={new URL('../images/felix 2.png', import.meta.url).href} alt="Felix" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
                
                </div>
            </div>
        </div>

        {/* --- 7. AI Section Right: Polaroid con Sticker --- */}
        <div className="absolute top-[900px] md:top-[920px] right-[-5px] md:right-[-15px] w-28 h-32 md:w-44 md:h-52 rotate-[6deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 z-30 text-skzBlue"><Heart size={20} className="md:w-[30px] md:h-[30px] drop-shadow-sm" fill="currentColor" /></div>
            <div className="bg-white p-2 md:p-3 pb-8 md:pb-10 w-full h-full shadow-[5px_5px_0px_rgba(0,0,0,0.1)] border border-gray-200">
                <div className="w-full h-full bg-gray-100 relative overflow-hidden">
                    
                    {/* AQUÍ VA LA IMAGEN #7 (Polaroid con Corazón - Lado Derecho Tamagotchi) */}
                    <img src={new URL('../images/felix 3.png', import.meta.url).href} alt="Felix" className="absolute inset-0 w-full h-full object-cover" />
                
                </div>
            </div>
        </div>

        {/* --- 8. Playlist Area Left: CD Cover Mini --- */}
        <div className="absolute top-[1250px] md:top-[1350px] left-[-5px] md:left-[-20px] w-20 h-20 md:w-32 md:h-32 rotate-[-10deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
            <div className="w-full h-full bg-ink p-1 rounded-sm shadow-xl">
                <div className="w-full h-full bg-gray-800 relative overflow-hidden border border-gray-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white/20"><Star size={12} className="md:w-4 md:h-4" /></div>
                    
                    {/* AQUÍ VA LA IMAGEN #8 (Portada CD Oscura - Lado Izquierdo Playlist) */}
                    <img src={new URL('../images/han 1.png', import.meta.url).href} alt="Han" className="absolute inset-0 w-full h-full object-cover" />
                
                </div>
            </div>
        </div>

        {/* --- 9. Playlist Area Right: Torn Paper --- */}
        <div className="absolute top-[1150px] md:top-[1120px] right-[2%] w-28 h-20 md:w-48 md:h-36 rotate-[3deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
             <div className="w-full h-full bg-white p-1 md:p-2 shadow-md" style={{ clipPath: 'polygon(0% 0%, 100% 2%, 98% 100%, 2% 98%)' }}>
                <div className="w-full h-full bg-gray-100 relative overflow-hidden">
                    
                    {/* AQUÍ VA LA IMAGEN #9 (Papel Rasgado - Lado Derecho Playlist) */}
                    <img src={new URL('../images/han 2.png', import.meta.url).href} alt="Han" className="absolute inset-0 w-full h-full object-cover" />
                
                </div>
             </div>
        </div>

        {/* --- 10. Footer Left: Instax Mini --- */}
        <div className="absolute top-[1500px] md:top-[1550px] left-[5%] w-20 h-28 md:w-32 md:h-48 rotate-[8deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
            <div className="bg-white p-1.5 md:p-2 pb-6 md:pb-8 w-full h-full shadow-lg rounded-sm">
                <div className="w-full h-full bg-black relative overflow-hidden">
                    
                    {/* AQUÍ VA LA IMAGEN #10 (Instax Fondo Negro - Abajo Izquierda) */}
                    <img src={new URL('../images/han 3.png', import.meta.url).href} alt="Han" className="absolute inset-0 w-full h-full object-cover" />
                
                </div>
            </div>
        </div>

        {/* --- 11. Footer Center: Paperclip Note --- */}
        <div className="absolute top-[1720px] md:top-[1680px] left-[60%] md:left-[65%] w-24 h-24 md:w-40 md:h-40 rotate-[-2deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
            <div className="absolute -top-3 md:-top-4 right-1/2 text-gray-500 z-20"><Paperclip size={20} className="md:w-[30px] md:h-[30px]" /></div>
            <div className="bg-[#FFFDF0] p-2 md:p-3 shadow-md w-full h-full border border-gray-200">
                 <div className="w-full h-full relative overflow-hidden grayscale hover:grayscale-0 transition-all">
                    
                    {/* AQUÍ VA LA IMAGEN #11 (Nota con Clip - Centro Abajo) */}
                    <img src={new URL('../images/han 4.png', import.meta.url).href} alt="Han" className="absolute inset-0 w-full h-full object-cover" />
                
                 </div>
            </div>
        </div>

        {/* --- 12. Footer Right: Final Moment --- */}
        <div className="absolute top-[1600px] md:top-[1480px] right-[-5px] md:right-[-10px] w-28 h-28 md:w-44 md:h-44 rotate-[15deg] pointer-events-auto transition-transform hover:scale-110 hover:z-50 hover:rotate-0 duration-300">
            <div className="absolute -top-3 -right-3 bg-skzRed text-white text-[10px] md:text-xs font-bold px-2 py-1 rotate-12 shadow-sm">143</div>
            <div className="bg-white p-1.5 md:p-2 shadow-lg border-2 border-white w-full h-full">
                <div className="w-full h-full bg-gray-200 relative overflow-hidden rounded-full border-4 border-white shadow-inner">
                    
                    {/* AQUÍ VA LA IMAGEN #12 (Círculo Final - Abajo Derecha) */}
                    <img src={new URL('../images/felix 4.png', import.meta.url).href} alt="Felix" className="absolute inset-0 w-full h-full object-cover" />
                
                </div>
            </div>
        </div>

    </div>
  );
};

export default Moments;

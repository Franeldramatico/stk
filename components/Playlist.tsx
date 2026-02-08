import React from 'react';
import { PLAYLIST_ALBUMS } from '../constants';
import { Music, Disc, Play } from 'lucide-react';

const Playlist: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 relative bg-paper overflow-hidden">
      
      {/* Decorative spinning CD in background */}
      <div className="absolute -right-20 top-20 opacity-10 pointer-events-none">
         <Disc size={300} className="animate-spin-slow" />
      </div>

      {/* Container looking like a CD Jewel Case Back Insert */}
      <div className="bg-white border-2 border-ink p-1 max-w-3xl mx-auto shadow-[12px_12px_0px_#2D2A32] relative transform -rotate-1">
         
         <div className="border border-ink border-dashed p-4 md:p-8 h-full bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] bg-[length:10px_10px]">
             
             {/* Header */}
             <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 border-b-4 border-ink pb-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-ink italic tracking-tighter transform -skew-x-12">
                    THE SOUND
                    </h2>
                    <span className="font-mono text-[10px] md:text-xs bg-skzPink text-white px-2 py-0.5 inline-block mt-1">ORIGINAL SOUNDTRACK</span>
                </div>
                <div className="mt-4 md:mt-0">
                    <Music className="text-skzBlue animate-bounce w-8 h-8 md:w-10 md:h-10" />
                </div>
             </div>

             {/* Tracklist */}
             <div className="space-y-4 md:space-y-6">
                {PLAYLIST_ALBUMS.map((album, index) => (
                   <div key={album.id} className="flex items-center gap-3 md:gap-4 group cursor-pointer relative overflow-hidden">
                      
                      {/* Hover Effect Background */}
                      <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-10"></div>

                      <div className="font-marker text-2xl md:text-3xl text-gray-300 group-hover:text-ink w-8 md:w-10 text-center transition-colors shrink-0">
                         0{index + 1}
                      </div>
                      
                      {/* Album Art Icon */}
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-200 border-2 border-ink overflow-hidden shadow-sm relative shrink-0 group-hover:rotate-3 transition-transform">
                         <img src={album.cover} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                         <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play size={16} className="text-white fill-white md:w-5 md:h-5" />
                         </div>
                      </div>

                      <div className="flex-grow flex flex-col justify-center min-w-0">
                         <h3 className="font-bold text-lg md:text-xl text-ink uppercase tracking-tight group-hover:translate-x-2 transition-transform truncate">
                            {album.title}
                         </h3>
                         <p className="font-hand text-sm md:text-lg text-ink/60 truncate max-w-[150px] md:max-w-none">
                            {album.subtitle}
                         </p>
                      </div>

                      <div className="hidden md:block text-xs font-mono border border-ink px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        3:25
                      </div>
                   </div>
                ))}
             </div>
             
             {/* Barcode Footer */}
             <div className="mt-8 md:mt-12 flex justify-between items-end opacity-50">
                <div className="h-6 md:h-8 w-32 md:w-48 bg-ink" style={{ maskImage: 'linear-gradient(90deg, transparent 50%, black 50%)', maskSize: '4px 100%' }}></div>
                <span className="font-mono text-[8px] md:text-[10px]">PRODUCED BY 3RACHA</span>
             </div>
         </div>
      </div>
    </section>
  );
};

export default Playlist;
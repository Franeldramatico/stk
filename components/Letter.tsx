import React from 'react';
import { LETTER_CONTENT } from '../constants';
import { Heart, Lock, FolderOpen } from 'lucide-react';

const Letter: React.FC = () => {
  return (
    <section className="py-16 px-4 relative overflow-visible">
      
      {/* Background Graphic */}
      <div className="absolute top-10 right-10 text-primary/20 pointer-events-none rotate-12">
        <FolderOpen size={200} />
      </div>

      <div className="max-w-2xl mx-auto relative group">
        
        {/* The Folder Tab */}
        <div className="absolute -top-8 left-0 bg-primary w-40 h-12 rounded-t-xl border-t-2 border-l-2 border-r-2 border-ink/10 flex items-center justify-center">
            <span className="font-mono text-xs font-bold text-ink/60 uppercase tracking-widest">CONFIDENTIAL</span>
        </div>

        {/* Main Folder Body */}
        <div className="bg-[#FFF0F5] border-2 border-primary shadow-[10px_10px_0px_rgba(0,0,0,0.1)] rounded-b-xl rounded-tr-xl p-8 md:p-12 relative overflow-hidden">
          
          {/* "Top Secret" Stamp */}
          <div className="absolute top-4 right-4 border-4 border-skzRed text-skzRed px-4 py-1 font-black text-xl uppercase rotate-[-15deg] opacity-40 mix-blend-multiply pointer-events-none">
             CASE 143
          </div>

          {/* Paperclip */}
          <div className="absolute -top-4 left-1/2 w-8 h-16 border-4 border-gray-400 rounded-full z-20"></div>

          {/* Inner White Paper */}
          <div className="bg-white p-6 md:p-10 shadow-sm rotate-1 relative">
             
             {/* Header */}
             <div className="flex items-center gap-3 border-b-2 border-dashed border-gray-200 pb-4 mb-6">
                <div className="bg-skzPink text-white p-2 rounded-md">
                    <Heart size={20} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                    <span className="font-mono text-xs text-gray-400 uppercase">Subject</span>
                    <span className="font-bold text-ink uppercase tracking-wide">Love Letter Protocol</span>
                </div>
                <div className="ml-auto">
                    <Lock size={16} className="text-gray-300" />
                </div>
             </div>

             {/* Content */}
             <div className="font-hand text-2xl md:text-3xl text-ink leading-[1.8] -tracking-wide relative z-10">
                {LETTER_CONTENT}
             </div>

             {/* Footer Signature */}
             <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-end">
                <div className="font-marker text-gray-300 text-4xl opacity-20 rotate-6">SKZ</div>
                <div className="flex flex-col items-end">
                    <span className="font-mono text-[10px] text-gray-400 uppercase">Authorized by</span>
                    <div className="font-scribble text-primary text-xl -rotate-6 mt-1">Panesito</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
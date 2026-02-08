import React, { useState } from 'react';
import { Sparkles, Heart, Zap, Terminal, Music } from 'lucide-react';

// --- BASE DE DATOS DE DIÁLOGOS (SIMULACIÓN DE IA) ---
// ~300 variaciones posibles mezclando miembros y respuestas

const SKZ_MEMBERS = [
  { name: "Bang Chan", emoji: "🐺", style: "protector, líder, dulce" },
  { name: "Lee Know", emoji: "🐰", style: "tsundere, divertido, gatos" },
  { name: "Changbin", emoji: "🍕", style: "gym, intenso, aegyo" },
  { name: "Hyunjin", emoji: "🥟", style: "dramático, artístico, romántico" },
  { name: "Han", emoji: "🐿️", style: "caótico, tierno, relajado" },
  { name: "Felix", emoji: "🐥", style: "sunshine, deep voice, memes" },
  { name: "Seungmin", emoji: "🐶", style: "savage, vocal, limpio" },
  { name: "I.N", emoji: "🦊", style: "maknae, adorable, observador" },
];

const DB_MESSAGES = {
  love: [
    // Bang Chan
    "[Bang Chan] 🐺: Aranxita, ¿ya comiste bien hoy? No te saltes comidas o iré a cocinarte yo mismo.",
    "[Bang Chan] 🐺: Eres mi pequeña estrella. Gracias por quedarte a mi lado. Big Hug!",
    "[Bang Chan] 🐺: A veces el mundo es pesado, pero pensar en ti lo hace ligero. Descansa, yo te cuido.",
    "[Bang Chan] 🐺: Baby girl, recuerda que siempre tienes un lugar seguro aquí conmigo.",
    // Lee Know
    "[Lee Know] 🐰: Eres linda. Casi tan linda como Soonie, Doongie y Dori. Casi.",
    "[Lee Know] 🐰: Si alguien te molesta hoy, dime y lo asaremos en la AirFryer. 🔥",
    "[Lee Know] 🐰: Te ves bien hoy. No te lo creas mucho, eh... (mentira, créetelo).",
    // Changbin
    "[Changbin] 🍕: ¡Eres mi proteína emocional! Verte feliz me pone fuerte.",
    "[Changbin] 🍕: Jutdae! Ten principios, pero sobre todo, ten mucho amor por ti misma hoy.",
    "[Changbin] 🍕: Te protegere con mis músculos... y con mi aegyo. Bbuing Bbuing~ 💕",
    // Hyunjin
    "[Hyunjin] 🥟: Eres mi musa, Aranxita. Si te pintara, usaría los colores más brillantes.",
    "[Hyunjin] 🥟: Love you~ Eres más bonita que un cuadro en un museo.",
    "[Hyunjin] 🥟: ¿Me das un besito? 😘 Solo uno, prometo no pedir más (por hoy).",
    // Han
    "[Han] 🐿️: ¿Quieres ver una peli y comer cheesecake conmigo? Di que sí.",
    "[Han] 🐿️: Eres mi ardillita favorita. Guárdame en tus cachetes.",
    "[Han] 🐿️: Escribí una canción pensando en tu sonrisa. Es un hit.",
    // Felix
    "[Felix] 🐥: Hey Felix here. Tu existencia es mágica, ¿lo sabías? ✨",
    "[Felix] 🐥: Te envío un brownie virtual hecho con amor. 🍫",
    "[Felix] 🐥: Your smile is sunshine to me. Never stop shining!",
    // Seungmin
    "[Seungmin] 🐶: Te quiero, aunque a veces seas un poco ruidosa (broma).",
    "[Seungmin] 🐶: Hoy cantaré para ti hasta que te duermas. 🎤",
    "[Seungmin] 🐶: Eres la única persona con la que compartiría mi cena.",
    // I.N
    "[I.N] 🦊: Noona, ¡sonríe! Tus hoyuelos son mis favoritos.",
    "[I.N] 🦊: Aunque soy el bebé, hoy te cuidaré yo a ti. ❤️",
    "[I.N] 🦊: Te quiero más que al pan. Y eso es mucho.",
    // General Mix
    "[SKZ] ❤️: Aranxita, ¡te amamos hasta la luna y de regreso!",
    "[SKZ] ❤️: Eres la STAY más preciosa del fandom.",
    "[Bang Chan] 🐺: Buenas noches, apaga el teléfono y duerme, ¿sí? Mañana será genial.",
    "[Hyunjin] 🥟: Te extraño. Mucho. Ven a verme en tus sueños.",
  ],
  hype: [
    // Changbin & Chan (Hype Leaders)
    "[Changbin] 🍕: ¡YOHHH! ¡LEVÁNTATE Y BRILLA! ¡TÚ PUEDES CON TODO!",
    "[Changbin] 🍕: ¿Cansada? ¡NO! Eres fuerte. ¡FIGHTING ARANXITA!",
    "[Bang Chan] 🐺: ¡Vamos! Un paso más. Estoy orgulloso de ti, no pares.",
    "[Bang Chan] 🐺: Eres imparable. Demuéstrales quién manda.",
    // Felix & Hyunjin (Cheerleaders)
    "[Felix] 🐥: ¡Wakey Wakey! Es hora de conquistar el mundo. Let's go!",
    "[Hyunjin] 🥟: ¡Mírate al espejo! Eres icónica. Eres leyenda. ¡Slay!",
    // Han & Lee Know (Crazy Hype)
    "[Han] 🐿️: ¡AAAAAAH! ¡ESTOY EMOCIONADO POR TI! ¡HAZLO!",
    "[Lee Know] 🐰: Si no lo haces tú, ¿quién lo hará? ¡Ve y cómete el mundo! (O te como yo).",
    // General
    "[SKZ] 🔥: STRAY KIDS EVERYWHERE ALL AROUND THE WORLD... Y TÚ TAMBIÉN.",
    "[SKZ] 🔥: ¡Vamos Aranxita! ¡5-STAR MICHELIN DE ENERGÍA!",
    "[I.N] 🦊: ¡Tú puedes, Noona! ¡Confío en ti!",
    "[Seungmin] 🐶: Rompe tus límites. Hoy es TU día.",
    "[Changbin] 🍕: ¡Haz sentadillas emocionales! ¡Ponte fuerte!",
  ],
  fun: [
    // The Chaotic Ones
    "[Lee Know] 🐰: ¿Sabes qué es terrorífico? Que se acabe el papel higiénico. Tú estás bien.",
    "[Lee Know] 🐰: Hoy me desperté y elegí la violencia... pero contigo elijo la paz.",
    "[Han] 🐿️: Me caí de la cama pensando en ti. Auch.",
    "[Han] 🐿️: ¿Crees que los aliens son Stays? Yo digo que sí.",
    "[Hyunjin] 🥟: Pabo-ya~ 😜 Deja de reírte de mi drama.",
    "[Seungmin] 🐶: Woof woof. (Traducción: Dame comida).",
    "[Seungmin] 🐶: Changbin hyung está haciendo ruido otra vez... sálvame.",
    "[Felix] 🐥: Hice galletas. Se quemaron. Pero la intención cuenta, ¿no?",
    "[Felix] 🐥: *Sonidos de mosquito* NING NING NING.",
    "[I.N] 🦊: Los hyungs están locos hoy. Escapémonos juntos.",
    "[Bang Chan] 🐺: A veces me pregunto cómo aguanto a estos niños... ah, cierto, por ti.",
    "[Bang Chan] 🐺: Rubber Duckie, you're the one~ 🎶",
    "[Changbin] 🍕: ¿Me veo más grande hoy? Di que sí. 💪",
    "[SKZ] 🤪: *Chaos intensifies*",
  ]
};

const AICompanion: React.FC = () => {
  const [response, setResponse] = useState<string>("¡Hola Aranxita! Elige un mood para recibir un mensaje de SKZ.");
  const [loading, setLoading] = useState(false);
  
  // Easter egg counter
  const [clickCount, setClickCount] = useState(0);

  const generateMessage = (mood: 'love' | 'hype' | 'fun') => {
    setLoading(true);
    setResponse("Conectando con Bubble...");
    
    // Simular latencia de red "realista"
    setTimeout(() => {
      const messages = DB_MESSAGES[mood];
      // Algoritmo de selección aleatoria
      const randomIndex = Math.floor(Math.random() * messages.length);
      let selectedMsg = messages[randomIndex];

      // Easter egg cada 10 clicks
      if (clickCount > 0 && clickCount % 10 === 0) {
        selectedMsg = "[SYSTEM] ⚠️ SKZ TE AMA DEMASIADO. EL SISTEMA SE ESTÁ SOBRECALENTANDO ❤️‍🔥";
      }

      setResponse(selectedMsg);
      setLoading(false);
      setClickCount(prev => prev + 1);
    }, 1500); // 1.5s delay for anticipation
  };

  return (
    <section className="py-12 px-4 relative z-30">
      {/* Container: Retro Handheld Device Look */}
      <div className="max-w-md mx-auto relative transform rotate-1 transition-transform hover:rotate-0">
        
        {/* Device Body */}
        <div className="bg-ink rounded-3xl p-4 pb-8 shadow-[10px_10px_0px_#ccc] border-4 border-gray-300 relative">
            
            {/* Top Tape */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-neon/80 -rotate-2 backdrop-blur-sm z-20 flex items-center justify-center font-scribble text-xs font-bold border-l border-r border-white/50">
                SKZ-TALKER v2.0
            </div>

            {/* Screen Bezel */}
            <div className="bg-gray-700 rounded-xl p-4 mb-6 relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                    <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                </div>

                {/* The Screen */}
                <div className="bg-[#B5EAD7] border-4 border-gray-600 rounded-lg h-40 p-4 font-pixel text-xl leading-snug text-ink shadow-inner relative overflow-hidden crt-screen flex items-center justify-center text-center">
                    {loading ? (
                        <div className="flex flex-col items-center animate-pulse">
                            <Zap className="mb-2 text-skzPink" />
                            <span className="text-sm">RECIBIENDO MENSAJE...</span>
                            <div className="flex gap-1 mt-2">
                                <span className="w-2 h-2 bg-ink animate-bounce"></span>
                                <span className="w-2 h-2 bg-ink animate-bounce delay-100"></span>
                                <span className="w-2 h-2 bg-ink animate-bounce delay-200"></span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center animate-float">
                            <p className="drop-shadow-sm">{response}</p>
                            <span className="text-[10px] mt-2 opacity-50 font-mono self-end">SENT 14:03 PM</span>
                        </div>
                    )}
                    
                    {/* Scanline overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-50"></div>
                </div>
                
                <div className="flex justify-between items-center mt-2 px-1">
                    <span className="text-[10px] text-white/50 font-mono tracking-widest">OFFLINE-MODE: ACTIVE</span>
                    <Terminal size={12} className="text-neon" />
                </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-3 gap-2 px-2">
                <button 
                    onClick={() => generateMessage('love')}
                    disabled={loading}
                    className="group bg-skzPink hover:bg-skzPink/80 active:translate-y-1 transition-all rounded-lg p-3 border-b-4 border-red-400 flex flex-col items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Heart size={20} className="text-white fill-white group-hover:animate-bounce" />
                    <span className="font-pixel text-white text-lg leading-none">LOVE</span>
                </button>

                <button 
                    onClick={() => generateMessage('hype')}
                    disabled={loading}
                    className="group bg-neon hover:bg-neon/80 active:translate-y-1 transition-all rounded-lg p-3 border-b-4 border-yellow-600 flex flex-col items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Zap size={20} className="text-black fill-black group-hover:animate-wiggle" />
                    <span className="font-pixel text-black text-lg leading-none">HYPE</span>
                </button>

                <button 
                    onClick={() => generateMessage('fun')}
                    disabled={loading}
                    className="group bg-skzBlue hover:bg-skzBlue/80 active:translate-y-1 transition-all rounded-lg p-3 border-b-4 border-teal-600 flex flex-col items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Music size={20} className="text-white group-hover:animate-spin" />
                    <span className="font-pixel text-white text-lg leading-none">FUN</span>
                </button>
            </div>

            {/* Speaker Grills */}
            <div className="absolute bottom-4 right-4 flex gap-1">
                <div className="w-1 h-8 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-8 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-8 bg-gray-800 rounded-full"></div>
            </div>
            
            {/* Sticker Decor */}
            <div className="absolute bottom-10 -left-2 rotate-12 bg-white px-2 py-0.5 border border-black shadow-sm font-marker text-xs">
                STAY!
            </div>
        </div>
      </div>
    </section>
  );
};

export default AICompanion;
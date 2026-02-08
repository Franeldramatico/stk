import React, { useState, useEffect } from 'react';
import { FUTURE_EVENTS } from '../constants';
import { Calendar, Clock } from 'lucide-react';

const Future: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Target the first event
  const targetDate = new Date(FUTURE_EVENTS[0].date).getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="news" className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-textMain/80 mb-16 uppercase tracking-wide">
          Nuestro Futuro <span className="text-primary">Juntos</span>
        </h2>

        {/* Countdown to next event */}
        <div className="mb-16 flex justify-center">
            <div className="grid grid-cols-4 gap-4 md:gap-8 text-center bg-white/70 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-[0_10px_40px_rgba(255,196,214,0.3)] border border-white max-w-2xl w-full">
                <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-black text-skzRed">{timeLeft.days}</span>
                    <span className="text-xs md:text-sm text-textMuted uppercase font-bold">Días</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-black text-primary">{timeLeft.hours}</span>
                    <span className="text-xs md:text-sm text-textMuted uppercase font-bold">Horas</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-black text-secondary">{timeLeft.minutes}</span>
                    <span className="text-xs md:text-sm text-textMuted uppercase font-bold">Min</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-black text-electric">{timeLeft.seconds}</span>
                    <span className="text-xs md:text-sm text-textMuted uppercase font-bold">Seg</span>
                </div>
                <div className="col-span-4 mt-2 text-center text-sm font-medium text-textMuted">
                    Hasta: {FUTURE_EVENTS[0].title}
                </div>
            </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FUTURE_EVENTS.map((event) => (
                <div key={event.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-primary group">
                    <div className="flex items-center gap-2 mb-4 text-primary">
                        <Calendar size={18} />
                        <span className="font-bold text-sm">
                            {new Date(event.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-textMain mb-3 group-hover:text-skzRed transition-colors">{event.title}</h3>
                    <p className="text-textMuted leading-relaxed text-sm">
                        {event.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-gray-400">
                        <Clock size={14} className="mr-1" />
                        {new Date(event.date).toLocaleTimeString('es-ES', { hour: '2-digit', minute:'2-digit' })}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Future;
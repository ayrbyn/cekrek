import { Sparkles, ChevronDown, ArrowRight, Image } from "lucide-react";
import StatsTicker from "./StatsTicker";

export default function Hero({ scrollTo }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12"
      style={{
        background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #1D4ED8 100%)",
      }}
    >
      {/* Premium Background Pattern: Subtle Grid + Glow */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Floating animated circles background */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            width: 100 + i * 40,
            height: 100 + i * 40,
            left: `${(i * 15) % 80 + 5}%`,
            top: `${(i * 18) % 75 + 5}%`,
            background: i % 3 === 2
              ? "rgba(255,255,255,0.06)"
              : "rgba(250,204,21,0.18)",
            border: i % 3 === 2
              ? "1.5px solid rgba(255,255,255,0.08)"
              : "1.5px solid rgba(250,204,21,0.30)",
            animation: `${["floatA", "floatB", "floatC"][i % 3]} ${5 + i}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(30,58,138,1) 0%, rgba(250,204,21,0.15) 50%, transparent 80%)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:grid lg:grid-cols-2 lg:gap-8 flex flex-col items-center justify-center min-h-[85vh]">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-20">
          <div className="flex items-center gap-3 mb-6 lg:mb-8">
            <span className="w-10 h-[2px] bg-yellow-400 rounded-full" />
            <span className="text-blue-300 text-xs sm:text-sm font-bold tracking-[0.2em] relative top-px">
              BIKIN ACARAMU MAKIN BERKESAN
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg flex items-center justify-center lg:justify-start gap-1">
            Cekrek
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Box
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-blue-200 font-medium mb-10 max-w-xl leading-relaxed">
            Abadikan setiap momen spesial dengan gaya. Cetak instan, desain premium, kenangan selamanya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollTo("pricing")}
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-blue-800 font-black px-8 py-4.5 rounded-full text-lg shadow-[0_8px_25px_rgba(250,204,21,0.3)] transition-all ease-out hover:scale-[1.03] active:scale-95"
            >
              Lihat Paket Spesial
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("templates")}
              className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-bold px-8 py-4.5 rounded-full text-lg border border-white/20 transition-all ease-out hover:scale-[1.03] active:scale-95"
            >
              <Image size={20} className="group-hover:text-yellow-400 transition-colors" /> Lihat Template
            </button>
          </div>
        </div>

        {/* Right Column: Creative CSS Polaroid Collage — hidden on mobile, shown on desktop */}
        <div className="hidden lg:block relative h-[500px] w-full perspective-1000">
          
          {/* Polaroid 1 (Bottom Left) */}
          <div className="absolute top-[10%] left-[5%] w-[60%] sm:w-[240px] aspect-[3/4] bg-white p-3 sm:p-4 pb-12 sm:pb-16 rounded shadow-2xl origin-bottom-left -rotate-12 transition-all duration-500 hover:rotate-[-5deg] hover:scale-105 hover:z-30 group cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden relative">
               <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <Image size={48} className="text-white/50 group-hover:scale-110 transition-transform duration-500" />
               </div>
            </div>
            <p className="absolute bottom-3 sm:bottom-5 left-0 right-0 text-center font-handwriting text-gray-800 text-sm sm:text-base font-bold italic opacity-80">Wedding 2023</p>
          </div>

          {/* Polaroid 2 (Top Right) */}
          <div className="absolute top-[5%] right-[5%] w-[60%] sm:w-[240px] aspect-[3/4] bg-white p-3 sm:p-4 pb-12 sm:pb-16 rounded shadow-2xl origin-bottom-right rotate-6 transition-all duration-500 hover:rotate-[12deg] hover:scale-105 hover:z-30 group cursor-pointer z-10">
            <div className="w-full h-full bg-gradient-to-tr from-purple-500 to-blue-500 overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-5xl font-black text-white/40 group-hover:text-white/60 transition-colors duration-500">360°</span>
               </div>
            </div>
            <p className="absolute bottom-3 sm:bottom-5 left-0 right-0 text-center font-handwriting text-gray-800 text-sm sm:text-base font-bold italic opacity-80">Sweet 17th</p>
          </div>

          {/* Polaroid 3 (Center Front) */}
          <div className="absolute top-[25%] left-[20%] w-[65%] sm:w-[260px] aspect-[3/4] bg-white p-3 sm:p-4 pb-16 sm:pb-20 rounded shadow-[0_30px_60px_rgba(0,0,0,0.4)] rotate-[-2deg] transition-all duration-500 hover:rotate-0 hover:translate-y-[-10px] z-20 group cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-500 overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-4 border-white/40 flex items-center justify-center group-hover:border-white/80 transition-colors duration-500">
                    <div className="w-12 h-12 rounded-full bg-white/40 group-hover:bg-white/80 transition-colors duration-500"></div>
                  </div>
               </div>
               <div className="absolute bottom-2 right-2 flex gap-1">
                 <div className="w-8 h-8 bg-blue-600/40 rounded-sm"></div>
                 <div className="w-8 h-8 bg-blue-600/40 rounded-sm"></div>
               </div>
            </div>
            <p className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center font-handwriting text-blue-800 text-lg sm:text-xl font-black px-2">CekrekBox Best Shot!</p>
          </div>

        </div>
      </div>

      {/* StatsTicker pinned at the absolute bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <StatsTicker />
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity z-20"
      >
        <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown
          size={24}
          color="white"
          className="animate-bounce"
        />
      </button>
    </section>
  );
}

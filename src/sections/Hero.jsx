import { MapPin, ChevronDown, ArrowRight, Image } from "lucide-react";

export default function Hero({ scrollTo }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F1E5A 0%, #1D4ED8 55%, #1E3A8A 100%)",
      }}
    >
      {/* Floating circles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 100 + i * 40,
            height: 100 + i * 40,
            left: `${(i * 16) % 90}%`,
            top: `${(i * 19) % 85}%`,
            background:
              i % 2 === 0 ? "rgba(250,204,21,0.07)" : "rgba(255,255,255,0.04)",
            animation: `${["floatA", "floatB", "floatC"][i % 3]} ${4 + i}s ease-in-out infinite`,
          }}
        />
      ))}

      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-20"
        style={{ background: "radial-gradient(circle, #FACC15 0%, transparent 70%)" }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <MapPin size={14} /> Photobooth Rental #1 di Medan
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-5 leading-none tracking-tight">
          Cekrek<span className="text-yellow-400">Box</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
          Abadikan setiap momen spesial dengan gaya. Cetak instan, desain premium, kenangan selamanya.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("pricing")}
            className="group flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-black px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:scale-105"
          >
            Lihat Paket{" "}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("templates")}
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg border border-white/30 transition-all hover:scale-105"
          >
            <Image size={18} /> Lihat Template
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity"
      >
        <span className="text-white text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown
          size={20}
          color="white"
          style={{ animation: "pulseY 1.5s ease-in-out infinite" }}
        />
      </button>
    </section>
  );
}

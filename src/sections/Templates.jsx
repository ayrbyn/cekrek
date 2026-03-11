import { useState } from "react";
import { Camera, Film, Image } from "lucide-react";
import Reveal from "../components/Reveal";
import { StripTemplate, PolaroidTemplate } from "../components/TemplateCards";
import { TEMPLATES } from "../data";

const FILTERS = [
  { key: "all", label: "Semua", icon: Camera },
  { key: "strip", label: "Strip", icon: Film },
  { key: "polaroid", label: "Polaroid", icon: Image },
];

export default function Templates() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? TEMPLATES : TEMPLATES.filter((t) => t.type === filter);

  return (
    <section id="templates" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal className="text-center mb-10">
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">
            Galeri Template
          </span>
          <h2 className="text-4xl font-black text-blue-900 mt-3">
            Desain <span className="text-yellow-400">Eksklusif</span> Kami
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
            Pilih dari berbagai desain foto strip dan polaroid premium yang bisa dikustomisasi sesuai
            tema acaramu.
          </p>
        </Reveal>

        {/* Filter buttons */}
        <div className="flex gap-3 justify-center mb-10">
          {FILTERS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm transition-all"
              style={{
                background: filter === key ? "#1E3A8A" : "#EFF6FF",
                color: filter === key ? "#FACC15" : "#1E3A8A",
                boxShadow: filter === key ? "0 4px 14px #1E3A8A44" : "none",
              }}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 gap-5 space-y-5">
          {filtered.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.06} className="break-inside-avoid">
              <div
                className="group relative rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                style={{ height: t.type === "strip" ? 280 : 220 }}
              >
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-start justify-end p-4">
                  <span className="text-white font-black text-sm">{t.name}</span>
                  <span className="text-yellow-300 text-xs capitalize flex items-center gap-1 mt-1">
                    {t.type === "strip" ? <Film size={11} /> : <Image size={11} />} {t.type}
                  </span>
                </div>
                <div className="p-3 h-full flex items-stretch">
                  {t.type === "strip" ? <StripTemplate t={t} /> : <PolaroidTemplate t={t} />}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

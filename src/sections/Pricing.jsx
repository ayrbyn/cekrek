import { Star, Clock, CheckCircle, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import { PRICING } from "../data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #1D4ED8 100%)" }}>
      <div className="max-w-5xl mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">
            Harga Paket
          </span>
          <h2 className="text-4xl font-black text-white mt-3">
            Pilih Paket <span className="text-yellow-400">Terbaikmu</span>
          </h2>
          <p className="text-white mt-3 text-sm max-w-xl mx-auto">
            Semua paket sudah termasuk setup, operator, dan cetak foto tanpa batas.
          </p>
        </Reveal>

        <div className="flex flex-row gap-5 items-stretch justify-center flex-wrap md:flex-nowrap">
          {PRICING.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.12}
              className={`flex flex-col w-full md:w-auto ${p.popular ? "md:-mt-6 md:mb-6 md:scale-105 z-10" : ""}`}
              style={{ flex: p.popular ? "0 0 340px" : "0 0 270px" }}
            >
              <div
                className={`flex-1 flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:shadow-xl active:shadow-xl hover:shadow-blue-600/50 active:shadow-blue-600/50 ${
                  p.popular ? "shadow-2xl shadow-yellow-400/20" : "opacity-90 hover:opacity-100 active:opacity-100"
                }`}
              >
                {p.popular && (
                  <div className="bg-yellow-400 py-2 flex items-center justify-center gap-2">
                    <Star size={14} color="#2563EB" fill="#2563EB" />
                    <span className="text-blue-800 text-xs font-black uppercase tracking-widest">
                      Paling Populer
                    </span>
                  </div>
                )}
                <div className={`bg-gradient-to-b ${p.color} px-8 py-8 text-center`}>
                  <div className="text-white font-black text-2xl mb-1">{p.name}</div>
                  <div className="text-white/60 text-sm mb-4 flex items-center justify-center gap-1">
                    <Clock size={13} /> {p.duration}
                  </div>
                  <div className="text-white font-black text-4xl">Rp {p.price}</div>
                </div>
                <div className="bg-white flex-1 px-8 py-7 flex flex-col justify-between">
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={15} color="#2563EB" className="flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-full font-black text-sm transition-all hover:scale-105"
                    style={{
                      background: p.popular ? "#FACC15" : "#2563EB",
                      color: p.popular ? "#2563EB" : "#fff",
                    }}
                  >
                    <MessageCircle size={15} /> Pesan Sekarang
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <p className="text-white text-sm">
            Butuh paket custom?{" "}
            <a href="https://wa.me/6281234567890" className="text-yellow-400 font-bold hover:underline">
              Hubungi kami
            </a>{" "}
            untuk penawaran spesial.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

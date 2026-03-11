import { MapPin, Clock, Phone, MessageCircle, Instagram, Heart } from "lucide-react";
import Reveal from "../components/Reveal";

const CONTACT_ITEMS = [
  { icon: MapPin, text: "Medan, Sumatera Utara" },
  { icon: Clock, text: "Buka 7 Hari, 08.00 – 22.00" },
  { icon: Phone, text: "+62 812-3456-7890" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-yellow-400 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Reveal direction="left">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-6">
            Siap Membuat Acara<br />
            <span className="underline decoration-blue-800 decoration-4">Tak Terlupakan?</span>
          </h2>
          <p className="text-blue-800 text-lg mb-8 leading-relaxed">
            Hubungi kami sekarang dan dapatkan konsultasi gratis untuk acara Anda di Medan!
          </p>
          <div className="flex flex-col gap-4">
            {CONTACT_ITEMS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-blue-900 font-semibold">
                <div className="w-10 h-10 rounded-full bg-blue-900/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} color="#1E3A8A" />
                </div>
                {text}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white font-black px-8 py-5 rounded-2xl text-lg shadow-xl transition-all hover:scale-105 hover:-translate-y-1"
            >
              <MessageCircle size={22} /> Chat WhatsApp
            </a>
            <a
              href="https://instagram.com/cekrekbox"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-white/60 hover:bg-white text-blue-900 font-black px-8 py-5 rounded-2xl text-lg border-2 border-blue-900/20 transition-all hover:scale-105 hover:-translate-y-1"
            >
              <Instagram size={22} /> @cekrekbox
            </a>
            <div className="mt-4 bg-blue-900/10 rounded-2xl p-5 text-center">
              <div className="flex justify-center mb-2">
                <Heart size={20} color="#1E3A8A" fill="#1E3A8A" />
              </div>
              <p className="text-blue-900 font-bold text-sm">
                "Photobooth terbaik yang pernah kami sewa! Semua tamu sangat terkesan."
              </p>
              <p className="text-blue-700 text-xs mt-2">— Rina S., Wedding Organizer</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

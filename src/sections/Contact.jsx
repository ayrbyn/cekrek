import { MapPin, Clock, Phone, MessageCircle, Instagram, Heart } from "lucide-react";
import Reveal from "../components/Reveal";

const CONTACT_ITEMS = [
  { icon: MapPin, text: "Lorem Ipsum, Dolor Sit Amet" },
  { icon: Clock, text: "Sed do Eiusmod, 00.00 – 00.00" },
  { icon: Phone, text: "+00 000-0000-0000" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-yellow-400 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Reveal direction="left">
          <h2 className="text-4xl md:text-5xl font-black text-blue-700 leading-tight mb-6">
            Lorem Ipsum Dolor<br />
            <span className="underline decoration-blue-600 decoration-4">Sit Amet?</span>
          </h2>
          <p className="text-blue-700 text-lg mb-8 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="flex flex-col gap-4">
            {CONTACT_ITEMS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-blue-700 font-semibold">
                <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon size={18} color="#2563EB" />
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
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-5 rounded-2xl text-lg shadow-xl transition-all hover:scale-105 hover:-translate-y-1"
            >
              <MessageCircle size={22} /> Lorem Ipsum
            </a>
            <a
              href="https://instagram.com/photobooth"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-white hover:bg-yellow-50 text-blue-700 font-black px-8 py-5 rounded-2xl text-lg border-2 border-white transition-all hover:scale-105 hover:-translate-y-1 shadow-lg"
            >
              <Instagram size={22} /> @photobooth
            </a>
            <div className="mt-4 bg-white/75 rounded-2xl p-5 text-center shadow-sm border border-white/40">
              <div className="flex justify-center mb-2">
                <Heart size={20} color="#2563EB" fill="#2563EB" />
              </div>
              <p className="text-blue-700 font-bold text-sm">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="text-blue-600 text-xs mt-2">— Lorem Ipsum, Dolor Sit Amet</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

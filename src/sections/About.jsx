import { Camera, CheckCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import { STATS } from "../data";

const HIGHLIGHTS = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "Sed do eiusmod tempor incididunt",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Reveal direction="left">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-yellow-400/20" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-100" />
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 p-10 text-white">
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="flex justify-center mb-2">
                      <s.icon size={22} color="#FACC15" />
                    </div>
                    <div className="text-3xl font-black text-yellow-400">{s.value}</div>
                    <div className="text-blue-200 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-white/20 pt-6 flex items-center gap-3">
                <Camera size={28} color="#FACC15" />
                <div>
                  <div className="font-black text-white">PhotoBooth</div>
                  <div className="text-blue-300 text-xs">Est. 2026 · Lorem Ipsum</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">
            Lorem Ipsum
          </span>
          <h2 className="text-4xl font-black text-blue-800 mt-3 mb-5 leading-tight">
            Dolor Sit Amet<br />
            <span className="text-yellow-400">Consectetur</span>
          </h2>
          <p className="text-gray-500 mb-4 leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-500 leading-relaxed text-base">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle size={16} color="#2563EB" className="flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

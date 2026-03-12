import { Camera } from "lucide-react";
import { NAV_LINKS } from "../data";

export default function Footer({ scrollTo }) {
  return (
    <footer 
      className="text-white py-10 px-4"
      style={{
        background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #1D4ED8 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Camera size={20} color="#FACC15" />
          <span className="font-black text-xl">
            Photo<span className="text-yellow-400">Booth</span>
          </span>
        </div>
        <div className="flex gap-5 flex-wrap justify-center">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              className="text-white/80 hover:text-yellow-400 text-sm font-medium transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
        <div className="text-white text-xs">© 2026 PhotoBooth. Lorem Ipsum.</div>
      </div>
    </footer>
  );
}

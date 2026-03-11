import { Camera } from "lucide-react";
import { NAV_LINKS } from "../data";

export default function Footer({ scrollTo }) {
  return (
    <footer className="bg-blue-950 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Camera size={20} color="#FACC15" />
          <span className="font-black text-xl">
            Cekrek<span className="text-yellow-400">Box</span>
          </span>
        </div>
        <div className="flex gap-5 flex-wrap justify-center">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              className="text-blue-400 hover:text-yellow-400 text-sm transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
        <div className="text-blue-500 text-xs">© 2026 CekrekBox. All rights reserved.</div>
      </div>
    </footer>
  );
}

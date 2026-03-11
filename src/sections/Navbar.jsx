import { useState, useEffect } from "react";
import { Camera, Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "../data";

export default function Navbar({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNav = (link) => {
    scrollTo(link.toLowerCase());
    setMenuOpen(false);
  };

  const isSolid = scrollY > 50 || menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isSolid ? "bg-blue-950/95 backdrop-blur-xl shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <Camera size={22} color="#FACC15" />
          <span className="font-black text-xl text-white tracking-wide">
            Cekrek<span className="text-yellow-400">Box</span>
          </span>
        </button>

        <div className="hidden md:flex gap-6">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className="text-white/80 hover:text-yellow-400 font-semibold transition-colors text-sm"
            >
              {l}
            </button>
          ))}
          <a
            href="#"
            className="bg-yellow-400 text-blue-900 font-black px-4 py-1.5 rounded-full text-sm hover:bg-yellow-300 transition-all"
          >
            Booking
          </a>
        </div>

        <button
          className="md:hidden text-white w-10 h-10 flex items-center justify-center relative active:scale-90 transition-transform"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          <div className="absolute transition-all duration-300 transform" style={{ opacity: menuOpen ? 0 : 1, rotate: menuOpen ? "90deg" : "0deg", scale: menuOpen ? 0.5 : 1 }}>
            <Menu size={24} />
          </div>
          <div className="absolute transition-all duration-300 transform" style={{ opacity: menuOpen ? 1 : 0, rotate: menuOpen ? "0deg" : "-90deg", scale: menuOpen ? 1 : 0.5 }}>
            <X size={24} />
          </div>
        </button>
      </div>

      <div 
        className="md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          maxHeight: menuOpen ? "500px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="px-5 pb-8 pt-2 flex flex-col gap-1 border-t border-white/5 mt-1">
          {NAV_LINKS.map((l, i) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className="text-white/90 hover:text-yellow-400 font-bold text-left py-3.5 border-b border-white/5 text-base active:bg-blue-900/50 active:text-yellow-400 active:pl-4 transition-all duration-300"
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(-15px)",
                opacity: menuOpen ? 1 : 0,
                transitionDelay: menuOpen ? `${i * 50 + 100}ms` : "0ms",
              }}
            >
              {l}
            </button>
          ))}
          <a
            href="#"
            className="mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950 font-black text-center py-4 rounded-full active:scale-95 transition-all shadow-lg hover:shadow-yellow-400/30"
            style={{
              transform: menuOpen ? "translateY(0)" : "translateY(-15px)",
              opacity: menuOpen ? 1 : 0,
              transitionDelay: menuOpen ? `${NAV_LINKS.length * 50 + 100}ms` : "0ms",
            }}
          >
            <MessageCircle size={20} /> Booking Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}

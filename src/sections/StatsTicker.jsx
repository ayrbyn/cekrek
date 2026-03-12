import { STATS } from "../data";

export default function StatsTicker() {
  // Duplicate items 2 times for seamless loop (more efficient than 4x)
  const items = [...STATS, ...STATS];

  return (
    <div className="bg-yellow-400 py-3 overflow-hidden w-full border-t border-blue-900/10 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 25s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000;
          transform-style: preserve-3d;
        }
        /* Mobile optimization: slower and simpler transform */
        @media (max-width: 640px) {
          .ticker-track {
            animation-duration: 35s;
          }
        }
      `}</style>

      <div className="ticker-track">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-8 flex-shrink-0">
            <s.icon size={18} color="#2563EB" className="flex-shrink-0" />
            <span className="font-black text-blue-800 text-sm whitespace-nowrap">{s.value}</span>
            <span className="text-blue-800 text-sm font-medium whitespace-nowrap">{s.label}</span>
            <span className="text-blue-800/20 text-lg flex-shrink-0">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

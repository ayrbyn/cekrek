import { STATS } from "../data";

export default function StatsTicker() {
  // Duplicate items enough to make the loop seamless
  const items = [...STATS, ...STATS, ...STATS, ...STATS];

  return (
    <div className="bg-yellow-400 py-3 overflow-hidden w-full">
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 20s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="ticker-track">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-8 flex-shrink-0">
            <s.icon size={18} color="#2563EB" />
            <span className="font-black text-blue-800 text-sm">{s.value}</span>
            <span className="text-blue-800 text-sm font-medium">{s.label}</span>
            <span className="text-blue-800/40 text-lg">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

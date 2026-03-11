import { STATS } from "../data";

export default function StatsTicker() {
  return (
    <div className="bg-yellow-400 py-4 overflow-hidden">
      <div
        className="flex gap-16 whitespace-nowrap"
        style={{ animation: "ticker 18s linear infinite", width: "max-content" }}
      >
        {[...STATS, ...STATS].map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <s.icon size={18} color="#1E3A8A" />
            <span className="font-black text-blue-900 text-sm">{s.value}</span>
            <span className="text-blue-800 text-sm font-medium">{s.label}</span>
            <span className="text-blue-800/40 text-lg">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

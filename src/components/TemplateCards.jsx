import { Camera, Film } from "lucide-react";

export function StripTemplate({ t }) {
  return (
    <div className={`bg-gradient-to-b ${t.bg} rounded-xl p-3 flex flex-col gap-2 w-full h-full`}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-lg bg-white/20 flex items-center justify-center"
          style={{ height: 60 }}
        >
          <Film size={22} color="rgba(255,255,255,0.5)" />
        </div>
      ))}
      <div className="text-center mt-1 font-bold text-xs" style={{ color: t.accent }}>
        cekrekbox
      </div>
    </div>
  );
}

export function PolaroidTemplate({ t }) {
  return (
    <div className={`bg-gradient-to-br ${t.bg} rounded-xl p-3 flex flex-col items-center gap-2 w-full h-full`}>
      <div className="bg-white rounded-lg p-2 w-full flex flex-col items-center shadow">
        <div
          className="rounded bg-white/60 flex items-center justify-center w-full"
          style={{ height: 80 }}
        >
          <Camera size={28} color={t.accent} />
        </div>
        <div className="mt-2 text-xs font-bold" style={{ color: t.accent }}>
          cekrekbox
        </div>
      </div>
    </div>
  );
}

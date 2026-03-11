import { Camera, Film } from "lucide-react";

/* ── Strip: 3 foto vertikal tumpuk ── */
export function StripTemplate({ t, big = false }) {
  const imgs = t.imgs ?? [];
  return (
    <div className={`bg-gradient-to-b ${t.bg} rounded-xl p-2 flex flex-col gap-1.5 w-full h-full`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="rounded-md overflow-hidden"
          style={{ flex: "1 1 0%", minHeight: 0 }}
        >
          {imgs[i] ? (
            <img
              src={imgs[i]}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <Film size={big ? 22 : 14} color="rgba(255,255,255,0.5)" />
            </div>
          )}
        </div>
      ))}
      <div className="text-center font-black tracking-widest" style={{ fontSize: 9, color: t.accent, lineHeight: "18px", flexShrink: 0 }}>
        CEKREKBOX
      </div>
    </div>
  );
}

/* ── Polaroid: foto di dalam bingkai putih ── */
export function PolaroidTemplate({ t, big = false }) {
  const img = t.imgs?.[0];
  return (
    <div
      className={`bg-gradient-to-br ${t.bg} rounded-xl w-full h-full flex items-center justify-center`}
      style={{ padding: big ? 14 : 8 }}
    >
      {/* White polaroid frame */}
      <div
        className="bg-white rounded-lg shadow-md flex flex-col"
        style={{ width: "100%", height: "100%", padding: big ? 10 : 6 }}
      >
        {/* Photo area */}
        <div className="flex-1 min-h-0 rounded overflow-hidden" style={{ background: "#e2e8f0" }}>
          {img ? (
            <img
              src={img}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Camera size={big ? 28 : 18} color={t.accent} />
            </div>
          )}
        </div>
        {/* Caption strip */}
        <div
          className="text-center font-black tracking-widest flex-shrink-0"
          style={{ fontSize: 9, color: t.accent, paddingTop: 4, lineHeight: "14px" }}
        >
          CEKREKBOX
        </div>
      </div>
    </div>
  );
}

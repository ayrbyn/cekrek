import Reveal from "../components/Reveal";
import { TEMPLATES } from "../data";

const styles = `
  @keyframes slide-templates {
    from { transform: translate3d(0, 0, 0); }
    to   { transform: translate3d(-50%, 0, 0); }
  }
  .tmpl-track {
    display: flex;
    width: max-content;
    animation: slide-templates 50s linear infinite;
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000;
    transform-style: preserve-3d;
    padding: 2rem 0;
  }
  .tmpl-track:hover {
    animation-play-state: paused;
  }
  .tmpl-polaroid {
    flex-shrink: 0;
    width: 280px;
    margin: 0 16px;
    background: #fff;
    padding: 14px 14px 24px 14px;
    border-radius: 6px;
    box-shadow: 0 10px 30px rgba(37,99,235,0.1);
    transition: transform 0.4s cubic-bezier(.34,1.56,.64,1), box-shadow 0.4s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }
  .tmpl-polaroid:hover {
    transform: translateY(-10px) rotate(-2deg) scale(1.02);
    box-shadow: 0 20px 40px rgba(37,99,235,0.2);
    z-index: 10;
  }
  .tmpl-photo-box {
    width: 100%;
    aspect-ratio: 4/5;
    border-radius: 4px;
    overflow: hidden;
    background: #e2e8f0;
    position: relative;
  }
  .tmpl-photo-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(.34,1.56,.64,1);
  }
  .tmpl-polaroid:hover .tmpl-photo-box img {
    transform: scale(1.05);
  }
  .tmpl-badge {
    position: absolute;
    top: 10px; right: 10px;
    background: #FACC15;
    color: #1E3A8A;
    font-size: 10px;
    font-weight: 900;
    padding: 3px 10px;
    border-radius: 99px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }
  @media (max-width: 640px) {
    .tmpl-track {
      animation-duration: 70s;
    }
  }
`;

export default function Templates() {
  // Duplicate items 2 times for seamless loop (optimized from 4x)
  const items = [...TEMPLATES, ...TEMPLATES];

  return (
    <section id="templates" className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <style>{styles}</style>

      {/* Header */}
      <Reveal className="text-center mb-10 px-4">
        <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">
          Lorem Ipsum
        </span>
        <h2 className="text-4xl font-black text-blue-800 mt-3">
          Dolor Sit <span className="text-yellow-400">Amet</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Reveal>

      {/* Track wrapper for edge fade */}
      <div className="relative">
        {/* Edge fade (left & right) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 z-10"
             style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 z-10"
             style={{ background: "linear-gradient(to left, white, transparent)" }} />

        {/* Auto slider track */}
        <div className="tmpl-track">
          {items.map((t, i) => (
            <div key={i} className="tmpl-polaroid">
              <div className="tmpl-photo-box">
                <img src={t.imgs?.[0]} alt={t.name} loading="lazy" />
                <div className="tmpl-badge">Premium</div>
              </div>
              
              <div className="mt-5 text-center px-2">
                <h3 className="font-black text-blue-900 text-lg leading-tight">{t.name}</h3>
                <p className="text-yellow-500 font-bold text-xs mt-1 uppercase tracking-widest">PhotoBooth</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

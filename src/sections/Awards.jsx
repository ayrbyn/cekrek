import Reveal from "../components/Reveal";
import { AWARDS } from "../data";

const styles = `
  @keyframes slide-awards {
    from { transform: translate3d(0, 0, 0); }
    to   { transform: translate3d(-50%, 0, 0); }
  }
  .awards-track {
    display: flex;
    width: max-content;
    animation: slide-awards 40s linear infinite;
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000;
    transform-style: preserve-3d;
  }
  .awards-track:hover {
    animation-play-state: paused;
  }
  .award-slide-card {
    flex-shrink: 0;
    width: 280px;
    margin: 0 14px;
    border-radius: 24px;
    overflow: hidden;
    background: #fff;
    border: 2px solid rgba(37,99,235,0.12);
    box-shadow: 0 8px 30px rgba(37,99,235,0.10);
    transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease;
    cursor: default;
  }
  .award-slide-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 20px 50px rgba(37,99,235,0.20);
  }
  .award-slide-top {
    background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%);
    padding: 28px 24px 20px;
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  .award-icon-box {
    width: 52px; height: 52px;
    border-radius: 14px;
    background: rgba(250,204,21,0.18);
    border: 1.5px solid rgba(250,204,21,0.45);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .award-slide-top-text { flex: 1; }
  .award-slide-year {
    display: inline-block;
    background: #FACC15;
    color: #1E3A8A;
    font-size: 10px;
    font-weight: 900;
    padding: 2px 10px;
    border-radius: 99px;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
  }
  .award-slide-title {
    color: #fff;
    font-size: 15px;
    font-weight: 900;
    line-height: 1.35;
  }
  .award-slide-bottom {
    padding: 14px 24px 18px;
    background: #fff;
  }
  .award-slide-org {
    font-size: 12px;
    font-weight: 700;
    color: #2563EB;
    opacity: 0.75;
  }
  .award-slide-divider {
    height: 3px;
    width: 36px;
    background: #FACC15;
    border-radius: 99px;
    margin: 8px 0;
  }
  @media (max-width: 640px) {
    .awards-track {
      animation-duration: 60s;
    }
  }
`;

export default function Awards() {
  // Duplicate items 2 times for seamless loop (optimized from 4x)
  const items = [...AWARDS, ...AWARDS];

  return (
    <section id="awards" className="py-24 bg-white overflow-hidden">
      <style>{styles}</style>

      <Reveal className="text-center mb-14 px-4">
        <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">
          Lorem Ipsum
        </span>
        <h2 className="text-4xl font-black text-blue-800 mt-3">
          Dolor Sit <span className="text-yellow-400">Amet</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Reveal>

      {/* Edge fade */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 z-10"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div className="awards-track py-4">
          {items.map((a, i) => (
            <div key={i} className="award-slide-card">
              <div className="award-slide-top">
                <div className="award-icon-box">
                  <a.icon size={24} color="#FACC15" />
                </div>
                <div className="award-slide-top-text">
                  <span className="award-slide-year">{a.year}</span>
                  <div className="award-slide-title">{a.title}</div>
                </div>
              </div>
              <div className="award-slide-bottom">
                <div className="award-slide-divider" />
                <div className="award-slide-org">{a.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

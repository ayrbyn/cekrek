import Reveal from "../components/Reveal";
import { SERVICES } from "../data";

const serviceStyles = `
  .svc2-card {
    background: #fff;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.08);
    padding: 2rem;
    position: relative;
    overflow: hidden;
    height: 100%;
    transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease;
  }
  .svc2-card:hover {
    transform: translateY(-8px);
    box-shadow: 0px 20px 40px rgba(30,58,138,0.2);
  }
  .svc2-bubble {
    width: 90px; height: 90px;
    background: #1E3A8A;
    border-radius: 50%;
    position: absolute;
    right: -18px; top: -22px;
    transition: background 0.3s, transform 0.4s cubic-bezier(.34,1.56,.64,1);
  }
  .svc2-card:hover .svc2-bubble { background: #FACC15; transform: scale(1.15); }
  .svc2-num {
    position: absolute;
    bottom: 18px; left: 22px;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 900;
    transition: color 0.3s;
  }
  .svc2-card:hover .svc2-num { color: #1E3A8A; }
  .svc2-icon {
    color: #1E3A8A;
    transition: color 0.3s, transform 0.4s cubic-bezier(.34,1.56,.64,1);
    display: inline-block;
  }
  .svc2-card:hover .svc2-icon { color: #FACC15; transform: rotate(-10deg) scale(1.2); }
  .svc2-title {
    font-size: 1.1rem; font-weight: 800; color: #0f172a;
    margin: 0.9rem 0 0.5rem; transition: color 0.3s;
  }
  .svc2-card:hover .svc2-title { color: #1E3A8A; }
  .svc2-desc { font-size: 0.8rem; color: #64748b; line-height: 1.7; }
  .svc2-line {
    width: 0; height: 3px; background: #FACC15;
    margin-top: 1rem; border-radius: 99px;
    transition: width 0.4s ease;
  }
  .svc2-card:hover .svc2-line { width: 48px; }
`;

export default function Services() {
  return (
    <section id="services" className="py-24 bg-blue-950 overflow-hidden">
      <style>{serviceStyles}</style>
      <div className="max-w-6xl mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Layanan</span>
          <h2 className="text-4xl font-black text-white mt-3">
            Yang Kami <span className="text-yellow-400">Tawarkan</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <div className="svc2-card">
                <div className="svc2-bubble">
                  <span className="svc2-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="svc2-icon">
                  <s.icon size={32} />
                </div>
                <p className="svc2-title">{s.title}</p>
                <p className="svc2-desc">{s.desc}</p>
                <div className="svc2-line" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

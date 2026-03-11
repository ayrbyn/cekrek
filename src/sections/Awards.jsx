import Reveal from "../components/Reveal";
import { AWARDS } from "../data";

const awardStyles = `
  .award-card-wrap { width: 100%; padding: 10px; perspective: 1000px; }
  .award-card {
    position: relative;
    padding-top: 50px;
    border: 3px solid #1E3A8A;
    border-radius: 24px;
    transform-style: preserve-3d;
    background:
      linear-gradient(135deg, #0000 18.75%, #dbeafe 0 31.25%, #0000 0),
      repeating-linear-gradient(45deg, #dbeafe -6.25% 6.25%, #1E3A8A 0 18.75%);
    background-size: 60px 60px;
    background-position: 0 0, 0 0;
    background-color: #1E3A8A;
    width: 100%;
    box-shadow: rgba(30,58,138,0.25) 0px 30px 30px -10px;
    transition: all 0.5s ease-in-out;
  }
  .award-card:hover {
    background-position: -100px 100px, -100px 100px;
    transform: rotate3d(0.5, 1, 0, 30deg);
  }
  .award-content-box {
    background: #FACC15;
    transition: all 0.5s ease-in-out;
    padding: 50px 22px 22px 22px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    transform-style: preserve-3d;
  }
  .award-card-title {
    display: inline-block;
    color: #1E3A8A;
    font-size: 16px;
    font-weight: 900;
    line-height: 1.3;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 50px);
  }
  .award-card-title:hover { transform: translate3d(0px, 0px, 60px); }
  .award-card-org {
    display: block;
    margin-top: 8px;
    font-size: 11px;
    font-weight: 700;
    color: #1e3a8a99;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 30px);
  }
  .award-card-org:hover { transform: translate3d(0px, 0px, 60px); }
  .award-date-box {
    position: absolute;
    top: 16px; right: 16px;
    height: 56px; width: 56px;
    background: #1E3A8A;
    border: 1px solid #FACC15;
    border-radius: 12px;
    padding: 8px;
    transform: translate3d(0px, 0px, 80px);
    box-shadow: rgba(0,0,0,0.2) 0px 17px 10px -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .award-year {
    color: #FACC15;
    font-size: 9px;
    font-weight: 900;
    text-align: center;
    margin-top: 2px;
    line-height: 1.1;
  }
`;

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-white overflow-hidden">
      <style>{awardStyles}</style>
      <div className="max-w-6xl mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">
            Penghargaan
          </span>
          <h2 className="text-4xl font-black text-blue-900 mt-3">
            Prestasi yang <span className="text-yellow-400">Kami Raih</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="award-card-wrap">
                <div className="award-card">
                  <div className="award-date-box">
                    <div className="flex items-center justify-center">
                      <a.icon size={18} color="#FACC15" />
                    </div>
                    <div className="award-year">{a.year}</div>
                  </div>
                  <div className="award-content-box">
                    <span className="award-card-title">{a.title}</span>
                    <span className="award-card-org">{a.org}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

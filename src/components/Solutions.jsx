import { useState, useEffect } from "react";

const icons = [
  (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#a78bfa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="#a78bfa" strokeWidth="2" />
      <path d="M8 12h8M12 8v8" stroke="#06b6d4" strokeWidth="2" />
    </svg>
  ),
  (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="#06b6d4" strokeWidth="2" />
      <path d="M8 8h8v8H8z" stroke="#a78bfa" strokeWidth="2" />
    </svg>
  ),
  (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#3b82f6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="10" ry="6" stroke="#3b82f6" strokeWidth="2" />
      <ellipse cx="12" cy="12" rx="6" ry="10" stroke="#a78bfa" strokeWidth="2" />
    </svg>
  ),
  (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#f3f4f6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 2v20M2 12h20" stroke="#f3f4f6" strokeWidth="2" />
    </svg>
  ),
  (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="#06b6d4" strokeWidth="2" />
      <path d="M9 9h6v6H9z" stroke="#a78bfa" strokeWidth="2" />
    </svg>
  ),
  (
    <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#a78bfa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="#a78bfa" strokeWidth="2" />
      <path d="M12 6v6l4 2" stroke="#06b6d4" strokeWidth="2" />
    </svg>
  ),
];

const solutionDetails = [
  {
    title: 'New Agentic AI',
    desc: 'Autonomous, adaptive AI agents for business automation.',
    details: (
      <ul className="list-disc list-inside text-left text-[#b6c2d6]">
        <li>Self-learning AI agents</li>
        <li>Process automation</li>
        <li>Real-time decision making</li>
      </ul>
    ),
    color: "#a78bfa",
  },
  {
    title: 'Data Analytics',
    desc: 'Transform data into actionable insights.',
    details: (
      <ul className="list-disc list-inside text-left text-[#b6c2d6]">
        <li>Interactive dashboards</li>
        <li>Business intelligence</li>
        <li>Predictive analytics</li>
      </ul>
    ),
    color: "#06b6d4",
  },
  {
    title: 'Generative AI',
    desc: 'Create content, code, and ideas with AI.',
    details: (
      <ul className="list-disc list-inside text-left text-[#b6c2d6]">
        <li>Text, image, and code generation</li>
        <li>Personalized content</li>
        <li>Creative automation</li>
      </ul>
    ),
    color: "#3b82f6",
  },
  {
    title: 'Data Science',
    desc: 'Advanced modeling and predictive analytics.',
    details: (
      <ul className="list-disc list-inside text-left text-[#b6c2d6]">
        <li>Machine learning models</li>
        <li>Statistical analysis</li>
        <li>Forecasting</li>
      </ul>
    ),
    color: "#f3f4f6",
  },
  {
    title: 'Data Engineering',
    desc: 'Robust pipelines for reliable data.',
    details: (
      <ul className="list-disc list-inside text-left text-[#b6c2d6]">
        <li>ETL pipelines</li>
        <li>Data warehousing</li>
        <li>Data quality management</li>
      </ul>
    ),
    color: "#06b6d4",
  },
  {
    title: 'Enterprise Planning',
    desc: 'AI-powered forecasting and strategy.',
    details: (
      <ul className="list-disc list-inside text-left text-[#b6c2d6]">
        <li>Financial planning</li>
        <li>Resource optimization</li>
        <li>Scenario modeling</li>
      </ul>
    ),
    color: "#a78bfa",
  },
];

function Typewriter({ text, speed = 18 }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{displayed}</span>;
}

const Solutions = () => {
  const [modalIdx, setModalIdx] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (modalIdx !== null) {
      setShowDetails(false);
      const timer = setTimeout(() => setShowDetails(true), 400);
      return () => clearTimeout(timer);
    }
  }, [modalIdx]);

  return (
    <section
      id="solution"
      className="relative py-20 sm:py-28 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #151a2e99 60%, #232946cc 100%), url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#151a2e]/80 via-[#232946]/70 to-[#0a1120]/80 z-0 pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <span className="inline-block px-5 sm:px-7 py-2 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#a78bfa] text-white text-sm sm:text-base font-semibold tracking-widest shadow-xl uppercase mb-6 sm:mb-8 animate-pulse border-2 border-white/10 backdrop-blur-md">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#06b6d4] to-[#3b82f6] mb-5 sm:mb-7 drop-shadow-2xl tracking-tight animate-gradient-move">
            Transforming Business with AI & Data
          </h2>
          <p className="text-lg sm:text-2xl md:text-3xl text-[#e0e7ef] mb-2 font-semibold drop-shadow-xl fade-in-up">
            <span className="font-bold text-[#a78bfa]">KD Infovision</span> delivers next-gen solutions for digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10">
          {solutionDetails.map((item, idx) => (
            <div
              key={item.title}
              className="glass-card group p-7 sm:p-10 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-[#a78bfa]/60 cursor-pointer relative border-2"
              onClick={() => setModalIdx(idx)}
              tabIndex={0}
              onKeyDown={e => (e.key === "Enter" ? setModalIdx(idx) : undefined)}
              style={{
                borderColor: `${item.color}33`,
                background: "rgba(24,30,51,0.92)",
              }}
            >
              <div className="mb-5 sm:mb-7 group-hover:scale-110 transition-transform duration-300">
                {icons[idx]}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#f3f4f6] mb-2 text-center">{item.title}</h3>
              <div className="h-1 w-10 sm:w-14 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-full opacity-70 mb-3"></div>
              <p className="text-[#b6c2d6] text-base sm:text-lg text-center">{item.desc}</p>
              <div
                className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 60% 40%, ${item.color}55 0%, transparent 70%)`,
                  transition: "opacity 0.3s",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {modalIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setModalIdx(null)}
        >
          <div
            className="relative bg-gradient-to-br from-[#232946] to-[#151a2e] rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 max-w-xs sm:max-w-lg md:max-w-xl w-[92vw] text-center border-2 border-[#a78bfa] animate-modalPop"
            style={{ animationDelay: "0.1s" }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#a78bfa] hover:text-white text-xl sm:text-2xl font-bold transition"
              onClick={() => setModalIdx(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <div className="mb-2 sm:mb-4">{icons[modalIdx]}</div>
              <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3" style={{ color: solutionDetails[modalIdx].color }}>
                {solutionDetails[modalIdx].title}
              </h3>
              <div className="h-1 w-10 sm:w-16 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-full opacity-70 mb-3 sm:mb-4"></div>
              <p className="text-[#cbd5e1] text-base sm:text-lg mb-3 sm:mb-4 min-h-[28px] sm:min-h-[32px]">
                {showDetails ? (
                  <Typewriter text={solutionDetails[modalIdx].desc} speed={16} />
                ) : (
                  <span style={{ opacity: 0 }}>{solutionDetails[modalIdx].desc}</span>
                )}
              </p>
              <div className="text-[#e0e7ef] text-sm sm:text-base mt-2 animate-fadeIn" style={{ animationDelay: "0.7s" }}>
                {showDetails && solutionDetails[modalIdx].details}
              </div>
            </div>
          </div>
        </div>
      )}
<div className="absolute bottom-0 left-0 w-full h-[4px] z-20 bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 animate-pulse shadow-[0_0_20px_2px_rgba(167,139,250,0.5)]"></div>

    </section>
  );
};

export default Solutions;
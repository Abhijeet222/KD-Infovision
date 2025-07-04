import { useState } from "react";
import { useInView } from "react-intersection-observer";

const industriesData = [
  {
    title: "CPG & Retail",
    color: "#3b82f6",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#3b82f6" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M8 8h8v8H8z" stroke="#a78bfa" strokeWidth="2" />
      </svg>
    ),
    options: ["Consumer Durables", "Alcoholic Beverages", "FMCG", "Retail & QSR", "Food & Beverages"],
  },
  {
    title: "Manufacturing",
    color: "#06b6d4",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#06b6d4" strokeWidth="2" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <ellipse cx="12" cy="12" rx="6" ry="10" stroke="#a78bfa" strokeWidth="2" />
      </svg>
    ),
    options: ["Pharmaceuticals", "Chemical", "Automotive", "Building Material", "Medical Devices"],
  },
  {
    title: "Others",
    color: "#a78bfa",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" stroke="#06b6d4" strokeWidth="2" />
      </svg>
    ),
    options: ["Technology & Software", "Senior Housing", "Real Estate", "BFSI"],
  },
];

const Industries = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const handleCardClick = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="industries" ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-[#151a2e] via-[#232946] to-[#0a1120]">
      <div className="text-center mb-10 sm:mb-12 px-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#a78bfa] tracking-tight mb-2 drop-shadow-lg">
          Industries
        </h2>
        <p className="text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto">
          Serving a wide spectrum of industries with AI-powered solutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8 md:gap-10">
        {industriesData.map((industry, idx) => (
          <div
            key={industry.title}
            className={`glass-card cursor-pointer group p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl
              ${inView ? "card-fade-in" : "opacity-0"}`}
            style={{
              border: `2px solid ${industry.color}33`,
              boxShadow: `0 4px 24px 0 ${industry.color}33`,
              animationDelay: inView ? `${idx * 0.15 + 0.2}s` : "0s",
              animationFillMode: "both",
            }}
            onClick={() => handleCardClick(idx)}
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              {industry.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center" style={{ color: industry.color }}>
              {industry.title}
            </h3>

            <div className={`transition-all duration-500 overflow-hidden w-full ${
              openIdx === idx ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}>
              <ul className="list-disc list-inside text-[#f3f4f6] text-base text-left space-y-1">
                {industry.options.map((option) => (
                  <li key={option} className="opacity-90">{option}</li>
                ))}
              </ul>
            </div>
            <span className="mt-3 text-xs text-[#94a3b8]">
              {openIdx === idx ? "Click to collapse" : "Click to view more"}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .glass-card {
          background: rgba(21, 26, 46, 0.7);
          backdrop-filter: blur(14px);
        }
        .card-fade-in {
          animation: fadeInCard 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fadeInCard {
          0% { opacity: 0; transform: translateY(40px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (max-width: 640px) {
          .glass-card {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Industries;

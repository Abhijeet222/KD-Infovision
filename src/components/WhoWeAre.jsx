import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const bgImageUrl =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"; 

const values = [
  {
    icon: (
      <svg className="w-9 h-9 text-[#a78bfa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Innovation",
    desc: "We embrace emerging technologies and foster a culture of continuous learning and creative problem-solving.",
    color: "#a78bfa",
  },
  {
    icon: (
      <svg className="w-9 h-9 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M8 12h8" />
      </svg>
    ),
    title: "Integrity",
    desc: "We act with transparency, honesty, and respect, building trust with our clients and communities.",
    color: "#06b6d4",
  },
  {
    icon: (
      <svg className="w-9 h-9 text-[#3b82f6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12V4" />
      </svg>
    ),
    title: "Empowerment",
    desc: "We empower people and organizations to achieve more through knowledge, technology, and collaboration.",
    color: "#3b82f6",
  },
  {
    icon: (
      <svg className="w-9 h-9 text-[#10b981]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    title: "Impact",
    desc: "We are committed to making a positive difference—driving sustainability, inclusion, and social good.",
    color: "#10b981",
  },
];

const WhoWeAre = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const titleRef = useRef(null);

  useEffect(() => {
    if (inView && titleRef.current) {
      titleRef.current.classList.add("animate-gradient-move");
    }
  }, [inView]);

  return (
    <section
      id="who-we-are"
      ref={ref}
      className="relative py-20 sm:py-28 md:py-40 overflow-hidden"
      style={{
        background: `linear-gradient(120deg, #151a2e99 60%, #232946cc 100%), url('${bgImageUrl}') center/cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#151a2e]/80 via-[#232946]/70 to-[#0a1120]/80 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 pointer-events-none z-0 bg-ai-grid"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6 md:px-8 text-center flex flex-col items-center">
        <span className="inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#a78bfa] text-white text-xs sm:text-sm font-semibold tracking-widest shadow-xl uppercase mb-6 sm:mb-8 animate-pulse border-2 border-white/10 backdrop-blur-md">
          About Us
        </span>
        <h2
          ref={titleRef}
          className={`text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#06b6d4] to-[#3b82f6] mb-6 sm:mb-8 drop-shadow-2xl tracking-tight transition-all duration-700`}
        >
          Who We Are
        </h2>
        <p className={`text-lg sm:text-2xl md:text-3xl text-[#e0e7ef] mb-6 sm:mb-8 font-semibold drop-shadow-xl fade-in-up ${inView ? "show" : ""}`}>
          <span className="font-bold text-[#3b82f6]">KD Infovision</span> is a next-generation technology partner, building <span className="font-bold text-[#a78bfa]">L.I.V.E.</span> (Learning, Intelligent, Visionary, Empowered) enterprises for a smarter tomorrow.
        </p>
        <div className="flex flex-col md:flex-row gap-7 md:gap-10 mb-10 md:mb-12 w-full">
          <div className={`flex-1 bg-[#232946]/80 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-lg border border-[#3b82f6] hover:scale-[1.05] hover:shadow-3xl transition-transform duration-400 fade-in-up ${inView ? "show" : ""}`} style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl sm:text-2xl font-bold text-[#a78bfa] mb-2 sm:mb-3 tracking-wide">Our Mission</h3>
            <p className="text-[#cbd5e1] text-base sm:text-lg">
              To empower organizations with AI-driven solutions, data analytics, and digital innovation—enabling sustainable growth, conscious decision-making, and positive community impact.
            </p>
          </div>
          <div className={`flex-1 bg-[#232946]/80 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-lg border border-[#06b6d4] hover:scale-[1.05] hover:shadow-3xl transition-transform duration-400 fade-in-up ${inView ? "show" : ""}`} style={{ animationDelay: "0.35s" }}>
            <h3 className="text-xl sm:text-2xl font-bold text-[#06b6d4] mb-2 sm:mb-3 tracking-wide">Our Vision</h3>
            <p className="text-[#cbd5e1] text-base sm:text-lg">
              To be a catalyst for digital transformation, blending human ingenuity with cutting-edge AI and cloud technologies to shape a resilient, inclusive, and innovative future.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mb-10 md:mb-14">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`flex items-start gap-4 sm:gap-5 bg-[#151a2e]/80 rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-xl border-l-8 fade-in-up glass-blur-card ${inView ? "show" : ""}`}
              style={{
                borderColor: v.color,
                animationDelay: `${0.5 + i * 0.13}s`,
              }}
            >
              <div className="flex-shrink-0 animate-bounce-slow">{v.icon}</div>
              <div className="text-left">
                <h4 className="text-base sm:text-xl font-bold mb-1 tracking-wide" style={{ color: v.color }}>{v.title}</h4>
                <p className="text-[#cbd5e1] text-sm sm:text-base">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={`text-base sm:text-lg md:text-xl text-[#cbd5e1] mb-2 sm:mb-3 fade-in-up ${inView ? "show" : ""}`} style={{ animationDelay: "1.1s" }}>
          Our team combines deep technical expertise in <span className="text-[#3b82f6] font-semibold">AI</span>, <span className="text-[#a78bfa] font-semibold">cloud</span>, and <span className="text-[#06b6d4] font-semibold">analytics</span> with a human-centric approach, ensuring every solution is tailored to your unique needs.
        </p>
        <p className={`text-base sm:text-lg md:text-xl text-[#cbd5e1] fade-in-up ${inView ? "show" : ""}`} style={{ animationDelay: "1.2s" }}>
          Join us in shaping a smarter, more sustainable, and inclusive world—powered by AI and innovation.
        </p>
      </div>
      <style>{`
        #who-we-are {
          position: relative;
        }
        .bg-ai-grid {
          background-image: linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px);
          background-size: 48px 48px;
          animation: gridmove 60s linear infinite;
        }
        @keyframes gridmove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 48px 48px, 48px 48px; }
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(40px) scale(0.96);
          transition: opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1);
        }
        .fade-in-up.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-10px);}
        }
        .animate-bounce-slow {
          animation: bounce-slow 1.7s infinite;
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 3s ease-in-out infinite alternate;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .glass-blur-card {
          backdrop-filter: blur(8px);
          background: rgba(21,26,46,0.85);
        }
        .shadow-3xl {
          box-shadow: 0 12px 48px 0 #a78bfa44, 0 8px 32px 0 rgba(31,38,135,0.37);
        }
        @media (max-width: 640px) {
          .rounded-2xl, .md\\:rounded-3xl {
            border-radius: 1rem !important;
          }
          .p-7, .sm\\:p-8 {
            padding: 1.25rem !important;
          }
          .text-5xl {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;

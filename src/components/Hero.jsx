import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

const heroBg =
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80";

const headingText = "Transforming Business with AI & Data";
const animatedWords = [
  "AI Agents",
  "Analytics",
  "Cloud",
  "Automation",
  "Enterprise Planning",
  "Innovation",
];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [showWord, setShowWord] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(headingText.slice(0, i + 1));
      i++;
      if (i === headingText.length) clearInterval(typing);
    }, 16);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowWord(false), 1800);
    return () => clearTimeout(timeout);
  }, [wordIdx, showWord]);

  useEffect(() => {
    if (!showWord) {
      const timeout = setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % animatedWords.length);
        setShowWord(true);
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [showWord]);

  const handleAuditClick = () => {
    // Reserved for future navigation
  };

  const handleDemoClick = () => {
    navigate("/demo");
  };

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center bg-[#101624] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(120deg, #151a2e99 60%, #232946cc 100%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-hero-grid pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#151a2e] via-[#232946] to-[#0a1120] opacity-80 z-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 py-24 md:py-0">
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-start animate-hero-fadeinup">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight hero-title-gradient hero-title-shadow">
            <span className="block">{typedText}</span>
            <span className="border-r-2 border-[#a78bfa] animate-pulse ml-1" />
          </h1>
          <div className="mb-8 h-10 flex items-center">
            <span
              className={`inline-block px-6 py-2 rounded-full bg-[#181e33]/80 text-[#a78bfa] text-base sm:text-lg font-semibold shadow badge-animate transition-all duration-500 ${
                showWord ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ letterSpacing: "0.04em" }}
              key={wordIdx}
            >
              {animatedWords[wordIdx]}
            </span>
          </div>
          <p className="max-w-xl text-[#d1d5db] mb-10 text-lg md:text-xl font-medium leading-relaxed">
            <span className="font-bold text-[#a78bfa]">KD Infovision</span>{" "}
            delivers AI-powered solutions and actionable analytics for digital
            transformation. We blend human ingenuity with advanced technology
            for a smarter tomorrow.
          </p>
          <div className="flex gap-5">
            <button
              className="professional-btn bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white px-10 py-3 rounded-lg font-semibold text-lg shadow-md hover:scale-[1.04] hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a78bfa]"
              onClick={handleAuditClick}
            >
              Book Free Growth Audit
            </button>
            <button
              className="professional-btn border border-[#a78bfa] text-[#a78bfa] bg-transparent px-10 py-3 rounded-lg font-semibold text-lg hover:bg-[#a78bfa]/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a78bfa]"
              onClick={handleDemoClick}
              type="button"
            >
              Try Demo
            </button>
          </div>
          <div className="mt-12 flex gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-[#06b6d4] text-base font-medium">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" stroke="#06b6d4" />
                <path d="M12 8v4l3 3" stroke="#a78bfa" />
              </svg>
              Trusted by global enterprises
            </div>
            <div className="flex items-center gap-2 text-[#a78bfa] text-base font-medium">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4"
                  stroke="#a78bfa"
                />
                <path d="M8 12h8" stroke="#06b6d4" />
              </svg>
              AI + Human Expertise
            </div>
            <div className="flex items-center gap-2 text-[#3b82f6] text-base font-medium">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <ellipse cx="12" cy="12" rx="10" ry="6" stroke="#3b82f6" />
                <ellipse cx="12" cy="12" rx="6" ry="10" stroke="#a78bfa" />
              </svg>
              24/7 Support
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center px-4 text-center">
          <div className="w-full max-w-[500px] overflow-hidden rounded-2xl shadow-xl bg-transparent">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-2xl"
            >
              <source src="/videos/ai-analytics.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h3 className="mt-6 text-xl md:text-2xl font-semibold text-[#a78bfa] leading-snug">
            Transform Your Data into <br className="hidden sm:block" />
            <span className="text-[#06b6d4]">Actionable Insights</span>
          </h3>
          <p className="mt-2 text-[#d1d5db] text-sm sm:text-base max-w-md">
            Discover how AI and analytics drive smarter decisions and innovation.
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <span className="scroll-mouse mb-2"></span>
        <span className="text-xs text-[#a78bfa] tracking-widest font-semibold uppercase">
          Scroll Down
        </span>
      </div>
      <div className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[120px] md:h-[220px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroWave1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#232946" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#101624" stopOpacity="0.98" />
            </linearGradient>
            <linearGradient id="heroWave2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.13" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.10" />
            </linearGradient>
          </defs>
          <path
            d="M0,120 Q360,200 720,120 T1440,120 L1440,220 L0,220 Z"
            fill="url(#heroWave1)"
          />
          <path
            d="M0,160 Q480,60 960,180 T1440,100 L1440,220 L0,220 Z"
            fill="url(#heroWave2)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

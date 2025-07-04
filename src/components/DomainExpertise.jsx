import React from "react";

const domainData = [
  {
    title: "Global Capability Centre",
    color: "#6366f1",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" stroke="#06b6d4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Financial Excellence",
    color: "#06b6d4",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="#06b6d4" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M8 8h8v8H8z" stroke="#6366f1" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Procurement Insights Practice",
    color: "#10b981",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="#10b981" strokeWidth="2" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <ellipse cx="12" cy="12" rx="6" ry="10" stroke="#06b6d4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Sales & Marketing Hub",
    color: "#f59e42",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Supply Chain Intelligence",
    color: "#ec4899",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="#ec4899" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 9h6v6H9z" stroke="#a78bfa" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "ESG Spotlight",
    color: "#a78bfa",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" stroke="#06b6d4" strokeWidth="2" />
      </svg>
    ),
  },
];

const DomainExpertise = () => (
  <section className="py-14 md:py-20 bg-gradient-to-br from-[#151a2e] via-[#232946] to-[#0a1120]">
    <div className="text-center mb-10 md:mb-14 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow-lg">
        Domain Expertise
      </h2>
      <p className="text-[#94a3b8] text-base sm:text-lg md:text-xl max-w-xl mx-auto">
        Deep expertise across business domains, powered by AI and analytics.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 max-w-6xl mx-auto px-4">
      {domainData.map((item) => (
        <div
          key={item.title}
          className="group p-7 sm:p-8 rounded-2xl shadow-xl flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            background: "rgba(21, 26, 46, 0.7)",
            backdropFilter: "blur(14px)",
            border: `2px solid ${item.color}33`,
            boxShadow: `0 4px 24px 0 ${item.color}33`,
          }}
        >
          <div
            className="mb-4 group-hover:scale-110 transition-transform duration-300"
            style={{ color: item.color }}
          >
            {item.icon}
          </div>
          <h3
            className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center"
            style={{ color: item.color }}
          >
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  </section>
);

export default DomainExpertise;

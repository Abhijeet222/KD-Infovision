import { useState } from "react";

const partners = [
	{
		name: "Google",
		color: "#4285F4",
		description:
			"Cloud, AI, and analytics partner. Google Cloud Platform accelerates digital transformation.",
		details: (
			<div>
				<p>
					<b>About Google Cloud:</b> Google Cloud offers secure, open, intelligent, and transformative tools to help enterprises modernize for today’s digital world.
				</p>
				<ul className="list-disc list-inside mt-2 text-left text-[#b6c2d6]">
					<li>AI/ML, Data Analytics, and scalable cloud infrastructure</li>
					<li>Global network and security</li>
					<li>Innovative APIs and developer tools</li>
				</ul>
				<a
					href="https://cloud.google.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block mt-4 text-[#4285F4] underline hover:text-[#174ea6] transition"
				>
					Visit Google Cloud &rarr;
				</a>
			</div>
		),
		logo: <img src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg" alt="" />,
	},
	{
		name: "Apple",
		color: "#A2AAAD",
		description:
			"Leader in consumer electronics, software, and services. Innovator of the iPhone, iPad, and Mac computers.",
		logo: <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />,
	},
	{
		name: "AWS",
		color: "#FF9900",
		description:
			"Leading cloud platform for scalable, secure, and reliable solutions.",
		details: (
			<div>
				<p>
					<b>About AWS:</b> Amazon Web Services provides on-demand cloud computing platforms and APIs to individuals, companies, and governments.
				</p>
				<ul className="list-disc list-inside mt-2 text-left text-[#b6c2d6]">
					<li>Compute, storage, and database services</li>
					<li>Machine learning and analytics</li>
					<li>Global infrastructure and security</li>
				</ul>
				<a
					href="https://aws.amazon.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block mt-4 text-[#FF9900] underline hover:text-[#b46900] transition"
				>
					Visit AWS &rarr;
				</a>
			</div>
		),
		logo: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="" />,
	},
	{
		name: "Alteryx",
		color: "#2D9CDB",
		description:
			"Data analytics and business intelligence solutions. Empowering data-driven decisions.",
		logo: (
			<svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" aria-label="Alteryx">
				<g>
					<circle cx="24" cy="24" r="21" fill="#2D9CDB" />
					<text
						x="24"
						y="32"
						textAnchor="middle"
						fontSize="18"
						fill="#fff"
						fontFamily="Arial, Helvetica, sans-serif"
						fontWeight="bold"
					>
						A
					</text>
				</g>
			</svg>
		),
	},
	{
		name: "Microsoft",
		color: "#737373",
		description:
			"Global leader in software, services, devices, and solutions. Creator of Windows OS and Azure cloud services.",
		logo: (
			<svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" aria-label="Microsoft">
				<g>
					<rect x="4" y="4" width="18" height="18" fill="#F35325" />
					<rect x="26" y="4" width="18" height="18" fill="#81BC06" />
					<rect x="4" y="26" width="18" height="18" fill="#05A6F0" />
					<rect x="26" y="26" width="18" height="18" fill="#FFBA08" />
				</g>
			</svg>
		),
	},
	{
		name: "Tableau",
		color: "#E97627",
		description:
			"Interactive data visualization and business intelligence software. Transforming the way we use data.",
		logo: (
			<svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" aria-label="Tableau">
				<g>
					<circle cx="24" cy="24" r="21" fill="#E97627" />
					<text
						x="24"
						y="32"
						textAnchor="middle"
						fontSize="18"
						fill="#fff"
						fontFamily="Arial, Helvetica, sans-serif"
						fontWeight="bold"
					>
						T
					</text>
				</g>
			</svg>
		),
	},
	{
		name: "Snowflake",
		color: "#56B9EB",
		description:
			"Cloud-based data-warehousing company. Simplifying data storage and analytics.",
		logo: (
			<svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" aria-label="Snowflake">
				<g>
					<circle cx="24" cy="24" r="21" fill="#56B9EB" />
					<text
						x="24"
						y="32"
						textAnchor="middle"
						fontSize="18"
						fill="#fff"
						fontFamily="Arial, Helvetica, sans-serif"
						fontWeight="bold"
					>
						S
					</text>
				</g>
			</svg>
		),
	},
	{
		name: "Databricks",
		color: "#FF3621",
		description:
			"Unified data analytics platform. Accelerating innovation by unifying data science, engineering, and business.",
		logo: (
			<svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" aria-label="Databricks">
				<g>
					<circle cx="24" cy="24" r="21" fill="#FF3621" />
					<text
						x="24"
						y="32"
						textAnchor="middle"
						fontSize="18"
						fill="#fff"
						fontFamily="Arial, Helvetica, sans-serif"
						fontWeight="bold"
					>
						D
					</text>
				</g>
			</svg>
		),
	},
	{
		name: "Salesforce",
		color: "#00A1E0",
		description:
			"Customer relationship management software. Helping businesses connect with their customers.",
		logo: (
			<svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" aria-label="Salesforce">
				<g>
					<circle cx="24" cy="24" r="21" fill="#00A1E0" />
					<text
						x="24"
						y="32"
						textAnchor="middle"
						fontSize="18"
						fill="#fff"
						fontFamily="Arial, Helvetica, sans-serif"
						fontWeight="bold"
					>
						S
					</text>
				</g>
			</svg>
		),
	},
	{
		name: "IBM",
		color: "#006699",
		description:
			"Multinational technology and consulting company. Offering AI, cloud computing, and blockchain solutions.",
		logo: (
			<svg viewBox="0 0 48 48" className="w-12 h-12 mb-3" aria-label="IBM">
				<g>
					<circle cx="24" cy="24" r="21" fill="#006699" />
					<text
						x="24"
						y="32"
						textAnchor="middle"
						fontSize="18"
						fill="#fff"
						fontFamily="Arial, Helvetica, sans-serif"
						fontWeight="bold"
					>
						IBM
					</text>
				</g>
			</svg>
		),
	},
];

const Partnership = () => {
	const [hovered, setHovered] = useState(null);
	const [modalIdx, setModalIdx] = useState(null);

	return (
		<section
			id="partnership"
			className="py-14 sm:py-20 bg-gradient-to-br from-[#151a2e] via-[#232946] to-[#0a1120] relative overflow-hidden"
		>
			<div className="absolute inset-0 pointer-events-none z-0 bg-tech-grid"></div>
			<div className="relative z-10 text-center mb-10 sm:mb-12 px-2">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#a78bfa] tracking-tight drop-shadow-lg inline-block relative">
					Partnerships
					<span className="block h-1 w-20 mx-auto mt-3 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#a78bfa] rounded-full opacity-80"></span>
				</h2>
			</div>
			<div className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 max-w-6xl mx-auto px-2 sm:px-4">
				{partners.map((p, idx) => (
					<div
						key={p.name}
						className={`
              partner-card glass-card flex flex-col items-center justify-center min-w-[160px] sm:min-w-[200px] max-w-[260px] px-6 sm:px-10 py-7 sm:py-10 rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden
              ${hovered === null ? "" : hovered === idx ? "active-card" : "inactive-card"}
            `}
						style={{
							border: `2px solid ${p.color}33`,
							boxShadow: `0 4px 24px 0 ${p.color}33`,
							animation: `fadeInUp 0.8s cubic-bezier(.4,0,.2,1) both`,
							animationDelay: `${idx * 0.1 + 0.2}s`,
							animationFillMode: "both",
							zIndex: hovered === idx ? 2 : 1,
						}}
						onMouseEnter={() => setHovered(idx)}
						onMouseLeave={() => setHovered(null)}
						onClick={() => setModalIdx(idx)}
					>
						<div className="relative mb-2 w-12 h-12 flex items-center justify-center">
							<div
								className="absolute inset-0 rounded-full blur-xl opacity-40"
								style={{
									background: `radial-gradient(circle at 60% 40%, ${p.color}55 0%, transparent 70%)`,
									zIndex: 1,
								}}
							/>
							<div
								className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110"
								style={{
									filter: "drop-shadow(0 2px 12px " + p.color + "44)",
								}}
								title={p.name}
							>
								{p.logo}
							</div>
						</div>
						<span
							className="text-base sm:text-lg md:text-xl font-bold mt-2 tracking-wide text-center"
							style={{
								color: p.color,
								textShadow: `0 2px 16px ${p.color}55`,
								letterSpacing: "1px",
							}}
						>
							{p.name}
						</span>
						<div
							className={`partner-extra-content ${
								hovered === idx ? "show" : ""
							}`}
						>
							<p className="text-xs sm:text-sm text-[#cbd5e1] text-center">{p.description}</p>
						</div>
					</div>
				))}
			</div>

			{modalIdx !== null && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
					onClick={() => setModalIdx(null)}
				>
					<div
						className="relative bg-gradient-to-br from-[#232946] to-[#151a2e] rounded-3xl shadow-2xl p-6 sm:p-8 max-w-xs sm:max-w-lg w-[92vw] text-center border-2 border-[#a78bfa] animate-modalPop"
						style={{ animationDelay: "0.1s" }}
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#a78bfa] hover:text-white text-xl sm:text-2xl font-bold transition"
							onClick={() => setModalIdx(null)}
							aria-label="Close"
						>
							&times;
						</button>
						<div className="flex flex-col items-center">
							<div className="mb-2">{partners[modalIdx].logo}</div>
							<h3
								className="text-lg sm:text-2xl font-bold mb-2"
								style={{ color: partners[modalIdx].color }}
							>
								{partners[modalIdx].name}
							</h3>
							<p className="text-[#cbd5e1] text-sm sm:text-base mb-2">
								{partners[modalIdx].description}
							</p>
							<div className="text-[#e0e7ef] text-xs sm:text-sm mt-2">
								{partners[modalIdx].details}
							</div>
						</div>
					</div>
				</div>
			)}

			<style>{`
        .glass-card {
          background: rgba(21, 26, 46, 0.7);
          backdrop-filter: blur(14px);
          border-radius: 1.5rem;
          border: 1.5px solid rgba(59, 130, 246, 0.18);
          transition: border 0.3s, box-shadow 0.3s, transform 0.3s;
          position: relative;
          overflow: hidden;
        }
        .partner-card {
          transition:
            box-shadow 0.4s cubic-bezier(.4,0,.2,1),
            border 0.4s cubic-bezier(.4,0,.2,1),
            transform 0.5s cubic-bezier(.4,0,.2,1),
            opacity 0.4s cubic-bezier(.4,0,.2,1),
            filter 0.4s cubic-bezier(.4,0,.2,1);
          will-change: transform, opacity, filter;
        }
        .partner-card .partner-extra-content {
          opacity: 0;
          max-height: 0;
          transform: translateY(20px) scale(0.98);
          transition: all 0.5s cubic-bezier(.4,0,.2,1);
          overflow: hidden;
          margin-top: 0;
        }
        .partner-card .partner-extra-content.show {
          opacity: 1;
          max-height: 120px;
          transform: translateY(0) scale(1);
          margin-top: 14px;
        }
        .partner-card.active-card {
          transform: scale(1.08) translateY(-8px) rotateZ(-1deg);
          opacity: 1;
          filter: blur(0);
          box-shadow: 0 0 48px 16px #a78bfa99, 0 8px 32px 0 rgba(31,38,135,0.37);
          border-image: conic-gradient(from 180deg at 50% 50%, #3b82f6 0%, #06b6d4 33%, #a78bfa 66%, #3b82f6 100%) 1;
          background: rgba(21, 26, 46, 0.92);
          z-index: 2;
        }
        .partner-card.inactive-card {
          opacity: 0.15;
          transform: scale(0.92);
          filter: blur(2px);
          z-index: 1;
          pointer-events: none;
        }
        .partner-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
          background: conic-gradient(from 180deg at 50% 50%, #3b82f6 0%, #06b6d4 33%, #a78bfa 66%, #3b82f6 100%);
          z-index: 0;
          filter: blur(16px);
          animation: borderGlow 3s linear infinite;
        }
        .partner-card.active-card::before {
          opacity: 0.28;
        }
        .bg-tech-grid {
          background-image: linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px);
          background-size: 40px 40px;
          animation: gridmove 40s linear infinite;
        }
        @keyframes gridmove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 40px 40px, 40px 40px; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.96);}
          100% { opacity: 1; transform: translateY(0) scale(1);}
        }
        @keyframes borderGlow {
          0% { filter: blur(16px) brightness(1); }
          50% { filter: blur(24px) brightness(1.2);}
          100% { filter: blur(16px) brightness(1);}
        }
        .animate-fadeIn {
          animation: fadeInModal 0.3s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInModal {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-modalPop {
          animation: modalPop 0.4s cubic-bezier(.4,0,.2,1);
        }
        @keyframes modalPop {
          0% { opacity: 0; transform: scale(0.85);}
          100% { opacity: 1; transform: scale(1);}
        }
        @media (max-width: 640px) {
          .partner-card {
            min-width: 90vw !important;
            max-width: 98vw !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
          }
          .partner-card .text-lg, .partner-card .text-xl {
            font-size: 1.1rem !important;
          }
        }
      `}</style>

<div className="absolute bottom-0 left-0 w-full h-[4px] z-20 bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 animate-pulse shadow-[0_0_20px_2px_rgba(167,139,250,0.5)]"></div>

		</section>
	);
};

export default Partnership;

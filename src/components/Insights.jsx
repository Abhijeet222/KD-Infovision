import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";


const bgImageUrl =
	"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80";

	

const companyIntro = (
	<div className="max-w-3xl mx-auto text-center mb-12 relative z-10 px-2 sm:px-4">
		<h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
			KD Infovision: Empowering Digital Transformation
		</h1>
		<p className="text-base sm:text-lg md:text-xl text-[#e0e7ef] mb-2">
			At{" "}
			<span className="font-bold text-[#a78bfa]">KD Infovision</span>, we help
			organizations unlock the power of data and technology. Our expertise spans
			cloud, analytics, AI, and digital solutions, enabling clients to innovate
			and grow in a rapidly changing world.
		</p>
		<p className="text-sm sm:text-base text-[#cbd5e1]">
			Explore our latest insights, resources, and thought leadership below.
		</p>
	</div>
);

const insightsData = [
	{
		label: "Blogs",
		color: "#3b82f6",
		description: "Read our latest articles and thought leadership.",
		details: (
			<div>
				<p>
					<b>Explore our Blogs:</b> Stay updated with industry trends, best
					practices, and expert opinions from our team.
				</p>
				<ul className="list-disc list-inside mt-2 text-left text-[#b6c2d6]">
					<li>Technology deep-dives</li>
					<li>Case studies and success stories</li>
					<li>Tips, tricks, and how-tos</li>
				</ul>
				<a
					href="#"
					className="inline-block mt-4 text-[#3b82f6] underline hover:text-[#174ea6] transition"
				>
					Visit Blog &rarr;
				</a>
			</div>
		),
		icon: (
			<svg className="w-10 h-10" fill="none" stroke="#3b82f6" strokeWidth="2">
				<rect x="4" y="6" width="16" height="12" rx="2" />
				<path d="M8 6v12" />
			</svg>
		),
	},
	{
		label: "Case Study",
		color: "#06b6d4",
		description: "See real-world results from our solutions.",
		details: (
			<div>
				<p>
					<b>Case Studies:</b> Discover how we've helped clients achieve their
					goals with innovative solutions.
				</p>
				<ul className="list-disc list-inside mt-2 text-left text-[#b6c2d6]">
					<li>Industry-specific transformations</li>
					<li>Measurable business impact</li>
					<li>Client testimonials</li>
				</ul>
			</div>
		),
		icon: (
			<svg className="w-10 h-10" fill="none" stroke="#06b6d4" strokeWidth="2">
				<rect x="3" y="4" width="18" height="16" rx="2" />
				<path d="M7 8h10M7 12h10M7 16h6" />
			</svg>
		),
	},
	{
		label: "eBook",
		color: "#a78bfa",
		description: "Download in-depth guides and resources.",
		details: (
			<div>
				<p>
					<b>eBooks:</b> Comprehensive resources to help you master new
					technologies and strategies.
				</p>
				<ul className="list-disc list-inside mt-2 text-left text-[#b6c2d6]">
					<li>Step-by-step guides</li>
					<li>Industry research</li>
					<li>Expert insights</li>
				</ul>
			</div>
		),
		icon: (
			<svg className="w-10 h-10" fill="none" stroke="#a78bfa" strokeWidth="2">
				<rect x="6" y="4" width="12" height="16" rx="2" />
				<path d="M8 8h8M8 12h8M8 16h4" />
			</svg>
		),
	},
	{
		label: "Datasheet",
		color: "#10b981",
		description: "Get technical details and product specs.",
		details: (
			<div>
				<p>
					<b>Datasheets:</b> All the technical information you need about our
					products and services.
				</p>
				<ul className="list-disc list-inside mt-2 text-left text-[#b6c2d6]">
					<li>Features and capabilities</li>
					<li>Integration options</li>
					<li>Performance benchmarks</li>
				</ul>
			</div>
		),
		icon: (
			<svg className="w-10 h-10" fill="none" stroke="#10b981" strokeWidth="2">
				<rect x="4" y="4" width="16" height="16" rx="2" />
				<path d="M8 8h8v8H8z" />
			</svg>
		),
	},
	{
		label: "Webinar",
		color: "#f59e42",
		description: "Join live and on-demand expert sessions.",
		details: (
			<div>
				<p>
					<b>Webinars:</b> Learn from our experts and guest speakers on the
					latest topics.
				</p>
				<ul className="list-disc list-inside mt-2 text-left text-[#b6c2d6]">
					<li>Live Q&A sessions</li>
					<li>On-demand replays</li>
					<li>Interactive demos</li>
				</ul>
			</div>
		),
		icon: (
			<svg className="w-10 h-10" fill="none" stroke="#f59e42" strokeWidth="2">
				<ellipse cx="12" cy="12" rx="10" ry="6" />
				<ellipse cx="12" cy="12" rx="6" ry="10" />
			</svg>
		),
	},
	{
		label: "Whitepaper",
		color: "#ec4899",
		description: "Read authoritative research and analysis.",
		details: (
			<div>
				<p>
					<b>Whitepapers:</b> In-depth research and analysis on key industry
					topics.
				</p>
				<ul className="list-disc list-inside mt-2 text-left text-[#b6c2d6]">
					<li>Market trends</li>
					<li>Technical deep-dives</li>
					<li>Strategic recommendations</li>
				</ul>
			</div>
		),
		icon: (
			<svg className="w-10 h-10" fill="none" stroke="#ec4899" strokeWidth="2">
				<circle cx="12" cy="12" r="10" />
				<path d="M12 6v6l4 2" />
			</svg>
		),
	},
	{
		label: "Glossary",
		color: "#6366f1",
		description: "Understand key terms and concepts.",
		details: (
			<div>
				<p>
					<b>Glossary:</b> Definitions and explanations of important industry
					terms.
				</p>
				<ul className="list-disc list-inside mt-2 text-left text-[#b6c2d6]">
					<li>Technical jargon explained</li>
					<li>Industry acronyms</li>
					<li>Best practices</li>
				</ul>
			</div>
		),
		icon: (
			<svg className="w-10 h-10" fill="none" stroke="#6366f1" strokeWidth="2">
				<rect x="6" y="6" width="12" height="12" rx="2" />
				<path d="M9 9h6v6H9z" />
			</svg>
		),
	},
	{
		label: "News",
		color: "#a78bfa",
		description: "Stay up to date with our latest announcements.",
		details: (
			<div>
				<p>
					<b>News:</b> The latest updates, press releases, and company
					announcements.
				</p>
				<ul className="list-disc list-inside mt-2 text-left text-[#b6c2d6]">
					<li>Product launches</li>
					<li>Partnerships</li>
					<li>Events and awards</li>
				</ul>
			</div>
		),
		icon: (
			<svg className="w-10 h-10" fill="none" stroke="#a78bfa" strokeWidth="2">
				<rect x="4" y="4" width="16" height="16" rx="4" />
				<path d="M8 8h8v8H8z" />
			</svg>
		),
	},
];

const Insights = () => {
	const scrollRef = useRef(null);
	const [activeIdx, setActiveIdx] = useState(null);
	const [modalIdx, setModalIdx] = useState(null);
	const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.15 });

	const handleMouseMove = (e, idx) => {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		card.style.transform = `rotateY(${x / 18}deg) rotateX(${-y / 18}deg) scale(1.04)`;
	};
	const handleMouseLeave = (e) => {
		e.currentTarget.style.transform = "";
	};

	const scroll = (offset) => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
		}
	};

	return (
		<section
			id="insights"
			className="relative py-16 sm:py-24 overflow-x-hidden"
			ref={ref}
			style={{
				background: `linear-gradient(to bottom right, #151a2e99 60%, #232946cc 100%), url('${bgImageUrl}') center/cover no-repeat`,
			}}
		>
			<div className="absolute inset-0 bg-[#151a2e]/80 z-0"></div>
			<div className="relative z-10">{companyIntro}</div>
			<div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
				<div className="text-center mb-10 sm:mb-12">
					<h2 className="text-3xl sm:text-5xl font-extrabold text-[#a78bfa] tracking-tight mb-2 drop-shadow-2xl inline-block relative">
						Insights
						<span className="block h-1 w-20 mx-auto mt-3 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#a78bfa] rounded-full opacity-80"></span>
					</h2>
				</div>
				<div className="relative w-full flex items-center justify-center">
					<button
						onClick={() => scroll(-340)}
						className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#232946]/80 text-white rounded-full p-3 shadow-lg transition scroll-btn-glow"
						aria-label="Scroll left"
					>
						<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
							<path d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<div
						ref={scrollRef}
						className="flex gap-6 sm:gap-10 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#232946] scrollbar-track-transparent snap-x snap-mandatory w-full justify-center"
						style={{ scrollBehavior: "smooth" }}
					>
						{insightsData.map((item, idx) => (
							<div
								key={item.label}
								className={`min-w-[260px] sm:min-w-[340px] max-w-xs sm:max-w-md flex-1 snap-center insight-card flex flex-col items-center p-8 sm:p-14 shadow-2xl group relative cursor-pointer ${
									inView ? "insight-card-in" : "opacity-0"
								} ${activeIdx === null ? "" : activeIdx === idx ? "active-card" : "inactive-card"}`}
								style={{
									animationDelay: inView ? `${idx * 0.12 + 0.2}s` : "0s",
									animationFillMode: "both",
									borderImage: `linear-gradient(90deg,${item.color},#232946) 1`,
									zIndex: activeIdx === idx ? 2 : 1,
									background: "rgba(24,30,51,0.92)",
									boxShadow:
										activeIdx === idx
											? `0 0 64px 24px ${item.color}55, 0 8px 32px 0 rgba(31,38,135,0.37)`
											: `0 8px 32px 0 rgba(31,38,135,0.18)`,
								}}
								tabIndex={0}
								onMouseEnter={() => setActiveIdx(idx)}
								onMouseLeave={(e) => {
									setActiveIdx(null);
									handleMouseLeave(e);
								}}
								onClick={() => setModalIdx(idx)}
								onMouseMove={(e) => handleMouseMove(e, idx)}
								onBlur={() => setActiveIdx(null)}
							>
								<div
									className="mb-6 group-hover:scale-110 transition-transform duration-300"
									style={{ color: item.color }}
								>
									{item.icon}
								</div>
								<p
									className="text-lg sm:text-2xl font-semibold text-[#f3f4f6] text-center"
									style={{ color: item.color }}
								>
									{item.label}
								</p>
								<div
									className="insight-card-glow"
									style={{
										background: `radial-gradient(circle at 60% 40%, ${item.color}55 0%, transparent 70%)`,
									}}
								/>
							
								<div className={`insight-extra-content ${activeIdx === idx ? "show" : ""}`}>
									<p className="text-xs sm:text-sm text-[#cbd5e1] mt-4">{item.description}</p>
								</div>
							</div>
						))}
					</div>
					<button
						onClick={() => scroll(340)}
						className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#232946]/80 text-white rounded-full p-3 shadow-lg transition scroll-btn-glow"
						aria-label="Scroll right"
					>
						<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
							<path d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
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
							<div className="mb-2">{insightsData[modalIdx].icon}</div>
							<h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: insightsData[modalIdx].color }}>
								{insightsData[modalIdx].label}
							</h3>
							<p className="text-[#cbd5e1] text-sm sm:text-base mb-2">{insightsData[modalIdx].description}</p>
							<div className="text-[#e0e7ef] text-xs sm:text-sm mt-2">{insightsData[modalIdx].details}</div>
						</div>
					</div>
				</div>
			)}

			
			
<div className="absolute bottom-0 left-0 w-full h-[4px] z-20 bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 animate-pulse shadow-[0_0_20px_2px_rgba(167,139,250,0.5)]"></div>

		</section>
	);
};

export default Insights;
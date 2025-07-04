import { useState } from 'react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Solution', id: 'solution' },
  { label: 'Industries', id: 'industries' },
  { label: 'Insights', id: 'insights' },
  { label: 'Partnership', id: 'partnership' },
  { label: 'Who We Are', id: 'who-we-are' },
  { label: 'Contact Us', id: 'contact-us' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#151a2e] via-[#232946] to-[#3b82f6] text-white shadow-xl sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-[#a78bfa] drop-shadow-lg">
            KD Infovision
          </span>
          <span className="hidden md:inline-block ml-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#a78bfa] text-xs text-white font-semibold shadow-md animate-pulse">
            Empowering Digital
          </span>
        </div>

        <nav className="hidden md:flex flex-wrap space-x-2 lg:space-x-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative font-medium px-3 py-1 rounded-lg transition-all duration-200 hover:bg-[#232946]/60 hover:text-[#a78bfa] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a78bfa]"
            >
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#232946] px-4 pb-4 animate-fadeIn">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block py-2 px-3 rounded-lg hover:bg-[#3b82f6]/40 hover:text-[#a78bfa] transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          header {
            backdrop-filter: blur(8px);
            background: linear-gradient(90deg, #151a2e 80%, #232946 100%);
          }
          .max-w-7xl {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .text-xl {
            font-size: 1.1rem;
          }
        }
        .animate-fadeIn {
          animation: fadeInMenu 0.3s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInMenu {
          0% { opacity: 0; transform: translateY(-16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Header;

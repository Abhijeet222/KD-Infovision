import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#151a2e] via-[#232946] to-[#3b82f6] text-[#e0e7ef] pt-12 pb-6 px-4 mt-16 relative z-20 shadow-footer">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-6">
        <div className="flex flex-col items-start gap-2 mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#a78bfa] tracking-wide drop-shadow-lg">
              KD Infovision
            </span>
            <span className="ml-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#a78bfa] text-xs text-white font-semibold shadow-md animate-pulse">
              Empowering Digital
            </span>
          </div>
          <span className="text-xs sm:text-sm text-[#b6c2d6] mt-1">
            Building L.I.V.E. Enterprises for a smarter tomorrow.
          </span>
        </div>

        <nav className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-base font-medium">
          <a href="#who-we-are" className="hover:text-[#a78bfa] transition-colors">
            Who We Are
          </a>
          <a href="#insights" className="hover:text-[#06b6d4] transition-colors">
            Insights
          </a>
          <a href="#partnership" className="hover:text-[#3b82f6] transition-colors">
            Partnerships
          </a>
          <a href="#contact-us" className="hover:text-[#10b981] transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex gap-4 sm:gap-5 text-lg mt-4 md:mt-0">
          <a href="#" className="hover:text-[#a78bfa] transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.16 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.09 22 12.07z" />
            </svg>
          </a>
          <a href="#" className="hover:text-[#06b6d4] transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.07 11c0 .34.04.67.1.99C7.72 11.8 4.8 10.13 2.92 7.7c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.9 3.54-.7-.02-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.75.16-1.15.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.38 0-.76-.02-1.13-.07A12.13 12.13 0 0 0 7.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/kd-infovision-consulting/posts/?feedView=all" className="hover:text-[#3b82f6] transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-[#a78bfa]/20 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#b6b6c7]">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#a78bfa]">KD Infovision</span>. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
          <a href="mailto:info@kdinfovision.com" className="hover:text-[#a78bfa] transition-colors break-all">
            info@kdinfovision.com
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="tel:+911234567890" className="hover:text-[#06b6d4] transition-colors">
            +91 12345 67890
          </a>
        </div>
      </div>

      <style>{`
        .shadow-footer {
          box-shadow: 0 -2px 32px 0 #23294655;
        }
        footer::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6 0%, #a78bfa 50%, #06b6d4 100%);
          opacity: 0.5;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .max-w-6xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        @media (max-width: 640px) {
          .max-w-6xl {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .flex-col.md\\:flex-row {
            flex-direction: column !important;
          }
          .flex-col.sm\\:flex-row {
            flex-direction: column !important;
          }
          .gap-8.md\\:gap-6 {
            gap: 2rem !important;
          }
          .gap-4.sm\\:gap-5 {
            gap: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

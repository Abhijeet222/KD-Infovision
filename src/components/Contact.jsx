import { useState, useEffect } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => setSubmitted(false), 3500);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-us"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #151a2e99 60%, #232946cc 100%), url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#151a2e]/80 via-[#232946]/70 to-[#0a1120]/80 z-0 pointer-events-none"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#a78bfa] text-center mb-8 md:mb-10 drop-shadow-lg tracking-tight animate-gradient-move">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg text-[#e0e7ef] text-center mb-8 md:mb-10">
          Let’s connect! Fill out the form and our team will get back to you soon.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-stretch">
          <form
            className="flex-1 bg-[#232946]/90 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 grid grid-cols-1 gap-6 md:gap-7 backdrop-blur-lg border border-[#3b82f6]/30"
            onSubmit={handleSubmit}
          >
            {submitted ? (
              <div className="text-center py-12 sm:py-16 animate-fadeOut">
                <svg className="mx-auto mb-4 w-12 h-12 sm:w-16 sm:h-16 text-[#a78bfa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#a78bfa" strokeWidth="2" fill="#232946" />
                  <path d="M8 12l3 3 5-5" stroke="#a78bfa" strokeWidth="2" fill="none" />
                </svg>
                <p className="text-lg sm:text-xl text-[#a78bfa] font-bold mb-2">Thank you!</p>
                <p className="text-[#e0e7ef]">We&apos;ll connect you as soon as possible.</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#a78bfa]" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-[#3b82f6]/30 bg-[#151a2e]/60 text-[#e0e7ef] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition placeholder:text-[#b6b6c7]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#a78bfa]" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    className="w-full border border-[#3b82f6]/30 bg-[#151a2e]/60 text-[#e0e7ef] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition placeholder:text-[#b6b6c7]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#a78bfa]" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full border border-[#3b82f6]/30 bg-[#151a2e]/60 text-[#e0e7ef] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition placeholder:text-[#b6b6c7]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#a78bfa]" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows="4"
                    className="w-full border border-[#3b82f6]/30 bg-[#151a2e]/60 text-[#e0e7ef] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition placeholder:text-[#b6b6c7]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#a78bfa] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 tracking-wide"
                >
                  Submit
                </button>
              </>
            )}
          </form>
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <div className="bg-[#232946]/90 rounded-2xl shadow-2xl p-4 sm:p-6 w-full border border-[#3b82f6]/30 mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#a78bfa] mb-2 text-center">Our Location</h3>
              <p className="text-[#e0e7ef] mb-4 text-center text-sm sm:text-base">
                KD Infovision<br />
                B-701, Amar Nagar Mulund West, Mumbai,MH–400082    
              </p>
              <div className="w-full rounded-2xl overflow-hidden shadow-lg border-2 border-[#3b82f6]/30" style={{ minHeight: 180 }}>
                <iframe
                  title="KD Infovision Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.204401242504!2d72.93326211490103!3d19.14062668705515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b907979cb12f%3A0xaeb948b9d1628962!2sAmar%20Nagar%2C%20Mulund%20West%2C%20Mumbai%2C%20Maharashtra%20400082!5e0!3m2!1sen!2sin!4v1720075783549!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="flex flex-col items-center mt-2">
              <span className="text-[#a78bfa] font-semibold text-sm sm:text-base">Email:</span>
              <a href="mailto:info@kdinfovision.com" className="text-[#e0e7ef] hover:underline text-sm sm:text-base">info@kdinfovision.com, careers@kdinfovision.com</a>
              <span className="text-[#a78bfa] font-semibold mt-2 text-sm sm:text-base">Phone:</span>
              <a href="tel:+911234567890" className="text-[#e0e7ef] hover:underline text-sm sm:text-base">+91 +91 9893183931</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 3s ease-in-out infinite alternate;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-fadeOut {
          animation: fadeOutMsg 0.7s 2.8s forwards;
        }
        @keyframes fadeOutMsg {
          to {
            opacity: 0;
            transform: translateY(-20px) scale(0.96);
            pointer-events: none;
          }
        }
        @media (max-width: 1024px) {
          .flex-col.lg\\:flex-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;

const Demo = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#151a2e] via-[#232946] to-[#0a1120]">
    <div className="demo-glass-card p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#06b6d4] to-[#3b82f6] mb-4">
        Welcome to the Demo!
      </h1>
      <p className="text-[#e0e7ef] mb-6">
        This is your interactive AI-powered demo area. You can showcase features, forms, or anything you want here!
      </p>
      <button
        className="glow-btn bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-[#0a1120] px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  </div>
);

export default Demo;
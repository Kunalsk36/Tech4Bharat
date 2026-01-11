/* ===============================
   ICON COMPONENTS
================================ */
const GovernanceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18" /><path d="M12 3a15 15 0 0 0 0 18" /><rect x="9" y="14" width="6" height="5" rx="1" /><path d="M10 14v-2a2 2 0 0 1 4 0v2" />
  </svg>
);

const AIIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" /><circle cx="12" cy="11" r="2" /><path d="M12 7v2M12 13v2M9 11h2M13 11h2" />
  </svg>
);

const CyberIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" /><path d="M13 9l-3 5h3l-1 4" />
  </svg>
);

const StrategyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="12" r="2" /><circle cx="12" cy="6" r="2" /><circle cx="18" cy="12" r="2" /><circle cx="12" cy="18" r="2" /><path d="M8 12h4M12 8v4M14 12h4M12 14v4" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function OurWorkshop() {
  const bulletPoints = [
    "Technology & Public Policy Foundations",
    "AI, Data Governance & Cybersecurity",
    "Innovation, Strategy & Policy Thinking",
    "Real-World Case Studies & Simulations"
  ];

  const gridItems = [
    { title: "Digital Governance & DPI", icon: <GovernanceIcon />, shape: "30% 70% 70% 30% / 30% 30% 70% 70%" },
    { title: "AI & Emerging Tech Policies", icon: <AIIcon />, shape: "60% 40% 30% 70% / 60% 30% 70% 40%" },
    { title: "Cyber-Physical & Energy Systems", icon: <CyberIcon />, shape: "40% 60% 70% 30% / 40% 40% 60% 60%" },
    { title: "Technostrategic Decision Making", icon: <StrategyIcon />, shape: "70% 30% 40% 60% / 30% 70% 30% 70%" },
  ];

  return (
    <section className="relative py-12 sm:py-12">
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#edeef8] to-[#c5d1ff] rounded-[3rem] shadow-xl px-6 sm:px-10 lg:px-12 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold
              bg-gradient-to-r
              from-[#020024]
              via-[#090979]
              to-[#00D4FF]
              bg-clip-text text-transparent">
            Latest Workshop
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">Highlights from our recently conducted workshop.</p>
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-inner border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#020024] via-[#090979] to-[#00D4FF] bg-clip-text text-transparent">
                  Digital & Tech Policy Workshop
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  A focused workshop that introduced students to the real-world intersection of technology, policy, and governance.
                </p>
              </div>

              {/* Attractive Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bulletPoints.map((text, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 bg-white/60 rounded-2xl shadow-sm border border-white/50 card-glow">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f6ff2] text-white flex items-center justify-center">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-800 leading-relaxed text-base">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - ORGANIC SHAPES */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {gridItems.map((item, index) => (
                <div
                  key={index}
                  style={{ borderRadius: item.shape }}
                  className="p-6 text-center text-white shadow-lg bg-gradient-to-br from-[#4f6ff2] to-[#8fa8ff] hover:scale-105 transition-all duration-500 flex flex-col items-center justify-center min-h-[160px] aspect-square"
                >
                  <div className="mb-3 w-12 h-12 flex items-center justify-center bg-white/20 rounded-full">
                    {item.icon}
                  </div>
                  <p className="text-[12px] font-semibold leading-tight px-1">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default function ByTheNumbers() {
  const stats = [
    { number: "500+", label: "Students Trained", desc: "Across various technology domains", delay: "delay-2" },
    { number: "15+", label: "Workshops Conducted", desc: "Intensive hands-on learning experiences", delay: "delay-3" },
    { number: "8", label: "Locations Reached", desc: "Across India's educational institutions", delay: "delay-4" },
  ];

  return (
    <section className="relative py-15 sm:py-15 reveal">
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#edeef8] to-[#c5d1ff] backdrop-blur-lg rounded-3xl shadow-xl px-6 sm:px-10 lg:px-12 py-16">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-16 reveal delay-1">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#020024] via-[#090979] to-[#4f6ff2] bg-clip-text text-transparent">
            By The Numbers
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Our impact in empowering tech talent across India
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative flex items-center reveal ${stat.delay}`}
            >
              {/* 1. DARK BLUE BACKGROUND LAYER (The outer shape) */}
              <div className="absolute inset-0 bg-[#1a36a3] rounded-tr-[40px] rounded-br-[40px] rounded-tl-[20px] rounded-bl-[20px]" />

              {/* 2. WHITE CONTENT LAYER (The inner box with curved right side) */}
              <div 
                className="relative z-10 w-[92%] bg-white rounded-tl-[15px] rounded-bl-[15px] rounded-tr-[100px] rounded-br-[100px] p-8 border-t-7 border-l-7 border-b-7 border-[#9db2ff]"
              >
                <h3 className="text-4xl font-black text-[#1a1a1a] tracking-tight">
                  {stat.number}
                </h3>
                <p className="mt-4 text-lg font-bold text-[#2d3e50]">
                  {stat.label}
                </p>
                <p className="mt-1 text-gray-500 text-sm leading-tight">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
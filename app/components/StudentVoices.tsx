/* ===============================
   DATA: STUDENT TESTIMONIALS
================================ */

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Computer Science Student",
    institution: "COEP Pune",
    content:
      "The Tech For Bharat workshop completely transformed my understanding of AI applications. The hands-on approach and expert guidance helped me build my first AI model.",
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    role: "Engineering Student",
    institution: "VJTI Mumbai",
    content:
      "The program was an incredible experience. I worked on real-world projects that are making a difference in various fields.",
    avatar: "RV",
  },
  {
    name: "Anjali Patel",
    role: "Research Scholar",
    institution: "SIMS Pune",
    content:
      "I gained invaluable insights into cybersecurity and digital defense strategies. The program opened doors to opportunities I never imagined.",
    avatar: "AP",
  },
  {
    name: "Amit Kumar",
    role: "Tech Enthusiast",
    institution: "IIT Bombay",
    content:
      "The comprehensive curriculum and industry mentorship helped me transition into a tech career. Truly transformative experience!",
    avatar: "AK",
  },
  {
    name: "Sneha Kulkarni",
    role: "Public Policy Student",
    institution: "Gokhale Institute, Pune",
    content:
      "The sessions on technology policy and governance helped me understand how emerging technologies influence national decision-making.",
    avatar: "SK",
  },
  {
    name: "Rohit Deshmukh",
    role: "Electronics Engineering Student",
    institution: "COEP Technological University",
    content:
      "Learning about cyber-physical systems and clean energy policies gave me a new perspective on real-world infrastructure.",
    avatar: "RD",
  },
  {
    name: "Neha Joshi",
    role: "Data Science Student",
    institution: "IISc Bangalore",
    content:
      "The AI, data governance, and digital public infrastructure sessions were extremely relevant and practical.",
    avatar: "NJ",
  },
  {
    name: "Kunal Patil",
    role: "Mechanical Engineering Student",
    institution: "VJTI Mumbai",
    content:
      "The field visits to C-DAC and Pune International Centre were eye-opening and memorable.",
    avatar: "KP",
  },
];


/* ===============================
   COMPONENT: STUDENT VOICES
================================ */

export default function StudentVoices() {
  return (
    <section className="relative py-15 sm:py-15 reveal">
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#edeef8] to-[#c5d1ff] backdrop-blur-lg rounded-3xl shadow-xl px-10 sm:px-14 lg:px-12 py-16">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-14 reveal delay-1">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#020024] via-[#090979] to-[#4f6ff2] bg-clip-text text-transparent">
            Student Voices
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Hear directly from students about their learning experiences and takeaways from Tech For Bharat workshops.
          </p>
        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="relative -mx-6 sm:-mx-10 lg:-mx-12 reveal delay-2 overflow-y-hidden">
          <div className="flex gap-8 px-6 sm:px-10 lg:px-12 overflow-x-auto no-scrollbar scroll-smooth pb-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="relative min-w-[300px] sm:min-w-[350px] group"
              >
                {/* 1. BACKGROUND ACCENT LAYER (The Blue Frame) */}
                <div className="absolute inset-0 bg-[#1a36a3] rounded-tr-[60px] rounded-bl-[60px] rounded-tl-2xl rounded-br-2xl translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />

                {/* 2. MAIN CONTENT LAYER (Glassmorphism Card) */}
                <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-2xl rounded-br-2xl border border-white/50 shadow-lg h-full flex flex-col justify-between">
                  
                  <div>
                    {/* FLOATING AVATAR ACCENT */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-[#4f6ff2] text-white font-bold flex items-center justify-center shadow-lg rotate-[-10deg] group-hover:rotate-0 transition-transform">
                      {item.avatar}
                    </div>

                    {/* QUOTE ICON */}
                    <span className="text-5xl font-serif text-[#4f6ff2]/20 absolute top-4 right-8">“</span>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base italic relative z-10 pt-2">
                      {item.content}
                    </p>
                  </div>

                  {/* FOOTER - PILL STYLE */}
                  <div className="border-t border-blue-100 pt-4">
                    <p className="font-bold text-[#020024] text-lg">
                      {item.name}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-blue-50 text-[#4f6ff2] text-xs font-semibold rounded-full border border-blue-100">
                        {item.role}
                      </span>
                      <span className="px-3 py-1 bg-gray-50 text-gray-500 text-xs rounded-full">
                        {item.institution}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SCROLL HINT */}
        <div className="flex items-center justify-center gap-4 mt-8 reveal delay-3">
          <div className="h-[1px] w-12 bg-gray-300"></div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
            Swipe to Explore
          </p>
          <div className="h-[1px] w-12 bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
}

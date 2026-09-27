import Header from '../components/Header';

export default function AboutPage() {
  const skills = ['HTML', 'Javascript', 'CSS', 'Tailwind CSS', 'Figma', 'UI/UX'];

  return (
    <div className="relative min-h-screen w-full bg-[#0B0B0B] text-white font-sans overflow-hidden flex flex-col justify-between">
     
      <Header />

      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-8 py-12">
        <div className="border-b border-white/10 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-neutral-400 font-light mb-3">
            </div>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white leading-none">
              About <span className="italic font-normal text-neutral-300">Me</span>
            </h1>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 max-w-xs leading-relaxed">
            Front-End Development & UI Design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          <div className="md:col-span-7 border border-white/10 bg-[#0B0B0B] p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold block border-b border-white/10 pb-3">
                Overview
              </span>
              <p className="text-xl md:text-2xl font-serif text-white leading-relaxed pt-2">
                I'm a passionate Front-end Developer and UI Designer committed to crafting clean, intuitive, and responsive web user interfaces.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              <span>Focus Area</span>
              <span>Web Interfaces & Systems</span>
            </div>
          </div>

          <div className="md:col-span-5 border border-white/10 bg-[#0B0B0B] p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] font-bold text-neutral-500 border-b border-white/10 pb-3 mb-6">
                <span>Stack</span>
                <span>[ Skills & Tools ]</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/20 bg-white/5 text-neutral-300 text-xs uppercase tracking-widest px-4 py-2.5 rounded-none font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-8">
              <span>Technologies</span>
              <span>6 Specialties</span>
            </div>
          </div>

        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-8 py-4 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-neutral-600 border-t border-white/10">
      </footer>
    </div>
  );
}

import Header from '../components/Header';

export default function ProjectsPage() {
  const projects = [
    {
      id: '01',
      title: 'E-Commerce Dashboard',
      category: 'Web Application',
      description:
        'A multi-page UI/UX web redesign concept for Foodpanda, featuring user storefronts, restaurant onboarding, and corporate business solutions.',
      image:
        'https://uploads.onecompiler.io/43zvj4fst/1790343161568/Screenshot%202026-09-25%20213232.png',
    },
    {
      id: '02',
      title: 'Login Page UI',
      category: 'Login UI/UX Design',
      description:
        'A responsive web authentication portal UI featuring email/password sign-in fields, password recovery prompts, SSO social authentication buttons.',
      image:
        'https://uploads.onecompiler.io/43zvj4fst/1790343232032/Screenshot%202026-09-25%20213336.png',
    },
    {
      id: '03',
      title: 'Student Schedule Monitor',
      category: 'Android App Design',
      description:
        'A native Android application for student schedule management and academic organization, built with Java and XML layout design in Android Studio.',
      image:
        'https://uploads.onecompiler.io/43zvj4fst/1790345180922/Screenshot_2026-09-25_at_22.05.46.png',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0B0B0B] text-white font-sans overflow-hidden flex flex-col justify-between">

      <Header />


      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-8 py-12">
        
        <div className="border-b border-white/10 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-neutral-400 font-light mb-3">
              <span>Index</span>
              <span>—</span>
              <span>Selected Works</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white leading-none">
              Featured <span className="italic font-normal text-neutral-300">Projects</span>
            </h1>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 max-w-xs leading-relaxed">
            Architectural layout & design concepts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
              className="border border-white/10 bg-[#0B0B0B] p-5 flex flex-col justify-between"
            >
             
              <div className="bg-[#F4F4F5] p-3 text-black mb-6">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] font-bold text-neutral-500 border-b border-black/10 pb-2 mb-3">
                  <span>{item.category}</span>
                  <span>[ {item.id} ]</span>
                </div>
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-3 flex-1 flex flex-col justify-between pt-2">
                <div>
                  <h2 className="text-2xl font-serif text-white tracking-wide">
                    {item.title}
                  </h2>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-3 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  <span>View Details</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-8 py-4 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-neutral-600 border-t border-white/10">
      </footer>
    </div>
  );
}

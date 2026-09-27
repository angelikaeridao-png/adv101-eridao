import Header from '../components/Header';

export default function PortfolioPage() {
  const showcases = [
    {
      id: '01',
      title: 'Brand Redesign',
      category: 'Design System',
      description: 'Complete design system and component UI library.',
      image: 'https://uploads.onecompiler.io/43zvj4fst/1790343232032/Screenshot%202026-09-25%20213336.png',
    },
    {
      id: '02',
      title: 'Web Application UI',
      category: 'SaaS Architecture',
      description: 'Interactive SaaS layout with customized charts and widgets.',
      image: 'https://uploads.onecompiler.io/43zvj4fst/1790344101939/add261d1-37bf-42d6-a7e7-34bc3e8b98bc.jpg',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0B0B0B] text-white font-sans overflow-hidden flex flex-col justify-between">
     
      <Header />

      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-8 py-12">
       
        <div className="border-b border-white/10 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-neutral-400 font-light mb-3">
              <span>Showcase</span>
              <span>—</span>
              <span>Selected Exhibits</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white leading-none">
              Portfolio <span className="italic font-normal text-neutral-300">Showcase</span>
            </h1>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 max-w-xs leading-relaxed">
            An ideas of design concepts and web implementations I made!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcases.map((item) => (
            <div
              key={item.id}
              className="border border-white/10 bg-[#0B0B0B] p-6 flex flex-col justify-between"
            >
              <div className="bg-[#F4F4F5] p-4 text-black mb-6">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] font-bold text-neutral-500 border-b border-black/10 pb-2 mb-3">
                  <span>{item.category}</span>
                  <span>[ Fig . {item.id} ]</span>
                </div>
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-serif text-white tracking-wide">
                    {item.title}
                  </h2>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-2 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-6">
                  <span>Explore Exhibit</span>
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

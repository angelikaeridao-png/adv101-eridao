import Header from '../components/Header';

export default function GalleryPage() {
  const images = [
    { title: 'Login Ui 1', src: 'https://uploads.onecompiler.io/43zvj4fst/1790343232032/Screenshot%202026-09-25%20213336.png' },
    { title: 'Food Panda Ui Practice', src: 'https://uploads.onecompiler.io/43zvj4fst/1790343161568/Screenshot%202026-09-25%20213232.png' },
    { title: 'Shopee Ui Design Idea', src: 'https://uploads.onecompiler.io/43zvj4fst/1790344101939/add261d1-37bf-42d6-a7e7-34bc3e8b98bc.jpg' },
    { title: 'Monitoring Students Design Idea', src: 'https://uploads.onecompiler.io/43zvj4fst/1790345180922/Screenshot_2026-09-25_at_22.05.46.png' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0B0B0B] text-white font-sans overflow-hidden flex flex-col justify-between">
    
      <Header />
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-8 py-12">
        
        <div className="border-b border-white/10 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-neutral-400 font-light mb-3">
              <span>03</span>
              <span>—</span>
              <span>Visual Archive</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white leading-none">
              Design <span className="italic font-normal text-neutral-300">Gallery</span>
            </h1>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 max-w-xs leading-relaxed">
            A collection of screenshots, concepts, and designs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="border border-white/10 bg-[#0B0B0B] p-4 flex flex-col justify-between"
            >
              <div className="bg-[#F4F4F5] p-3 text-black mb-4">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500 border-b border-black/10 pb-2 mb-3">
                  <span>Exhibit</span>
                  <span>[ 0{index + 1} ]</span>
                </div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              
              <div className="pt-2 space-y-1">
                <h2 className="text-sm font-serif text-white tracking-wide">
                  {img.title}
                </h2>
                <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                  <span>UI Concept</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="w-full max-w-7xl mx-auto px-8 py-4 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-neutral-600 border-t border-white/10">
        <span>Design System</span>
        <span>Minimal Grid</span>
      </footer>
    </div>
  );
}

import Header from './components/Header';
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#0B0B0B] text-white font-sans overflow-hidden flex flex-col justify-between">
    
      <Header/>

      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-8 flex items-center py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-8 items-stretch border border-white/10 p-6 md:p-10 bg-[#0B0B0B]">
          
          <div className="md:col-span-7 flex flex-col justify-between space-y-12 pr-0 md:pr-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-neutral-400 font-light">
                <span>01</span>
                <span>—</span>
                <span>Graphics & UI Design</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-white leading-none">
                Angelika <br />
                <span className="italic font-normal text-neutral-300">Eridao</span>
              </h1>

              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 max-w-md pt-2 leading-relaxed">
                Minimalist Graphic Organizer & UI/UX Designer based in Davao City.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs tracking-widest text-neutral-400 uppercase">
              <div className="flex items-center space-x-6">
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center space-x-2 text-neutral-400"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400"
                >
                  GitHub
                </a>
                <a
                  href="https://www.facebook.com/angelika.eridao/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400"
                >
                  Facebook
                </a>
              </div>

              <span className="text-neutral-600">2026 Edition</span>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#F4F4F5] p-6 text-black flex flex-col justify-between min-h-[420px]">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] font-bold text-neutral-500 border-b border-black/10 pb-3 mb-4">
              <span>Portrait</span>
              <span>[ Fig . 01 ]</span>
            </div>

            <div className="relative flex-1 flex items-center justify-center overflow-hidden my-2">
              <img
                src="https://uploads.onecompiler.io/43zvj4fst/1790345916370/Screenshot%202026-09-25%20221826.png"
                alt="Angelika Eridao"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pt-3 border-t border-black/10 flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-600">
              <span>Selected Work</span>
              <span>Portfolio &copy;</span>
            </div>
          </div>

        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-8 py-4 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-neutral-600 border-t border-white/10">
        <span>Errors are my enemies</span>;
      </footer>
    </div>
  );
}

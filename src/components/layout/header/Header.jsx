import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import {motion} from "framer-motion"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = ["Home", "About Me", "Projects", "Contact"];
  const referiment = ["/", "/aboutme", "/projects", "/contact"];

  return (
    <>
      <header className="sticky top-0 z-[1000] flex w-full justify-center bg-[#030810]/85 px-4 py-2 backdrop-blur-md md:px-8">
        <div className="relative flex w-full max-w-6xl items-center justify-center font-['Orbitron']">
          <div className="hidden w-full justify-center md:flex">
            <Navbar items={items} referiment={referiment} />
          </div>

          <div className="flex w-full items-center justify-start md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#080a18]/90 text-[1.5rem] text-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-200 hover:scale-105 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[2000] bg-black/50 backdrop-blur-sm transition duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-[3000] flex h-screen w-[290px] flex-col border-r border-white/10 bg-[#050814]/95 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400/60">
              /* navigation */ 
            </p>
            <h2 className="mt-1 font-['Orbitron'] text-lg text-cyan-300">
              Menu
            </h2>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between px-4 py-5">
          <Navbar
            items={items}
            referiment={referiment}
            onLinkClick={() => setMenuOpen(false)}
            mobile
          />

          <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-4">
            <a
              href="https://github.com/tommasonori"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/70 transition duration-200 hover:text-cyan-300 hover:[text-shadow:0_0_8px_rgba(100,180,255,0.35)]"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/70 transition duration-200 hover:text-cyan-300 hover:[text-shadow:0_0_8px_rgba(100,180,255,0.35)]"
            >
              LinkedIn
            </a>

            <a
              href="mailto:notommyri@gmail.com"
              className="text-sm text-white/70 transition duration-200 hover:text-cyan-300 hover:[text-shadow:0_0_8px_rgba(100,180,255,0.35)]"
            >
              Email
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;

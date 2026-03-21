import currentYear from "../../../utils/Date";

function Footer() {
  return (
    <footer className="relative z-10 mt-16 w-full border-t border-cyan-400/10 py-6 text-center">
      <p className="font-['Orbitron'] text-[11px] uppercase tracking-[0.2em] text-white/50">
        © {currentYear()} Tommaso Nori — All rights reserved
      </p>
    </footer>
  );
}

export default Footer;

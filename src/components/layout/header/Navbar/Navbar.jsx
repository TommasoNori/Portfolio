import { Link } from "react-router-dom";

function Navbar({ items, referiment, onLinkClick, mobile = false }) {
  return (
    <nav className={`flex w-full ${mobile ? "p-0" : "p-4"}`}>
      <ul
        className={`m-0 flex w-full list-none p-0 ${
          mobile ? "flex-col gap-3" : "justify-center gap-8"
        }`}
      >
        {items.map((item, i) => (
          <li key={i} className="list-none">
            <Link
              to={referiment[i]}
              onClick={onLinkClick}
              className={
                mobile
                  ? "flex w-full items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-[1.05rem] text-white/90 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 hover:[text-shadow:0_0_10px_rgba(100,180,255,0.35)]"
                  : "relative px-4 py-2 text-[1rem] text-white/85 transition duration-300 hover:text-cyan-300 hover:[text-shadow:0_0_8px_rgba(100,180,255,0.4)] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

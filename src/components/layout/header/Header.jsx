import { useState } from "react";
import Navbar from "../../navbar/Navbar";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = ["Home", "About me", "Projects", "Contact"];
  const referiment = ["/", "/aboutme", "/projects", "/contact"];

  return (
    <header className="header">
      <div className="header-navbar-container">
        <div className="desktop-navbar">
          <Navbar items={items} referiment={referiment} />
        </div>

        <div className={`mobile-menu-shell ${menuOpen ? "open" : ""}`}>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`mobile-menu-content ${menuOpen ? "show" : ""}`}>
            <Navbar
              items={items}
              referiment={referiment}
              onLinkClick={() => setMenuOpen(false)}
            />
          </div>
          <div className="mobile-menu-social">
            <a href="https://github.com/tommasonori" target="_blank">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank">
              LinkedIn
            </a>
            <a href="mailto:notommyri@gmail.com">Email</a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header;

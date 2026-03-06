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

        <div className="mobile-menu-toggle">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-navbar">
            <Navbar
              items={items}
              referiment={referiment}
              onLinkClick={() => setMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

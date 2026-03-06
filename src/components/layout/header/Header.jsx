import Navbar from "../../navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-navbar-container">
          <Navbar
            items={["Home", "About me ", "Projects", "Contact"]}
            referiment={["/", "/aboutme", "/projects", "/contact"]}
          />
        </div>
      </header>
    </>
  );
}

export default Header;

import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <>
      <header className="header">
        <Navbar
          items={["Home", "About me ", "Projects", "Contact"]}
          referiment={["/", "/aboutme", "/projects", "/contact"]}
        />
      </header>
    </>
  );
}

export default Header;

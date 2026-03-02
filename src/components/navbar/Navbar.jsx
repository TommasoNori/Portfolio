import './Navbar.css';

function Navbar({ items, referiment }) {
  return (
    <nav className="navbar">
      <ul>
        {items.map((items, i) => (
          <a key={i} href={referiment[i]}>
            {items}
          </a>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

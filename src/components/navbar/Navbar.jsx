import './Navbar.css';

function Navbar({ items, referiment }) {
  return (
    <nav className="navbar">
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <a href={referiment[i]}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

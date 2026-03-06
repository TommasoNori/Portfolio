import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ items, referiment, onLinkClick }) {
  return (
    <nav className="navbar">
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <Link to={referiment[i]} onClick={onLinkClick}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

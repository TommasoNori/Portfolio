import './Footer.css';
import currentYear from '../../utils/CurrentDate';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div>&copy; {currentYear()} Tommaso Nori. All rights reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar__container">
      <nav className="navbar">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/" className="menu__link">Home</Link>
          </li>
          <li className="menu__item">
            <Link to="/about" className="menu__link">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

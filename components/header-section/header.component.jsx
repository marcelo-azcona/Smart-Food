import { Link } from 'react-scroll';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import mainLogo from '../../assets/img/smartfood-logo.png';
import './header.style.css';

const Header = () => {
  const toggleMobileMenu = () => {
    document.querySelector('.header').classList.toggle('nav-open');
  };

  return (
    <header className="header">
      <a href="#">
        <img className="logo" alt="Smartfood logo" src={`${mainLogo}`}></img>
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link
              to="howitworks"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link"
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              to="meals"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link"
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="cta"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link nav-cta"
            >
              Try it for free!
            </Link>
          </li>
        </ul>
      </nav>
      <button className="btn-mobile-nav" onClick={toggleMobileMenu}>
        <IoMenuOutline className="icon-mobile-nav-menu" />
        <IoCloseOutline className="icon-mobile-nav-close" />
      </button>
    </header>
  );
};

export default Header;

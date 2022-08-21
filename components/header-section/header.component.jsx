import mainLogo from '../../assets/img/smartfood-logo.png';
import './header.style.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img className="logo" alt="Smartfood logo" src={`${mainLogo}`}></img>
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#" className="main-nav-link">
              How it works
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Meals
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link nav-cta">
              Try it for free!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

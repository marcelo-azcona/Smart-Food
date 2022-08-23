import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import mainLogo from '../../assets/img/smartfood-logo.png';
import './header.style.css';

const Header = () => {
  const [openMenuClass, setOpenMenuClass] = useState('');
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    const heroSectionEl = document.querySelector('.section-hero');
    const headerEl = document.querySelector('.header');

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting && !headerEl.classList.contains('nav-open')) {
          setStickyClass('sticky');
        }
        if (entry.isIntersecting) {
          setStickyClass('');
          setOpenMenuClass('');
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-80px',
      }
    );

    obs.observe(heroSectionEl);
  }, []);

  const toggleMobileMenu = () => {
    openMenuClass === '' ? setOpenMenuClass('nav-open') : setOpenMenuClass('');
  };

  return (
    <header className={`header ${openMenuClass} ${stickyClass}`}>
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

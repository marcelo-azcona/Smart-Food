import mainLogo from '../../assets/img/smartfood-logo.png';
import '../../helpers/general.styles.css';
import './footer.style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--5-columns ">
        <div className="logo-column">
          <a href="#">
            <img
              className="logo-footer"
              alt="Smartfood logo"
              src={`${mainLogo}`}
            ></img>
          </a>

          <p className="copyright">
            Copyright &copy; 2022 by SmartFood All rights reserved.
          </p>
        </div>
        <div className="address-column">
          <p className="adress-title">Contact us</p>
          <address className="contacts">
            <p>277 Entre Ríos, Villa María, Córdoba</p>
            <p>
              <a href="tel:+54 9 353 1234-5678">+54 9 353 1234-5678.</a>
            </p>
            <p>
              <a href="mailto:contact@smartfood.com">contact@smartfood.com</a>
            </p>
          </address>
        </div>
        <nav className="nav-column">
          <p className="footer-title">Accounts</p>
          <ul className="footer-nav">
            <li>
              <a href="#">Create Account</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">iOS app</a>
            </li>
            <li>
              <a href="#">Android App</a>
            </li>
          </ul>
        </nav>
        <nav className="nav-column">Nav 2</nav>
        <nav className="nav-column">Nav 3</nav>
      </div>
    </footer>
  );
};

export default Footer;

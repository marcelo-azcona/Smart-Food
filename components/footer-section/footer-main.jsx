import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoTwitter } from 'react-icons/io5';

import NavigationMenu from './footer-nav.component';
import mainLogo from '../../assets/img/smartfood-logo.png';
import '../../helpers/general.styles.css';
import './footer.style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-column">
          <a href="#">
            <img
              className="logo-footer"
              alt="Smartfood logo"
              src={`${mainLogo}`}
            ></img>
          </a>

          <ul className="social-links">
            <li>
              <a href="#" className="footer-link">
                <IoLogoInstagram className="social-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoLogoFacebook className="social-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoLogoTwitter className="social-icon" />
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; 2022 by SmartFood All rights reserved.
          </p>
        </div>
        <div className="address-column">
          <p className="footer-title">Contact us</p>
          <address className="contacts">
            <p>277 Entre Ríos, Villa María, Córdoba</p>
            <p>
              <a className="footer-link" href="tel:+54 9 353 1234-5678">
                +54 9 353 1234-5678.
              </a>
            </p>
            <p>
              <a className="footer-link" href="mailto:contact@smartfood.com">
                contact@smartfood.com
              </a>
            </p>
          </address>
        </div>

        <NavigationMenu
          title="Account"
          item1="Create Account"
          item2="Sign in"
          item3="iOS app"
          item4="Android App"
        />
        <NavigationMenu
          title="Company"
          item1="About SmartFood"
          item2="For Business"
          item3="Cooking partners"
          item4="Careers"
        />
        <NavigationMenu
          title="Resources"
          item1="Recipe directory"
          item2="Privacy and terms"
          item3="Help center"
          item4=""
        />
      </div>
    </footer>
  );
};

export default Footer;

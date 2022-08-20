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
      <div className="container grid grid--5-columns ">
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
              <a href="">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <IoLogoTwitter />
              </a>
            </li>
          </ul>

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

        <NavigationMenu
          title="Accounts"
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

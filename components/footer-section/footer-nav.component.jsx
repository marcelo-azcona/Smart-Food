const NavigationMenu = ({ title, item1, item2, item3, item4 }) => {
  return (
    <nav className="nav-column">
      <p className="footer-title">{title}</p>
      <ul className="footer-nav">
        <li>
          <a className="footer-link" href="#">
            {item1}
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            {item2}
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            {item3}
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            {item4}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;

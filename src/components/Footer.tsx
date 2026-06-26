import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-left">
        ©{new Date().getFullYear()} WashOnWheels. All rights reserved.
      </p>
      <div className="footer-nav">
        <Link to="/about-us">About Us</Link>
        <Link to="#contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;

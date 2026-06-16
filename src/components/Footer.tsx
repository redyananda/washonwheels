import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-left">
        ©{new Date().getFullYear()} WashOnWheels. All rights reserved.
      </p>
      <div className="footer-nav">
        <a href="/about-us">About Us</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;

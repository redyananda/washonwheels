import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <h2>Car wash made easy</h2>
        <h1>We pick up, wash and bring it back.</h1>
        <p>
          Schedule your car wash right from home. Just book it - we'll handle
          the rest.
        </p>
        <div className="hero-btn">
          <button className="book-btn">Book now</button>
          <button className="service-btn">View services</button>
        </div>
      </div>
      <div className="hero-img">
        <img src="./hero-img.png" alt="hero-pict" />
      </div>
    </div>
  );
};

export default Hero;

import "./AboutHero.css";

const AboutHero = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h2>About Us</h2>
        <h1>We're rethinking the car wash</h1>
        <p>
          WashOnWheels exists for one reason: getting your car cleaned should
          never cost you an afternoon.
        </p>
      </div>
      <div className="about-content">
        <div className="about-content-left">
          <p>
            It started with a simple frustration. Washing your car meant driving
            out, queuing, and waiting around - half a day gone for something
            that should be effortless.
          </p>
          <br />
          <p>
            So we flipped it. Instead of you going to the car wash,{" "}
            <b>the car wash comes to you</b>. Book in seconds, and our team
            handles everything - at your home, your office, wherever you happen
            to be.
          </p>
          <br />
          <p>
            What began as a single van in Bekasi is now a team of trained
            detailers serving drivers across the region, with one promise that
            never changes: a spotless car, zero hassle.
          </p>
        </div>
        <div className="about-content-right">
          <div className="about-content-right-desc">
            <h2>
              <span style={{ color: "#c9a86a" }}>"</span>We don't just wash the
              cars. We give people back their weekends.
              <span style={{ color: "#c9a86a" }}>"</span>
            </h2>
          </div>
          <div className="about-content-right-stats">
            <div className="stats-data">
              <h2>200+</h2>
              <p>Cars washed</p>
            </div>
            <div className="stats-data">
              <h2>4.9</h2>
              <p>Average rating</p>
            </div>
            <div className="stats-data">
              <h2>3</h2>
              <p>Cities served</p>
            </div>
            <div className="stats-data">
              <h2>~60</h2>
              <p>Min per wash</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <h1>What we stand for</h1>
        <div className="about-footer-card">
          <div className="footer-card">
            <div className="footer-card-place">
              <img src="pict-love.webp" alt="love-symbol" />
            </div>
            <h2 className="footer-card-title">Care for every car</h2>
            <p className="footer-card-desc">
              We treat every vehicle like our own - gentle products, careful
              hands, and no shortcuts.
            </p>
          </div>
          <div className="footer-card">
            <div className="footer-card-place">
              <img src="pict-time.webp" alt="time-symbol" />
            </div>
            <h2 className="footer-card-title">Respect your time</h2>
            <p className="footer-card-desc">
              Your time is the whole point. We show up when we say we will, and
              we never make you wait.
            </p>
          </div>
          <div className="footer-card">
            <div className="footer-card-place">
              <img src="pict-pricetag.webp" alt="price tag symbol" />
            </div>
            <h2 className="footer-card-title">Honest, upfront pricing</h2>
            <p className="footer-card-desc">
              What you see is what you pay. No hidden fees, no surprises - not
              now, not ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

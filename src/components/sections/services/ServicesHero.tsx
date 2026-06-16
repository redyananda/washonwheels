import "./ServicesHero.css";
const ServicesHero = () => {
  return (
    <div className="services">
      <div className="services-header">
        <h2>Services</h2>
        <h1>Everything your car needs, wherever you are</h1>
        <p>
          From a quick refresh to a full detail - pick what your car needs, and
          choose how you want it done.
        </p>
      </div>
      <div className="service-first-container">
        <div className="first-container">
          <div className="service-container-card-place">
            <img src="pict-home.webp" alt="home symbol" />
          </div>
          <h2>Most convenient</h2>
          <h1>At-home wash</h1>
          <p>
            Our detailers arrive at your home or office with everything they
            need. You don't move the car an inch - just hand over the keys.
          </p>
        </div>
        <div className="first-container">
          <div className="service-container-card-place">
            <img src="pict-car-service.webp" alt="car service symbol" />
          </div>
          <h2>Fully hands-free</h2>
          <h1>Pickup & return</h1>
          <p>
            Short on time? We collect your car, give it a thorough wash at our
            facility, and return it spotless - right on your schedule.
          </p>
        </div>
        <div></div>
      </div>
      <div className="service-offer">
        <h2>What we offer</h2>
        <p>Mix and match any of these into your booking.</p>
        <div className="offer-grid">
          <div className="offer-grid-card">
            <div className="offer-grid-card-place">
              <img src="exterior.webp" alt="exterior car symbol" />
            </div>
            <h2>Exterior hand wash</h2>
            <p>
              A gentle, streak-free hand wash that's safe on your paint and
              finish.
            </p>
          </div>
          <div className="offer-grid-card">
            <div className="offer-grid-card-place">
              <img src="interior.webp" alt="interior car symbol" />
            </div>
            <h2>Interior cleaning</h2>
            <p>
              Vacuum, wipe-down, and a fresh cabin from the dash to the floor
              mats.
            </p>
          </div>
          <div className="offer-grid-card">
            <div className="offer-grid-card-place">
              <img src="detailing.webp" alt="detailing symbol" />
            </div>
            <h2>Full detailing</h2>
            <p>
              The complete treatment - deep cleaned inside and out, restored to
              a showroom shine.
            </p>
          </div>
          <div className="offer-grid-card">
            <div className="offer-grid-card-place">
              <img src="protection.webp" alt="protection shield symbol" />
            </div>
            <h2>Wax & paint protection</h2>
            <p>
              A protective layer that keeps your paint glossy and shielded for
              weeks.
            </p>
          </div>
          <div className="offer-grid-card">
            <div className="offer-grid-card-place">
              <img src="engine.webp" alt="engine symbol" />
            </div>
            <h2>Engine bay cleaning</h2>
            <p>
              Careful degreasing that keeps your engine looking as good as it
              runs.
            </p>
          </div>
          <div className="offer-grid-card">
            <div className="offer-grid-card-place">
              <img src="headlamp.webp" alt="headlamp symbol" />
            </div>
            <h2>Headlight restoration</h2>
            <p>Cloudy, yellowed headlights brought back to clear and bright.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;

import "./WhyWOW.css";

const WhyWOW = () => {
  return (
    <div className="why-wow">
      <div className="why-wow-container-left">
        <h2>Why WashOnWheels</h2>
        <h1>A spotless car, without lifting a finger</h1>
        <p>
          We turn car washing into something you barely have to think about -
          premium results, zero effort on your end.
        </p>
      </div>
      <div className="why-wow-container-right">
        <div className="container-right-card">
          <div className="wow-card-symbol-place">
            <img src="why-1.webp" alt="why-wow-1" />
          </div>
          <h2 className="wow-card-title">We come to you</h2>
          <p className="wow-card-desc">No queues, no driving out. Your time stays yours.</p>
        </div>
        <div className="container-right-card">
          <div className="wow-card-symbol-place">
            <img src="why-2.webp" alt="why-wow-2" />
          </div>
          <h2 className="wow-card-title">Safe for your paint</h2>
          <p className="wow-card-desc">Premium, pH-balanced products gentle on paint and interior.</p>
        </div>
        <div className="container-right-card">
          <div className="wow-card-symbol-place">
            <img src="why-3.webp" alt="why-wow-3" />
          </div>
          <h2 className="wow-card-title">Trained professionals</h2>
          <p className="wow-card-desc">Detailers held to one consistent, high standard.</p>
        </div>
        <div className="container-right-card">
          <div className="wow-card-symbol-place">
            <img src="why-4.webp" alt="why-wow-4" />
          </div>
          <h2 className="wow-card-title">Book on your schedule</h2>
          <p className="wow-card-desc">Pick the time and place that fit your day. Reschedule anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyWOW;

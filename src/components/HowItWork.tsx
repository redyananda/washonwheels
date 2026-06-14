import "./HowItWork.css";

const HowItWork = () => {
  return (
    <div className="how-it-work">
      <div className="how-it-work-header">
        <h2>How it Works</h2>
        <h1>
          Washing your car, as easy as <br /> ordering food
        </h1>
        <p>Three simple steps - no queues, no leaving home.</p>
      </div>
      <div className="how-it-work-container">
        <div className="how-it-work-container-card">
          <img src="./step-1.png" alt="pict step 1" />
          <h2>Book & schedule</h2>
          <p>
            Pick your package, set the time and location - all from your phone
          </p>
        </div>
        <div className="how-it-work-container-card">
          <img src="./step-2.png" alt="pict step 2" />
          <h2>We pick up or come to you</h2>
          <p>Our team collects your car or comes to your home. Just relax.</p>
        </div>
        <div className="how-it-work-container-card">
          <img src="./step-3.png" alt="pict step 3" />
          <h2>Spotless car, ready to go</h2>
          <p>We bring your gleaming car back right on time. Just hop in.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;

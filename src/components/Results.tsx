import "./Results.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Testimonials = () => {
  return (
    <div className="results">
      <div className="results-header">
        <h2>Real Results</h2>
        <h1>See the difference for yourself</h1>
        <p>
          Real cars, real customers. Drag the slider to see what a WashOnWheels
          actually delivers.
        </p>
      </div>
      <div className="results-container">
        <div className="results-slider">
          <ReactCompareSlider
            style={{ borderRadius: "3rem", overflow: "hidden", maxWidth: "1080px" }}
            itemOne={
              <ReactCompareSliderImage src="./image1.webp" alt="Image one" />
            }
            itemTwo={
              <ReactCompareSliderImage src="./image2.webp" alt="Image two" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

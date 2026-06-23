import { useState } from "react";
import "./TeamsHero.css";

const TeamsHero = () => {
  const crewRoles: string[] = [
    "Senior Detailer",
    "Detailer",
    "Washer",
    "Pickup Driver",
    "Interior Specialist",
    "Polisher",
    "Coating Specialist",
    "QC Inspector",
    "Dispatcher",
    "Crew Lead",
  ];

  const [index] = useState(() => {
    const randomIndex = Math.floor(Math.random() * crewRoles.length);
    return randomIndex;
  });
  
  return (
    <div className="teams">
      <div className="teams-head">
        <h2>Our Team</h2>
        <h1>The people behind the shine</h1>
        <p>
          A small crew that genuinely cares about cars - and about making your
          day a little easier.
        </p>
        <div className="teams-content">
          <div className="teams-content-card">
            <img src="./clement.webp" alt="" />
            <h1>Clement Wijaya</h1>
            <h2>Founder & CEO</h2>
            <p>Started WashOnWheels to give people their weekends back.</p>
          </div>
          <div className="teams-content-card">
            <img src="./park.webp" alt="" />
            <h1>Felicia Bella</h1>
            <h2>Operations Lead</h2>
            <p>Makes sure every booking runs like clockwork.</p>
          </div>
          <div className="teams-content-card">
            <img src="./rizky.webp" alt="" />
            <h1>Rizky Aditya</h1>
            <h2>Lead Detailer</h2>
            <p>Twelve years turning grimy cars spotless.</p>
          </div>
          <div className="teams-content-card">
            <img src="./alya.webp" alt="" />
            <h1>Alya Safitri</h1>
            <h2>Customer Experience</h2>
            <p>The friendly voice behind every booking.</p>
          </div>
        </div>
      </div>
      <div className="teams-crew">
        <h1>Meet the crew</h1>
        <p>
          The detailers, washers, and drivers who treat your car like their own.
        </p>
        {}
        <div className="crew-content">
          <div className="crew-content-card">
            <h2>Name</h2>
            <p>{crewRoles[index]}</p>
          </div>
          <div className="crew-content-card">
            <h2>Name</h2>
            <p>{crewRoles[index]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsHero;

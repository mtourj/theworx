import React, { useEffect, useState } from "react";

import "./Home.scss";

// ----- TO BE REMOVED -----
//  Placeholder hero image
import placeholder from "../../img/placeholder-hero.jpg";

// import axios from 'axios';

const Home = () => {
  // The following can be set by the site admin
  // - Source of hero image
  // - Opacity of hero image
  // - Whether or not to stretch image to width of site
  const [hero, setHero] = useState({
    src: "",
    opacity: 1,       
    stretch: true
  });

  // Intialize all varriable data
  // Fetch from database
  const init = async () => {
    // Get the URL of the admin-set hero image and
    // set it into the 'hero' state variable

    // Placeholder code:
    setHero({
      src: placeholder,
      opacity: 0.6,
      stretch: true
    });
  };

  useEffect(init, []);

  return (
    <div className="home">
      <div className="hero">
        <img style={{ opacity: hero.opacity, maxWidth: hero.stretch ? '100%' : 'max-content' }} src={hero.src} alt="Banner" />
        <div className="cta">
          <h1>Premium Auto Detailing Starts Here</h1>
          <hr />
          <h2>Complete mobile car wash</h2>
          <div className="cta1">SCHEDULE YOUR DETAIL NOW</div>
          <div className="cta2">OUR SERVICES</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

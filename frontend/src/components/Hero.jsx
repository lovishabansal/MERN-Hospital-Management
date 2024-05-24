import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>Your journey to wellness begins here. Explore our website to discover a range of healthcare services, from routine check-ups to specialized treatments. We are your partner in achieving and maintaining optimal health. Your health is our priority, and we are honored to be the beacon guiding you towards a healthier, happier life.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;

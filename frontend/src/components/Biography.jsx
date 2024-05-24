import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Where your health and well-being are our top priorities. 
          Established with a commitment to excellence,leading healthcare provider dedicated to delivering compassionate, comprehensive, and patient-centered care.our mission is to enhance the quality of life for our community by providing accessible, high-quality healthcare services. We strive to be your trusted partner in health, supporting you at every stage of your wellness journey.
              Commitment to Excellence,We take pride in our unwavering 
              commitment to excellence in healthcare. Our team of skilled and compassionate professionals, from doctors and nurses to support staff, works collaboratively to ensure that you receive the best possible care.Your health is our priority, and we believe in a patient-centered approach to care. We listen attentively, respect your unique needs, and involve you in the decision-making process. 
              Your well-being is at the heart of everything we do. 
          </p>
        
        </div>
      </div>
    </>
  );
};

export default Biography;

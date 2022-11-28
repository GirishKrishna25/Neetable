import React from "react";

const SingleLandingPage = ({ image, heading }) => {
  return (
    <article className="landingpage-container">
      <div className="landingpage-img">
        <img src={image} alt="Landing page" />
      </div>
      <h3>{heading}</h3>
    </article>
  );
};

export default SingleLandingPage;

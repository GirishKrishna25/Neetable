import React from "react";
import { useToggle } from "../../../toggleContext";

const SingleLandingPage = ({ image, heading }) => {
  const { isLightModeOn } = useToggle();
  const styles = {
    h3: {
      color: isLightModeOn ? "#131022" : "#fff",
    },
  };
  return (
    <article className="landingpage-container" style={styles.body}>
      <div className="landingpage-img">
        <img src={image} alt="Landing page" />
      </div>
      <h3 style={styles.h3}>{heading}</h3>
    </article>
  );
};

export default SingleLandingPage;

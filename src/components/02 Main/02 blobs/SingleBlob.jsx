import React from "react";
import { useToggle } from "../../../toggleContext";

const SingleBlob = ({ img, heading }) => {
  const { isLightModeOn } = useToggle();
  const styles = {
    body: {
      "background-color": isLightModeOn ? "#fff" : "#131022",
      color: isLightModeOn ? "#131022" : "#fff",
    },
  };

  return (
    <article className="blob-container" style={styles.body}>
      <div className="blob-img">
        <img src={img} alt="blob" />
      </div>
      <h4 className="blob-heading" style={styles.body}>
        {heading}
      </h4>
    </article>
  );
};

export default SingleBlob;

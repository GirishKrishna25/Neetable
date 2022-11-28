import React from "react";

const SingleBlob = ({ img, heading }) => {
  return (
    <article className="blob-container">
      <div className="blob-img">
        <img src={img} alt="blob" />
      </div>
      <h4 className="blob-heading">{heading}</h4>
    </article>
  );
};

export default SingleBlob;

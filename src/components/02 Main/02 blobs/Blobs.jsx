import React from "react";
import SingleBlob from "./SingleBlob";

const Blobs = () => {
  const blobsHeadings = [
    ["Light / Dark Mode", "./blobs/blob 1.svg"],
    ["Figma Files Included", "./blobs/blob 2.svg"],
    ["100+ UI Flexible Sections", "./blobs/blob 3.svg"],
    ["Free Lifetime Updates", "./blobs/blob 4.svg"],
  ];

  return (
    <>
      <div className="blobs-container">
        <SingleBlob heading={blobsHeadings[0][0]} img={blobsHeadings[0][1]} />
        <SingleBlob heading={blobsHeadings[1][0]} img={blobsHeadings[1][1]} />
        <SingleBlob heading={blobsHeadings[2][0]} img={blobsHeadings[2][1]} />
        <SingleBlob heading={blobsHeadings[3][0]} img={blobsHeadings[3][1]} />
      </div>
    </>
  );
};

export default Blobs;

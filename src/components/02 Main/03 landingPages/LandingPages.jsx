import React from "react";
import { useToggle } from "../../../toggleContext";
import SingleLandingPage from "./SingleLandingPage";

const LandingPages = () => {
  const landingPages = [
    ["Mobile App Showcase", "./images/landingPages/lp 01.jpg"],
    ["SasS v.1", "./images/landingPages/lp 02.jpg"],
    ["SaaS v.2", "./images/landingPages/lp 03.jpg"],
    ["Financial Consulting", "./images/landingPages/lp 04.jpg"],
    ["Medical", "./images/landingPages/lp 05.jpg"],
    ["Digital Agency", "./images/landingPages/lp 06.jpg"],
    ["Conference", "./images/landingPages/lp 07.jpg"],
    ["IT (Software) Company", "./images/landingPages/lp 08.jpg"],
    ["Blog Homepage", "./images/landingPages/lp 09.jpg"],
  ];

  const { isLightModeOn } = useToggle();
  const styles = {
    h1: {
      color: isLightModeOn ? "#131022" : "#fff",
    },
    p: {
      color: isLightModeOn ? "#131022" : "#fff",
    },
  };

  return (
    <section className="landingPagesContainer">
      <header className="landingPages-header" style={styles.h1}>
        <h1>Landing Pages</h1>
        <p style={styles.p}>
          Choose from pre-built layouts of our unique landing pages
        </p>
      </header>
      <div className="landingPages-group">
        {landingPages.map((landingPage, index) => {
          return (
            <SingleLandingPage
              key={index}
              image={landingPage[1]}
              heading={landingPage[0]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LandingPages;

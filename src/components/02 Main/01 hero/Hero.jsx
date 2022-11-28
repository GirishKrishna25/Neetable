import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="hero">
      <img src={"./images/hero.jpg"} alt="hero section img" />
      <div className="hero-btn">
        <div className="icon">
          <AiOutlineDown />
        </div>
        <span>View Landings</span>
      </div>
    </section>
  );
};

export default Hero;

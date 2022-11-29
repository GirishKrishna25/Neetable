import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

const cta = () => {
  return (
    <section className="footer-container">
      <div className="headingAndSubscription">
        <h1>Subscribe to Our Newsletter</h1>
        <form className="input">
          <span className="mailIcon">✉</span>
          <input className="email" type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </form>
      </div>
      <h6 className="credits">
        &#169; All rights reserved. Made with{" "}
        <span className="heart">
          <AiOutlineHeart />
        </span>{" "}
        by MadrasThemes
      </h6>
      <div className="footer-btn-container">
        <span>Top</span>
        <div className="footer-btn">
          <AiOutlineUp />
        </div>
      </div>
    </section>
  );
};
export default cta;

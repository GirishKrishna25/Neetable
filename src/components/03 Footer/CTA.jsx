import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

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
      <p className="credits">
        &#169; All rights reserved. Made with{" "}
        <span className="heart">
          <AiOutlineHeart />
        </span>{" "}
        by MadrasThemes
      </p>
    </section>
  );
};
export default cta;

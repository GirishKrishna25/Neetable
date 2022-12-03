import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { useToggle } from "../../toggleContext";

const CTA = () => {
  let mybutton = document.getElementsByClassName("footer-btn-container");
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.color = "red";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    window.scroll = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const { isLightModeOn } = useToggle();
  const styles = {
    email: {
      "background-color": isLightModeOn ? "#fff" : "#131022",
    },
    "footer-container": {
      "border-top": "1px solid rgba(255, 255, 255, 0.1)",
    },
  };

  return (
    <section className="footer-container" style={styles["footer-container"]}>
      <div className="headingAndSubscription">
        <h1>Subscribe to Our Newsletter</h1>
        <form className="input">
          <span className="mailIcon">✉</span>
          <input
            className="email"
            type="email"
            placeholder="Your email"
            style={styles.email}
          />
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
      <div className="footer-btn-container" onClick={topFunction}>
        <span>Top</span>
        <div className="footer-btn">
          <AiOutlineUp />
        </div>
      </div>
    </section>
  );
};
export default CTA;

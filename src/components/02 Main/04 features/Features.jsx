import React from "react";
import { BsBootstrapFill } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineTouchApp } from "react-icons/md";
import { ImHtmlFive } from "react-icons/im";
import { FaNodeJs } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import features from "./data";

const Features = () => {
  return (
    <section className="features">
      <header className="features-header">
        <h1>More Silicon Features</h1>
      </header>
      <div className="features-container">
        <article className="singleFeature">
          <div className="features-icon">
            <BsBootstrapFill />
          </div>
          <h3>{features[0][0]}</h3>
          <p>{features[0][1]}</p>
        </article>
        <article className="singleFeature">
          <div className="features-icon">
            <AiFillFileText />
          </div>
          <h3>{features[1][0]}</h3>
          <p>{features[1][1]}</p>
        </article>
        <article className="singleFeature">
          <div className="features-icon">
            <FaMobileAlt />
          </div>
          <h3>{features[2][0]}</h3>
          <p>{features[2][1]}</p>
        </article>
        <article className="singleFeature">
          <div className="features-icon">
            <MdOutlineTouchApp />
          </div>
          <h3>{features[3][0]}</h3>
          <p>{features[3][1]}</p>
        </article>
        <article className="singleFeature">
          <div className="features-icon">
            <ImHtmlFive />
          </div>
          <h3>{features[4][0]}</h3>
          <p>{features[4][1]}</p>
        </article>
        <article className="singleFeature">
          <div className="features-icon">
            <FaNodeJs />
          </div>
          <h3>{features[5][0]}</h3>
          <p>{features[5][1]}</p>
        </article>
        <article className="singleFeature">
          <div className="features-icon">
            <SiSass />
          </div>
          <h3>{features[6][0]}</h3>
          <p>{features[6][1]}</p>
        </article>
        <article className="singleFeature">
          <div className="features-icon">
            <SiJavascript />
          </div>
          <h3>{features[7][0]}</h3>
          <p>{features[7][1]}</p>
        </article>
      </div>
    </section>
  );
};

export default Features;

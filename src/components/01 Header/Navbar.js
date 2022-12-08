import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { MdToggleOff } from "react-icons/md"; // light
import { MdToggleOn } from "react-icons/md"; // dark
import { useToggle } from "../../toggleContext";

const Navbar = () => {
  const [landingsHover, setLandingsHover] = useState(false);
  const [pagesHover, setPagesHover] = useState(false);
  const [portfolioHover, setPortfolioHover] = useState(false);

  const landingsHoverHandler = () => {
    setPagesHover(false);
    setPortfolioHover(false);

    setLandingsHover(true);
  };

  const pagesHoverHandler = () => {
    setLandingsHover(false);
    setPortfolioHover(false);

    setPagesHover(true);
  };

  const portfolioHoverHandler = () => {
    setLandingsHover(false);
    setPagesHover(false);

    setPortfolioHover(true);
  };

  const { isLightModeOn, toggleHandler } = useToggle();
  const styles = {
    body: {
      "background-color": isLightModeOn ? "#fff" : "#131022",
      color: isLightModeOn ? "#131022" : "#fff",
    },
    span: {
      color: isLightModeOn ? "#131022" : "#fff",
    },
    "landingPages-list": {
      "background-color": isLightModeOn ? "#fff" : "#131022",
      color: isLightModeOn ? "#131022" : "#fff",
    },
    icon: {
      color: isLightModeOn ? "#131022" : "#fff",
    },
  };

  return (
    <>
      <div className="navbar" style={styles.body}>
        <div className="logo-navgroup">
          <div className="logoContainer">
            <img
              src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/logo.svg"
              alt="logo"
            />
            <span className="logo-name">Silicon</span>
          </div>
          <ul
            className="navgroup"
            onMouseLeave={() => {
              setLandingsHover(false);
              setPagesHover(false);
              setPortfolioHover(false);
            }}
            style={styles.body}
          >
            <li onMouseEnter={landingsHoverHandler}>
              <abbr title="Landings">Landings</abbr>
              <AiOutlineDown style={styles.icon} />
            </li>
            {landingsHover && (
              <div
                className="modal"
                onMouseLeave={() => setLandingsHover(false)}
              >
                <div className="modal-img">
                  <img src="./images/preview.jpg" alt="preview" />
                </div>
                <div
                  className="landingPages-list"
                  style={styles["landingPages-list"]}
                >
                  <ul className="list">
                    <li>Template Intro Page</li>
                    <li>Mobile App Showcase</li>
                    <li>Mobile App Showcase v.2</li>
                    <li>
                      Startup <span>New</span>
                    </li>
                    <li>SaaS v.1</li>
                    <li>SaaS v.2</li>
                    <li>SaaS v.3</li>
                    <li>Financial Consulting</li>
                    <li>Medical</li>
                  </ul>
                  <ul className="list">
                    <li>IT (Software) Company</li>
                    <li>Conference</li>
                    <li>Digital Agency</li>
                    <li>Blog Homepage</li>
                  </ul>
                </div>
              </div>
            )}

            <li onMouseEnter={pagesHoverHandler}>
              <abbr title="Pages">Pages</abbr>
              <AiOutlineDown style={styles.icon} />
            </li>
            {pagesHover && (
              <div
                className="modal modal-pages"
                onMouseLeave={() => setPagesHover(false)}
                style={styles["landingPages-list"]}
              >
                <div className="pages-list">
                  <h3>About</h3>
                  <p>About v.1</p>
                  <p>About v.2</p>
                  <h3>Services</h3>
                  <p>Services v.1</p>
                  <p>Services v.2</p>
                  <p>Services Details v.1</p>
                  <p>Services Details v.2</p>
                </div>
                <div className="pages-list">
                  <h3>Blog</h3>
                  <p>List View with Sidebar</p>
                  <p>Grid View with Sidebar</p>
                  <p>List View no Sidebar</p>
                  <p>Grid View no Sidebar</p>
                  <p>Simple Feed</p>
                  <p>Single Post</p>
                  <p>Podcast</p>
                </div>
                <div className="pages-list">
                  <h3>Pricing</h3>
                  <p>Pricing Page</p>
                  <h3>Contacts</h3>
                  <p>Contacts v.1</p>
                  <p>Contacts v.2</p>
                  <p>Contacts v.3</p>
                  <h3>Specialty</h3>
                  <p>404 Error v.1</p>
                  <p>404 Error v.2</p>
                </div>
              </div>
            )}

            <li onMouseEnter={portfolioHoverHandler}>
              <abbr title="Portfolio">Portfolio</abbr>
              <AiOutlineDown style={styles.icon} />
            </li>
            {portfolioHover && (
              <div
                className="modal modal-portfolio"
                onMouseLeave={() => setPortfolioHover(false)}
                style={styles["landingPages-list"]}
              >
                <div className="portfolio-list">
                  <li>Grid View</li>
                  <li>List View</li>
                  <li>Slider View</li>
                  <li>Single Project</li>
                </div>
              </div>
            )}

            <li>
              <abbr
                title="Support"
                onMouseEnter={() => {
                  setLandingsHover(false);
                  setPagesHover(false);
                  setPortfolioHover(false);
                }}
              >
                Support
              </abbr>
            </li>
            <li>
              <abbr title="Docs">Docs</abbr>
            </li>
          </ul>
        </div>

        <div className="theme-menu">
          <div className="themeContainer">
            <span style={styles.span}>Light</span>

            <div
              onClick={toggleHandler}
              className={`${isLightModeOn ? "dark" : "light"}`}
            >
              {isLightModeOn ? <MdToggleOff /> : <MdToggleOn />}
            </div>

            <span style={styles.span}>Dark</span>
          </div>
          <div class="navbar-btn">
            <BiCart />
            <span>Buy now</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

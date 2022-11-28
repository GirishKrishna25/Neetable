import React from "react";
// import { BiToggleLeft } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";
import { BiCart } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const [landingsHover, setLandingsHover] = React.useState(false);
  const landingsHoverHandler = () => {
    setLandingsHover(!landingsHover);
  };

  const [pagesHover, setPagesHover] = React.useState(false);
  const pagesHoverHandler = () => {
    setPagesHover(!pagesHover);
  };

  const [portfolioHover, setPortfolioHover] = React.useState(false);
  const portfolioHoverHandler = () => {
    setPortfolioHover(!portfolioHover);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-navgroup">
          <div className="logoContainer">
            <img
              src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/logo.svg"
              alt="logo"
            />
            <span className="logo-name">Silicon</span>
          </div>
          <ul className="navgroup">
            <li onMouseEnter={landingsHoverHandler}>
              <abbr title="Landings">Landings</abbr>
              <AiOutlineDown />
            </li>
            {landingsHover && (
              <div className="modal" onMouseLeave={landingsHoverHandler}>
                <div className="modal-img">
                  <img src="./images/preview.jpg" alt="preview" />
                </div>
                <div className="landingPages-list">
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
              <AiOutlineDown />
            </li>
            {pagesHover && (
              <div
                className="modal modal-pages"
                onMouseLeave={pagesHoverHandler}
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
              <AiOutlineDown />
            </li>
            {portfolioHover && (
              <div
                className="modal modal-portfolio"
                onMouseLeave={portfolioHoverHandler}
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
              <abbr title="Support">Support</abbr>
            </li>
            <li>
              <abbr title="Docs">Docs</abbr>
            </li>
          </ul>
        </div>

        <div className="theme-menu">
          <div className="themeContainer">
            <span style={{ color: "#131022" }}>Light</span>
            <div className="toggle">
              <div className="toggle-circle"></div>
            </div>
            <span style={{ color: "#585c7b" }}>Dark</span>
          </div>
          {/* this one show up for smaller screens */}
          {/* <div className="menu">
            <GrMenu />
          </div> */}
          <div class="navbar-btn">
            <BiCart />
            <a>Buy now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

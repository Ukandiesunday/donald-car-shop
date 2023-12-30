import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top-container">
        <div className="col">
          <h2>Categories</h2>
        </div>
        <div className="col">
          <h2>Links</h2>
        </div>

        <div className="col2">
          <h2>head office</h2>
        </div>
        <div className="col2">
          <h2>about</h2>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="row1">
          <h2>follow us</h2>
          <div>
            <i className="ri-facebook-box-fill sos-icon"></i>
            <i className="ri-instagram-fill sos-icon"></i>
            <i className="ri-twitter-line sos-icon"></i>
            <i className="ri-twitter-line sos-icon"></i>
          </div>
        </div>
        <div className="row2">
          <h2>news</h2>
          <div className="logo">
            <img
              src="https://cars.usnews.com/static-atlas/assets/img/usn-logo-large.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="copy">
        <div>Made with love by Ukandie Sunday.</div>
        <div>
          &copy;copy right {new Date().getFullYear()} carStore, All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top-container">
        <div className="col">
          <Link className="link3" to="/products/:id">
            Cars
          </Link>
        </div>
        <div className="col">
          <h2 className="link3">Links</h2>
        </div>

        <div className="col2">
          <Link to="/contact" className="link3">
            head office
          </Link>
        </div>
        <div className="col2">
          <Link to="/about" className="link3">
            about
          </Link>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="row1">
          <h2 className="h2">follow us</h2>
          <div>
            <i className="ri-facebook-box-fill sos-icon"></i>
            <i className="ri-instagram-fill sos-icon"></i>
            <i className="ri-twitter-line sos-icon"></i>
          </div>
        </div>
        <div className="row2">
          <h2 className="h2">news</h2>
          <div className="logo">
            <a href="https://cars.usnews.com/">
              <img
                src="https://cars.usnews.com/static-atlas/assets/img/usn-logo-large.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="copy">
        <div>
          Made with <i className="ri-heart-fill"></i> by Ukandie Sunday.
        </div>
        <div>
          &copy;copy right {new Date().getFullYear()} carStore, All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

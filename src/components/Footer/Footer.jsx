import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import carNewsLogo from "../../assets/images/newslogo.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top-container">
        <div className="col">
          <Link className="link3" to="/products">
            Cars
          </Link>
        </div>
        <div className="col">
          <p className="link3">Links</p>
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
          <p className="link3">follow us</p>
          <div>
            <i className="ri-facebook-box-fill sos-icon"></i>
            <i className="ri-instagram-fill sos-icon"></i>
            <i className="ri-twitter-line sos-icon"></i>
          </div>
        </div>
        <div className="row2">
          <p className="link3">news</p>
          <div className="logo">
            <a href="https://cars.usnews.com/">
              <img src={carNewsLogo} alt="" />
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
          &copy;copy right {new Date().getFullYear()} DonCars, All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

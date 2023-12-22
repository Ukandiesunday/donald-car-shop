import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top-container">
        <div className="col">
          <h2>Categories</h2>
          <span>Mercedes benz cars</span>
          <span>BMW cars</span>
          <span>Nissan cars</span>
          <span>Toyota cars</span>
        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
        </div>
        <div className="col2">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            impedit assumenda repudiandae? Corporis
          </p>
        </div>
        <div className="col2">
          <h2>head office</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            velit.
          </p>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="row1">
          <h2>follow us</h2>
          <div>
            <i className="ri-facebook-box-fill sos-icon"></i>
            <i className="ri-instagram-fill sos-icon" sos-icon></i>
            <i className="ri-twitter-line sos-icon"></i>
            <i className="ri-twitter-line sos-icon"></i>
          </div>
        </div>
        <div className="row2">
          <h2>check out</h2>
          <div className="logo">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="copy">
        <div>
          &copy;copy right, {new Date().getFullYear()} benny cars, All rights
          reserved.
        </div>
        <div>Coded by Ukandie Sunday</div>
      </div>
    </div>
  );
};

export default Footer;

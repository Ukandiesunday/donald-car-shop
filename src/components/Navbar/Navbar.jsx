import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="top-navbar">
          <div className="top-left-icons">
            <i class="ri-facebook-box-fill sos-icon"></i>
            <i class="ri-instagram-fill sos-icon" sos-icon></i>
            <i class="ri-twitter-line sos-icon"></i>
          </div>
          <div className="logo">BENNY CARS</div>
          <div className="top-right-icons">
            <span className="login">
              <i class="ri-login-circle-line users"></i>
              login
            </span>
            <span className="user">
              <i class="ri-file-user-line users"></i>
              sign up
            </span>
            <span className="cart">
              <i class="ri-shopping-cart-2-line"></i>
              <span className="cart-amount">10</span>
            </span>
          </div>
        </div>
        <div className="nav-center"></div>
        <div className="nav-bottom">
          <div className="pages">
            <Link className="link" to="/home">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/blog">
              Blog
            </Link>
            <Link className="link" to="/contact">
              contact
            </Link>
          </div>
          <div className="search">
            <div className="input-container">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search cars...."
              />
              <button className="search-btn" type="button">
                <i class="ri-search-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

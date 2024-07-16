import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { total } = useSelector((state) => state.cart);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/products", link: "Cars" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="nav-container">
          <div className="top-left-nav">
            <ul className="ul">
              {navItems.map(({ path, link }) => (
                <li key={path}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "link")}
                    to={path}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link className="link" to="/">
            <div className="logo">carShop</div>
          </Link>

          <div className="profile-container">
            <Link to={"/login"} className="user">
              Login
            </Link>
            <Link className="user register" to={"/register"}>
              Sign up
            </Link>
          </div>

          <Link className="link" to="/cart">
            <span className="cart">
              <i className="ri-shopping-cart-2-line"></i>
              <span className="cart-amount">{total}</span>
            </span>
          </Link>

          <div onClick={toggleMenu} className="menu-button">
            <i className="ri-play-list-2-fill"></i>
          </div>
        </div>

        {/* mobile nav */}

        <div
          className={`mobile-nav ${isMenuOpen ? "close-menu" : ""}`}
          onClick={toggleMenu}
        >
          <ul className="mobile-ul" onClick={(e) => e.stopPropagation()}>
            {navItems.map(({ path, link }) => (
              <li key={path} onClick={toggleMenu}>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "link")}
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

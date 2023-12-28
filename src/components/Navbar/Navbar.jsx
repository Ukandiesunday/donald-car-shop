import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Cart from "../Cart/Cart";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { path: "/home", link: "Home" },
    { path: "/products/:id", link: "Cars" },
    { path: "/about", link: "About" },
    { path: "/blog", link: "Blog" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="top-left-nav">
          <ul>
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
        <Link className="link" to="/home">
          <div className="logo">carStore</div>
        </Link>
        <div className="right-nav">
          <span className="user">login</span>
          <span className="cart" onClick={() => setOpen((prev) => !prev)}>
            <i className="ri-shopping-cart-2-line"></i>
            <span className="cart-amount">10</span>
          </span>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-container"
        >
          {isMenuOpen ? (
            <i className="ri-close-line"></i>
          ) : (
            <i className="ri-play-list-2-fill"></i>
          )}
        </div>
      </div>
      {open && <Cart />}
      <div className={`nav ${isMenuOpen ? "" : "close-menu"}`}>
        <ul>
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
          <span className="user user2">login</span>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

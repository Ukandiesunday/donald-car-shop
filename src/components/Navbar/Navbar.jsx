import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { total } = useSelector((state) => state.cart);

  const navItems = [
    { path: "/", link: "Home" },
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
        <Link className="link" to="/">
          <div className="logo">carStore</div>
        </Link>
        <div className="right-nav">
          <Link to="/login" className="link">
            <span className="user">Login</span>
          </Link>
          <Link className="link" to="/cart">
            <span className="cart" onClick={() => setCartOpen(true)}>
              <i className="ri-shopping-cart-2-line"></i>
              <span className="cart-amount">{total}</span>
            </span>
          </Link>
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
      {cartOpen && <Cart />}
      <div className={`nav ${isMenuOpen ? "" : "close-menu"}`}>
        <ul>
          {navItems.map(({ path, link }) => (
            <li key={path} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "link")}
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
          <Link
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            to="/login"
            className="link"
          >
            <span className="user2 user">Login</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

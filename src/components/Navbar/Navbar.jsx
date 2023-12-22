import { Link } from "react-router-dom";
import "./Navbar.css";
import Cart from "../Cart/Cart";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="top-left-icons">
          <Link className="link-nav" to="/home">
            Home
          </Link>
          <Link className="link-nav" to="/products/1">
            Cars
          </Link>
          <Link className="link-nav" to="/about">
            About
          </Link>
          <Link className="link-nav" to="/blog">
            Blog
          </Link>
          <Link className="link-nav" to="/contact">
            contact
          </Link>
        </div>
        <div className="logo">BENNY CARS</div>
        <div className="right-nav">
          <span className="user">
            <i class="ri-file-user-line users"></i>
            sign up
          </span>
          <span className="cart" onClick={() => setOpen((prev) => !prev)}>
            <i class="ri-shopping-cart-2-line"></i>
            <span className="cart-amount">10</span>
          </span>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;

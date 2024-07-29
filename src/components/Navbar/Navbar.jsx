import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import team2 from "../../assets/images/user-01.png";
import { useState } from "react";
import UserProfile from "../../components/useprofile/UserProfile";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { scrollTop } from "../utility/scrollTop";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenProfile, setOpenProfile] = useState(false);
  const { total } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.auth);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/products", link: "Cars" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
  ];

  const handleProfileOpen = () => {
    setOpenProfile(!isOpenProfile);
  };
  const user = currentUser;

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
                    onClick={scrollTop}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link className="link" to="/" onClick={scrollTop}>
            <div className="logo">DonCars</div>
          </Link>

          <div className="profile-container">
            {user ? (
              <div
                onClick={() => {
                  handleProfileOpen();
                  scrollTop();
                }}
                className="avatar-container"
              >
                <img src={team2} alt="" className="avatar" />
                <FaChevronDown />
              </div>
            ) : (
              <>
                <Link to={"/login"} className="auth">
                  Login
                </Link>
                <Link className="auth register" to={"/register"}>
                  Sign up
                </Link>
              </>
            )}
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
                  onClick={scrollTop}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpenProfile && <UserProfile handleProfileOpen={handleProfileOpen} />}
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";

import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import "./userProfile.css";
import { IoClose } from "react-icons/io5";
import { removeItem } from "../utility/storage";
import { auth } from "../../firebase";
import { logout } from "../redux1/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { signOut } from "firebase/auth";
const UserProfile = ({ handleProfileOpen }) => {
  const [tap, setTap] = useState(0);
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  let decodedUser;
  if (typeof currentUser === "string" && currentUser) {
    decodedUser = jwtDecode(currentUser);
  }

  const signedOut = () => {
    signOut(auth)
      .then(() => {
        // logout
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(logout());
    removeItem("user");
    handleProfileOpen();
  };
  return (
    <div className="">
      <div onClick={handleProfileOpen} className="userProfile">
        <div className="profile-wrapper" onClick={(e) => e.stopPropagation()}>
          <span className="close-icon">
            <IoClose onClick={handleProfileOpen} />
          </span>
          <div className="profile-header">
            <h3
              className={`taps ${tap === 0 && "active-tap"}`}
              onClick={() => setTap(0)}
            >
              Profile
            </h3>
            <h3
              className={`taps ${tap === 1 && "active-tap"}`}
              onClick={() => setTap(1)}
            >
              Transaction
            </h3>
          </div>
          <div className="summary-container">
            {tap === 0 && (
              <div className="profile">
                <Link to="/profile" className="link">
                  <h2>Profile</h2>
                </Link>
                <p>
                  <b>userId</b> :{""} {decodedUser?.user_id}
                </p>
                <p>
                  {" "}
                  <b>Email:</b> {""} {decodedUser?.email}
                </p>

                <p>
                  <b>Phone: </b> {""}+2349134683483
                </p>
              </div>
            )}
            {tap === 1 && (
              <div className={`transaction ${tap === 1 && "active-content"}`}>
                <h2>Transaction History</h2>
                <h3>Summary</h3>
                <p>
                  {" "}
                  <b>Oops!</b> You have not made any transaction yet
                </p>
              </div>
            )}
          </div>

          <div onClick={signedOut}>
            <span className="logout">
              {""}
              Logout <IoIosLogOut className="logout-icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

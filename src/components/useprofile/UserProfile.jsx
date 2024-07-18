import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import "./userProfile.css";
const UserProfile = ({ handleProfileOpen, decodedToken }) => {
  const [tap, setTap] = useState(0);

  const { email, auth_time, user_id } = decodedToken;
  return (
    <div className="">
      <div onClick={handleProfileOpen} className="userProfile">
        <div className="profile-wrapper" onClick={(e) => e.stopPropagation()}>
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
                  <b>userId</b> :{user_id}
                </p>
                <p>
                  {" "}
                  <b>Email:</b> {email}
                </p>
                <p>
                  <b>Logged in at :</b>
                  {auth_time}
                </p>
                <p>
                  <b>Phone :</b> +2349134683483
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
          <div>
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

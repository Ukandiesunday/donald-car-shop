import { Link } from "react-router-dom";
import "./userModal.css";

import React from "react";

const UserModal = () => {
  return (
    <div className="userModal">
      <div className="userItem">
        <div className="profile">
          <Link to="/login" className="link">
            Login
          </Link>
          /
          <Link to="/register" className="link">
            Register
          </Link>
        </div>
      </div>
      <div className="userItem">
        <span>Logout</span>
      </div>
    </div>
  );
};

export default UserModal;

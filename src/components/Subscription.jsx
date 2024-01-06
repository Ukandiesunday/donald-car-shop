import React from "react";

const Subscription = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <h2 style={{ fontSize: "23px" }}>Subscribe to our news letter</h2>
      <div className="item" style={{ display: "flex", alignItems: "center" }}>
        <input
          style={{ width: "90%" }}
          type="text"
          placeholder="Your Email..."
        />
      </div>
    </div>
  );
};

export default Subscription;

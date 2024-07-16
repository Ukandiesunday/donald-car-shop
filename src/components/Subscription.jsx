import React from "react";

const Subscription = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <h2 style={{ fontSize: "23px", marginBottom: "10px" }}>
        Subscribe to our news letter
      </h2>
      <div className="item" style={{ display: "flex", alignItems: "center" }}>
        <input
          style={{
            maxWidth: "60%",

            borderRadius: "5px",
            border: "1px solid #cbd1da",
            padding: "10px 15px",
          }}
          type="text"
          placeholder="Your Email..."
        />
      </div>
    </div>
  );
};

export default Subscription;

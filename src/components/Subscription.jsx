import React from "react";

const Subscription = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      <h2 style={{ fontSize: "23px", marginBottom: "10px" }}>
        Subscribe to our news letter
      </h2>
      <div
        className="subscription"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #cbd1da",
          width: "50%",
          borderRadius: "5px",
        }}
      >
        <input
          style={{
            outline: "none",
            borderRadius: "5px",
            border: "none",
            padding: "10px 15px",
            width: "100%",
            height: "100%",
          }}
          type="text"
          placeholder="Your Email..."
        />
      </div>
    </div>
  );
};

export default Subscription;

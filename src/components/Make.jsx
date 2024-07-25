import React from "react";
import bmw from "../assets/images/bmw2.jpeg";
import benz from "../assets/images/benz.png";
import toyota from "../assets/images/toyota.png";
import nissan from "../assets/images/nissan.png";
import all from "../assets/images/aboutImg.jpg";
const Make = ({ handleMakeClick, handleScrollBottom }) => {
  const cars = [
    { makeLogo: all, name: "all", label: "all" },
    { makeLogo: nissan, name: "nissan", label: "nissan" },
    { makeLogo: toyota, name: "toyota", label: "toyota" },
    { makeLogo: benz, name: "benz", label: "benz" },
    { makeLogo: bmw, name: "bmw", label: "bmw" },
  ];
  return (
    <div>
      <div className="make">
        {cars.map((car, ind) => (
          <button
            key={ind}
            className="make-wrapper"
            onClick={() => {
              handleMakeClick(car.name);
              handleScrollBottom();
            }}
          >
            <img
              style={{ objectFit: "cover", borderRadius: "50%" }}
              src={car.makeLogo}
              alt=""
            />
            <p style={{ fontWeight: "600", marginTop: "10px" }}>{car.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Make;

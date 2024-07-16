import React from "react";
import bmw from "../assets/images/bmw2.jpeg";
import benz from "../assets/images/benz.png";
import toyota from "../assets/images/toyota.png";
import nissan from "../assets/images/nissan.png";

const Make = ({ setMake }) => {
  const cars = [
    { make: nissan, name: "nissan" },
    { make: toyota, name: "toyota" },
    { make: benz, name: "benz" },
    { make: bmw, name: "bmw" },
    { make: "", name: "" },
  ];
  return (
    <div>
      <div className="make">
        {cars.map((car, ind) => (
          <button
            key={ind}
            className="make-wrapper"
            onClick={() => setMake(car.name)}
          >
            <img src={car.make} alt="" />
            <p style={{ fontWeight: "600", marginTop: "10px" }}>{car.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Make;

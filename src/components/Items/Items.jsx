import { Link } from "react-router-dom";
import "./Items.css";

import React from "react";

const Items = ({ id, price, img, title }) => {
  return (
    <div className="items">
      <Link className="links" to={`/product/${id}`}>
        <div className="item-container">
          <div className="img-container">
            <img className="img1" src={img} alt="cars" />
          </div>
          <div className="details">
            <div className="title">{title}</div>
            <div className="price">${price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Items;

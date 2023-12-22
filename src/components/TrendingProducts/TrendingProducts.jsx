import React from "react";
import "./TrendingProducts.css";
import Items from "../Items/Items";
import { cars } from "../../assets/data/cars";

const TrendingProducts = () => {
  return (
    <div className="trending-products">
      <h2>trending products</h2>
      <div className="items-container">
        {cars.map((item) => {
          return <Items key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default TrendingProducts;

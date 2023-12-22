import "./Product.css";
import benz1 from "../../assets/images/benz1w.jpg";
import benz2 from "../../assets/images/benz2b.jpg";

import { useState } from "react";
const Product = () => {
  const [mainImg, setMainImg] = useState(0);
  const [amount, setAmount] = useState(0);
  const car = [benz1, benz2];
  return (
    <div className="product">
      <div className="product-left">
        <h2>select product</h2>
        <div className="img">
          <img
            src={car[0]}
            alt=" white benz car"
            onClick={() => setMainImg(0)}
          />
        </div>
        <div className="img">
          <img src={car[1]} alt="black benz" onClick={() => setMainImg(1)} />
        </div>
      </div>
      <div className="product-center">
        <img src={car[mainImg]} alt="" />
      </div>
      <div className="product-right">
        <h2>Title benz car</h2>
        <span className="cart-price">Price$88.34</span>
        <div className="desc-2">Lorem, ipsum dolor sit amet consectetur</div>
        <div className="amt-container">
          <button
            className="cart-btn"
            onClick={() => setAmount((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            <i className="ri-subtract-line"></i>
          </button>
          <span>{amount}</span>
          <button
            className="cart-btn"
            onClick={() => setAmount((prev) => prev + 1)}
          >
            <i className="ri-add-fill"></i>
          </button>
        </div>

        <button className="add-to-cart">
          <i className="ri-shopping-cart-2-line"></i>
          ADD TO CART
        </button>
        <div className="wishlist">
          <span>
            <i class="ri-hearts-line"></i>ADD TO WISHLIST
          </span>
          <br />
          <span>
            <i class="ri-hand-heart-line"></i>ADD TO COMPARE
          </span>
        </div>
        <div className="desc-2">
          <h4>DESCRIPTION</h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
          praesentium?
        </div>
      </div>
    </div>
  );
};

export default Product;

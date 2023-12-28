import "./Product.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/data/data";
const Product = () => {
  const [amount, setAmount] = useState(0);
  const { id } = useParams();
  const { title, img, desc, price, condition, make } = products.find(
    (item) => item.id === id
  );

  return (
    <div className="product">
      <div className="product-left">
        <h2>
          proceed to buy your {condition} {make} car
        </h2>
        <div className="product-center">
          <div className="img">
            <img src={img} />
          </div>
        </div>
      </div>
      <div className="product-right">
        <h2>{title}</h2>
        <span className="cart-price">{price}</span>

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
            <i className="ri-hearts-line"></i>ADD TO WISHLIST
          </span>
          <br />
          <span>
            <i className="ri-hand-heart-line"></i>ADD TO COMPARE
          </span>
        </div>
        <div className="desc-2">
          <h4>DESCRIPTION</h4>
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Product;

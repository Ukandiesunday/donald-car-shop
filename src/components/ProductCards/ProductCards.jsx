import { Link } from "react-router-dom";
import "./ProductCards.css";
import React from "react";

const ProductCards = ({ products }) => {
  const filteredProducts = products;
  console.log(filteredProducts);
  return (
    <div>
      <div className="cards">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            className="links card-link"
            to={`/product/${product.id}`}
          >
            <div className="item-container">
              <div className="img-wrapper">
                <img className="img1" src={product.img} alt="cars" />
              </div>
              <div className="details">
                <div className="title">{product.title}</div>
                <div className="price">${product.price}</div>
                <p>shop now</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;

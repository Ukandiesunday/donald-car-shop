import { Link } from "react-router-dom";
import "./ProductCards.css";
import React, { useState } from "react";

const ProductCards = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const paginatedProducts = products.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(650, 650);
  };

  return (
    <div>
      <div className="cards">
        {paginatedProducts.map((product) => (
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
                <div className="condition">{product.condition}</div>
                <div className="price">${product.price}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="btn-container">
        <button
          className="add-to-cart"
          id="btn"
          onClick={() => {
            handlePageChange(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          previous
        </button>
        <span>{currentPage}</span>
        <button
          className="add-to-cart"
          id="btn"
          onClick={() => {
            handlePageChange(currentPage + 1);
          }}
          disabled={currentPage === 3}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductCards;

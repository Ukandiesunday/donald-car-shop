import { Link } from "react-router-dom";
import "./ProductCards.css";
import React, { useState } from "react";
import { Tooltip } from "@mui/material";

const ProductCards = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;
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
          <Tooltip
            title={"Click car to see more details and buy"}
            key={product.id}
          >
            <Link
              className="links card-link"
              to={`/products/${product.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="item-container">
                <div className="img-wrapper">
                  <img className="img1" src={product?.img[0]} alt="cars" />
                </div>

                <div className="details">
                  <div className="title">{product?.title}</div>

                  <div className="sub-details">
                    <div className="condition">
                      Condition: {product?.condition}
                    </div>
                    <div className="uses">Uses: {product?.oil}</div>
                  </div>
                  <div> Ranges Up To {product?.autonomy} Miles</div>
                  <div className="price">
                    Price : {""}${product?.price}
                  </div>
                </div>
              </div>
            </Link>
          </Tooltip>
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

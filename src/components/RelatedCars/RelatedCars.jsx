import { Tooltip } from "@mui/material";
import "./RelatedCars.css";
import { Link } from "react-router-dom";
import { formatMoney } from "../utility/formatMoney";
const RelatedCars = ({ make, data }) => {
  const filteredCars = data.filter((item) => item.make === make);
  return (
    <div className="rela-cars">
      <h2 className="h2">Buy From Related cars gallery</h2>
      <div className="rela-car-wrapper">
        {filteredCars.slice(0, 3).map((product, ind) => (
          <Tooltip key={ind} title={"Click to buy to proceed"}>
            <Link
              className="link related-cars-link"
              to={`/products/${product.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div>
                <div className="rela-img-wrapper">
                  <div className="rela-img-container">
                    <img className="rela-img" src={product.img[0]} alt="cars" />
                  </div>
                </div>
                <div className="rela-items2">
                  <div className="title">{product.title}</div>
                  <div className="price price2">
                    {formatMoney(product?.price)}{" "}
                    <span className="buy">Buy</span>
                  </div>
                </div>
              </div>
            </Link>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default RelatedCars;

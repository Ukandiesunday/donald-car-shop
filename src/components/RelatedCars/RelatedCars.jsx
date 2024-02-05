import "./RelatedCars.css";
import { Link } from "react-router-dom";
const RelatedCars = ({ make, data }) => {
  const filteredCars = data.filter((item) => item.make === make);
  return (
    <div className="rela-cars">
      <h2 className="h2">Buy From Related cars gallery</h2>
      <div className="rela-car-wrapper">
        {filteredCars.slice(0, 3).map((product) => (
          <Link
            className="link related-cars-link"
            to={`/product/${product.id}`}
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
                <div className="price">${product.price}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedCars;

import "./RelatedCars.css";
// import { data } from "../../assets/data/data";
import { Link } from "react-router-dom";
const RelatedCars = ({ make, data }) => {
  const filteredCars = data.filter((item) => item.make === make);
  return (
    <div className="rela-cars">
      <h1>Related {make} cars gallery</h1>
      <div className="rela-car-wrapper">
        {filteredCars.slice(0, 3).map((product) => (
          <Link className="link" to={`/product/${product.id}`}>
            <div>
              <div className="rela-img-container">
                <img className="rela-img" src={product.img[0]} alt="cars" />
              </div>
              <div>
                <div className="title">{product.title}</div>
                <div className="condition"> {product.condition}</div>
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

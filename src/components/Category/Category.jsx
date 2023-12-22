import "./Category.css";
import img1 from "../../assets/images/benz1w.jpg";
import img2 from "../../assets/images/benz2b.jpg";
import img3 from "../../assets/images/toyota2b.jpeg";
import img4 from "../../assets/images/nissan2r.jpg";
import img5 from "../../assets/images/nissan1y.jpg";
import img6 from "../../assets/images/bmw2g.jpg";
import img7 from "../../assets/images/bmw1y.jpg";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <h2>see our categories</h2>
      <div className="category-container">
        <div className="col">
          <div className="row">
            <img src={img1} alt="benz car" />
          </div>
          <div className="row">
            <img src={img2} alt="benz car2" />
          </div>
          <button className="btn">
            <Link className="link" to="/products/1">
              mercedes
            </Link>
          </button>
        </div>
        <div className="col">
          <div className="row">
            <img src={img3} alt="toyota car" />
          </div>
          <button className="btn">
            <Link className="link" to="/products/1">
              toyota
            </Link>
          </button>
        </div>
        <div className="col-l">
          <div className="row">
            <div>
              <img src={img4} alt="nissan" style={{ backgroundColor: "red" }} />
            </div>
            <div>
              <img src={img5} alt="nissan" />
            </div>
            <button className="btn">
              <Link className="link" to="/products/1">
                nissan
              </Link>
            </button>
          </div>
          <div className="row row7">
            <div>
              <img src={img7} alt="bmw" />
            </div>
            <button className="btn">
              <Link className="link" to={"/products/1"}>
                bmw
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

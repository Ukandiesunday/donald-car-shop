import { useParams } from "react-router-dom";
import Lists from "../../components/Lists/Lists";
import "./Products.css";
import { useState } from "react";
const Products = () => {
  const { id } = useParams();
  console.log(id);
  const [maxPrice, setMaxPrice] = useState(0);
  return (
    <div className="products">
      <div className="cat-left">
        <div className="input-container">
          <h2>Sort by Models</h2>
          <div className="inputItems">
            <input type="checkbox" value={1} id="1" />
            <label htmlFor="1">mercedes Benz</label>
          </div>
          <div className="inputItems">
            <input type="checkbox" value={2} id="2" />
            <label htmlFor="2">toyota</label>
          </div>
          <div className="inputItems">
            <input type="checkbox" value={3} id="3" />
            <label htmlFor="3">nissan</label>
          </div>
          <div className="inputItems">
            <input type="checkbox" value={4} id="4" />
            <label htmlFor="4">bmw</label>
          </div>
        </div>

        <div className="sort-container">
          <div className="sort-price">
            <h2>Filter by price</h2>
            <div className="inputItems">
              <span>${0}</span>
              <input
                type="range"
                min={0}
                max={100000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>${maxPrice}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cat-right">
        <Lists id={id} maxPrice={maxPrice} />
      </div>
    </div>
  );
};

export default Products;

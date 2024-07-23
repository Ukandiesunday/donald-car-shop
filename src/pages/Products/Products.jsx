import "./Products.css";
import ProductCards from "../../components/ProductCards/ProductCards";
import SearchBar from "../../components/SearchBar/SearchBar";

import { data } from "../../assets/data/data";
import { useState } from "react";
import Make from "../../components/Make";
import SortCars from "../../components/sortcars/SortCars";
import Reviews from "../../components/Reviews/Reviews";

const Products = ({ myElementRef }) => {
  const [category, setCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const [make, setMake] = useState(null);
  // const [filterError, setFilterError] = useState("");
  //filter cars by input search
  const filteredItems = data.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
  // if (filteredItems.length === 0) {
  //   setFilterError("Search result not found");
  // }
  //filter cars by radio button
  const handleMakeChange = (e) => {
    setCategory(e.target.value);

    setSelectedInput(e.target.value === selectedInput ? null : e.target.value);
  };

  //filter cars by condition
  const handleConditionChange = (e) => {
    setCategory(e.target.value);
    setSelectedInput(e.target.value === selectedInput ? null : e.target.value);
  };
  //To filter cars by make
  const filteredMake = data.filter((product) => product.make === make);

  // filter cars by color
  const handleColorChange = (e) => {
    setCategory(e.target.value);
    setSelectedInput(e.target.value === selectedInput ? null : e.target.value);
  };

  // General filtering of cars
  const handleChange = (products, selected, query, make) => {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }

    if (make) {
      filteredProducts = filteredMake;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.price === selected ||
          item.color === selected ||
          item.make === selected ||
          item.condition === selected
      );
    }

    return filteredProducts;
  };

  const result = handleChange(data, category, query, make);

  return (
    <div className="products-wrapper">
      <div className="make-container">
        <Make setMake={setMake} />
      </div>

      <div className="products">
        <div className="prod-left">
          <SortCars
            handleConditionChange={handleConditionChange}
            handleColorChange={handleColorChange}
            handleMakeChange={handleMakeChange}
            selectedInput={selectedInput}
          />
        </div>
        <div className="prod-right" ref={myElementRef}>
          <h3>explore our affordable and durable cars</h3>
          <SearchBar query={query} setQuery={setQuery} />

          <ProductCards products={result} filteredItems={filteredItems} />
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Products;

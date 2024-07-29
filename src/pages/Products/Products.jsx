import "./Products.css";
import ProductCards from "../../components/ProductCards/ProductCards";
import SearchBar from "../../components/SearchBar/SearchBar";

import { data } from "../../assets/data/data";
import { useState } from "react";
import Make from "../../components/Make";
const Products = ({ productsElementRef, handleScrollBottom }) => {
  const [query, setQuery] = useState("");

  const [selectedMake, setSelectedMake] = useState("all");

  const handleMakeClick = (make) => {
    setSelectedMake(make);
    setQuery(""); // Clear the search term when a make filter is selected
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    if (selectedMake !== "all") {
      setSelectedMake("all"); // Reset the make filter to "all" when searching
    }
  };

  const filteredCars = data.filter((car) => {
    const makeMatch = selectedMake === "all" || car.make === selectedMake;
    const nameMatch = car.title.toLowerCase().includes(query.toLowerCase());
    return makeMatch && nameMatch;
  });

  return (
    <div className="products-container1">
      <div className="products-wrapper">
        <div className="make-container">
          <Make
            handleMakeClick={handleMakeClick}
            handleScrollBottom={handleScrollBottom}
          />
        </div>

        <div className="products">
          <div className="prod-right" ref={productsElementRef}>
            <h3>explore our affordable and durable cars</h3>
            <SearchBar query={query} handleSearchChange={handleSearchChange} />
            <ProductCards products={filteredCars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

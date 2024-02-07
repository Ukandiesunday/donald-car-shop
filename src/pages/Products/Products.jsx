import "./Products.css";
import ProductCards from "../../components/ProductCards/ProductCards";
import SearchBar from "../../components/SearchBar/SearchBar";
import Input from "../../components/Input/Input";
import { data } from "../../assets/data/data";
import { useState } from "react";
import Make from "../../components/Make";
const Products = ({ myElementRef }) => {
  const [category, setCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const [make, setMake] = useState(null);

  //filter typed input
  const filteredItems = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //filter radio selector
  const handleMakeChange = (e) => {
    setCategory(e.target.value);

    setSelectedInput(e.target.value === selectedInput ? null : e.target.value);
  };

  const handleConditionChange = (e) => {
    setCategory(e.target.value);
    setSelectedInput(e.target.value === selectedInput ? null : e.target.value);
  };
  //To filter make when clicked on the logo
  const filteredMake = data.filter((product) => product.make === make);

  const handleColorChange = (e) => {
    setCategory(e.target.value);
    setSelectedInput(e.target.value === selectedInput ? null : e.target.value);
  };

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
      <div>
        <Make setMake={setMake} />
      </div>

      <div className="products">
        <div className="cat-left">
          <Input
            handleConditionChange={handleConditionChange}
            handleColorChange={handleColorChange}
            handleMakeChange={handleMakeChange}
            selectedInput={selectedInput}
          />
        </div>
        <div className="cat-right" ref={myElementRef}>
          <h3>explore our affordable and durable cars</h3>
          <SearchBar query={query} setQuery={setQuery} />
          <ProductCards products={result} />
        </div>
      </div>
    </div>
  );
};

export default Products;

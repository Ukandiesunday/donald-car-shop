import "./Products.css";
import ProductCards from "../../components/ProductCards/ProductCards";
import SearchBar from "../../components/SearchBar/SearchBar";
import Input from "../../components/Input/Input";
import { products } from "../../assets/data/data";
import { useState } from "react";
import Design from "../../components/CarDesign/Design";
const Products = () => {
  const [category, setCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);

  //filter typed input
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //filter radio selector
  const handleMakeChange = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
    console.log(selectedInput);

    setSelectedInput(e.target.value === selectedInput ? null : e.target.value);
  };

  const handleConditionChange = (e) => {
    setCategory(e.target.value);
    setSelectedInput(e.target.value === selectedInput ? null : e.target.value);
  };

  const handleColorChange = (e) => {
    setCategory(e.target.value);
    setSelectedInput(e.target.value === selectedInput ? null : e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  // const handleInputSelect = (e) => {

  // };

  const handleChange = (products, selected, query) => {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
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

  const result = handleChange(products, category, query);
  console.log(result);
  return (
    <div className="products-wrapper">
      <Design />
      <div className="products">
        <div className="cat-left">
          <Input
            handleConditionChange={handleConditionChange}
            handleColorChange={handleColorChange}
            handleMakeChange={handleMakeChange}
            selectedInput={selectedInput}
          />
        </div>
        <div className="cat-right">
          <h3>explore our affordable and durable cars</h3>
          <SearchBar handleQueryChange={handleQueryChange} query={query} />
          <ProductCards products={result} />
        </div>
      </div>
    </div>
  );
};

export default Products;

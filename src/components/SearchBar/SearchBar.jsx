import "./SearchBar.css";

const SearchBar = ({ handleQueryChange, query }) => {
  return (
    <div className="search-bar">
      <i className="ri-search-line"></i>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="search...e.g nissan"
      />
    </div>
  );
};

export default SearchBar;

import "./SearchBar.css";

const SearchBar = ({ query, handleSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search cars... e.g nissan, benz"
      />

      <i className="ri-search-line"></i>
    </div>
  );
};

export default SearchBar;

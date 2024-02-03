import "./SearchBar.css";

const SearchBar = ({ handleQueryChange, query, setQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        // onChange={handleQueryChange}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Find cars... e.g nissan, benz"
      />
      <i className="ri-search-line" onClick={handleQueryChange}></i>
    </div>
  );
};

export default SearchBar;

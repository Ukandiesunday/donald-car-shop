import "./SearchBar.css";

const SearchBar = ({ handleQueryChange, query }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Find cars.... e.g nissan, title"
      />
      <i className="ri-search-line"></i>
    </div>
  );
};

export default SearchBar;

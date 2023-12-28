import "./Input.css";

const Input = ({
  handleMakeChange,
  handleColorChange,
  handleConditionChange,
  selectedInput,
}) => {
  return (
    <div className="input">
      <form action="">
        <div className="input-container">
          <h2>Sort by Make</h2>
          <div className="inputItems">
            <input
              type="radio"
              value=""
              id="all"
              name="all"
              checked={selectedInput === ""}
              onChange={handleMakeChange}
            />
            <label htmlFor="all">All</label>
          </div>
          <div className="inputItems">
            <input
              type="radio"
              value="benz"
              id="benz"
              name="benz"
              checked={selectedInput === "benz"}
              onChange={handleMakeChange}
            />
            <label htmlFor="benz">mercedes benz</label>
          </div>
          <div className="inputItems">
            <input
              type="radio"
              value="toyota"
              id="toyota"
              name="toyota"
              checked={selectedInput === "toyota"}
              onChange={handleMakeChange}
            />

            <label htmlFor="toyota">toyota</label>
          </div>
          <div className="inputItems">
            <input
              type="radio"
              value="nissan"
              id="nissan"
              name="nissan"
              checked={selectedInput === "nissan"}
              onChange={handleMakeChange}
            />

            <label htmlFor="nissan">nissan</label>
          </div>
          <div className="inputItems">
            <input
              type="radio"
              value="bmw"
              id="bmw"
              name="bmw"
              checked={selectedInput === "bmw"}
              onChange={handleMakeChange}
            />

            <label htmlFor="bmw">bmw</label>
          </div>
        </div>

        <div className="sort-color">
          <h2>sort by color</h2>
          <div>
            <input
              type="radio"
              id="allColors"
              value=""
              checked={selectedInput === ""}
              onChange={handleColorChange}
            />
            <label htmlFor="allColors">All</label>
          </div>
          <div>
            <input
              type="radio"
              id="white"
              value="white"
              checked={selectedInput === "white"}
              onChange={handleColorChange}
            />
            <label htmlFor="white">white</label>
          </div>
          <div>
            <input
              type="radio"
              id="ash"
              name="ash"
              value="ash"
              checked={selectedInput === "ash"}
              onChange={handleColorChange}
            />
            <label htmlFor="ash">ash</label>
          </div>
          <div>
            <input
              type="radio"
              id="black"
              name="black"
              value="black"
              checked={selectedInput === "black"}
              onChange={handleColorChange}
            />
            <label htmlFor="black">black</label>
          </div>
        </div>

        <div className="sort-container">
          <div className="sort-price">
            <h2> condition</h2>
            <div className="inputItems">
              <div>
                <input
                  type="radio"
                  name="new"
                  id="new"
                  value="new"
                  checked={selectedInput === "new"}
                  onChange={handleConditionChange}
                />
                <label htmlFor="new">New</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="used"
                  id="used"
                  value="used"
                  checked={selectedInput === "used"}
                  onChange={handleConditionChange}
                />
                <label htmlFor="used">Used</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;

import "./Product.css";
import { useParams, Link } from "react-router-dom";
import { products } from "../../assets/data/data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrease } from "../../Redux/cartReducer";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { title, img, desc, price, condition, make } = products.find(
    (item) => item.id === id
  );
  //To send same single product items to payload
  const cartItems = {
    title,
    img,
    price,
    condition,
    make,
    id,
    quantity: 1,
    total: 0,
  };

  return (
    <div className="product">
      <div className="product-left">
        <h2>
          proceed to buy your {condition} {make} car
        </h2>
        <div className="product-center">
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="product-right">
        <h2>{title}</h2>
        <span className="cart-price">{price}</span>

        <div className="amt-container">
          <button
            className="cart-btn"
            onClick={() => dispatch(decrease(cartItems))}
          >
            <i className="ri-subtract-line"></i>
          </button>

          <span>{}</span>
          <button
            className="cart-btn"
            onClick={() => dispatch(addToCart(cartItems))}
          >
            <i className="ri-add-fill"></i>
          </button>
        </div>
        <button
          className="add-to-cart"
          onClick={() => dispatch(addToCart(cartItems))}
        >
          <i className="ri-shopping-cart-2-line"></i>
          ADD TO CART
        </button>
        <Link className="link" to="/products/:id">
          Continue Shopping
        </Link>
        <div className="wishlist">
          <span>
            <i className="ri-hearts-line"></i>ADD TO WISHLIST
          </span>
          <br />
          <span>
            <i className="ri-hand-heart-line"></i>ADD TO COMPARE
          </span>
        </div>
        <div className="desc-2">
          <h4>DESCRIPTION</h4>
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Product;

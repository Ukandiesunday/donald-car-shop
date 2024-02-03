import { Link, useParams } from "react-router-dom";
import { addToCart, decrease, removeItem } from "../../Redux/cartReducer";
import "./Cart.css";
// import { data } from "../../assets/data/data";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { openModal } from "../Modal/modalSlice";

const Cart = () => {
  const { products, amount } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <div className="empty">
        <h1>Your cart is empty!</h1>
        <h3>Browse our products and discover our best deals</h3>
        <Link className="link link2" to="/products/id">
          START SHOPPING
        </Link>
      </div>
    );
  }
  return (
    <div className="cart-modal">
      <h1>Thanks for your patronage</h1>
      <h2>Products in your Cart</h2>
      <div className="cart-modal-container">
        {products?.map((item) => {
          const { id, img, title, desc, price, quantity } = item;

          return (
            <div key={id} className="info-container">
              <div className="cart-img">
                <img src={img} alt="benz car" />
              </div>
              <div className="info">
                <div className="cart-desc">
                  <h4>{title}</h4>
                  <p>${price}</p>
                  <p>Quantity: {quantity}</p>
                </div>

                <div className="sub-info">
                  <i
                    className="ri-delete-bin-5-line delete-icon"
                    onClick={() => dispatch(removeItem(id))}
                  ></i>
                </div>

                <div className="amt-container">
                  <button
                    className="cart-btn"
                    onClick={() => dispatch(decrease(item))}
                  >
                    <i className="ri-subtract-line"></i>
                  </button>

                  <span>{quantity}</span>
                  <button
                    className="cart-btn"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <i className="ri-add-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="bottom-modal">
          <div className="subtotal">
            <h4>Subtotal</h4>
            <span>${amount.toFixed(2)}</span>
          </div>

          <button className="checkout-btn cart-btn">PROCEED TO CHECKOUT</button>
          <span className="call">
            <br />
            Call: +2349153678691
          </span>

          <div className="clear-container">
            <button
              className="clear-cart cart-btn"
              onClick={() => dispatch(openModal())}
            >
              Clear cart
            </button>
            <Link className="link link2" to="/products/:id">
              Add More
            </Link>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Cart;

import { Link } from "react-router-dom";
import { removeItem } from "../../Redux/cartReducer";
import "./Cart.css";

import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { openModal } from "../Modal/modalSlice";
const Cart = ({}) => {
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
      <h3>Products in your Cart</h3>
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
                  <span>{desc}</span>
                  <i
                    className="ri-delete-bin-5-line"
                    onClick={() => dispatch(removeItem(id))}
                  ></i>
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
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          <br />
          <button className="clear-cart" onClick={() => dispatch(openModal())}>
            Clear cart
          </button>
          <Link className="link link2" to="/products/:id">
            Go Back
          </Link>
        </div>
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Cart;

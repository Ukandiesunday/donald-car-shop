import { Link } from "react-router-dom";

import "./Cart.css";
// import { data } from "../../assets/data/data";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { addToCart, decrease, removeItem } from "../redux1/cartSlice";
import { openModal } from "../redux1/modalSlice";
import { formatMoney } from "../utility/formatMoney";
import { FaArrowLeftLong } from "react-icons/fa6";

const Cart = () => {
  // amount, products
  const { products, amount } = useSelector((state) => state.cart);

  const { isModalOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  if (products?.length < 1) {
    return (
      <div className="empty">
        <h1>Your cart is empty!</h1>
        <h3>Browse our products and discover our best deals</h3>
        <Link className="link link2" to="/products">
          START SHOPPING
        </Link>
      </div>
    );
  }
  return (
    <div className="cart-modal">
      <div className="title-container">
        <Link to={"/products"} className="link arrow-back">
          <FaArrowLeftLong className="arrow-back-icon" />
        </Link>
        <h1>Items in your cart</h1>
      </div>
      <h2 className="subtotal">
        Total Price: <span>{formatMoney(amount)}</span>
      </h2>
      <div className="cart-modal-container">
        {products?.map((item) => {
          const { id, img, title, price, quantity } = item;

          return (
            <div key={id} className="info-container">
              <div className="cart-img">
                <img src={img[0]} alt="benz car" />
              </div>
              <div className="info">
                <div className="cart-desc">
                  <h4>{title}</h4>
                  <div className="price-container">
                    <p>{formatMoney(price)}</p>

                    <p className="sub-price">{formatMoney(price * quantity)}</p>
                  </div>
                  <div className="quantity-container">
                    {" "}
                    <p>Quantity: {quantity}</p>
                    <i
                      className="ri-delete-bin-5-line delete-icon"
                      onClick={() => dispatch(removeItem(id))}
                    ></i>
                  </div>

                  <div className="amt-container">
                    <button
                      className="cart-btn cart-bg"
                      onClick={() => dispatch(decrease(item))}
                    >
                      <i className="ri-subtract-line"></i>
                    </button>

                    <span>{quantity}</span>
                    <button
                      className="cart-btn cart-bg"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <i className="ri-add-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="bottom-modal">
          <button className="checkout-btn cart-btn">CHECKOUT</button>
          <a href="tel:+2349153678691" className="call">
            <br />
            Call To Order: +2349153678691
          </a>

          <div className="clear-container">
            <button
              className="clear-cart cart-btn"
              onClick={() => dispatch(openModal())}
            >
              Clear cart
            </button>
            <Link className="link add-more" to="/products">
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

import "./Cart.css";

import benz1 from "../../assets/images/benz1w.jpg";
import benz2 from "../../assets/images/benz2b.jpg";
const Cart = () => {
  const cart = [
    {
      id: 1,
      img: benz1,
      title: "benz car",
      desc: "this is a white benz car",
      price: 345,
    },
  ];
  return (
    <div className="cart-modal">
      <h2>Products in your Cart</h2>
      <div className="cart-modal-container">
        {cart?.map((item) => {
          const { id, img, title, desc, price } = item;
          return (
            <div key={id} className="info-container">
              <div className="cart-img">
                <img src={img} alt="benz car" />
              </div>
              <div className="info">
                <h4>{title}</h4>
                <div className="sub-info">
                  <span>{desc}</span>
                  <i class="ri-delete-bin-5-line"></i>
                </div>

                <p>${price}</p>
              </div>
            </div>
          );
        })}

        <div className="bottom-modal">
          <div className="subtotal">
            <span>Subtotal</span>
            <span>$555</span>
          </div>
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          <br />
          <button className="clear-cart">Clear cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

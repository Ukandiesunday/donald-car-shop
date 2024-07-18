import "./Product.css";
import { useParams, Link } from "react-router-dom";
import { data } from "../../assets/data/data";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import RelatedCars from "../../components/RelatedCars/RelatedCars";
import Subscription from "../../components/Subscription";
import { addToCart, decrease } from "../../components/redux1/cartSlice";

const Product = () => {
  const [mainImg, setMainImg] = useState(0);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state?.cart);

  const searchItem = products.find((item) => item.id === id); // finding the items pushed in previously and retrieve single item.

  const singleItem = data.find((item) => item.id === id);
  console.log(singleItem);
  // Sending same single item to the cart state i.e payloadItems;
  const { title, img, desc, price, condition, make, color, autonomy, oil } =
    singleItem;

  const payloadItems = {
    title,
    img,
    price,
    condition,
    make,
    id,
    color,
    oil,
    autonomy,
    quantity: 1,
    total: 0,
  };

  const handleImgChange = (index) => {
    setMainImg(index);
  };

  return (
    <div>
      <div className="product">
        <div className="product-left">
          <h2 className="h2">
            proceed to buy your {condition} {make} car
          </h2>
          <div className="product-center">
            <div className="img">
              <img src={img[mainImg]} alt="" />
            </div>

            <div className="clickable-img-container">
              <div className="clickable-img ">
                <img src={img[0]} alt="" onClick={() => handleImgChange(0)} />
              </div>
              <div className="clickable-img">
                <img src={img[1]} alt="" onClick={() => handleImgChange(1)} />
              </div>
              <div className="clickable-img">
                <img src={img[2]} alt="" onClick={() => handleImgChange(2)} />
              </div>
            </div>
          </div>
        </div>
        <div className="product-right">
          <h3>{title}</h3>
          <span className="cart-price">${price}</span>

          <div className="amt-container">
            <button
              className="cart-btn"
              onClick={() => dispatch(decrease(payloadItems))}
            >
              <i className="ri-subtract-line"></i>
            </button>

            <span>
              {searchItem?.quantity === undefined ? 0 : searchItem?.quantity}
            </span>
            <button
              className="cart-btn"
              onClick={() => dispatch(addToCart(payloadItems))}
            >
              <i className="ri-add-fill"></i>
            </button>
          </div>

          <button
            className="add-to-cart"
            onClick={() => dispatch(addToCart(payloadItems))}
          >
            <i className="ri-shopping-cart-2-line"></i>
            ADD TO CART
          </button>
          <span className="call">Call: +2349153678691</span>
          <Link className="link link2" to="/products/">
            Continue Shopping
          </Link>
          <div className="desc-2">
            <h4>DESCRIPTION</h4>
            {desc}
          </div>
        </div>
      </div>
      <div>
        <RelatedCars make={make} data={data} />
      </div>

      <Subscription />
    </div>
  );
};

export default Product;

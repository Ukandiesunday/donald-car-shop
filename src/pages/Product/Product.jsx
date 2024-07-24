import "./Product.css";
import { useParams, Link } from "react-router-dom";
import { data } from "../../assets/data/data";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import RelatedCars from "../../components/RelatedCars/RelatedCars";
import Subscription from "../../components/Subscription";
import { addToCart, decrease } from "../../components/redux1/cartSlice";
import { formatMoney } from "../../components/utility/formatMoney";
import { FaArrowLeftLong, FaLocationDot } from "react-icons/fa6";

const Product = () => {
  const [mainImg, setMainImg] = useState(0);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state?.cart);

  const searchItem = products.find((item) => item.id === id); // finding the items pushed in previously and retrieve single item.

  const singleItem = data.find((item) => item.id === id);

  // Sending same single item to the cart state i.e payloadItems;
  const {
    title,
    img,
    desc,
    price,
    condition,
    make,
    color,
    autonomy,
    location,
  } = singleItem;

  const payloadItems = {
    title,
    img,
    price,
    condition,
    make,
    id,
    color,
    location,
    autonomy,
    quantity: 1,
    total: 0,
  };

  console.log(payloadItems);
  const handleImgChange = (index) => {
    setMainImg(index);
  };

  return (
    <div>
      <div className="product">
        <div className="product-left">
          <div className="title-container">
            <Link to={"/products"} className="link arrow-back">
              <FaArrowLeftLong className="arrow-back-icon" />
            </Link>
            <h2 className="h2">
              proceed to buy your {condition} {make} car
            </h2>
          </div>
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
          <div className="price-container">
            <span className="cart-price">{formatMoney(price)}</span>
            <span className="sub-price">
              {formatMoney(price * searchItem?.quantity)}
            </span>
          </div>
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
          <span className="location">
            <FaLocationDot /> {location}
          </span>
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

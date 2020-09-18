import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__price">
          <small> ₹ </small>
          <strong>{price}</strong>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i} role="img">
                  ⭐
                </span>
              ))}
          </div>
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

import React from "react";
import "./Product.css";

function Product({ title, rating, price, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img">
                ⭐
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button>Add to basket</button>
    </div>
  );
}

export default Product;

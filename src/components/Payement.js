import React from "react";
import "./payement.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payement() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(basket);

  return (
    <div className="payement">
      <div className="payement__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payement__section">
          <div className="payement__title">
            <h1>Delivery Address</h1>
          </div>
          <div className="payement__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Reactpur</p>
          </div>
        </div>

        <div className="payement__section">
          <div className="payement__title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payement__items">
            {basket.map((item, idx) => {
              return (
                <CheckoutProduct
                  id={item.id + idx}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>

        <div className="payement__section">
          <div className="payement__title">
            <h3>Payement Method</h3>
          </div>
          <div className="payement__details">{/* Stripe payements */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payement;

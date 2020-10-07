import React from "react";
import Star from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";
import "./checkoutItems.css";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const RemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  const quantityChanged = (value) => {
   
    dispatch({
      type: "QUANTITY_CHANGED",
        id:id,
        quantity:parseInt(value)
      });

  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <Star className="product__star" />
              </p>
            ))}
        </div>
        <input
          onChange={(event) => quantityChanged(event.target.value)}
          min="1"
          type="number"
          name=""
          id=""
          defaultValue="1"
        />
        <button onClick={RemoveFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

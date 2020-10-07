import React, { useState } from "react";
import "./Products.css";
import { useStateValue } from "../StateProvider";
import { btnDisable } from "../reducer";
function Products({ key, id, title, price, rating, image, quantity = 1 }) {
  const [{ basket }, dispatch] = useStateValue();

  const addTobasket = (e) => {
    // !  add item to BASKET

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
        quantity,
        instock:20
      },
    });

    
  };
  return (
    <div className="product" id={key}>
      <div className="product_item" id={id}>
        <div className="product_info">
          <p>{title}</p>
          <p className="product__price">
            $<strong>{price}</strong>
          </p>

          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐️</p>
              ))}
          </div>
        </div>
        <img src={image} />
        {basket.find((product) => product.id == id) ? (
          <button disabled={true} onClick={(e) => addTobasket(e)}>In Basket</button>
        ) : (
          <button onClick={(e) => addTobasket(e)}>add to basket</button>
        )}
      </div>
    </div>
  );
}

export default Products;

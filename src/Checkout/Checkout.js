import React from "react";
import { useStateValue } from "../StateProvider";
import  CheckoutProduct from '../checkoutItem/CheckoutItems'
import './Checkout.css'
import CheckoutProceed from './checkoutProceed'
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
<div className='checkout_left'>
      {basket.length == 0 ? (
        <div>
          <h2>your basket is empty</h2>
        </div>
      ) : (
        <div>
            <h3>your cart </h3>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      )}

  
    </div>

    <div className="">
            {basket.length>0?(
              
              <CheckoutProceed />
            ):null}
    </div>
    </div>
  );
}

export default Checkout;

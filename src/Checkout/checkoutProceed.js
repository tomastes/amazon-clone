import React from "react";
import {useHistory} from 'react-router-dom'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import { subTotal, totalItems } from "../reducer";
import { IconButton } from "@material-ui/core";
function CheckoutProceed() {
  const history =  useHistory()
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout_right">
      <p className="subTotal">
        subtotal( {totalItems(basket)} ):
        <strong>
          <CurrencyFormat
            value={subTotal(basket)}
            displayType={"text"}
            prefix="€"
            decimalScale="2"
          />
        </strong>
      </p>

      <button onClick={(e)=>history.push('/payment')} className="checkout_proceed">go to checkout</button>
    </div>
  );
}

export default CheckoutProceed;

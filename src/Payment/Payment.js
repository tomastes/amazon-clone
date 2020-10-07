import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Payment.css";
import Aux from "../hoc/Aux";
import CheckoutProduct from "../checkoutItem/CheckoutItems";
import { totalItems, subTotal } from "../reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../Firebase";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    //generting client secret
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${subTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  // console.log(clientSecret);
  // console.log(user);
  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        
        //!paymentIntent == payment confirmation
        console.log(paymentIntent);
        console.log(db);
        //?pushing to database

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.uid)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  return basket?.length ? (
    <Aux>
      <div className="payment">
        <div className="payment_Header">
          <h2>Checkout ( {totalItems(basket)} items )</h2>
        </div>
        <div className="delivery_adress">
          <h2>Delivery Adress</h2>
          <div className="adress">
            <span>sint Antoniousstraat 1</span>
            <span>6041 VN Swalmen</span>
          </div>
        </div>
        <div className="items">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

        {/* order total comp */}
        <div className="payment_section">
          <h2>payment method</h2>
          <div className="payment_details">
            <form onSubmit={handleSubmit} action="">
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  value={subTotal(basket)}
                  displayType={"text"}
                  prefix="€"
                  decimalScale="2"
                />
                <button disabled={processing || disabled || succeded}>
                  <span>{processing ? <p>Processing</p> : "buy now"}</span>
                </button>
              </div>
              {error && <div>error</div>}
            </form>
          </div>
        </div>
      </div>
    </Aux>
  ) : null;
}

export default Payment;

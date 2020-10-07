import React, { useEffect, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import Payment from "./Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HQxhfBBaXrOCD0NtIwoJhZYAUW3gXGVv8z1ootDAKplT74BkUYlBajARe5LsoZTD5qcWoN62U0BO42qysTLwgoJ00CUxmjH7o"
);
function App() {
  const [{ user }, dispatch] = useStateValue();

  const unsubscribe = useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //!use is logedin

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //!user logedout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

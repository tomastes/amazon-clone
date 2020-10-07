const functions = require("firebase-functions");
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51HQxhfBBaXrOCD0NgKYNizhuQMRXjczAxhBm95lNm5Qwug5JoTZVkPUAw7Eop1DXewnzob0OTl5bo0a4SUZ97Zmc00xtqt1CfM"
);
const cors = require("cors");
const { request } = require("express");
const bodyParser = require("body-parser");
//?API

//!app config
const app = express();

//!middlewares
app.use(cors({ origin: true }));
app.use(bodyParser.json());
//!api routes
app.get("/", (req, res) => {
  res.status(200).send("hello tomas");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
console.log(total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //oke good
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//!lsiten command
exports.api = functions.https.onRequest(app);

//!example eindpoint
// http://localhost:5001/clone-839b7/us-central1/api

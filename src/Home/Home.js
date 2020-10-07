import React from "react";
import img from "../img/2631 Tomas TB.jpg";
import Products from "../Products/Products";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB407694131_.jpg"
        alt=""
       
      />

      <div className="product_row">
        <Products   key={12321}  
          id={5}
          title="tomas tefamariam berhe teferi brhane guesh tesfankiel hgush "
          price={13.33}
          rating={5}
          image="https://m.media-amazon.com/images/I/61qCxGIUODL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Products   key={1232}  
          id={6}
          title="Wireless Charger Car Touch Sensing Automatic Retractable Clip Fast Charging Compatible for iPhone Xs Max/XR/X/8/8Plus,"
          price={13.33}
          rating={5}
          image="https://m.media-amazon.com/images/I/71yZLgIgOYL._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="product_row">
        <Products    key={123}
          id={1}
          title="Wireless Charger Car Touch Sensing Automatic Retractable Clip Fast Charging Compatible for iPhone Xs Max/XR/X/8/8Plus, "
          price={13.33}
          rating={5}
          image="https://m.media-amazon.com/images/I/61qCxGIUODL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Products   key={12}
          id={2}
          title="Wireless Charger Car Touch Sensing Automatic Retractable Clip Fast Charging Compatible for iPhone Xs Max/XR/X/8/8Plus,"
          price={13.33}
          rating={5}
          image="https://m.media-amazon.com/images/I/71yZLgIgOYL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Products  key={1}
          id={3}
          title="Wireless Charger Car Touch Sensing Automatic Retractable Clip Fast Charging Compatible for iPhone Xs Max/XR/X/8/8Plus, "
          price={13.33}
          rating={5}
          image="https://m.media-amazon.com/images/I/61qCxGIUODL._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="product_row">
        <Products key={13}
          id={4}
          title="Wireless Charger Car Touch Sensing Automatic Retractable Clip Fast Charging Compatible for iPhone Xs Max/XR/X/8/8Plus, "
          price={13.33}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOoib9kxlwlhVat9xi070JZry2TSrjHKsZwg&usqp=CAU"        />
      </div>
    </div>
  );
}

export default Home;

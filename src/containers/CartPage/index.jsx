import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";

import "./style.css";
import { MaterialButton } from "../../components/MaterialUI";

/*
Before Login
Add product to cart
save in localStorage
when try to checkout ask for credentials and 
if logged in then add products to users cart database from localStorage
*/

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <Card
          headerLeft={`My Cart`}
          headerRight={<div>Deliver to</div>}
          style={{ width: "calc(100% - 400px)", overflow: "hidden" }}
        >
          {Object.keys(cartItems).map((key, index) => (
            <div key={index} className="flexRow">
              <div className="cartProductContainer">
                <img src="" />
              </div>
              <div className="cartItemDetails">
                <div>{cartItems[key].name} - qty - {cartItems[key].qty}</div>
                <div>Delivery in 3 - 5 days</div>
              </div>
            </div>
          ))}
        </Card>
        <Card style={{ width: "500px" }}>Price</Card>
      </div>
    </Layout>
  );
};

export default CartPage;

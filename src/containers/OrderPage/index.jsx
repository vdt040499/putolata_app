import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import "./style.css";
import { Breed } from "../../components/MaterialUI";
import { generatePublicUrl } from "../../urlConfig";

const OrderPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log(user);

  return (
    <Layout>
      {/* <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
        <Breed
          breed={[
            { name: "Home", href: "/" },
            { name: "My Account", href: "/account" },
            { name: "My Orders", href: "/account/orders" },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        {user.orders.map((order) => {
          return order.items.map((item) => (
            <Card style={{ display: "block", margin: "5px 0" }}>
              <Link
                to={`/order_details/${order._id}`}
                className="orderItemContainer"
              >
                <div className="orderImgContainer">
                  <img
                    className="orderImg"
                    src={item.productId.productPictures[0].img}
                  />
                </div>
                <div className="orderRow">
                  <div className="orderName">{item.productId.name}</div>
                  <div className="orderPrice">
                    <BiRupee />
                    {item.payablePrice}
                  </div>
                  <div>{order.paymentStatus}</div>
                </div>
              </Link>
            </Card>
          ));
        })}
      </div> */}
      {user.orders.map((order) => {
        return order.items.map((item) => (
          <Card style={{ maxWidth: "1200px", margin: "5px auto" }}>
            <div className="orderItemContainer">
              <div
                style={{
                  width: 80,
                  height: 80,
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <img
                  style={{
                    maxWidth: 80,
                    maxHeight: 80,
                  }}
                  src={generatePublicUrl(item.productId.productPictures[0].img)}
                  alt=""
                />
              </div>
              <div
                style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
              >
                <div
                  style={{
                    width: 300,
                  }}
                >
                  {item.productId.name}
                </div>
                <div>{item.payablePrice}</div>
                <div>{order.paymentStatus}</div>
              </div>
            </div>
          </Card>
        ));
      })}
    </Layout>
  );
};

export default OrderPage;

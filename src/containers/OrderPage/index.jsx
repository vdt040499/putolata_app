import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import Layout from "../../components/Layout";
import { Breed } from "../../components/MaterialUI";
import Card from "../../components/UI/Card";
import "./style.css";


const OrderPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log(user);

  return (
    <Layout>
      <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
        <Breed
          breed={[
            { name: "Home", href: "/" },
            { name: "My Account", href: "/account" },
            { name: "My Orders", href: "/account/orders" },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        {user.orders.map((order) => {
          return (
            <Card style={{ display: "block", margin: "5px 0" }}>
              <Link
                to={`/order_details/${order._id}`}
                className="orderItemContainer"
              >
                <div className="orderImgContainer">
                  <img
                    className="orderImg"
                    // src={generatePublicUrl(
                    //   order.item[0].productId.productPictures[0].img
                    // )}
                    alt=""
                  />
                </div>
                <div className="orderRow">
                  <div className="orderName">{order._id}</div>
                  <div className="orderPrice">{order.totalAmount}</div>
                  <div>{order.paymentStatus}</div>
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    </Layout>
  );
};

export default OrderPage;

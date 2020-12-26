import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import starbling from "../../assets/img/Image 45.png";
import billgreen from "../../assets/img/Image 46.png";
import billred from "../../assets/img/Image 47.png";
import edit from "../../assets/img/Image 48.png";
import avatar from "../../assets/img/NoPath - Copy (5).png";
import Layout from "../../components/Layout";
import "./style.css";

function Account() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <Layout>
      <div className="account">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="account__container">
                <div className="account__content">
                  <div className="account__topper">
                    <p className="account__title">Hồ sơ cá nhân</p>
                  </div>
                  <div className="account__button">
                    <Link to="/editaccountinfo">
                      <img src={edit} className="account__editbutton" alt="" />
                    </Link>
                  </div>

                  <div className="account__contentcontain">
                    <Row>
                      <Col>
                        <div className="account__ava">
                          <img
                            src={avatar}
                            alt=""
                            className="account__avatar"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="account__titleinfo">
                          <img src={starbling} className="dotstart" alt="" />
                          <p className="account__infotitle">
                            Thông tin tài khoản
                          </p>
                        </div>
                        <p className="account__info">USERNAME:</p>
                        <p className="account__details">{auth.user.lastName + " " + auth.user.firstName}</p>
                        <p className="account__info">PASSWORD:</p>
                        <p className="account__details">*********</p>
                        <p className="account__info">EMAIL:</p>
                        <p className="account__details">
                          {auth.user.email}
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="account__container">
                <div className="account__content">
                  <div className="account__topper">
                    <p className="account__title">Quản lý đơn hàng</p>
                  </div>
                  <ul className="account__listbill">
                    {/* <li>
                      <span>
                        <img
                          src={billgreen}
                          alt=""
                          className="account__billstatus"
                        />
                      </span>
                      ĐƠN HÀNG MÃ WE001
                    </li> */}
                    {user.orders.map((order) => {
                      return (
                        <Link
                          to={`/order_details/${order._id}`}
                          className="orderItemContainer"
                        >
                          <li style={{ textDecoration: "none" }}>
                            <span>
                              <img
                                src={billred}
                                alt=""
                                className="account__billstatus"
                              />
                            </span>
                            {order._id}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default Account;

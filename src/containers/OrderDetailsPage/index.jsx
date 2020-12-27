import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../actions";
import Layout from "../../components/Layout";
import "./style.css";


const OrderDetailsPage = (props) => {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.user.orderDetails);

  useEffect(() => {
    console.log({ props });
    const payload = {
      orderId: props.match.params.orderId,
    };
    dispatch(getOrder(payload));
  }, []);

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };
  const formatDate3 = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getDate() + 3}-${d.getMonth() + 1}-${d.getFullYear()}`;
    }
    return "";
  };

  const formatDate2 = (date) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (date) {
      const d = new Date(date);
      return `${month[d.getDate()]} ${d.getMonth() + 1}, ${d.getFullYear()}`;
    }
  };

  if (!(orderDetails && orderDetails.address)) {
    return null;
  }

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <div className="checkout__container">
              <p className="checkout__title">Hóa đơn thanh toán</p>
              <p className="checkout__billcode">
                MÃ SỐ ĐƠN HÀNG {orderDetails._id}
              </p>
              <div className="checkout__contentcontain">
                <p className="checkout__subtitle">CHI TIẾT ĐƠN HÀNG :</p>
                <div className="checkout__items">
                  <Container>
                    {orderDetails.items.map((item, index) => (
                      <div className="checkout__detailitem">
                        <Row>
                          <Col className="chechout__addinfo" sm={8}>
                            {item.productId.name}
                          </Col>
                          <Col className="chechout__addinfo" sm={2}>
                            Số lượng : {item.purchasedQty}
                          </Col>
                          <Col className="chechout__addinfo" sm={2}>
                            {item.payablePrice} VNĐ
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Container>
                </div>

                <p className="checkout__subtitle">PHƯƠNG THỨC THANH TOÁN :</p>
                <div className="checkout__items">
                  <Container>
                    <p className="checkout__details">
                      Thanh toán khi nhận hàng.
                    </p>
                  </Container>
                </div>

                <p className="checkout__subtitle">THÔNG TIN GIAO HÀNG :</p>
                <div className="checkout__items">
                  <div className="checkout__detailitem">
                    <Container>
                      <Row>
                        <Col className="checkout__add" sm={2}>
                          Tên người nhận :{" "}
                        </Col>
                        <Col className="chechout__addinfo">
                          {orderDetails.address.name}
                        </Col>
                      </Row>

                      <Row>
                        <Col className="checkout__add" sm={2}>
                          Địa chỉ :{" "}
                        </Col>
                        <Col className="chechout__addinfo">
                          {orderDetails.address.locality +
                            ", " +
                            orderDetails.address.address +
                            ", " +
                            orderDetails.address.cityDistrictTown}
                        </Col>
                      </Row>

                      <Row>
                        <Col className="checkout__add" sm={2}>
                          SĐT :{" "}
                        </Col>
                        <Col className="chechout__addinfo">
                          {orderDetails.address.mobileNumber}
                        </Col>
                      </Row>

                      <p className="checkout__shippingfee">
                        Phí giao hàng: Miễn phí
                      </p>
                      <p className="checkout__totalbill">
                        Tổng cộng: {orderDetails.totalAmount}
                      </p>
                    </Container>
                  </div>
                </div>

                <Row>
                  <Col>
                    <p className="checkout__subtitle">
                      THỜI GIAN GIAO HÀNG DỰ KIẾN :
                    </p>
                    <div className="checkout__items">
                      <Container>
                        <p className="checkout__details">
                          {formatDate3(orderDetails.createdAt)}
                        </p>
                      </Container>
                    </div>
                  </Col>
                  <Col>
                    <p className="checkout__subtitle">TÌNH TRẠNG VẬN ĐƠN :</p>
                    <div style={{ padding: "25px 50px" }}>
                      <div className="orderTrack">
                        {orderDetails.orderStatus.map((status) => (
                          <div
                            className={`orderStatus ${
                              status.isCompleted ? "active" : ""
                            }`}
                          >
                            <div
                              className={`point ${
                                status.isCompleted ? "active" : ""
                              }`}
                            ></div>
                            <div className="orderInfo">
                              <div className="status">{status.type}</div>
                              <div className="date">
                                {formatDate(status.date)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default OrderDetailsPage;

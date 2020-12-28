import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import cusser from "../../assets/img/cusser.png";
import deli from "../../assets/img/deli.png";
import logo from "../../assets/img/logo.png";
import puppy from "../../assets/img/NoPath - Copy (5).png";
import hinh1 from "../../assets/img/NoPath.png";
import payment from "../../assets/img/payment.png";
import product from "../../assets/img/product.png";
import Layout from "../../components/Layout";
import RuleItem from "../../components/RuleItem";
import "./style.css";

function AboutUs() {
  return (
    <Layout>
      <div className="aboutus">
        <Container>
          <p className="aboutus__title">PUTOLATA</p>
          <Row>
            <Col md="auto">
              <div className="aboutus__containerpic">
                <img src={logo} alt="" className="aboutus__img" />
              </div>
            </Col>
            <Col>
              <p className="aboutus__subtitle">PUTOLATA LÀ AI?</p>
              <p className="aboutus__des">
                Putolata là một website bán hàng, chuyên cung cấp những món ăn
                vặt hấp dẫn nhất trên thị trường với chất lượng tốt nhất và an
                toàn nhất.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <p className="aboutus__subtitle">CAM KẾT</p>
              <p className="aboutus__des">
                Hiểu rõ đối tượng khách hạng của mình rất phong phú và đa dạng,
                chúng tôi hiểu rõ sứ mệnh và trách nhiệm của bản thân khi lập ra
                cửa hàng này. Chúng tôi cam kết với các bạn và chính bản thân
                mình về chất lượng của từng sản phẩm.
              </p>
            </Col>

            <Col md={4}>
              <div className="aboutus__containerpic">
                <img src={puppy} alt="" className="aboutus__img" />
              </div>
            </Col>

            <Col md={4}>
              <p className="aboutus__subtitle">CAM KẾT</p>
              <p className="aboutus__des">
                Chất lượng sản phẩm là một phần quan trọng trong mục tiêu tạo
                dựng chỗ đứng của thương hiệu Putolata trên thị trường. Đó cũng
                là mục tiêu mà Putolata hướng đến
              </p>
            </Col>
          </Row>

          <div className="home__category">
            <p className="aboutus__subtitle">CHÍNH SÁCH</p>
            <div className="home__catecontainer">
              <Container>
                <Row>
                  <Col md={6}>
                    <div className="home__rulecontainer">
                      <RuleItem
                        name="Giao hàng miễn phí"
                        img={deli}
                        des="Cho đơn hàng trên 1.000.000 VNĐ"
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="home__rulecontainer">
                      <RuleItem
                        name="Thanh toán"
                        img={payment}
                        des="Nhiều hình thức thanh toán tùy thuộc vào lựa chọn của bạn"
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <img src={hinh1} alt="" className="home__ruleimg" />
                </Row>

                <Row>
                  <Col md={6}>
                    <div className="home__rulecontainer">
                      <RuleItem
                        name="Chăm sóc khách hàng"
                        img={cusser}
                        des="Liên hệ và chúng tôi sẽ giải đáp cho bạn trong vòng 24 giờ làm việc."
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="home__rulecontainer">
                      <RuleItem
                        name="Chất lượng"
                        img={product}
                        des="Chúng tôi tự tin bảo đảm chất lượng hàng hóa của mình."
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default AboutUs;

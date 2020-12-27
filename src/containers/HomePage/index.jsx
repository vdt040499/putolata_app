import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getAllProducts } from "../../actions";
import cusser from "../../assets/img/cusser.png";
import deli from "../../assets/img/deli.png";
import banner from "../../assets/img/home-img.png";
import bling from "../../assets/img/Image -1.png";
import bling2 from "../../assets/img/Image 17.png";
import heart from "../../assets/img/Image 30.png";
import metal from "../../assets/img/Image 32.png";
import cake from "../../assets/img/Image 33.png";
import news from "../../assets/img/new.png";
import hinh1 from "../../assets/img/NoPath.png";
import payment from "../../assets/img/payment.png";
import productImage from "../../assets/img/product.png";
import slogan from "../../assets/img/slogan.png";
import superstar from "../../assets/img/superstar.png";
import topper from "../../assets/img/topper.png";
import welcome from "../../assets/img/welcome.png";
import why from "../../assets/img/why.png";
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import RuleItem from "../../components/RuleItem";
import SpecialProduct from "../../components/SpecialProduct";
import axiosIntance from "../../helpers/axios";
import { generatePublicUrl } from "../../urlConfig";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const newProduct = product.allProducts.sort((a, b) => {
    return Date(a.createdAt) - Date(b.createdAt);
  });
  const bestSeller = product.allProducts.sort((a, b) => {
    return b.sold - a.sold;
  });

  return (
    <Layout>
      <div className="content">
        <Container>
          <Row className="home__banner">
            <Col md>
              <img src={slogan} className="home__slogan" alt="" />
              <div className="home__button">
                <Link to="/aboutus">
                  <button className="home__type1">TÌM HIỂU</button>
                </Link>
                <Link to="/sales">
                  <button className="home__type2">SẢN PHẨM</button>
                </Link>
              </div>
            </Col>

            <Col md>
              <div className="home__sidebanner">
                <img src={banner} alt="" />
              </div>
            </Col>
          </Row>
        </Container>

        <div className="home__intent">
          <img src={welcome} className="intent" alt="" />
          <p className="home__descript">Để chúng mình tự giới thiệu sơ nhé!</p>
          <Container>
            <Row>
              <Col className="h-100">
                <div className="home__intentcontain">
                  <img src={topper} className="home__topperImg" alt="" />
                  <div className="home__intentcontent">
                    <img src={cake} alt="" className="home__topperIcon" />
                    <p className="home__topperDes">
                      Chuyên về tất cả các mặt hàng ăn vặt.
                    </p>
                  </div>
                </div>
              </Col>

              <Col className="h-100">
                <div className="home__intentcontain">
                  <img src={topper} className="home__topperImg" alt="" />
                  <div className="home__intentcontent">
                    <img src={heart} alt="" className="home__topperIcon" />
                    <p className="home__topperDes">
                      Phù hợp với tất cả mọi lứa tuổi.
                    </p>
                  </div>
                </div>
              </Col>

              <Col className="h-100">
                <div className="home__intentcontain">
                  <img src={topper} className="home__topperImg" alt="" />
                  <div className="home__intentcontent">
                    <img src={metal} alt="" className="home__topperIcon" />
                    <p className="home__topperDes">
                      Bảo đảm nguồn hàng chất lượng.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="home__newcontain">
          <img src={bling2} alt="" className="sparkle" />
          <img src={news} alt="" className="home__title" />
          <img src={bling} alt="" className="sparkle" />
          <p className="home__descript">
            Hương vị mới, bắt mắt hơn, thơm ngon hơn? Ngại gì mà không thử!
          </p>
          <Container>
            <Row>
              {newProduct.map((product) => (
                <Col lg={3} md={6}>
                  <Link
                    to={`/${product.slug}/${product._id}/p`}
                    style={{ textDecoration: "none" }}
                  >
                    <Product
                      title={product.name}
                      price={product.price}
                      image={product.productPictures[0].img}
                      rating={5}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div className="home__star">
          <img src={superstar} alt="" className="home__title" />
          <p className="home__descript">Món gì ngon là chúng mình có hết!</p>
          <div className="home__starcontent">
            <Container>
              <Row>
                {bestSeller.slice(0, 3).map((product, index) => {
                  if (index === 1) {
                    return (
                      <Col lg={6} md={4}>
                        <Link
                          to={`/${product.slug}/${product._id}/p`}
                          style={{ textDecoration: "none" }}
                        >
                          <SpecialProduct
                            title={product.name}
                            price={product.price}
                            image={product.productPictures[0].img}
                            rating={5}
                          />
                        </Link>
                      </Col>
                    );
                  } else {
                    return (
                      <Col lg={3} md={4}>
                        <Link
                          to={`/${product.slug}/${product._id}/p`}
                          style={{ textDecoration: "none" }}
                        >
                          <Product
                            title={product.name}
                            price={product.price}
                            image={product.productPictures[0].img}
                            rating={5}
                          />
                        </Link>
                      </Col>
                    );
                  }
                })}
              </Row>
            </Container>
          </div>
        </div>

        <div className="home__category">
          <img src={why} className="intent" alt="" />
          <p className="home__descript">
            Tại vì chúng mình là đỉnh nhấttttttt!
          </p>
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
                      img={productImage}
                      des="Chúng tôi tự tin bảo đảm chất lượng hàng hóa của mình."
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

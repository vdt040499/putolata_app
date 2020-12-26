import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import banner from "../../assets/img/salesbanner.png";
import sale from "../../assets/img/sale.png";
import gif2 from "../../assets/img/gif2.gif";
import gif3 from "../../assets/img/gif3.gif";

import Product from "../../components/Product";
import "./style.css";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { generatePublicUrl } from "../../urlConfig";
function Sales() {
  const product = useSelector((state) => state.product);

  const bestSeller = product.allProducts.sort((a, b) => {
    return b.sold - a.sold;
  });

  return (
    <Layout>
      <div className="salescontainer">
        <Container>
          <Row>
            <Col md={6}>
              <img src={gif3} alt="" className="sales__bannergroup" />
            </Col>
            <Col md={6}>
              <img src={gif2} alt="" className="sales__bannergroup" />
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <img src={banner} alt="" className="sales__banner" />
          </Row>

          <Row>
            <Col>
              <img src={sale} alt="" className="sales__sale" />
            </Col>
          </Row>

          <Row>
            {bestSeller.map((product) => (
              <Col lg={3} md={6}>
                <Product
                  title={product.name}
                  price={product.price}
                  image={generatePublicUrl(product.productPictures[0].img)}
                  rating={5}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default Sales;

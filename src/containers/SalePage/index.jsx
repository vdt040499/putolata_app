import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import gif2 from "../../assets/img/gif2.gif";
import gif3 from "../../assets/img/gif3.gif";
import sale from "../../assets/img/sale.png";
import banner from "../../assets/img/salesbanner.png";
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import "./style.css";

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
            {bestSeller.map((product) => {
              if (product.discount) {
                return (
                  <Col lg={3} md={6}>
                    <Link
                      to={`/${product.slug}/${product._id}/p`}
                      style={{ textDecoration: "none" }}
                    >
                      <Product
                        title={product.name}
                        price={product.price}
                        image={product.productPictures[0].img}
                        discount={product.discount}
                      />
                    </Link>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default Sales;

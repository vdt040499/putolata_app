import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsBySlug } from "../../actions";
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import Slider from "../../components/Slider";
import "./style.css";

const ProductsPage = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <Layout sidebar>
      <Slider />
      <Container>
        <Row>
          {product.products.map((product) => (
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
    </Layout>
  );
};

export default ProductsPage;

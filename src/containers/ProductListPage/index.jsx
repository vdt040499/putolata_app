import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsBySlug } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { generatePublicUrl } from "../../urlConfig";
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
      <div style={{ padding: "10px" }}>
        <Card
          style={{
            boxSizing: "border-box",
            padding: "10px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {product.products.map((product) => (
            <div className="caContainer">
              <Link
                className="caImgContainer"
                to={`/${product.slug}/${product._id}/p`}
              >
                <img src={generatePublicUrl(product.productPictures[0].img)} />
              </Link>
              <div>
                <div className="caProductName">{product.name}</div>
                <div className="caProductPrice">{product.price}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </Layout>
  );
};

export default ProductsPage;

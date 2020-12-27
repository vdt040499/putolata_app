import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SlideShow from "react-image-show";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  addToCart,
  getProductDetailsById,
  getProductsById,
} from "../../actions";
import smallicon from "../../assets/img/Image 39.png";
import Layout from "../../components/Layout";
import MultiItems from "../../components/MultiItems";
import "./style.css";

const ProductDetailsPage = (props) => {
  // Handle slide
  const [qty, setQty] = useState("");
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const {
    name,
    discount,
    sale,
    description,
    price,
    quantity,
    category,
    detailDescription,
  } = product.productDetails;

  useEffect(() => {
    const { productId } = props.match.params;

    dispatch(getProductsById(category));
    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));
  }, []);

  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }

  //Map to slides
  const slidesData = product.productDetails.productPictures.map((slide) => {
    return slide.img;
  });

  //Handle quantity
  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const saleProducts = product.productsById.sort((a, b) => b.sold - a.sold);

  return (
    <Layout>
      <div className="productdetails">
        <Container>
          <Row>
            <Col md={6}>
              <SlideShow
                images={slidesData}
                width="100%"
                imagesWidth="100%"
                imagesHeight="400px"
                imagesHeightMobile="56vw"
                thumbnailsWidth="100%"
                thumbnailsHeight="200px"
                indicators
                thumbnails
                fixedImagesHeight
              />
            </Col>

            <Col md={6}>
              <div className="productdetails__details">
                <p className="productdetails__title">{name}</p>
                <p className="productdetails__srtdes">{description}</p>

                <div className="productdetails__price">
                  {sale !== 0 ? (
                    <>
                      <p className="productdetails__actprice">
                        {price - (sale * price) / 100} VNĐ
                      </p>
                      <strike>
                        <p className="productdetails__fakeprice">{price} VNĐ</p>
                      </strike>
                    </>
                  ) : (
                    <>
                      <p className="productdetails__actprice">{price}</p>
                    </>
                  )}
                </div>

                <div className="productdetails__status">
                  <p className="productdetails__sttitle">TÌNH TRẠNG: </p>
                  <p className="productdetails__sta">
                    {quantity > 0 ? "CÒN HÀNG" : "HẾT HÀNG"}
                  </p>
                </div>

                <div className="productdetails__button">
                  <button
                    className="productdetails__addbutton"
                    onClick={() => {
                      const { _id, name, price } = product.productDetails;
                      const img = product.productDetails.productPictures[0].img;
                      dispatch(addToCart({ _id, name, price, img }));
                    }}
                  >
                    THÊM VÀO GIỎ
                  </button>
                  <button
                    className="productdetails__buynow"
                    onClick={() => {
                      const { _id, name, price } = product.productDetails;
                      const img = product.productDetails.productPictures[0].img;
                      dispatch(addToCart({ _id, name, price, img }));
                      props.history.push(`/cart`);
                    }}
                  >
                    MUA NGAY
                  </button>
                </div>
                <ul>
                  <li className="productdetails__srtdes">
                    * Bảo bảo vệ sinh an toàn thực phẩm.
                  </li>
                  <li className="productdetails__srtdes">
                    * Bảo đảm nguồn hàng chính hãng.
                  </li>
                  <li className="productdetails__srtdes">
                    * Tư vấn, chăm sóc khách hàng 24/24.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <div>
            <p className="productdetails__titlecate">
              <span>
                <img
                  className="productdetails__catetitle"
                  src={smallicon}
                  alt=""
                />
              </span>
              SẢN PHẨM CÙNG DANH MỤC
            </p>
          </div>
          <MultiItems products={product.productsById} />
          <div className="productdetails__seemore"></div>

          <div>
            <p className="productdetails__titlecate">
              <span>
                <img
                  src={smallicon}
                  className="productdetails__catetitle"
                  alt=""
                />
              </span>
              MIÊU TẢ SẢN PHẨM
            </p>
            <p>{detailDescription}</p>
          </div>

          <p className="productdetails__titlecate">
            <span>
              <img
                className="productdetails__catetitle"
                src={smallicon}
                alt=""
              />
            </span>
            SẢN PHẨM KHUYẾN MÃI
          </p>

          <MultiItems products={saleProducts} />
          <div className="productdetails__seemore">
            <a
              href="/sales"
              className="seemorebutton"
              style={{ textDecoration: "none" }}
            >
              XEM THÊM
            </a>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;

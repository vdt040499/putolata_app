import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { addToCart, getProductDetailsById } from "../../actions";
import commenticon from "../../assets/img/Image 38.png";
import smallicon from "../../assets/img/Image 39.png";
import comtava from "../../assets/img/Image 40.png";
import Layout from "../../components/Layout";
import MultiItems from "../../components/MultiItems";
import "./style.css";

const ProductDetailsPage = (props) => {
  // Handle slide
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [qty, setQty] = useState("");
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product.productDetails);
  const {
    name,
    discount,
    salePrice,
    description,
    price,
    quantity,
  } = product.productDetails;

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  useEffect(() => {
    const { productId } = props.match.params;
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

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  //Map to slides
  const slidesData = product.productDetails.productPictures.map((slide) => {
    return {
      id: slide._id,
      originalImg: slide.img,
      img: `${slide.img}-${slide._id}`,
    };
  });
  console.log(slidesData);

  //Handle quantity
  const handleChange = (event) => {
    setQty(event.target.value);
  };

  return (
    <Layout>
      {/* <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="verticalImageStack">
            {product.productDetails.productPictures.map((thumb, index) => (
              <div className="thumbnail active">
                <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
              </div>
            ))}
          </div>
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img
                src={generatePublicUrl(
                  product.productDetails.productPictures[0].img
                )}
                alt={`${product.productDetails.productPictures[0].img}`}
              />
            </div>

            <div className="flexRow">
              <MaterialButton
                title="ADD TO CART"
                bgColor="#ff9f00"
                textColor="#ffffff"
                style={{
                  marginRight: "5px",
                }}
                icon={<IoMdCart />}
                onClick={() => {
                  const { _id, name, price } = product.productDetails;
                  const img = product.productDetails.productPictures[0].img;
                  dispatch(addToCart({ _id, name, price, img }));
                  props.history.push(`/cart`);
                }}
              />
              <MaterialButton
                title="BUY NOW"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{
                  marginLeft: "5px",
                }}
                icon={<AiFillThunderbolt />}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="breed">
            <ul>
              <li>
                <a href="#">Home</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Mobiles</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Samsung</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">{product.productDetails.name}</a>
              </li>
            </ul>
          </div>
 
          <div className="productDetails">
            <p className="productTitle">{product.productDetails.name}</p>
            <div>
              <span className="ratingCount">
                4.3 <IoIosStar />
              </span>
              <span className="ratingNumbersReviews">
                72,234 Ratings & 8,140 Reviews
              </span>
            </div>
            <div className="extraOffer">
              Extra <BiRupee />
              4500 off{" "}
            </div>
            <div className="flexRow priceContainer">
              <span className="price">
                <BiRupee />
                {product.productDetails.price}
              </span>
              <span className="discount" style={{ margin: "0 10px" }}>
                22% off
              </span>
            
            </div>
            <div>
              <p
                style={{
                  color: "#212121",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Available Offers
              </p>
              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  Description
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                  }}
                >
                  {product.productDetails.description}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="productdetails">
        <Container>
          <Row>
            <Col md={6}>
              <div className="slider-wrapper">
                <Slider
                  {...settingsMain}
                  asNavFor={nav2}
                  ref={(slider) => setSlider1(slider)}
                >
                  {slidesData.map((slide) => (
                    <div className="slick-slide" key={slide.id}>
                      <img
                        className="slick-slide-image"
                        src={slide.img}
                        alt=""
                      />
                    </div>
                  ))}
                </Slider>
                <div className="thumbnail-slider-wrap">
                  <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={(slider) => setSlider2(slider)}
                  >
                    {slidesData.map((slide) => (
                      <div className="slick-slide" key={slide.id}>
                        <img
                          className="slick-slide-image"
                          src={slide.img}
                          alt=""
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="productdetails__details">
                <p className="productdetails__title">{name}</p>
                <p className="productdetails__srtdes">{description}</p>
                <div className="productdetails__rating">
                  <div className="productdetails__starrate">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>

                  {/* <p className="productdetails__rate">75 đánh giá</p>
                  <p className="productdetails__rate">25 bình luận</p> */}
                </div>

                <div className="productdetails__price">
                  <p className="productdetails__actprice">{salePrice} VNĐ</p>
                  <strike>
                    <p className="productdetails__fakeprice">{price} VNĐ</p>
                  </strike>
                </div>

                <div className="productdetails__status">
                  <p className="productdetails__sttitle">TÌNH TRẠNG: </p>
                  <p className="productdetails__sta">
                    {quantity > 0 ? "CÒN HÀNG" : "HẾT HÀNG"}
                  </p>
                </div>
                {/* <div className="productdetails__qty">
                  <p className="productdetails__sttitle">SỐ LƯỢNG: </p>
                  <FormControl>
                    <Select value={qty} onChange={handleChange}>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                    </Select>
                  </FormControl>
                </div> */}

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
                  <button className="productdetails__buynow" onClick={() => {
                      const { _id, name, price } = product.productDetails;
                      const img = product.productDetails.productPictures[0].img;
                      dispatch(addToCart({ _id, name, price, img }));
                      props.history.push(`/cart`);
                    }}>MUA NGAY</button>
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
          <MultiItems />
          <div className="productdetails__seemore">
            <button className="seemorebutton">XEM THÊM</button>
          </div>

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
            <p>Miêu tả sản phẩm ở đây.</p>
          </div>

          <p className="productdetails__titlecate">
            <span>
              <img
                className="productdetails__catetitle"
                src={smallicon}
                alt=""
              />
            </span>
            SẢN PHẨM BÁN CHẠY
          </p>

          <MultiItems />
          <div className="productdetails__seemore">
            <button className="seemorebutton">XEM THÊM</button>
          </div>

          {/* <p className="productdetails__titlecate">
            <span>
              <img
                className="productdetails__catetitle"
                src={smallicon}
                alt=""
              />
            </span>
            ĐÁNH GIÁ VÀ BÌNH LUẬN SẢN PHẨM
          </p>
          <Row>
            <Col sm="auto">
              <img
                src={commenticon}
                alt=""
                className="productdetails__commentimg"
              />
              <div className="productdetails__cmtrate">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </Col>
            <Col sm>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
              <div className="productdetails__seemore">
                <button className="productdetails__commentbutton">
                  BÌNH LUẬN
                </button>
              </div>
            </Col>
          </Row>
          <p className="productdetails__titlecate">
            <span>
              <img
                className="productdetails__catetitle"
                src={smallicon}
                alt=""
              />
            </span>
            NHẬN XÉT CỦA KHÁCH HÀNG
          </p>
          <Row>
            <Col sm="auto">
              <img src={comtava} alt="" className="productdetails__comtimg" />
            </Col>

            <Col sm>
              <div className="productdetails__name">
                <p className="productdetails__comtname">JennyLin</p>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <p className="productdetails__actcomt">
                Bình luận người dung ở đây!
                <span> - 20/10/2020 0h30p - Đã mua hàng</span>
              </p>
            </Col>
          </Row> */}
        </Container>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;

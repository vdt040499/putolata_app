import Badge from "@material-ui/core/Badge";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions";
import account from "../../assets/img/Account.png";
import banner1 from "../../assets/img/banner2.png";
import cart from "../../assets/img/Cart.png";
import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import welcome from "../../assets/img/welcome.png";
import { Modal, MaterialInput } from "../MaterialUI";
import "./style.css";

function Header(props) {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch()

  const userLogin = () => {
    dispatch(login({ email, password }));
  }

  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__left">
          {/* Logo */}
          <Link to="/" className="link">
            <img src={logo} alt="" className="header__logo" />
          </Link>

          {/* Links */}
          <li>
            <Link to="/" className="link">
              Trang chủ
            </Link>
          </li>

          <li className="header__dropdown">
            <Link to="/" className="link">
              Sản phẩm
            </Link>
            <div className="dropdowncontent">
              <div className="header__submenu">
                <div className="header__column">
                  <Link to="/" className="link" className="header__subtitle">
                    ĐỒ ĂN
                  </Link>
                  <img
                    src="https://image.freepik.com/free-photo/eastern-sweets-turkish-delight-lokum-with-nuts-top-view_114579-8401.jpg"
                    alt=""
                    className="header__columnImage"
                  />
                </div>

                <div className="header__column">
                  <div className="header__subcolumn">
                    <Link to="/" className="link">
                      <i class="fas fa-atom"></i>Mứt
                    </Link>
                    <Link to="/" className="link">
                      Trái cây sấy
                    </Link>
                    <Link to="/" className="link">
                      Khô
                    </Link>
                    <Link to="/" className="link">
                      Kẹo
                    </Link>
                    <Link to="/" className="link">
                      Snack
                    </Link>
                    <Link to="/" className="link">
                      Bánh ngọt
                    </Link>
                    <Link to="/" className="link">
                      Ngũ cốc
                    </Link>
                    <Link to="/" className="link">
                      Hạt khô
                    </Link>
                  </div>
                </div>

                {/* Categories */}
                <div className="header__column">
                  <Link className="link" className="header__subtitle" to="/">
                    ĐỒ UỐNG
                  </Link>
                  <img
                    src="https://image.freepik.com/free-psd/mockup-liquid-bottle-labels_53876-65817.jpg"
                    alt=""
                    className="header__columnImage"
                  />
                </div>

                <div className="header__column">
                  <div className="header__subcolumn">
                    <Link className="link" to="/">
                      Nước khoáng
                    </Link>
                    <Link className="link" to="/">
                      Sữa
                    </Link>
                    <Link className="link" to="/">
                      Tăng lực
                    </Link>
                    <Link className="link" to="/">
                      Dưỡng chất
                    </Link>
                    <Link className="link" to="/">
                      Nước ngọt
                    </Link>
                    <Link className="link" to="/">
                      Trà
                    </Link>
                    <Link className="link" to="/">
                      Trà sữa
                    </Link>
                    <Link className="link" to="/">
                      Nước có ga{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Links */}
          <li>
            <Link className="link" to="/sales">
              Khuyến mãi
            </Link>
          </li>

          <li>
            <Link className="link" to="/aboutus">
              Về chúng tôi
            </Link>
          </li>
        </ul>

        <ul className="header__right">
          {/* Search */}
          <li className="header__search">
            <input type="text" />
            <button>
              <img src={search} className="search" alt="" />
            </button>
          </li>

          {/* Cart */}
          <li>
            <Badge badgeContent={4} color="secondary">
              <Link className="link" to="/cart">
                <img src={cart} className="header__icon" alt="" />
              </Link>
            </Badge>
          </li>

          {/* Account */}
          <li className="header__account">
            <Link className="link" to="/account">
              <img src={account} alt="" className="header__icon" />
            </Link>
            <div className="header__signpane">
              <div className="header__log">
                <Link className="link" to="/register">
                  <button className="btn-hover color-4">Đăng ký</button>
                </Link>
                <a className="link" onClick={() => setLoginModal(true)}>
                  <button className="btn-hover color-4">Đăng nhập</button>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="login">
          <div className="login__container">
            <Container>
              <Row className="login__content">
                <Col md={6}>
                  <div className="login__leftcontent">
                    <img src={welcome} alt="" className="login__welcome" />
                    <img src={logo} alt="" className="login__logo" />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="login__info">
                    <p className="login__title">ĐĂNG NHẬP</p>
                    <MaterialInput
                      type="text"
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <MaterialInput
                      type="password"
                      label="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      // rightElement={<a href="#">Forgot?</a>}
                    />
                    <div className="login__textcontent">
                      <a href="/forgetpassword" className="login__text">
                        Quên mật khẩu?
                      </a>
                    </div>
                    <button className="login__button color-5" onClick={userLogin}>ĐĂNG NHẬP</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Header;

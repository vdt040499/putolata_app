import React, { useState, useEffect } from "react";
import Badge from "@material-ui/core/Badge";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, signout, signup as _signup } from "../../actions";
import account from "../../assets/img/Account.png";
import cart from "../../assets/img/Cart.png";
import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import welcome from "../../assets/img/welcome.png";
import { MaterialInput, Modal } from "../MaterialUI";
import "./style.css";
import MenuHeader from "../MenuHeader";

function Header(props) {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const cartStatus = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <div className="header__signpane">
        <div className="header__log">
          <a className="link">
            <button className="btn-hover color-4">{auth.user.fullName}</button>
          </a>
          <Link className="link" to="/account/orders">
            <button className="btn-hover color-4">Đơn hàng</button>
          </Link>
          <a className="link">
            <button className="btn-hover color-4" onClick={logout}>
              Đăng xuất
            </button>
          </a>
        </div>
      </div>
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <div className="header__signpane">
        <div className="header__log">
          <a
            className="link"
            onClick={() => {
              setLoginModal(true);
              setSignup(true);
            }}
          >
            <button className="btn-hover color-4">Đăng ký</button>
          </a>
          <a
            className="link"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
          >
            <button className="btn-hover color-4">Đăng nhập</button>
          </a>
        </div>
      </div>
    );
  };

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
            <MenuHeader />
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
            <Badge
              badgeContent={Object.keys(cartStatus.cartItems).length}
              color="secondary"
            >
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
            {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
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
                    <p className="login__title">
                      {signup ? "ĐĂNG KÍ" : "ĐĂNG NHẬP"}
                    </p>
                    {signup && (
                      <MaterialInput
                        type="text"
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    )}
                    {signup && (
                      <MaterialInput
                        type="text"
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    )}
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
                    {signup ? null : (
                      <div className="login__textcontent">
                        <a href="/forgetpassword" className="login__text">
                          Quên mật khẩu?
                        </a>
                      </div>
                    )}
                    <button
                      className="login__button color-5"
                      onClick={userLogin}
                    >
                      {signup ? "ĐĂNG KÍ" : "ĐĂNG NHẬP"}
                    </button>
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

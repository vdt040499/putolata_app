import Badge from "@material-ui/core/Badge";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import {
  forgetPassword,
  login,
  resetError,
  resetPassword,
  resetTokenSuccess,
  signout,
  signup as _signup,
} from "../../actions";
import account from "../../assets/img/Account.png";
import cart from "../../assets/img/Cart.png";
import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import welcome from "../../assets/img/welcome.png";
import icon from "../../assets/img/Image 49.png";
import resetIcon from "../../assets/img/Image 50.png";
import { MaterialInput, Modal } from "../MaterialUI";
import MenuHeader from "../MenuHeader";
import "./style.css";

function Header(props) {
  const [loginModal, setLoginModal] = useState(false);
  const [forgetModal, setForgetModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [reset, setReset] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailForgot, setEmailForgot] = useState("");
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [retypePass, setRetypePass] = useState("");
  const [verifiedCode, setVerifiedCode] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const cartStatus = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.error !== null) {
      enqueueSnackbar(auth.error, { variant: "error" });
      dispatch(resetError());
    }
  }, [auth.error]);

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

  const openForgetModal = () => {
    setLoginModal(false);
    setForgetModal(true);
  };

  const requestForgotPass = (e) => {
    if (reset) {
      if (newPass !== retypePass) {
        enqueueSnackbar("Mật khẩu không khớp", { variant: "error" });
      }

      const payload = { password: newPass, passwordResetToken: verifiedCode };
      dispatch(resetPassword(payload));
      console.log(auth.user.tokenSuccess);
      if (auth.tokenSuccess) {
        enqueueSnackbar("Thay đổi password thành công", { variant: "success" });
      }
      setNewPass("");
      setRetypePass("");
      setVerifiedCode("");
      dispatch(resetTokenSuccess());
      setReset(false);
      setForgetModal(false);
    } else {
      dispatch(forgetPassword({ email: emailForgot }));
      setEmailForgot("");
      setForgetModal(true);
      setReset(true);
    }
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
          <Link to="/account" className="link">
            <button className="btn-hover color-4">{auth.user.fullName}</button>
          </Link>
          <Link className="link" to="/account/orders">
            <button className="btn-hover color-4">Đơn hàng</button>
          </Link>
          <button className="link">
            <button className="btn-hover color-4" onClick={logout}>
              Đăng xuất
            </button>
          </button>
        </div>
      </div>
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <div className="header__signpane">
        <div className="header__log">
          <button
            className="link"
            onClick={() => {
              setLoginModal(true);
              setSignup(true);
            }}
          >
            <button className="btn-hover color-4">Đăng ký</button>
          </button>
          <button
            className="link"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
          >
            <button className="btn-hover color-4">Đăng nhập</button>
          </button>
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
          <Link to="/products" className='link' >Sản phẩm</Link>
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
            <button className="link">
              <img src={account} alt="" className="header__icon" />
            </button>
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
                        <button
                          onClick={openForgetModal}
                          className="login__text"
                        >
                          Quên mật khẩu?
                        </button>
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
      <Modal visible={forgetModal} onClose={() => setForgetModal(false)}>
        <div className="forgetpassword">
          <Container>
            <Row className="justify-content-md-center">
              <Col md={12}>
                <div className="forgetpassword__container">
                  {reset ? (
                    <div className="forgetpassword__top">
                      <img src={resetIcon} alt="" className="password__logo" />
                      <p className="forgetpassword__title">Đặt lại mật khẩu</p>
                    </div>
                  ) : (
                    <div className="forgetpassword__top">
                      <img src={icon} alt="" className="password__logo" />
                      <p className="forgetpassword__title">Quên mật khẩu?</p>
                    </div>
                  )}

                  <div className="forgetpassword__content">
                    {!reset && (
                      <MaterialInput
                        type="text"
                        label="Email"
                        value={emailForgot}
                        onChange={(e) => setEmailForgot(e.target.value)}
                      />
                    )}

                    {reset && (
                      <MaterialInput
                        type="password"
                        label="New Password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                      />
                    )}

                    {reset && (
                      <MaterialInput
                        type="password"
                        label="Retype Password"
                        value={retypePass}
                        onChange={(e) => setRetypePass(e.target.value)}
                      />
                    )}

                    {reset && (
                      <MaterialInput
                        type="text"
                        label="Verified Code"
                        value={verifiedCode}
                        onChange={(e) => setVerifiedCode(e.target.value)}
                      />
                    )}

                    <div className="forgetpassword__submit">
                      <button className="forgetpassword__button">
                        <button
                          onClick={requestForgotPass}
                          className="forgetpassword__button color-9"
                        >
                          {!reset ? "GỬI MÃ XÁC NHẬN" : "XÁC NHẬN"}
                        </button>
                      </button>

                      <button
                        onClick={() => {
                          setSignup(false);
                          setLoginModal(true);
                        }}
                        className="normallink"
                      >
                        Chưa có tài khoản? Đăng ký ngay!
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal>
    </div>
  );
}

export default Header;

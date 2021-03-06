import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

import { addToCart, getCartItems, removeCartItem } from "../../actions";
import carticon from "../../assets/img/Image 41.png";
import Layout from "../../components/Layout";
import CartItem from "./components/CartItem";
import "./style.css";

/*
Before Login
Add product to cart
save in localStorage
when try to checkout ask for credentials and 
if logged in then add products to users cart database from localStorage
*/

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const { enqueueSnackbar } = useSnackbar();
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);

  const onQuantityIncrement = (_id, qty) => {
    // console.log({ _id, qty });
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  const checkout = () => {
    if (!auth.authenticate) {
      enqueueSnackbar("Vui lòng đăng nhập trước khi đặt hàng", {
        variant: "error",
      });
    } else {
      props.history.push(`/checkout`);
    }
  };

  if (props.onlyCartItems) {
    return (
      <>
        {Object.keys(cartItems).map((key, index) => (
          <CartItem
            key={index}
            cartIndex={index}
            cartItem={cartItems[key]}
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
          />
        ))}
      </>
    );
  }

  return (
    <Layout>
      <div className="cartitem">
        <div className="cartitem__container">
          <Container>
            <div className="cartitem__topper">
              <img src={carticon} className="cart__icon" alt="" />
              <p className="cartitem__title">Giỏ hàng của bạn</p>
            </div>
            <div className="itemscontainer">
              <Table responsive hover>
                <thead className="cartitem__thread">
                  <tr>
                    <th>STT</th>
                    <th>Minh họa</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(cartItems).map((key, index) => (
                    <CartItem
                      key={index}
                      cartIndex={index}
                      cartItem={cartItems[key]}
                      onQuantityInc={onQuantityIncrement}
                      onQuantityDec={onQuantityDecrement}
                      onRemoveCartItem={onRemoveCartItem}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="cartitem__total">
              <p className="cartitem__totalprice">
                {" "}
                TỔNG TIỀN:{" "}
                {Object.keys(cart.cartItems).reduce((totalPrice, key) => {
                  const { price, qty } = cart.cartItems[key];
                  return totalPrice + price * qty;
                }, 0)}{" "}
                VNĐ
              </p>
              <div className="cartitem__buttons">
                <button onClick={checkout}>
                  <button className="pay">Thanh toán</button>
                </button>
                <Link to="/">
                  <button className="continue">Tiếp tục mua sắm</button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;

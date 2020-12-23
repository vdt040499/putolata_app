import axios from "../helpers/axios";
import { cartConstants } from "./constants";
import store from "../store";

// const getCartItems = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
//       const res = await axios.post(`/user/getCartItems`);
//       if (res.status === 200) {
//         const { cartItems } = res.data;
//         console.log({ getCartItems: cartItems });
//         if (cartItems) {
//           dispatch({
//             type: cartConstants.ADD_TO_CART_SUCCESS,
//             payload: { cartItems },
//           });
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const addToCart = (product) => {
  return async (dispatch) => {
    const { cartItems } = store.getState().cart;
    // console.log("action::products", products);
    //const product = action.payload.product;
    //const products = state.products;
    const qty = cartItems[product._id]
       ? parseInt(cartItems[product._id].qty + 1)
       : 1;
      cartItems[product._id] = {
      ...product,
      qty,
    };

    localStorage.setItem("cart", JSON.stringify(cartItems));

    // console.log("addToCart::", cartItems);

    dispatch({
      type: cartConstants.ADD_TO_CART,
      payload: { cartItems }
    });
  };
};

// export const removeCartItem = (payload) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
//       const res = await axios.post(`/user/cart/removeItem`, { payload });
//       if (res.status === 202) {
//         dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
//         dispatch(getCartItems());
//       } else {
//         const { error } = res.data;
//         dispatch({
//           type: cartConstants.REMOVE_CART_ITEM_FAILURE,
//           payload: { error },
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const updateCart = () => {
  return async (dispatch) => {
    const cartItems = localStorage.getItem("cart") ?
      JSON.parse(localStorage.getItem("cart")) : null;

    if (cartItems) {
      dispatch({
        type: cartConstants.ADD_TO_CART,
        payload: { cartItems }
      });
    }
  };
};

// export { getCartItems };

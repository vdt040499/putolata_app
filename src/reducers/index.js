import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducers";
import cartReducer from "./cart.reducer";
import userReducer from "./user.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;

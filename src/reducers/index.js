import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
});

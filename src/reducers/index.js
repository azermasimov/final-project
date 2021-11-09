import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";
import { datasReducer } from "./datasReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  products: productsReducer,
  cart: cartReducer,
  datas: datasReducer,
});

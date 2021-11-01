import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "./types";
import products from "../apis/products";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchProducts = () => async (dispatch) => {
  const { data } = await products.get("/products");
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = [...getState().cart.cartItems];
  let alreadyInCart = false;
  cartItems.forEach((item) => {
    if (item._id === product._id) {
      item.count++;
      alreadyInCart = true;
    }
  });
  if (!alreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = [...getState().cart.cartItems].filter(
    (el) => el._id !== product._id
  );
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

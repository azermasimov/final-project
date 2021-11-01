import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const INITIAL_STATE = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};

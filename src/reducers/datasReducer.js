import _ from "lodash";
import { CREATE_DATA, FETCH_PRODUCTS } from "../actions/types";

export const datasReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_DATA:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

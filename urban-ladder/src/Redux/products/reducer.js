import { store } from "../store";
import {GET_PRODUCTS} from "./action"
export const productsReducer = (store={ products:[]}, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
        return { ...store,products: [ ...payload] };
    default:
      return store;
  }
};
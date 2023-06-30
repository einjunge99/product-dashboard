import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./products";

export const rootReducer = combineReducers({
    products: productsReducer,
});
  
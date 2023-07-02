import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./products";
import { notificationsReducer } from "./notifications";

export const rootReducer = combineReducers({
  products: productsReducer,
  notifications: notificationsReducer,
});

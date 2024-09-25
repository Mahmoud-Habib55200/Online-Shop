import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../redux/shopSlice";
export const store = configureStore({
  reducer: { shopReducer },
});

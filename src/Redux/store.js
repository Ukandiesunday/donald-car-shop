import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import modalSlice from "../components/Modal/modalSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
  },
});

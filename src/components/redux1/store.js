import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
    auth: authSlice,
  },
});

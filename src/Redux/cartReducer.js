import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  amount: 0,
  isLoading: true,
  isModalOpen: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        // item.quantity += action.payload.quantity;
        item.quantity = item.quantity + 1;
      } else {
        state.products.push(action.payload);
      }
    },
    decrease: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item?.quantity === undefined) return;
      if (item.quantity === 0) return;
      item.quantity = item.quantity - 1;
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = state.products = [];
    },

    calculate: (state) => {
      let total = 0;
      let amount = 0;
      state.products.forEach((item) => {
        total += item.quantity;
        console.log(item.quantity);
        amount += item.quantity * item.price;
      });
      state.total = total;
      state.amount = amount;
    },
  },
});
export const { addToCart, decrease, removeItem, calculate, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

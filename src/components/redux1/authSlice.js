import { createSlice } from "@reduxjs/toolkit";
import { retrieveItem } from "../utility/storage";

const initialState = {
  currentUser: retrieveItem("user") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state) => {
      state.currentUser = true;
    },
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;

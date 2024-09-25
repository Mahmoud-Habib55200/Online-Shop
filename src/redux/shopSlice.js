import { createSlice } from "@reduxjs/toolkit";

// Load userInfo from localStorage if available
const savedUserInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  Products: [],
  userInfo: savedUserInfo,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.Products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.Products.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.Products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.Products.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    deleteItemInCart: (state, action) => {
      state.Products = state.Products.filter(
        (item) => item.id !== action.payload
      );
    },

    setUserInfo: (state, action) => {
      const userInfo = {
        __id: action.payload.__id,
        userName: action.payload.userName,
        email: action.payload.email,
        image: action.payload.image,
      };

      state.userInfo = userInfo;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },

    logOut: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  deleteItemInCart,
  setUserInfo,
  logOut,
} = shopSlice.actions;
export default shopSlice.reducer;

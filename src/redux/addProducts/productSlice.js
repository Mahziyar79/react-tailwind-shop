import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productId = action.payload.id;
      const isExistProduct = state.cart.find(
        (product) => product.id === productId
      );
      if (isExistProduct) {
        const filterItem = state.cart.find((item) => item.id === action.payload.id);
        filterItem.quantity++;
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.cart.push(newProduct);
      }
    },
    increamentProduct: (state, action) => {
      const filterItem = state.cart.find((item) => item.id === action.payload);
      filterItem.quantity++;
    },
    decreamentProduct: (state, action) => {
      const filterItem = state.cart.find((item) => item.id === action.payload);
      if (filterItem.quantity > 1) {
        filterItem.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      const filterdItems = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = filterdItems;
    },
  },
});

export const {
  addProduct,
  increamentProduct,
  decreamentProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;

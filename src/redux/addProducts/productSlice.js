import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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
        const filterItem = state.cart.find(
          (item) => item.id === action.payload.id
        );
        filterItem.quantity++;
        toast.info("یک عدد دیگر از این محصول به سبد خرید شما اضافه شد");
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.cart.push(newProduct);
        toast.success(`${newProduct.title} به سبد خرید شما اضافه شد`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    increamentProduct: (state, action) => {
      const filterItem = state.cart.find((item) => item.id === action.payload);
      filterItem.quantity++;
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    decreamentProduct: (state, action) => {
      const filterItem = state.cart.find((item) => item.id === action.payload);
      if (filterItem.quantity > 1) {
        filterItem.quantity--;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    deleteProduct: (state, action) => {
      const filterdItems = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = filterdItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
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

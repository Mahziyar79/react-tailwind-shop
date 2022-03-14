import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/addProducts/productSlice'

export const store = configureStore({
  reducer: {productReducer},
})
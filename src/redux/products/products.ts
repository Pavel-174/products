import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsState, Product } from '../../types/types';

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const { setProducts } = productsSlice.actions;

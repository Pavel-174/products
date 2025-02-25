import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInfoState, Product } from '../../types/types';

const initialState: ProductInfoState = {
  productInfo: {
    id: '',
    packsNumber: 0,
    packageType: '',
    isArchived: false,
    createdAt: ''
  },
};

const productsSlice = createSlice({
  name: 'productInfo',
  initialState,
  reducers: {
    setProductInfo(state, action: PayloadAction<Product>) {
      state.productInfo = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const { setProductInfo } = productsSlice.actions;

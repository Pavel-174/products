// import { createSlice } from '@reduxjs/toolkit'

// const products = createSlice({
// 	name: 'products',
// 	initialState: {
// 		products: [],
// 	},
// 	reducers: {
// 		setProducts(state, action) {
// 			state.products = action.payload
// 		},
// 	}
// })

// export default products.reducer

// export const { 
// 	setProducts, 
// } = products.actions


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  packsNumber: number;
  packageType: string;
  isArchived: boolean;
  description: string;
  createdAt: number;
}

interface ProductsState {
  products: Product[];
}

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
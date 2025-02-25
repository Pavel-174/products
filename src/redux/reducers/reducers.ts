import { combineReducers, configureStore } from '@reduxjs/toolkit'
import products from '../products/products'
import productInfo from '../productInfo/productInfo'

const rootReducer = combineReducers({
  products,
  productInfo
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
	  serializableCheck: false,
  })
})

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import products from '../products/products'

const rootReducer = combineReducers({
	products
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	  })
})
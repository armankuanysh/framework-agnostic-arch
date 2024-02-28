import { configureStore } from '@reduxjs/toolkit'
import { reducer as products } from './products'
import { reducer as categories } from './category'
import { reducer as registration } from './registration'

const store = configureStore({
  reducer: {
    products,
    categories,
    registration,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store

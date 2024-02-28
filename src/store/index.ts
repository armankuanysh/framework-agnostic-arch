import { configureStore } from '@reduxjs/toolkit'
import { reducer as products } from './products'
import { reducer as categories } from './category'

const store = configureStore({
  reducer: {
    products,
    categories,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store

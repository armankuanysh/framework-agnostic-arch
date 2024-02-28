import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts, fetchProductsRaw } from './thunk'
import { IProductRawResponse } from 'models/product/raw'
import { IProductResponse } from 'models/product'

const initialState = {
  products: [] as IProductResponse['products'],
  productsRaw: [] as IProductRawResponse['products'],
}

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsRaw.fulfilled, (state, action) => {
      console.log('🐞 ~ builder.addCase ~ payload:', action)
      state.productsRaw = action.payload.products
    })
    builder.addCase(fetchProductsRaw.rejected, (state, action) => {
      console.log('🐞 ~ builder.addCase ~ action:', action)
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.products
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log('🐞 ~ builder.addCase ~ action:', action)
    })
  },
})

export const { reducer } = slice

import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories } from './thunk'
import { ICategory } from 'core/models/category'

const initialState = {
  categories: [] as ICategory[],
}

const slice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  },
})

export const { reducer } = slice

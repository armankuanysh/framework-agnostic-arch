import { createSlice } from '@reduxjs/toolkit'
import { createStepOne, createStepTwo } from './thunk'

const initialState = {
  step: 0,
}

const slice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createStepOne.fulfilled, (state, action) => {
      state.step = action.payload
    })
    builder.addCase(createStepTwo.fulfilled, (state, action) => {
      state.step = action.payload
    })
  },
})

export const { reducer } = slice

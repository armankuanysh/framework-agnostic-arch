import { createAsyncThunk } from '@reduxjs/toolkit'
import { IStepOneRaw } from 'components/organisms/registration-steps/step-one'
import { IStepTwoRaw } from 'components/organisms/registration-steps/step-two'
import { controllers } from 'src'

export const createStepOne = createAsyncThunk(
  'registration/stepOne',
  (data: IStepOneRaw) => {
    controllers.registration.createStepOne(data)
    return 1
  }
)

export const createStepTwo = createAsyncThunk(
  'registration/stepTwo',
  (data: IStepTwoRaw) => {
    controllers.registration.createStepTwo(data)
    return 2
  }
)

import React, { FC, useState } from 'react'
import RegistrationStepOne from './step-one'
import RegistrationStepTwo from './step-two'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const RegistrationSteps: FC = () => {
  const step = useSelector((state: RootState) => state.registration.step)
  return (
    <>
      {step === 0 ? (
        <RegistrationStepOne key="step-one" />
      ) : (
        <RegistrationStepTwo key="step-two" />
      )}
    </>
  )
}

export default RegistrationSteps

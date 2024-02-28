import React, { FC, useState } from 'react'
import Input from 'components/atoms/input'
import Button from 'components/atoms/button'
import useAppDispatch from 'hooks/useAppDispatch'
import { createStepTwo } from 'src/store/registration/thunk'

export interface IStepTwoRaw {
  password: string
  rePassword: string
}

const RegistrationStepTwo: FC = () => {
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const dispatch = useAppDispatch()

  const submit = () => {
    dispatch(
      createStepTwo({
        password,
        rePassword,
      })
    )
  }
  return (
    <>
      <Input
        id="password"
        name="password"
        label="Password"
        type="password"
        value={password}
        onInput={(event) => setPassword(event.currentTarget.value)}
      />
      <Input
        id="re-password"
        name="re-password"
        label="Repeat Password"
        type="password"
        value={rePassword}
        onInput={(event) => setRePassword(event.currentTarget.value)}
      />
      <Button onClick={submit}>Next</Button>
    </>
  )
}

export default RegistrationStepTwo

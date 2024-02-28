import Button from 'components/atoms/button'
import Input from 'components/atoms/input'
import useAppDispatch from 'hooks/useAppDispatch'
import React, { FC, useState } from 'react'
import { createStepOne } from 'src/store/registration/thunk'

export interface IStepOneRaw {
  firstName: string
  secondName: string
  email: string
}

const RegistrationStepOne: FC = () => {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useAppDispatch()

  const submit = () => {
    dispatch(
      createStepOne({
        firstName,
        secondName,
        email,
      })
    )
  }

  return (
    <>
      <Input
        id="first_name"
        name="first_name"
        label="First name"
        value={firstName}
        onInput={(event) => setFirstName(event.currentTarget.value)}
      />
      <Input
        id="second_name"
        name="second_name"
        label="Second name"
        value={secondName}
        onInput={(event) => setSecondName(event.currentTarget.value)}
      />
      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
        value={email}
        onInput={(event) => setEmail(event.currentTarget.value)}
      />
      <Button onClick={submit}>Next</Button>
    </>
  )
}

export default RegistrationStepOne

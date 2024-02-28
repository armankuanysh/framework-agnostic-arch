import React, { FC } from 'react'
import './styles.scss'
import Heading from 'components/atoms/heading'
import RegistrationSteps from 'components/organisms/registration-steps'

const RegistrationForm: FC = () => {
  return (
    <div className="container">
      <Heading type="h2">Registration</Heading>
      <RegistrationSteps />
    </div>
  )
}

export default RegistrationForm

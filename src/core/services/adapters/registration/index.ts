import { IStepOneRaw } from 'components/organisms/registration-steps/step-one'
import Adapter from '..'
import { IStepTwoRaw } from 'components/organisms/registration-steps/step-two'
import { IRegistration } from 'core/models/registration'

class RegistrationAdapter implements Adapter.IFormat {
  format(raw: { stepOne: IStepOneRaw; stepTwo: IStepTwoRaw }): IRegistration {
    return {
      fullName: raw.stepOne.firstName + ' ' + raw.stepOne.secondName,
      email: raw.stepOne.email,
      password: raw.stepTwo.password,
      repeat_password: raw.stepTwo.rePassword,
    }
  }
}

export default RegistrationAdapter

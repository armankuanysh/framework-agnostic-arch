import { IStepOneRaw } from 'components/organisms/registration-steps/step-one'
import { IStepTwoRaw } from 'components/organisms/registration-steps/step-two'
import RegistrationAdapter from 'core/services/adapters/registration'

class RegistrationInteractor {
  private stepOneData!: IStepOneRaw
  constructor(private adapter: RegistrationAdapter) {}
  stepOne(data: IStepOneRaw) {
    this.stepOneData = data
  }
  stepTwo(data: IStepTwoRaw) {
    return this.adapter.format({ stepOne: this.stepOneData, stepTwo: data })
  }
}

export default RegistrationInteractor

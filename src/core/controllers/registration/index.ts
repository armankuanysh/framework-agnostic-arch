import { IStepOneRaw } from 'components/organisms/registration-steps/step-one'
import { IStepTwoRaw } from 'components/organisms/registration-steps/step-two'
import Registration from 'core/repositories/registration'
import RegistrationInteractor from 'core/services/interactors/registration'

class RegistrationController {
  constructor(
    private repository: Registration,
    private interactor: RegistrationInteractor
  ) {}
  createStepOne(data: IStepOneRaw) {
    console.log('🐞 ~ RegistrationController ~ createStepOne ~ data:', data)
    this.interactor.stepOne(data)
  }
  createStepTwo(data: IStepTwoRaw) {
    const adaptedData = this.interactor.stepTwo(data)
    console.log(
      '🐞 ~ RegistrationController ~ createStepTwo ~ adaptedData:',
      adaptedData
    )
    this.repository.create(adaptedData)
  }
}

export default RegistrationController

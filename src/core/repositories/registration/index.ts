import { IHttpParams } from 'core/gateways/http-client'
import { IRegistration } from 'core/models/registration'

class Registration {
  registrationData: IRegistration = {} as IRegistration
  create(payload: IRegistration, params?: IHttpParams | undefined): void {
    console.log('🐞 ~ Registration ~ create ~ payload:', payload)
    this.registrationData = payload
  }
}

export default Registration

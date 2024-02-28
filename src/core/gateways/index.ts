import HttpClient, { IHttpClient } from './http-client'

interface IGateways {
  http: IHttpClient
}

type gatewaysObject = Record<keyof IGateways, IGateways[keyof IGateways]>

class Gateways {
  gateways!: gatewaysObject

  register(key: keyof IGateways, instance: IGateways[keyof IGateways]) {
    this.gateways = {
      ...this.gateways,
      [key]: instance,
    }
  }
}

const gt = new Gateways()
gt.register('http', new HttpClient())

export default gt

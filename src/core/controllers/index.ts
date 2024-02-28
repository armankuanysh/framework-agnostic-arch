import { IHttpClient } from 'core/gateways/http-client/index'
import gateways from 'core/gateways'
import ProductController from './product'
import ProductRepository from 'core/repositories/product'
import CategoryController from './category'
import CategoryRepository from 'core/repositories/category'
import ProductAdapter from 'core/services/adapters/product'
import RegistrationController from './registration'
import RegistrationAdapter from 'core/services/adapters/registration'
import Registration from 'core/repositories/registration'
import RegistrationInteractor from 'core/services/interactors/registration'

class Controllers {
  private noGateway = false

  private http!: IHttpClient
  products!: ProductController
  categories!: CategoryController
  registration!: RegistrationController

  constructor() {
    this.getHttp()
  }

  private getHttp() {
    if (gateways.gateways.http) {
      this.http = gateways.gateways.http
    } else {
      this.noGateway = true
      console.log('there is no initialized gateways')
    }
  }

  bootstrap() {
    if (!this.noGateway) {
      this.products = new ProductController(
        new ProductRepository(this.http),
        new ProductAdapter()
      )
      this.categories = new CategoryController(
        new CategoryRepository(this.http)
      )
      this.registration = new RegistrationController(
        new Registration(),
        new RegistrationInteractor(new RegistrationAdapter())
      )
    } else {
      console.log('there is no initialized gateways')
    }
  }
}

export default Controllers

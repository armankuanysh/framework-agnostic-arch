import { IHttpClient } from 'core/gateways/http-client/index'
import gateways from 'core/gateways'
import ProductController from './product'
import ProductRepository from 'core/repositories/product'
import CategoryController from './category'
import CategoryRepository from 'core/repositories/category'
import ProductAdapter from 'core/services/adapters/product'

class Controllers {
  private noGateway = false

  private http!: IHttpClient
  products!: ProductController
  categories!: CategoryController

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
    } else {
      console.log('there is no initialized gateways')
    }
  }
}

export default Controllers

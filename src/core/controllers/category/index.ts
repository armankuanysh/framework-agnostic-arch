import { IHttpParams, IHttpResponse } from 'core/gateways/http-client'
import { ICategory } from 'core/models/category'
import Category from 'core/repositories/category'

class CategoryController {
  constructor(private repository: Category) {}

  async findAll(params?: IHttpParams): Promise<IHttpResponse<ICategory[]>> {
    return await this.repository.findAll(params)
  }
}

export default CategoryController

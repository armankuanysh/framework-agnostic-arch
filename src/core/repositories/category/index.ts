import type {
  IHttpClient,
  IHttpParams,
  IHttpResponse,
} from 'core/gateways/http-client'
import Repository from '..'
import { ICategory } from 'core/models/category'
import { cache } from '../decorators/cache'

class Category implements Repository.IFindAll {
  constructor(private http: IHttpClient) {}

  @cache<IHttpResponse<ICategory[]>>('category')
  async findAll(params?: IHttpParams): Promise<IHttpResponse<ICategory[]>> {
    return await this.http.get<ICategory[]>('/products/categories', params)
  }
}

export default Category

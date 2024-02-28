import { IProductRaw, IProductRawResponse } from 'models/product/raw'
import Repository from '..'
import type {
  IHttpClient,
  IHttpParams,
  IHttpResponse,
} from 'core/gateways/http-client'
import { cache } from 'core/repositories/decorators/cache'

class Product implements Repository.IFindAll {
  constructor(private http: IHttpClient) {}

  @cache<IProductRaw[]>('product')
  async findAll(
    params?: IHttpParams
  ): Promise<IHttpResponse<IProductRawResponse>> {
    return await this.http.get<IProductRawResponse>('/products', params)
  }
}

export default Product

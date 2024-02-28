import ProductAdapter from 'core/services/adapters/product'
import { IHttpParams, IHttpResponse } from 'core/gateways/http-client'
import Product from 'core/repositories/product'
import { IProductRawResponse } from 'models/product/raw'
import { IProductResponse } from 'models/product'

class ProductController {
  constructor(private repository: Product, private adapter: ProductAdapter) {}

  async findAllRaw(
    params?: IHttpParams
  ): Promise<IHttpResponse<IProductRawResponse>> {
    return await this.repository.findAll(params)
  }

  async findAll(
    params?: IHttpParams
  ): Promise<IHttpResponse<IProductResponse>> {
    const response = await this.repository.findAll(params)
    const adaptedData = this.adapter.formatResponse(response)
    return adaptedData
  }
}

export default ProductController

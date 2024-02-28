import { IProductRaw, IProductRawResponse } from 'core/models/product/raw'
import Adapter from '..'
import { IProduct, IProductResponse } from 'core/models/product'
import { IHttpResponse } from 'core/gateways/http-client'

class ProductAdapter implements Adapter.IFormat, Adapter.IFormatResponse {
  format(raw: IProductRaw[]): IProduct[] {
    return raw.map<IProduct>((product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
    }))
  }

  formatResponse(
    raw: IHttpResponse<IProductRawResponse>
  ): IHttpResponse<IProductResponse> {
    return {
      ...raw,
      data: {
        ...raw.data,
        products: this.format(raw.data.products),
      },
    }
  }
}

export default ProductAdapter

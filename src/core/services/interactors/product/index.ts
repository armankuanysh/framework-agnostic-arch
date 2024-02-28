import { ICategory } from 'core/models/category'
import { IProductRaw } from 'core/models/product/raw'

class ProductInteractor {
  filterByCategory(
    products: IProductRaw[],
    category: ICategory
  ): IProductRaw[] {
    return products.filter((product) => product.category === category)
  }
}

export default ProductInteractor

import { IPagination } from '../pagination'
import { IProductRaw } from './raw'

export interface IProduct {
  id: IProductRaw['id']
  title: IProductRaw['title']
  description: IProductRaw['description']
  price: IProductRaw['price']
  thumbnail: IProductRaw['thumbnail']
}

export interface IProductResponse extends IPagination {
  products: IProduct[]
}

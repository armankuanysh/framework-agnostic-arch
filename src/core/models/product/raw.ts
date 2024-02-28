import { IPagination } from '../pagination'

export interface IProductRaw {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface IProductRawResponse extends IPagination {
  products: IProductRaw[]
}

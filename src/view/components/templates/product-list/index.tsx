import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from 'components/organisms/product-card'
import { RootState } from 'src/store'
import './styles.scss'

const ProductList: FC = () => {
  const { products } = useSelector((state: RootState) => state.products)
  return (
    <div className="product-list container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default memo(ProductList)

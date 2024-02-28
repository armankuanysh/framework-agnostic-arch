import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from 'core/models/product'
import Heading from 'components/atoms/heading'
import './styles.scss'

interface IProductCard {
  product: IProduct
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  const { id, title, description, price, thumbnail } = product
  return (
    <>
      <article className="product-card">
        <img src={thumbnail} alt={title} />
        <div className="product-card__content">
          <Heading type="h3">{title}</Heading>
          <p>{description}</p>
          <p>{price}</p>
          <Link to={`/products/${id}`}>page</Link>
        </div>
      </article>
    </>
  )
}

export default memo(ProductCard)

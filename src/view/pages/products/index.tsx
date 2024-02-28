import React, { memo, useEffect } from 'react'
import useAppDispatch from 'src/hooks/useAppDispatch'
import { fetchProducts } from 'src/store/products/thunk'
import ProductList from 'components/templates/product-list'
import { fetchCategories } from 'src/store/category/thunk'

const ProductsPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [dispatch])
  return (
    <>
      <div style={{ position: 'relative', left: '250px' }}>
        <button onClick={() => dispatch(fetchProducts())}>
          click me product
        </button>
        <button onClick={() => dispatch(fetchCategories())}>
          click me category
        </button>
      </div>

      <ProductList />
    </>
  )
}

export default memo(ProductsPage)

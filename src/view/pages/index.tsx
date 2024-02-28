import useAppDispatch from 'hooks/useAppDispatch'
import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchCategories } from 'src/store/category/thunk'

const HomePage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  return (
    <>
      <h1>Home page</h1>
      <Link to="/products">Products</Link>
    </>
  )
}

export default memo(HomePage)

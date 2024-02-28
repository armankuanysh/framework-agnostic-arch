import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from 'pages/index'
import ProductsPage from 'pages/products'
import MainLayout from 'src/view/layouts/main'

const router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/products"
        element={
          <MainLayout>
            <ProductsPage />
          </MainLayout>
        }
      />
    </Routes>
  </BrowserRouter>
)

export default router

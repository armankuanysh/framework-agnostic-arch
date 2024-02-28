import { controllers } from 'src'
import { IHttpParams, IHttpResponse } from 'core/gateways/http-client/index'
import { IProductRawResponse } from 'core/models/product/raw'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProductResponse } from 'core/models/product'

export const fetchProductsRaw = createAsyncThunk(
  'products/fetchRaw',
  async (
    _,
    params?: IHttpParams
  ): Promise<IHttpResponse<IProductRawResponse>['data']> => {
    const { data } = await controllers.products.findAllRaw(params)
    console.log('🐞 ~ fetchProudcts ~ response:', data)

    return data
  }
)

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (
    params?: IHttpParams
  ): Promise<IHttpResponse<IProductResponse>['data']> => {
    const { data } = await controllers.products.findAll(params)
    return data
  }
)

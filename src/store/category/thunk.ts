import { createAsyncThunk } from '@reduxjs/toolkit'
import { IHttpParams } from 'core/gateways/http-client'
import { ICategory } from 'core/models/category'
import { controllers } from 'src'

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async (params?: IHttpParams): Promise<ICategory[]> => {
    const { data } = await controllers.categories.findAll(params)
    return data
  }
)

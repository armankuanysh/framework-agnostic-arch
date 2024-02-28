import axios, { AxiosResponse } from 'axios'
export interface IHttpParams {}
export interface IHttpPayload {}
export interface IHttpResponse<T> extends AxiosResponse<T> {
  data: T
}
export type IHttpUri = string

export interface IHttpClient {
  get<Response>(
    url: IHttpUri,
    params?: IHttpParams
  ): Promise<IHttpResponse<Response>>
  post<Response>(
    url: IHttpUri,
    payload: IHttpPayload,
    params?: IHttpParams
  ): Promise<IHttpResponse<Response>>
  update<Response>(
    url: IHttpUri,
    payload: IHttpPayload,
    params?: IHttpParams
  ): Promise<IHttpResponse<Response>>
  delete<Response>(
    url: IHttpUri,
    params?: IHttpParams
  ): Promise<IHttpResponse<Response>>
}

class HttpClient implements IHttpClient {
  instance = axios.create({
    baseURL: 'https://dummyjson.com/',
  })

  async get<Response>(
    url: string,
    params?: IHttpParams | undefined
  ): Promise<IHttpResponse<Response>> {
    return await this.instance.get(url, params)
  }

  async post<Response>(
    url: string,
    payload: IHttpPayload,
    params?: IHttpParams | undefined
  ): Promise<IHttpResponse<Response>> {
    return await this.instance.post(url, payload, params)
  }

  async update<Response>(
    url: string,
    payload: IHttpPayload,
    params?: IHttpParams | undefined
  ): Promise<IHttpResponse<Response>> {
    return await this.instance.put(url, payload, params)
  }

  async delete<Response>(
    url: string,
    params?: IHttpParams | undefined
  ): Promise<IHttpResponse<Response>> {
    return this.instance.delete(url, params)
  }
}

export default HttpClient

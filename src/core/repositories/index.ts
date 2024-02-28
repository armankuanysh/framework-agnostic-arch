import {
  IHttpParams,
  IHttpPayload,
  IHttpResponse,
} from 'core/gateways/http-client'

namespace Repository {
  export type Id = string | number
  export interface IFindOne {
    findOne(id: Id, params?: IHttpParams): Promise<IHttpResponse<any>>
  }
  export interface IFindAll {
    findAll(params?: IHttpParams): Promise<IHttpResponse<any>>
  }
  export interface ICreate {
    create(
      payload: IHttpPayload,
      params?: IHttpParams
    ): Promise<IHttpResponse<any>>
  }
  export interface IUpdate {
    update(
      payload: IHttpPayload,
      params?: IHttpParams
    ): Promise<IHttpResponse<any>>
  }
}

export default Repository

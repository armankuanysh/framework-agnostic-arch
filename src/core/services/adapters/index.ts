import { IHttpResponse } from 'core/gateways/http-client'

namespace Adapter {
  export interface IFormat {
    format(raw: unknown): unknown
  }
  export interface IFormatResponse {
    formatResponse(raw: IHttpResponse<unknown>): IHttpResponse<unknown>
  }
}

export default Adapter

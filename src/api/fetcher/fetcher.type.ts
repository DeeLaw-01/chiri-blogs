export enum Method {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
}

export type Query = {
  url: string
  headers?: Record<string, any>
  method?: Method
  body?: any
  json?: boolean
  uuid?: boolean
  locale?: string
}

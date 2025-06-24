import Logger from 'ui/shared/logger'

export const handleError = async (input: Response | Error, url: string) => {
  let errorMsg = ''
  let statusCode = 0

  if (input instanceof Response && input.status >= 400) {
    const { message, error } = await input.json()
    errorMsg = message || error || 'Error occurred'
    statusCode = input.status
  } else if (input instanceof Error) {
    errorMsg = input.message
  }

  Logger.error(`${errorMsg} ${url}`, 'Endpoint', url)

  throw statusCode ? { msg: errorMsg, statusCode } : new Error(errorMsg)
}

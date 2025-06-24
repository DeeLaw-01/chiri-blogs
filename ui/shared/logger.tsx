import { isBrowser, isProduction, isTest } from 'src/data/environments'
import loggerQuery from 'src/api/queries/post/loggerQuery'
import { API_LOGGER } from 'src/api/baseUrls'
import { objectToString } from 'src/utils/objectUtils'
import { getUserId } from 'src/utils/userIdHelper'
import { serverFetch } from 'src/api/serverFetch'

type ErrorType = 'error' | 'warning' | 'info'

const HOST = 'Chiri.pk'

const isJson = (str: string): boolean => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

const getPath = (): string | undefined => {
  if (isBrowser) {
    const path = window.location.pathname
    const queryParams = window.location.search
    if (!window.location.host.includes(HOST))
      return `[TEST]: ${path}${queryParams}`
    return `${path}${queryParams}`
  } else return undefined
}

const getBrowser = (): string => {
  if (isBrowser) {
    const brands = window.navigator?.userAgentData?.brands?.map(function (
      item
    ) {
      if (isJson(item)) return JSON.stringify(item)
    })
    return brands?.toString()
  }
  return 'Window undefined'
}

const getMobileAndPlatform = (): string => {
  if (isBrowser) {
    return (
      'Mobile: ' +
      window?.navigator?.userAgentData?.mobile +
      ', ' +
      window?.navigator?.userAgentData?.platform
    )
  }
  return 'Window undefined'
}

const request = async (
  errorStr: string,
  area: string,
  type: ErrorType
): Promise<void> => {
  const path = getPath()?.toString()

  if (!path) return
  const data = {
    os: getMobileAndPlatform()?.toString(),
    browser: getBrowser()?.toString(),
    pathname: getPath()?.toString(),
    errorString: errorStr,
    area: area,
    type: type,
    uuid: await getUserId(),
  }
  await serverFetch(loggerQuery(data))
}

const getError = (err: Error | string | object): string => {
  if (err instanceof Error) {
    return `${err.message} ${err.stack?.substring(0, 949)}`
  } else if (typeof err === 'object') {
    return objectToString(err)
  } else return err.substring(0, 949)
}

const Logger = {
  error: function Error(msg: Error | string, area: string, url?: string): void {
    if (!isProduction || url === API_LOGGER) return
    else {
      const errorStr = getError(msg)
      request(errorStr, area, 'error')
    }
  },
  warning: function Warning(msg: Error | string, area: string): void {
    if (!isProduction) return
    const errorStr = getError(msg)
    request(errorStr, area, 'warning')
  },
  info: function Info(msg: Error | string, area: string): void {
    if (!isTest) return
    const errorStr = getError(msg)
    request(errorStr, area, 'info')
  },
}

export default Logger

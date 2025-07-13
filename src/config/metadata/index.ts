import { isBrowser } from 'src/data/environments'
import { CONFIG_SITE } from 'src/config'

export const URL = isBrowser
  ? window.location?.origin
  : `${CONFIG_SITE.BASE_LINK}`
export const FAVICON_SVG = '/favicon.svg'
export const FAVICON_ICO = '/favicon.ico'
export const TITLE = 'common.metadata.title'
export const DESC = 'common.metadata.description'
export const KEYWORDS = 'common.metadata.keywords'
export const IMG = CONFIG_SITE.BASE_LINK + '/preview.png'

export default { URL, FAVICON_SVG, FAVICON_ICO, TITLE, DESC, KEYWORDS, IMG }

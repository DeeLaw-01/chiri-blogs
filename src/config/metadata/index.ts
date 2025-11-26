import { isBrowser } from 'src/data/environments'
import { CONFIG_SITE } from 'src/config'

export const URL = isBrowser
  ? window.location?.origin
  : `${CONFIG_SITE.BASE_LINK}`
export const FAVICON_SVG = '/favicon.svg'
export const FAVICON_ICO = '/favicon.ico'
export const TITLE = 'Travel deals in 3 seconds'
export const DESC = 'Find the best travel deals with artificial intelligence. Our algorithm connects flights, trains, and buses for perfect trips with matching hotels.'
export const KEYWORDS = 'Travel, multi-destination, hotels, flights, buses, trains, AI, artificial intelligence, cheap, deals, packages'
export const IMG = CONFIG_SITE.BASE_LINK + '/preview.png'

const CONFIG_METADATA = { URL, FAVICON_SVG, FAVICON_ICO, TITLE, DESC, KEYWORDS, IMG }

export default CONFIG_METADATA

import { isProduction } from '../data/environments'

const API_URL_TRIPS =
  //'https://7343a29cf7.execute-api.eu-central-1.amazonaws.com/test'
  'https://88ziu4wklh.execute-api.eu-central-1.amazonaws.com/prod'

const API_URL_TRIP_DETAILS =
  'https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod/v1/trips'
//'https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/test/test_v33/trips'

const API_URL_HOTEL_SUGGESTION =
  'https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod/v1/hotels'
//'https://nqgw409ec8.execute-api.eu-central-1.amazonaws.com/test'

const API_URL_CURRENCY =
  // 'https://lmlyj6ndff.execute-api.eu-central-1.amazonaws.com/test'
  'https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod/v1/currencies'

const API_URL_SYNCHRONOUS_TRIPS =
  'https://n58ugw7zk2.execute-api.eu-central-1.amazonaws.com/prod'

const API_URL_EMAIL =
  'https://0sc7coilmb.execute-api.eu-central-1.amazonaws.com/prod'
//'https://tvi61e4qwj.execute-api.eu-central-1.amazonaws.com/test'

const API_URL_PAYMENT_INFO =
  'https://ksvj85km50.execute-api.eu-central-1.amazonaws.com/prod'
//'https://eyub8w6muc.execute-api.eu-central-1.amazonaws.com/test'

const API_WS_TRIPS =
  'wss://f0jluya2yi.execute-api.eu-central-1.amazonaws.com/test'

const API_URL_USER_LOCATION_NEW =
  'https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod'

const API_MANAGE_BOOKING =
  //'https://rg15ijyybc.execute-api.eu-central-1.amazonaws.com/test'
  'https://juuwx2ncp1.execute-api.eu-central-1.amazonaws.com/prod'

const API_EDIT_TRIP_DETAILS =
  'https://88ziu4wklh.execute-api.eu-central-1.amazonaws.com/prod'

const API_URL_PARTNER_INFORMATION =
  'https://sm4pawvgy5.execute-api.eu-central-1.amazonaws.com/prod'

const API_LOGGER =
  'https://tli7h1crm5.execute-api.eu-central-1.amazonaws.com/prod'

const API_USER_PROFILE_DATA = isProduction
  ? 'https://zuv3uv3g40.execute-api.eu-central-1.amazonaws.com/prod'
  : 'https://p3vwic9fye.execute-api.eu-central-1.amazonaws.com/test'

const API_REDIRECT_URL =
  'https://4dwxrm6hd4.execute-api.eu-central-1.amazonaws.com/prod'

const API_BLOG =
  'https://94j398ob62.execute-api.eu-central-1.amazonaws.com/prod/'
// 'https://dr7dd6bp50.execute-api.eu-central-1.amazonaws.com/test/'

const API_PERFORMANCE = isProduction
  ? 'https://ye7sklgnk0.execute-api.eu-central-1.amazonaws.com/prod'
  : 'https://263uxwvcb3.execute-api.eu-central-1.amazonaws.com/test'

const API_QUID_PAYMENT_URL = 'https://core.quidkey.com'
// 'https://core-dev.quidkey.com'

export {
  API_URL_TRIPS,
  API_URL_TRIP_DETAILS,
  API_URL_HOTEL_SUGGESTION,
  API_URL_CURRENCY,
  API_URL_SYNCHRONOUS_TRIPS,
  API_URL_EMAIL,
  API_URL_PAYMENT_INFO,
  API_WS_TRIPS,
  API_URL_USER_LOCATION_NEW,
  API_MANAGE_BOOKING,
  API_EDIT_TRIP_DETAILS,
  API_URL_PARTNER_INFORMATION,
  API_USER_PROFILE_DATA,
  API_LOGGER,
  API_REDIRECT_URL,
  API_BLOG,
  API_PERFORMANCE,
  API_QUID_PAYMENT_URL,
}

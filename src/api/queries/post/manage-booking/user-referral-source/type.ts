export type ReferralSourceOption =
  | 'organic'
  | 'customer'
  | 'SoMeAds'
  | 'google'
  | 'billboards'
  | 'influencer'
  | 'familyandfriends'
  | 'donotknow'
  | 'TV'
  | 'press'

export type ReferralSourceRequest = {
  purchase_id: string
  trip_id: string
  source: ReferralSourceOption
}

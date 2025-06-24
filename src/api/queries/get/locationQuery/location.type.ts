export type LocationResponse = LocationResult[]

export type Location = {
  airport_departure_count: number
  airports: string[]
  country: string
  keywords: string
  lat: string
  locode: string
  locode_length: number
  lon: string
  state: string
  value: string
}

export type LocationResult = {
  airport_departure_count: number
  country: string
  isCity: boolean
  loc_type: LocType
  locode: string
  state: string
  value: string
}

export type LocType = 'country' | 'city' | 'region' | 'state'
